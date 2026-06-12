/**
 * MRFSMM - 充值管理模块
 */

function submitFundRequest() {
  const amount = parseFloat(document.getElementById('fund-amount').value);
  const txnid = document.getElementById('fund-txnid').value.trim();
  const sender = document.getElementById('fund-sender').value.trim();

  if (!amount || amount <= 0) return toast('Please enter a valid amount', 'warning');
  if (!txnid) return toast('Please enter your transaction ID', 'warning');
  if (!sender) return toast('Please enter your sending number', 'warning');

  const payment = {
    id: state.nextPaymentId++,
    amount: amount.toFixed(2),
    txnid,
    sender,
    date: new Date().toISOString(),
    dateStr: new Date().toLocaleString('en-PK'),
    status: 'Pending'
  };

  state.payments.unshift(payment);
  saveState();
  renderPendingPayments();

  // 清空表单
  document.getElementById('fund-amount').value = '';
  document.getElementById('fund-txnid').value = '';
  document.getElementById('fund-sender').value = '';

  toast('Payment submitted! Please wait — your payment will be added after verification.', 'info');
}

function renderPendingPayments() {
  const tbody = document.getElementById('pending-tbody');
  const payments = state.payments;

  document.getElementById('pending-count').textContent = `${payments.length} Pending`;

  if (payments.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty-td">No pending payments</td></tr>';
    return;
  }

  tbody.innerHTML = payments.map(p => `
    <tr>
      <td style="font-weight:600">#${p.id}</td>
      <td>${p.dateStr}</td>
      <td style="font-weight:700;color:#f97316">≈ ₨ ${p.amount}</td>
      <td><code style="font-size:.78rem;background:#f1f5f9;padding:2px 6px;border-radius:4px">${p.txnid}</code></td>
      <td><span class="badge badge-pending">${p.status}</span></td>
    </tr>
  `).join('');
}

// 管理员手动充值功能（通过浏览器控制台调用）
// 用法: adminAddFunds(100)  — 添加100卢比
function adminAddFunds(amount) {
  state.balance += amount;
  // 将对应的pending payment标记为完成
  if (state.payments.length > 0) {
    const p = state.payments.find(p => p.status === 'Pending' && parseFloat(p.amount) <= amount);
    if (p) p.status = 'Approved';
  }
  saveState();
  updateUI();
  renderPendingPayments();
  console.log(`[ADMIN] Added ≈ ₨ ${amount} to balance. New balance: ≈ ₨ ${state.balance.toFixed(2)}`);
}

// 管理员拒绝充值
function adminRejectFund(paymentId) {
  const p = state.payments.find(p => p.id === paymentId);
  if (p) {
    p.status = 'Rejected';
    saveState();
    renderPendingPayments();
    console.log(`[ADMIN] Rejected payment #${paymentId}`);
  }
}