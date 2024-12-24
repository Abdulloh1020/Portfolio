let menuIcon = document.querySelector('#menu-icon'); // Menu icon
let closeMenu = document.querySelector('#close-menu'); // Close button (X)
let navbar = document.querySelector('nav'); // Navbar element
let sections = document.querySelectorAll('section'); // Sectionlar
let navLinks = document.querySelectorAll('header nav a'); // Navbar linklari

// Aktiv linklarni yangilash scroll event bilan
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

// Menyu ochish
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Menu icon o'zgarishi
    navbar.classList.add('active'); // Navbar ochilishi
};

// Menyu yopish (X tugmasi)
closeMenu.onclick = () => {
    navbar.classList.remove('active'); // Navbar yopilishi
    menuIcon.classList.remove('bx-x'); // Menu icon boshlang'ich holatiga qaytadi
};

// Mobil qurilmalarda menyu yopilganda linkni bosish
navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active'); // Navbar yopilishi
        menuIcon.classList.remove('bx-x'); // Menu icon boshlang'ich holatiga qaytadi
    };
});

// Modal tashqarisiga bosganda menyuni yopish
window.onclick = (event) => {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active'); // Navbar yopilishi
        menuIcon.classList.remove('bx-x'); // Menu icon boshlang'ich holatiga qaytadi
    }
};
