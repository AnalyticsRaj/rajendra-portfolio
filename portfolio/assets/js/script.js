// Skill bar animation on scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        const sectionTop = skill.parentElement.parentElement.offsetTop;
        const scrollY = window.scrollY + window.innerHeight - 100;
        if(scrollY > sectionTop) {
            skill.style.width = skill.getAttribute('data-level');
        }
    });
});
