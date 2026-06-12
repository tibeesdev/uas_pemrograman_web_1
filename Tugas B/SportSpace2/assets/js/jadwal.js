document.addEventListener("DOMContentLoaded", function () {
    const btnPesan = document.getElementById("btnPesan");

    if (btnPesan) {
        btnPesan.addEventListener("click", function () {
            const activeSession = localStorage.getItem("activeSession");

            if (!activeSession) {
                alert("Akses Ditolak: Anda harus login terlebih dahulu untuk memesan lapangan!");
                window.location.href = "login.html";
            } else {
                alert("Pesanan Anda sedang diproses! Terima kasih telah menggunakan SportSpace.");
            }
        });
    }
});