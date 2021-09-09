/*Contraseña */
const btn_password = document.querySelector('.icon.p.one');

/*Apertura y cierre de menu mobile */
const btn_menuHeader = document.querySelector('#btn_menuHeader');
const cancel = document.querySelector('#menu-c');

/*Apertura y cierre menu principal */
const btn_menuPrincipal = document.querySelector('#menu-p');

function menuMobile(){
    let menuMobile = document.querySelector('.menu-mobile');  
    if(menuMobile.className === "menu-mobile disable") {
        menuMobile.className = "menu-mobile enable";
    }else{
        menuMobile.className = "menu-mobile disable";
    }
}

function menuPrincipal(){
    let menuPrincipal = document.querySelector('.menu-principal');
    if(menuPrincipal.className == "menu-principal disable"){
        menuPrincipal.className = "menu-principal enable";
    }else{
        menuPrincipal.className = "menu-principal disable";
    }
}

function visible(){
    let password = document.querySelector('#password');
    if(btn_password.className === "icon p one"){
        let node = document.querySelector('.far.fa-eye');

        node.className = "fas fa-eye-slash";
        password.type = "text"
        btn_password.className = "icon p two"
    }else{
        let node = document.querySelector('.fas.fa-eye-slash');
        node.className = "far fa-eye";
        password.type = "password"
        btn_password.className = "icon p one"
    }
}

/*Visibilidad de contraseña */
if(btn_password!=null){
    btn_password.addEventListener('click', visible);
}

/*Control menu Mobile */
btn_menuHeader.addEventListener('click', menuMobile);
cancel.addEventListener('click', menuMobile);

/*Menu Principal */
if(btn_menuPrincipal!=null){
    btn_menuPrincipal.addEventListener('click', menuPrincipal);
}