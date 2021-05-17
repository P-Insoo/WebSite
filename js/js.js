const Btn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

Btn.addEventListener('click',function(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})