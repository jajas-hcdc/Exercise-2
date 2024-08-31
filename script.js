const darkModeToggle = document.getElementById('dark-mode-toggle');
const hero = document.querySelector('.hero');
const heroContainer = document.querySelector('.hero-container');
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  hero.classList.toggle('dark-mode');
  heroContainer.classList.toggle('dark-mode');
  logo.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');
});