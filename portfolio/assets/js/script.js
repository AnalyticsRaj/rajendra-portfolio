// Optional: smooth fade-in animations
window.addEventListener('scroll', () => {
    const fadeElements = document.querySelectorAll('section, .project-card, .service-card');
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});
