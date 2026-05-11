// Gestione Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        const top = reveal.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
});

// Gestione Animazione Hero 3D
const heroBox = document.querySelector('.hero-box');
const heroSection = document.querySelector('.hero');

if (heroBox && heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroBox.getBoundingClientRect();

        // Centro della card
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const sensitivity = 25;
        const rotateY = (e.clientX - centerX) / sensitivity;
        const rotateX = (centerY - e.clientY) / sensitivity;

        heroBox.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        heroBox.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}