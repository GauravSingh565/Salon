var menubtn = document.getElementById("menu_btn");
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
navbar.style.right = "-200px"
menubtn.onclick = function() {
    if (navbar.style.right == "-200px") {
        navbar.style.right = "0"
        menu.src = "images/close.png"
    } else {
        navbar.style.right = "-200px"
        menu.src = "images/menu.png"
    }
}

AOS.init({
    offset: 300,
    duration: 1000,
});