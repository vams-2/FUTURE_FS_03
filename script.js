const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const addButtons = document.querySelectorAll('.price-row button');

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.innerText = 'Added ✓';
    button.style.background = '#25D366';
  });
});