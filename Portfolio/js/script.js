let menuIcon = document.querySelector('#menu-icon');
let closeMenu = document.querySelector('#close-menu'); 
let navbar = document.querySelector('nav'); 
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']')?.classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.add('active'); 
};

closeMenu.onclick = () => {
    navbar.classList.remove('active'); 
    menuIcon.classList.remove('bx-x'); 
};

navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active'); 
        menuIcon.classList.remove('bx-x'); 
    };
});


window.onclick = (event) => {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
};
