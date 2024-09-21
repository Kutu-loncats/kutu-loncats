// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Custom JS animation for scroll effects
window.addEventListener('scroll', () => {
    document.querySelectorAll('.experience-item').forEach(item => {
        const position = item.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        }
    });
});
