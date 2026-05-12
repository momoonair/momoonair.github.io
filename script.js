document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTIONE SCROLL REVEAL
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const top = reveal.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    const heroBox = document.getElementById('heroBox');
    const ctx = document.getElementById('chart');

    // 1. GESTIONE CLICK (Flip)
    heroBox.addEventListener('click', () => {
        heroBox.classList.toggle('is-flipped');
    });

    // 2. INIZIALIZZAZIONE GRAFICO
    if (ctx) {
        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Dati Python',
                    data: [{ x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2.5, y: 6 }, { x: 2, y: 10 }, { x: 3, y: 7 }, { x: 4, y: 12 }],
                    backgroundColor: '#4ade80'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Necessario per riempire il box
                scales: {
                    x: { ticks: { color: '#aaa' }, grid: { color: '#333' } },
                    y: { ticks: { color: '#aaa' }, grid: { color: '#333' } }
                }
            }
        });
    }

});