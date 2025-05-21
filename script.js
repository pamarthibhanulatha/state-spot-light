document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Ensure localStorage has a users array
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    // Toggle between login and register forms
    window.toggleForm = function () {
        loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
        registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
    };

    // Registration logic
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("regUsername").value.trim();
        let password = document.getElementById("regPassword").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username exists
        if (users.some(user => user.username === username)) {
            alert("Username already exists. Try another.");
        } else {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful! Please login.");
            toggleForm(); // Switch to login form
        }
    });

    // Login logic
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            alert("Login successful! Redirecting...");
            localStorage.setItem("loggedInUser", username);
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid username or password.");
        }
    });
});
