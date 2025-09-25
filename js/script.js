// Alerta e adiciona produto no carrinho
const botoes = document.querySelectorAll(".add");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        const produto = btn.getAttribute("data-produto"); // pega nome do produto do botão
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho.push(produto);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("Produto adicionado ao carrinho!");
    });
});

// Script do formulário de contato
const formContato = document.getElementById("formContato");
if (formContato) {
    formContato.addEventListener("submit", function(e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        alert("Obrigado pelo contato, " + nome + "! Em breve retornaremos sua mensagem.");
        formContato.reset();
    });
}
