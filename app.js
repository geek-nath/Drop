const navbar = document.getElementById('navbar');

// change navbar state on scroll

window.onscroll = ()=> {
    if(window.scrollY >= 12) {
        navbar.className = "navbar pt-2 pb-2 navbar-expand-lg navbar-light bg-white fixed-top shadow-sm";
        // console.log('Hello world');
    } else {
        navbar.className = "navbar pt-3 pb-3 navbar-expand-lg navbar-dark bg-transparent fixed-top";
    }
}