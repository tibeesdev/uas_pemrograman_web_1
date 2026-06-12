document.addEventListener("DOMContentLoaded", function () {
    const authNavOption = document.getElementById("authNavOption");
    
    // Cek apakah ada session user yang aktif di local storage
    const activeSession = JSON.parse(localStorage.getItem("activeSession"));

    if (activeSession && authNavOption) {
        // Jika sedang login, ganti navigasi LOGIN menjadi Nama Profil & Tombol Logout
        authNavOption.innerHTML = `
            <div class="d-flex align-items-center gap-2 flex-column flex-lg-row">
                <span class="text-warning fw-bold ps-lg-3">Halo, ${activeSession.nama}!</span>
                <button id="btnLogout" class="btn btn-sm btn-outline-danger px-2 py-1">Logout</button>
            </div>
        `;

        // Logika tombol logout diklik
        document.getElementById("btnLogout").addEventListener("click", function() {
            localStorage.removeItem("activeSession");
            alert("Anda telah berhasil logout.");
            window.location.href = "index.html";
        });
    }
});