// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// --- Scroll Spy for Active Navigation Link Highlight ---
const sections = document.querySelectorAll('.section-scroll');
const navItems = document.querySelectorAll('.nav-links .nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Triggers the active link to change when you've scrolled slightly into the section
        if (pageYOffset >= sectionTop - 250) { 
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// --- Doodle Generator for About Section ---
const doodlesContainer = document.getElementById('doodles-container');

// Array of FontAwesome icon classes representing tools and tech
const doodleIcons = [
    'fa-wrench', 'fa-cog', 'fa-laptop', 'fa-envelope', 
    'fa-camera', 'fa-hammer', 'fa-phone', 'fa-search', 
    'fa-headphones', 'fa-pencil-alt', 'fa-mobile-alt'
];

const numDoodles = 15; 

if (doodlesContainer) {
    for (let i = 0; i < numDoodles; i++) {
        const iconElement = document.createElement('i');
        
        const randomIcon = doodleIcons[Math.floor(Math.random() * doodleIcons.length)];
        iconElement.classList.add('fas', randomIcon, 'doodle');
        
        const randomX = Math.floor(Math.random() * 90) + 5; 
        const randomY = Math.floor(Math.random() * 90) + 5; 
        
        const randomSize = Math.random() * 2 + 1.5; 
        const randomDelay = Math.random() * 5; 
        const randomDuration = Math.random() * 4 + 5; 

        iconElement.style.left = `${randomX}%`;
        iconElement.style.top = `${randomY}%`;
        iconElement.style.fontSize = `${randomSize}rem`;
        iconElement.style.animationDelay = `${randomDelay}s`;
        iconElement.style.animationDuration = `${randomDuration}s`;
        
        doodlesContainer.appendChild(iconElement);
    }
}