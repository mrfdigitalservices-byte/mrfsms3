/**
 * MRFSMM - 导航模块
 */

function navigateTo(page) {
  // 更新侧边栏高亮
  document.querySelectorAll('#nav a').forEach(n => n.classList.remove('active'));
  const activeLink = document.querySelector(`#nav a[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  // 切换页面
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) targetPage.classList.add('active');

  // 页面切换时刷新数据
  switch (page) {
    case 'my-orders': renderOrders(); break;
    case 'services': renderServicesTable(); break;
    case 'add-funds': renderPendingPayments(); break;
    case 'reviews': renderReviews(); break;
    case 'refer':
      document.getElementById('ref-link').value =
        window.location.origin + window.location.pathname + '?ref=' + state.username;
      break;
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

// 绑定导航点击事件
function initNavigation() {
  document.querySelectorAll('#nav a').forEach(a => {
    a.addEventListener('click', () => {
      navigateTo(a.dataset.page);
      if (window.innerWidth <= 768) toggleSidebar();
    });
  });
}

// 推荐链接复制
function copyRefLink() {
  const link = document.getElementById('ref-link').value;
  copyText(link);
}

// 评价渲染
function renderReviews() {
  const reviews = [
    { name: 'Ahmed Khan', text: 'Best SMM panel in Pakistan! Very fast delivery and cheapest rates. Highly recommended.', rating: 5, date: '2025-01-15' },
    { name: 'Sarah Ali', text: 'I have been using MRFSMM for 3 months. The TikTok views are amazing and non-drop. Love it!', rating: 5, date: '2025-01-12' },
    { name: 'Bilal Raza', text: 'Good service for Instagram followers. Delivery started within minutes. Will order again.', rating: 4, date: '2025-01-10' },
    { name: 'Fatima Noor', text: 'Facebook page likes were delivered perfectly. Support is also very responsive on WhatsApp.', rating: 5, date: '2025-01-08' },
    { name: 'Usman Sheikh', text: 'YouTube views quality is top-notch. My videos are getting monetized thanks to MRFSMM!', rating: 5, date: '2025-01-05' },
    { name: 'Ayesha Malik', text: 'Telegram members added quickly. Great prices compared to other panels. Keep it up!', rating: 4, date: '2025-01-03' }
  ];

  document.getElementById('reviews-grid').innerHTML = reviews.map(r => {
    const stars = Array(5).fill(0).map((_, i) =>
      `<i class="fas fa-star${i < r.rating ? '' : ' empty'}"></i>`
    ).join('');

    return `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${r.name.charAt(0)}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-date">${r.date}</div>
          </div>
        </div>
        <div class="review-stars">${stars}</div>
        <p class="review-text">"${r.text}"</p>
      </div>`;
  }).join('');
}