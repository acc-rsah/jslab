document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            window.location = "resume.html";
        } else {
            document.getElementById("errorMessage").textContent =
                "Invalid username/password";
        }
    });

localStorage.setItem("username", "admin");
localStorage.setItem("password", "admin123");
