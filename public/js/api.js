/**
 * MRFSMM - API 集成模块
 * 与 Tajammal SMM Panel API 通信
 */

const API_URL = 'https://tajammalsmmpanel.com/api/v2';
const API_KEY = 'c7601e01af8aa62ca2518e89d88c4d45';

// 通过API下单
async function apiAddOrder(serviceId, link, quantity, localOrderId) {
  try {
    const formData = new FormData();
    formData.append('key', API_KEY);
    formData.append('action', 'add');
    formData.append('service', serviceId);
    formData.append('link', link);
    formData.append('quantity', quantity);

    const res = await fetch(API_URL, { method: 'POST', body: formData });
    const data = await res.json();

    if (data.order) {
      // 将API返回的订单ID关联到本地订单
      const order = state.orders.find(o => o.id === localOrderId);
      if (order) {
        order.apiOrderId = data.order;
        saveState();
      }
      console.log(`[API] Order placed successfully: #${data.order}`);
      return data.order;
    }

    if (data.error) {
      console.warn(`[API] Order error: ${data.error}`);
    }
  } catch (e) {
    console.warn(`[API] Order request failed: ${e.message}`);
    console.warn('[API] Order saved locally — will work without API');
  }
  return null;
}

// 检查API订单状态
async function apiCheckStatus() {
  const apiOrders = state.orders.filter(
    o => o.apiOrderId && o.status !== 'Completed' && o.status !== 'Canceled'
  );

  if (apiOrders.length === 0) return;

  for (const order of apiOrders) {
    try {
      const formData = new FormData();
      formData.append('key', API_KEY);
      formData.append('action', 'status');
      formData.append('order', order.apiOrderId);

      const res = await fetch(API_URL, { method: 'POST', body: formData });
      const data = await res.json();

      if (data.status) {
        const statusMap = {
          'Pending': 'Pending',
          'Processing': 'In Progress',
          'In progress': 'In Progress',
          'Completed': 'Completed',
          'Partial': 'Partial',
          'Canceled': 'Canceled'
        };

        const newStatus = statusMap[data.status] || data.status;
        const changed = order.status !== newStatus;

        order.status = newStatus;
        if (data.start_count) order.startCount = parseInt(data.start_count);
        if (data.remains !== undefined) order.remains = parseInt(data.remains);

        // 如果从Partial变为其他状态，处理退款
        if (changed && data.status === 'Partial' && order.status !== 'Partial') {
          const svc = SERVICES.find(s => s.id === order.serviceId);
          if (svc && order.remains > 0) {
            const refund = (order.remains / 1000) * svc.price;
            state.balance += refund;
            toast(`Partial refund: ≈ ₨ ${refund.toFixed(2)} added to balance`, 'info');
          }
        }

        if (changed) {
          saveState();
          updateUI();
        }
      }
    } catch (e) {
      // 静默处理
    }
  }

  // 如果当前在订单页面，刷新显示
  if (document.getElementById('page-my-orders').classList.contains('active')) {
    renderOrders();
  }
}

// 定期检查API状态（每30秒）
setInterval(apiCheckStatus, 30000);