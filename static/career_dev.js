const frenchCV = document.querySelector('.frenchCV');
const englCV = document.querySelector('.englCV');
const frcv = document.querySelector('.frCV');
const encv = document.querySelector('.enCV');
const frdl = document.querySelector('.dlfr');
const endl = document.querySelector('.dleng');

encv.addEventListener('click', () => {
    frenchCV.classList.toggle('active');
    englCV.classList.toggle('active');
    endl.classList.toggle('active');
    frdl.classList.toggle('active');
    frcv.classList.toggle('active');
    encv.classList.toggle('active');
    encv.disabled = true;
    frcv.disabled = false;
});

frcv.addEventListener('click', () => {
    frenchCV.classList.toggle('active');
    englCV.classList.toggle('active');
    endl.classList.toggle('active');
    frdl.classList.toggle('active');
    encv.classList.toggle('active');
    frcv.classList.toggle('active');
    frcv.disabled = true;
    encv.disabled = false;
});
