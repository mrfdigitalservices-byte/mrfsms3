/**
 * MRFSMM - 主应用入口
 * 初始化所有模块
 */

// ============================================
// 状态管理
// ============================================
const STATE_KEY = 'mrfsmm_state';

let state = JSON.parse(localStorage.getItem(STATE_KEY)) || {
  username: 'kutta',
  balance: 4.45,
  orders: [],
  payments: [],
  totalSpent: 0,
  nextOrderId: 100001,
  nextPaymentId: 1
};

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

// ============================================
// 更新所有UI中的余额和统计
// ============================================
function updateUI() {
  const b = state.balance.toFixed(2);

  // 顶栏
  document.getElementById('top-balance').textContent = b;
  document.getElementById('top-username').textContent = state.username;
  document.getElementById('avatar-initial').textContent = state.username.charAt(0).toUpperCase();

  // 统计卡片
  document.getElementById('stat-username').textContent = state.username;
  document.getElementById('stat-orders').textContent = state.orders.length;
  document.getElementById('stat-spent').textContent = state.totalSpent.toFixed(2);
  document.getElementById('stat-balance').textContent = b;

  // 账户页
  document.getElementById('acc-username').textContent = state.username;
  document.getElementById('acc-balance').textContent = `≈ ₨ ${b}`;
  document.getElementById('acc-orders').textContent = state.orders.length;
  document.getElementById('acc-spent').textContent = state.totalSpent.toFixed(2);
}

// ============================================
// 会话计时器
// ============================================
const sessionStart = Date.now();

function updateTimer() {
  const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  document.getElementById('session-timer').textContent = `${m}m ${s}s`;
}

setInterval(updateTimer, 1000);

// ============================================
// 初始化
// ============================================
function init() {
  // 初始化各模块
  initNavigation();
  initOrderTabs();
  initOrderForm();
  renderServicesTable();
  renderPendingPayments();
  renderReviews();
  updateUI();

  // 检查URL推荐参数
  const params = new URLSearchParams(window.location.search);
  if (params.get('ref')) {
    toast(`Referred by: ${params.get('ref')}`, 'info');
  }

  console.log('%c MRFSMM Panel Loaded ', 'background:#f97316;color:#fff;font-size:14px;font-weight:bold;padding:4px 8px;border-radius:4px');
  console.log('%c Admin commands: adminAddFunds(amount), adminRejectFund(paymentId) ', 'color:#64748b;font-size:11px');
}

// DOM 就绪后启动
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}