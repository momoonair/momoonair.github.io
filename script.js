
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

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});