//Thomas_22067/2023

const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  popup.style.display = 'flex';
  form.reset();
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
