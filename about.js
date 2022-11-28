const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    hamburger.style.display = 'none';
  }
}

menuIcon.addEventListener('click', toggleMenu);

menuItem.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

