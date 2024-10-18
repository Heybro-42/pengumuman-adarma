document.getElementById('revealButton').addEventListener('click', function() {
    // Tampilkan nama kandidat
    document.getElementById('candidates').style.display = 'block';

    // Munculkan animasi konfeti
    startConfetti();

    // Sembunyikan tombol setelah diklik
    this.style.display = 'none';
});

function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confettiColors = ['#ff0', '#f00', '#0f0', '#00f', '#ff7f50', '#ff1493'];

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.width = '10px';
        confettiPiece.style.height = '10px';
        confettiPiece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confettiPiece.style.top = `${Math.random() * 100}vh`;
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confettiPiece);

        // Animasikan konfeti jatuh
        confettiPiece.animate([
            { transform: `translateY(0px) rotate(${Math.random() * 360}deg)` },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)` }
        ], {
            duration: Math.random() * 3000 + 2000,
            iterations: 1
        });
    }
}
