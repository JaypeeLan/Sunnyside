const btn = document.querySelector('#navBtn');
const menu = document.querySelector('.navbar');

btn.addEventListener('click', function(){
    menu.classList.toggle('active')
});
