const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  // hamburger.classList.toggle('.hidden');
  // menu.classList.toggle('.show');
  // hamburger.style.display = 'none';
  menu.style.display = 'block';
  console.log('clicked');
});

close.addEventListener('click', () => {
  // hamburger.classList.toggle('.hidden');
  // menu.classList.toggle('.show');
  // hamburger.style.display = 'block';
  menu.style.display = 'none';
  console.log('clicked');
});

// function onClick() {
//   isOpen = !isOpen;
// }
