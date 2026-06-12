document.addEventListener("DOMContentLoaded", function () {
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

    const formLogin = document.getElementById("formLogin");

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = document.getElementById("email").value.trim();
            const passwordInput = document.getElementById("password").value.trim();

            const usersDB = JSON.parse(localStorage.getItem("usersDB")) || [];

            const userValid = usersDB.find(user => user.email === emailInput && user.password === passwordInput);

            if (!userValid) {
                alert("Gagal Masuk: Email atau kata sandi Anda salah!");
            } else {
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