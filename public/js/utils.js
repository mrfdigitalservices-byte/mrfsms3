/**
 * MRFSMM - 工具函数
 */

// Toast 通知系统
function toast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;

  const icons = {
    success: 'fa-check-circle',
    error: 'fa-times-circle',
    info: 'fa-info-circle',
    warning: 'fa-exclamation-circle'
  };

  t.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><span>${msg}</span>`;
  container.appendChild(t);

  setTimeout(() => {
    t.style.animation = 'slideOut .3s ease forwards';
    setTimeout(() => t.remove(), 300);
  }, 3500);
}

// 复制文本到剪贴板
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast('Copied to clipboard!', 'success');
  }).catch(() => {
    // 备用方案
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    toast('Copied to clipboard!', 'success');
  });
}

// 格式化数字
function formatNum(n) {
  if (n === 'Unlimited') return 'Unlimited';
  return Number(n).toLocaleString();
}

// 格式化价格
function formatPrice(p) {
  return `≈ ₨ ${Number(p).toFixed(2)}`;
}

// 获取状态徽章CSS类
function getBadgeClass(status) {
  const map = {
    'Pending': 'badge-pending',
    'Processing': 'badge-processing',
    'In Progress': 'badge-inprogress',
    'Completed': 'badge-completed',
    'Partial': 'badge-partial',
    'Canceled': 'badge-canceled'
  };
  return map[status] || 'badge-pending';
}