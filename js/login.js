const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email-login').value.trim();
  const senha = document.getElementById('senha-login').value.trim();

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    alert('Login realizado com sucesso! Bem-vindo, ' + usuario.nome);
    // Aqui você pode redirecionar para a página principal
    window.location.href = 'index.html';
  } else {
    alert('Usuário ou senha inválidos!');
  }
});
