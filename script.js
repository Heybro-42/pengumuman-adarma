<script>
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
            launchConfetti();  // Panggil fungsi konfeti
        } else if (selectedDivision === "perhubungan") {
            document.getElementById("perhubunganList").classList.add('active');
            launchConfetti();  // Panggil fungsi konfeti
        } else if (selectedDivision === "media" ) {
            document.getElementById("mediaList").classList.add('active');
            launchConfetti();  // Panggil fungsi konfeti
        }
    }

    // Fungsi untuk memunculkan animasi konfeti
    function launchConfetti() {
        var end = Date.now() + 5 * 1000;  // Durasi konfeti 5 detik

        // Fungsi untuk menghasilkan konfeti dari dua sisi
        (function frame() {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0 }  // Konfeti keluar dari kiri
            });
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1 }  // Konfeti keluar dari kanan
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
</script>
