document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fake validation (replace with actual logic)
    if (username === 'user' && password === 'password') {
        alert('Login Successful!');
        // Redirect or proceed with the app
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
});
