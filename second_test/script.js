const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggle.classList.toggle('active');
});


