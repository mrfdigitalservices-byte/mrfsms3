/**
 * MRFSMM - 订单管理模块
 */

let currentFilter = 'all';

// 初始化订单标签页
function initOrderTabs() {
  document.querySelectorAll('#order-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#order-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderOrders();
    });
  });
}

// 渲染订单列表
function renderOrders() {
  const container = document.getElementById('orders-list');
  let orders = state.orders;

  if (currentFilter !== 'all') {
    orders = orders.filter(o => o.status === currentFilter);
  }

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-inbox"></i>
        <p>${currentFilter === 'all' ? 'No orders yet' : `No ${currentFilter} orders`}</p>
        <span>Place your first order from the New Order page</span>
      </div>`;
    return;
  }

  container.innerHTML = orders.map(o => {
    const badgeClass = getBadgeClass(o.status);
    const linkShort = o.link.length > 50 ? o.link.substring(0, 50) + '...' : o.link;

    return `
      <div class="order-card">
        <div class="order-top">
          <div>
            <span class="order-id">Order #${o.id}</span>
            <span class="badge ${badgeClass}" style="margin-left:8px">${o.status}</span>
          </div>
          <span class="order-charge">≈ ₨ ${o.charge}</span>
        </div>
        <div class="order-service-name">${o.serviceName}</div>
        <div class="order-details">
          <div><i class="fas fa-clock"></i> ${o.dateStr}</div>
          <div><i class="fas fa-link"></i> <a href="${o.link}" target="_blank">${linkShort}</a></div>
          <div><i class="fas fa-hashtag"></i> Qty: ${formatNum(o.quantity)}</div>
          <div><i class="fas fa-play"></i> Start: ${formatNum(o.startCount)}</div>
          <div><i class="fas fa-hourglass-half"></i> Remains: ${formatNum(o.remains)}</div>
        </div>
      </div>`;
  }).join('');
}

// 订单状态模拟（当API不可用时）
function simulateOrderStatus() {
  let changed = false;
  const now = Date.now();

  state.orders.forEach(o => {
    const elapsed = now - new Date(o.date).getTime();

    if (o.status === 'Pending' && elapsed > 15000) {
      o.status = 'In Progress';
      o.startCount = Math.floor(o.quantity * 0.1);
      o.remains = o.quantity - o.startCount;
      changed = true;
    }

    if (o.status === 'In Progress' && elapsed > 60000) {
      if (Math.random() > 0.1) {
        o.status = 'Completed';
        o.startCount = o.quantity;
        o.remains = 0;
      } else {
        o.status = 'Partial';
        o.startCount = Math.floor(o.quantity * 0.85);
        o.remains = o.quantity - o.startCount;
        // 部分退款
        const svc = SERVICES.find(s => s.id === o.serviceId);
        if (svc) {
          const refund = (o.remains / 1000) * svc.price;
          state.balance += refund;
          toast(`Partial refund: ≈ ₨ ${refund.toFixed(2)}`, 'info');
        }
      }
      changed = true;
    }
  });

  if (changed) {
    saveState();
    updateUI();
    if (document.getElementById('page-my-orders').classList.contains('active')) {
      renderOrders();
    }
  }
}

// 每5秒检查一次模拟状态
setInterval(simulateOrderStatus, 5000);

// 新订单表单逻辑
function initOrderForm() {
  const catSel = document.getElementById('order-category');
  CATEGORIES.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    catSel.appendChild(opt);
  });
}

function onCategoryChange() {
  const cat = document.getElementById('order-category').value;
  const svcSel = document.getElementById('order-service');
  const qtyInput = document.getElementById('order-quantity');

  svcSel.innerHTML = '<option value="">-- Select Service --</option>';
  qtyInput.value = '';
  qtyInput.disabled = true;
  document.getElementById('order-charge').value = '≈ ₨ 0.00';
  document.getElementById('qty-hint').textContent = 'Select a service first';

  if (!cat) { svcSel.disabled = true; return; }
  svcSel.disabled = false;

  SERVICES.filter(s => s.category === cat).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `#${s.id} - ${s.name} [ Price Per 1000 » ≈ Rs ${s.price} ]`;
    svcSel.appendChild(opt);
  });
}

function onServiceChange() {
  const svcId = parseInt(document.getElementById('order-service').value);
  const qtyInput = document.getElementById('order-quantity');

  qtyInput.value = '';
  document.getElementById('order-charge').value = '≈ ₨ 0.00';

  if (!svcId) { qtyInput.disabled = true; return; }

  const svc = SERVICES.find(s => s.id === svcId);
  if (!svc) return;

  qtyInput.disabled = false;
  qtyInput.min = svc.min;
  qtyInput.max = svc.max === 'Unlimited' ? '' : svc.max;
  qtyInput.placeholder = `Min: ${svc.min} - Max: ${svc.max}`;
  document.getElementById('qty-hint').textContent = `Min: ${svc.min} — Max: ${svc.max}`;
}

function calculateCharge() {
  const svcId = parseInt(document.getElementById('order-service').value);
  const qty = parseInt(document.getElementById('order-quantity').value);
  const chargeInput = document.getElementById('order-charge');

  if (!svcId || !qty || qty <= 0) {
    chargeInput.value = '≈ ₨ 0.00';
    return;
  }

  const svc = SERVICES.find(s => s.id === svcId);
  if (!svc) return;

  const charge = (qty / 1000) * svc.price;
  chargeInput.value = `≈ ₨ ${charge.toFixed(2)}`;
}

function submitOrder() {
  const cat = document.getElementById('order-category').value;
  const svcId = parseInt(document.getElementById('order-service').value);
  const link = document.getElementById('order-link').value.trim();
  const qty = parseInt(document.getElementById('order-quantity').value);

  if (!cat) return toast('Please select a category', 'warning');
  if (!svcId) return toast('Please select a service', 'warning');
  if (!link) return toast('Please enter a link', 'warning');
  if (!qty || qty <= 0) return toast('Please enter a valid quantity', 'warning');

  const svc = SERVICES.find(s => s.id === svcId);
  if (!svc) return toast('Service not found', 'error');
  if (qty < svc.min) return toast(`Minimum quantity is ${svc.min}`, 'warning');
  if (svc.max !== 'Unlimited' && qty > svc.max) return toast(`Maximum quantity is ${svc.max}`, 'warning');

  const charge = (qty / 1000) * svc.price;
  if (charge > state.balance) return toast('Insufficient balance! Please add funds.', 'error');

  // 扣除余额
  state.balance -= charge;
  state.totalSpent += charge;

  // 创建订单
  const order = {
    id: state.nextOrderId++,
    serviceId: svc.id,
    serviceName: svc.name,
    category: cat,
    link: link,
    quantity: qty,
    charge: charge.toFixed(2),
    status: 'Pending',
    startCount: 0,
    remains: qty,
    date: new Date().toISOString(),
    dateStr: new Date().toLocaleString('en-PK')
  };
  state.orders.unshift(order);
  saveState();
  updateUI();

  // 尝试通过API下单
  apiAddOrder(svc.id, link, qty, order.id);

  toast(`Order #${order.id} placed! Charge: ≈ ₨ ${charge.toFixed(2)}`, 'success');

  // 重置表单
  document.getElementById('order-category').value = '';
  document.getElementById('order-service').innerHTML = '<option value="">-- Select Service --</option>';
  document.getElementById('order-service').disabled = true;
  document.getElementById('order-link').value = '';
  document.getElementById('order-quantity').value = '';
  document.getElementById('order-quantity').disabled = true;
  document.getElementById('order-charge').value = '≈ ₨ 0.00';
  document.getElementById('qty-hint').textContent = 'Select a service first';
}

// 服务列表页面
function renderServicesTable(filter = '') {
  const tbody = document.getElementById('services-tbody');
  const query = filter.toLowerCase();

  let filtered = SERVICES;
  if (query) {
    filtered = SERVICES.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.category.toLowerCase().includes(query) ||
      String(s.id).includes(query)
    );
  }

  let html = '';
  let lastCat = '';

  filtered.forEach(s => {
    if (s.category !== lastCat) {
      lastCat = s.category;
      html += `<tr><td colspan="6" class="cat-header">${s.category}</td></tr>`;
    }
    html += `
      <tr>
        <td style="font-weight:700;color:#64748b">${s.id}</td>
        <td style="max-width:400px;line-height:1.4">${s.name}</td>
        <td style="font-weight:700;color:#f97316;white-space:nowrap">≈ ₨ ${s.price}</td>
        <td>${formatNum(s.min)}</td>
        <td>${formatNum(s.max)}</td>
        <td><button class="btn-secondary btn-sm" onclick="orderFromService(${s.id})">Order Now</button></td>
      </tr>`;
  });

  if (filtered.length === 0) {
    html = '<tr><td colspan="6" class="empty-td">No services found matching your search</td></tr>';
  }

  tbody.innerHTML = html;
}

function filterServices() {
  renderServicesTable(document.getElementById('service-search').value);
}

function orderFromService(svcId) {
  const svc = SERVICES.find(s => s.id === svcId);
  if (!svc) return;

  navigateTo('new-order');
  document.getElementById('order-category').value = svc.category;
  onCategoryChange();

  setTimeout(() => {
    document.getElementById('order-service').value = svc.id;
    onServiceChange();
  }, 50);

  toast(`Service #${svcId} selected — enter your link and quantity`, 'info');
}