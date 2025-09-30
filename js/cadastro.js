const form = document.getElementById('cadastro-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  // Pega lista de usuários do LocalStorage ou cria nova
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verifica se email já existe
  const usuarioExistente = usuarios.find(u => u.email === email);
  if (usuarioExistente) {
    alert('Este e-mail já está cadastrado!');
    return;
  }

  // Adiciona novo usuário
  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'login.html'; // Redireciona para login
});
