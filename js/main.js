// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navTop = document.querySelector('.nav-top');
const navItems = document.querySelectorAll('.nav-list__item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    navList.classList.add('show');
    navTop.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    navList.classList.remove('show');
    navTop.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}



