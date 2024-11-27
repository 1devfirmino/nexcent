const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.navigation ul');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});