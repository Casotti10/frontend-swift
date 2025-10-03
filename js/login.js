document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'home.html';
        });
    }
});