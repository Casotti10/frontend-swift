document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const valorTotalElemento = document.getElementById("valor-total");

    const formatarMoeda = (valor) => {
        return `R$ ${valor.toFixed(2)}`;
    };

    const atualizarCarrinho = () => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        let totalCompra = 0;
        listaCarrinho.innerHTML = "";

        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = '<tr><td colspan="5">O seu carrinho está vazio.</td></tr>';
            valorTotalElemento.textContent = formatarMoeda(0);
            return;
        }

        carrinho.forEach((item, index) => {
            const subtotal = item.preco * item.quantidade;
            totalCompra += subtotal;

            const linhaItem = document.createElement("tr");
            linhaItem.innerHTML = `
                <td>${item.nome}</td>
                <td>${formatarMoeda(item.preco)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantidade}"
                    class="form-control w-50 mx-auto"
                    data-index="${index}">
                </td>
                <td>${formatarMoeda(subtotal)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}">Remover</button>
                </td>
            `;
            listaCarrinho.appendChild(linhaItem);
        });

        valorTotalElemento.textContent = formatarMoeda(totalCompra);
    };

    const removerItem = (index) => {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarCarrinho();
    };

    const atualizarQuantidade = (index, novaQtd) => {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho[index].quantidade = parseInt(novaQtd);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarCarrinho();
    };

    listaCarrinho.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-danger")) {
            const index = e.target.dataset.index;
            removerItem(index);
        }
    });

    listaCarrinho.addEventListener("change", (e) => {
        if (e.target.type === "number") {
            const index = e.target.dataset.index;
            const novaQtd = e.target.value;
            atualizarQuantidade(index, novaQtd);
        }
    });

    atualizarCarrinho();
});