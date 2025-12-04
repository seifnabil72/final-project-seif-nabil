// 1. Initialize AOS
AOS.init({
    duration: 800,      // Animation duration
    easing: 'ease-in-out', // Easing
    once: true          // Whether animation should happen only once
});

// 2. Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});