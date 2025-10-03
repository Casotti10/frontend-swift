document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById('cadastro-form');

    if (formCadastro) {
        const erroCadastro = document.createElement('p');
        erroCadastro.id = 'cadastro-erro';
        erroCadastro.style.color = 'red';
        formCadastro.parentNode.insertBefore(erroCadastro, formCadastro.nextSibling);

        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value.trim();

            if (!nome || !email || !senha) {
                erroCadastro.textContent = 'Preencha todos os campos.';
                return;
            }

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const emailExiste = usuarios.some(u => u.email.toLowerCase() === email.toLowerCase());
            if (emailExiste) {
                erroCadastro.textContent = 'Este e-mail já está cadastrado.';
                return;
            }

            usuarios.push({ nome, email, senha });
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'index.html';
        });
    }
});