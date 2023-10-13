const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const navUnToggle = document.querySelector('untogglenav');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navUnToggle.addEventListener('click', () => {
    navbar.classList.toggle('none');
});

