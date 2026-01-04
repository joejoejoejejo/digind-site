// Mobile menu
const btn = document.querySelector('.menuBtn');
const links = document.querySelector('.navlinks');
if (btn && links) {
  btn.addEventListener('click', () => links.classList.toggle('show'));
}

// Active nav link based on current file
const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.navlinks a').forEach(a => {
  const href = (a.getAttribute('href') || '').toLowerCase();
  if (href === path) a.classList.add('active');
});
