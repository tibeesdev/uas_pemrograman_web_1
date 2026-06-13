document.addEventListener("DOMContentLoaded", function () {
    const authNavOption = document.getElementById("authNavOption");
    
    const activeSession = JSON.parse(localStorage.getItem("activeSession"));

    if (activeSession && authNavOption) {
        authNavOption.innerHTML = `
            <div class="d-flex align-items-center gap-2 flex-column flex-lg-row">
                <span class="text-warning fw-bold ps-lg-3">Halo, ${activeSession.nama}!</span>
                <button id="btnLogout" class="btn btn-sm btn-outline-danger px-2 py-1">Logout</button>
            </div>
        `;

        document.getElementById("btnLogout").addEventListener("click", function() {
            localStorage.removeItem("activeSession");
            alert("Anda telah berhasil logout.");
            window.location.href = "index.html";
        });
    }
});