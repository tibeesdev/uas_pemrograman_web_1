document.addEventListener("DOMContentLoaded", function () {
    // --- Fitur Show/Hide Password ---
    const toggleBtns = document.querySelectorAll(".toggle-password-btn");
    toggleBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const inputField = this.parentElement.querySelector("input");
            if (inputField.type === "password") {
                inputField.type = "text";
                this.style.opacity = "0.5";
            } else {
                inputField.type = "password";
                this.style.opacity = "1";
            }
        });
    });

    // --- Logika Registrasi Local Storage ---
    const formRegister = document.getElementById("formRegister");

    if (formRegister) {
        formRegister.addEventListener("submit", function (e) {
            e.preventDefault();

            const namaValue = document.getElementById("nama").value.trim();
            const emailValue = document.getElementById("email").value.trim();
            const passwordValue = document.getElementById("password").value.trim();
            const konfirmasiValue = document.getElementById("konfirmasi_password").value.trim();

            if (passwordValue !== konfirmasiValue) {
                alert("Konfirmasi sandi salah, harap coba kembali");
                document.getElementById("konfirmasi_password").focus();
                return;
            }

            // Ambil database user lokal yang ada, atau buat baru jika kosong
            let usersDB = JSON.parse(localStorage.getItem("usersDB")) || [];

            // Validasi: Cek apakah email sudah terdaftar sebelumnya
            const isEmailExist = usersDB.some(user => user.email === emailValue);
            if (isEmailExist) {
                alert("Alamat email ini sudah terdaftar! Gunakan email lain.");
                return;
            }

            // Tambah objek user baru ke dalam database lokal
            const newUser = {
                nama: namaValue,
                email: emailValue,
                password: passwordValue
            };
            usersDB.push(newUser);

            // Simpan kembali array ke Local Storage
            localStorage.setItem("usersDB", JSON.stringify(usersDB));

            alert("Registrasi Berhasil! Akun Anda telah tersimpan secara lokal. Silakan login.");
            window.location.href = "login.html";
        });
    }
});