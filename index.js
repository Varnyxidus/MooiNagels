//toggle menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function(){
    navLinks.classList.toggle('show');
});

//navbar blur
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

//slide in
let previousScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
  
      if (rect.top < window.innerHeight * 0.8) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  });