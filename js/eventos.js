/*Apertura y cierre de menu mobile */
const btn_menuHeader = document.querySelector('#btn_menuHeader');
const cancel = document.querySelector('#menu-c');

function menuEnable(){
    let menuMobile = document.querySelector('.menu--mobile.disable');
    menuMobile.className = "menu--mobile.enable";
}

function menuDisable(){
    let menuMobile = document.querySelector('.menu--mobile.enable');
    menuMobile.className = "menu--mobile disable";
}

/*Control menu Mobile */
btn_menuHeader.addEventListener('click', menuEnable);
cancel.addEventListener('click', menuDisable);