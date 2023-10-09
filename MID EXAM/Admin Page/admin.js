document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;

    // In a production environment, validate the password securely on the server.
    if (password === 'faizan') {
        // Redirect to the admin dashboard or management page.
        alert('Login successful. Redirecting to admin dashboard...');
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid password. Please try again.');
    }
});
