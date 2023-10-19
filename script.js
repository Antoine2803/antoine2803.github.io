const navToggleOn = document.querySelector('.nav-toggleOn');
const navToggleOff = document.querySelector('.nav-toggleOff');
const navbar = document.querySelector('.navbar');
const frenchCV = document.querySelector('.frenchCV');
const englCV = document.querySelector('.englCV');
const frcv = document.querySelector('.frCV');
const encv = document.querySelector('.enCV');


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

encv.addEventListener('click', () =>{
    frenchCV.classList.toggle('active');
    englCV.classList.toggle('active');
    frcv.classList.toggle('radon');
    encv.classList.toggle('radon');
    encv.disabled = true;
    frcv.disabled = false;
});

frcv.addEventListener('click', () =>{
    frenchCV.classList.toggle('active');
    englCV.classList.toggle('active');
    encv.classList.toggle('radon');
    frcv.classList.toggle('radon');
    frcv.disabled = true;
    encv.disabled = false;
});
