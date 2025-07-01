document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');
  const navItems = links?.querySelectorAll('a'); // All menu links

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
    });

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('active');
      });
    });
  } else {
    console.error("menu-toggle or nav-links not found.");
  }
});
