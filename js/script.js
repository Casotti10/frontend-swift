// Alerta e adiciona produto no carrinho
const botoesAdicionar = document.querySelectorAll(".add");

botoesAdicionar.forEach(btn => {
    btn.addEventListener("click", () => {
        const nomeProduto = btn.getAttribute("data-nome");
        const precoProduto = parseFloat(btn.getAttribute("data-preco"));

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        const itemExistente = carrinho.find(item => item.nome === nomeProduto);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ nome: nomeProduto, preco: precoProduto, quantidade: 1 });
        }

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
