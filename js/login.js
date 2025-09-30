const form = document.getElementById('login-form');
const erro = document.getElementById('login-error');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = document.getElementById('email-login').value.trim();
        const senhaInput = document.getElementById('senha-login').value.trim();

        if (!emailInput || !senhaInput) {
            erro.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioValidado = usuarios.find(u => 
            u.email.trim().toLowerCase() === emailInput.toLowerCase() && 
            u.senha.trim() === senhaInput
        );

        if (usuarioValidado) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValidado));
            window.location.href = 'index.html';
        } else {
            erro.textContent = 'E-mail ou senha inválidos. Tente novamente.';
        }
    });
} else {
    console.error('Formulário de login com ID "login-form" não encontrado.');
}
