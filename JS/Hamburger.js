/*          Hamburger          */
let menu = document.getElementById('menu');
let logo = document.getElementById('logo');
let ham_open = document.getElementById('open');
let ham_close = document.getElementById('close');
function hamburgeropen(){
    ham_open.style.display="none";
    ham_close.style.display="block";
    logo.style.opacity="0";
    menu.style.display="block";
    menu.style.width="100%";
    menu.style.padding="0 0 0 10%";
    menu.style.zIndex="1";
 }
 function hamburgerclose(){
    ham_close.style.display="none";
    ham_open.style.display="block";
    logo.style.opacity="1";
    menu.style.display="none";    
 }
