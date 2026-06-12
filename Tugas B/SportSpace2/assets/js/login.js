document.addEventListener("DOMContentLoaded", function () {
    // --- Fitur Show/Hide Password ---
    const togglePassword = document.getElementById("togglePassword");
    if (togglePassword) {
        togglePassword.addEventListener("click", function () {
            const inputField = document.getElementById("password");
            if (inputField.type === "password") {
                inputField.type = "text";
                this.style.opacity = "0.5";
            } else {
                inputField.type = "password";
                this.style.opacity = "1";
            }
        });
    }

    // --- Logika Login Local Storage ---
    const formLogin = document.getElementById("formLogin");

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = document.getElementById("email").value.trim();
            const passwordInput = document.getElementById("password").value.trim();

            // Ambil data user dari Local Storage
            const usersDB = JSON.parse(localStorage.getItem("usersDB")) || [];

            // Cari user dengan email dan password yang cocok
            const userValid = usersDB.find(user => user.email === emailInput && user.password === passwordInput);

            if (!userValid) {
                alert("Gagal Masuk: Email atau kata sandi Anda salah!");
            } else {
                // Buat sesi login aktif menggunakan data user yang ditemukan
                localStorage.setItem("activeSession", JSON.stringify({
                    nama: userValid.nama,
                    email: userValid.email
                }));

                alert(`Login Berhasil! Selamat datang kembali, ${userValid.nama}.`);
                window.location.href = "index.html";
            }
        });
    }
});