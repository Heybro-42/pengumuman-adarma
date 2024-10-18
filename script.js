function selectDivision() {
    // Sembunyikan semua daftar kandidat
    var lists = document.querySelectorAll('.candidate-list');
    lists.forEach(list => {
        list.classList.remove('active');
    });

    // Tampilkan daftar kandidat sesuai divisi yang dipilih
    var selectedDivision = document.getElementById("divisionSelect").value;
    if (selectedDivision === "pengabdian") {
        document.getElementById("pengabdianList").classList.add('active');
        launchConfetti();
    } else if (selectedDivision === "perhubungan") {
        document.getElementById("perhubunganList").classList.add('active');
        launchConfetti();
    } else if (selectedDivision === "media") {
        document.getElementById("mediaList").classList.add('active');
        launchConfetti();
    }
}

// Fungsi untuk memunculkan animasi konfeti
function launchConfetti() {
    var duration = 5 * 1000; // Durasi 5 detik
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
