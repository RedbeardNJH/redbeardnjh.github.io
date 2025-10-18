// Basic SPA-like section navigation
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');

      // Hide all sections
      sections.forEach((sec) => sec.classList.remove('active'));

      // Show target section
      document.getElementById(target).classList.add('active');

      // Update aria-current for accessibility
      navLinks.forEach((n) => n.setAttribute('aria-current', 'false'));
      link.setAttribute('aria-current', 'true');
    });
  });
});
