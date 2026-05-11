
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(reveal => {

        const top = reveal.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            reveal.classList.add('active');
        }
        else {

            reveal.classList.remove('active');
        }

    });

});

const hero = document.querySelector('.hero-box');
const heroContainer = document.querySelector('.hero'); // Usiamo il container per una migliore area di attivazione

heroContainer.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const sensitivity = 30;
    // Calcolo per far sì che la card "punti" verso il mouse
    const rotateY = (e.clientX - centerX) / sensitivity;
    const rotateX = (centerY - e.clientY) / sensitivity;

    hero.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

heroContainer.addEventListener('mouseleave', () => {
    hero.style.transform = `rotateY(0deg) rotateX(0deg)`;
});