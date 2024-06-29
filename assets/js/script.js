
// NAvbar BG 

let navbarBg = document.querySelector('.navbar-main');

window.addEventListener('scroll', () => {

    if (window.scrollY >= 300) {
        navbarBg.classList.add('nav-background');
    } else if (window.scrollY < 300) {
        navbarBg.classList.remove('nav-background');

    }

});


