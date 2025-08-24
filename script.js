// Sticky elevation on scroll
const header = document.querySelector('[data-elevate]');
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      header?.classList.toggle('scrolled', window.scrollY > 4);
      ticking = false;
    });
    ticking = true;
  }
});

// Demo "Add to Bag" feedback
document.querySelectorAll('[data-add]').forEach(btn => {
  btn.addEventListener('click', e => {
    const name = btn.getAttribute('data-add') || 'Item';
    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = 'Added ✔️';
    btn.style.filter = 'brightness(1.15)';
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = original;
      btn.style.filter = '';
    }, 1400);
    // In real app, dispatch to cart state or API here.
    console.log(`Added to bag: ${name}`);
  });
});

// Close mobile menu when clicking a link (CSS burger is the source of truth)
const navToggle = document.getElementById('nav-toggle');
document.querySelectorAll('.mobile-link').forEach(a => {
  a.addEventListener('click', () => { if (navToggle) navToggle.checked = false; });
});
