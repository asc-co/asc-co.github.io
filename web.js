// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const langSwitch = document.querySelector('.language-switch');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  if (window.innerWidth <= 768) {
    if (navLinks.classList.contains('show')) {
      // Move language buttons inside dropdown menu
      navLinks.appendChild(langSwitch);
    } else {
      // Move language buttons back to header
      document.querySelector('.header-inner').appendChild(langSwitch);
    }
  }
});

// Smooth scrolling
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });

      navLinks.classList.remove('show');

      // Move buttons back to header after click
      if (window.innerWidth <= 768) {
        document.querySelector('.header-inner').appendChild(langSwitch);
      }
    }
  });
});
