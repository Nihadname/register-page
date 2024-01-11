document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginLink = document.querySelector('.login-link a');
    const registerLink = document.querySelector('.register-link a');
    let storedUsername = "";
    let storedPassword = "";

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        showLoginForm();
    });

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        showRegisterForm();
    });

    function showLoginForm() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }

    function showRegisterForm() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }

    // Show login form by default
    showLoginForm();

    // Login form submit event
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        loginUser();
    });

    // Register form submit event
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        registerUser();
    });

    function loginUser() {
        // Implement login logic here
        const usernameInput = document.querySelector('#loginForm input[type="text"]');
        const passwordInput = document.querySelector('#loginForm input[type="password"]');

        // Simulate user login with hardcoded credentials
        storedUsername = usernameInput.value;
        storedPassword = passwordInput.value;

        // Check if the entered username and password match the stored credentials
        if (usernameInput.value === storedUsername && passwordInput.value === storedPassword) {
            showAlert("success", "Login successful!");
        } else {
            showAlert("error", "Invalid username or password!");
        }
    }

    function registerUser() {
        // Implement registration logic here
        const usernameInput = document.querySelector('#registerForm input[type="text"]');
        const passwordInput = document.querySelector('#registerForm input[type="password"]');
        const confirmPasswordInput = document.querySelector('#registerForm input[name="confirmPassword"]');
        console.log("Username:", usernameInput.value);
        console.log("Password:", passwordInput.value);
        console.log("Confirm Password:", confirmPasswordInput.value);
    
        // Perform client-side validation (you should perform more validation on the server side)
        if (!usernameInput.value || !passwordInput.value || passwordInput.value !== confirmPasswordInput.value) {
            showAlert("error", "Invalid registration data!");
            return;
        }

        // Simulate storing the new user in a database
        showAlert("success", "Account created successfully!");
        showLoginForm();

    }

    function showAlert(icon, message) {
        swal({
            title: "Result",
            text: message,
            icon: icon,
            button: "OK",
        });
    }
});
