const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  console.log('clicked');
});

close.addEventListener('click', () => {
  menu.style.display = 'none';
  console.log('clicked');
});
