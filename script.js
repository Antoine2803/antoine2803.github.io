const navToggleOn = document.querySelector('.nav-toggleOn');
const navToggleOff = document.querySelector('.nav-toggleOff');
const navbar = document.querySelector('.navbar');

navToggleOn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggleOn.classList.toggle('active');
    navToggleOff.classList.toggle('active');
});

navToggleOff.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggleOn.classList.toggle('active');
    navToggleOff.classList.toggle('active');
});
