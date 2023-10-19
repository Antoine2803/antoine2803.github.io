const navToggleOn = document.querySelector('.nav-toggleOn');
const navToggleOff = document.querySelector('.nav-toggleOff');
const navbar = document.querySelector('.navbar');
const frenchCV = document.querySelector('frenchCV');
const englCV = document.querySelector('englCV');
const frcv = document.querySelector('frCV');
const encv = document.querySelector('enCV');


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

encv.addEventListener('change', () =>{
    frenchCV.classList.toggle('active' [false]);
    englCV.classList.toggle('active' [false]);
});

frcv.addEventListener('change', () =>{
    frenchCV.classList.toggle('active' [true]);
    englCV.classList.toggle('active' [true]);
});
