const menuEmail =document.querySelector('.navbar-email');
const desktopMenue= document.querySelector('.desktop-menu');

menuEmail.addEventListener ('click', toggleDesktopMenue);

function toggleDesktopMenue() {
    desktopMenue.classList.toggle('inactive');
}