//Objeto contendo os produtos para referencia do carrinho
const produtos = [
    {
        nome: 'Temaki',
        descricao: 'Arroz para Sushi (Shari), Salmão, Cream Cheese e Cebolinha',
        preco: 17.99,
        img: '/Assets/Imagens/Cardapio/Temaki.jpg'
    },{
        nome: 'Makimono',
        descricao: 'Arroz para Sushi (Shari), Pepino, Cenoura e Alga Nori',
        preco: 24.90,
        img: '/Assets/Imagens/Cardapio/Makimono.jpg'
    },{
        nome: 'Sushi',
        descricao: 'Arroz para Sushi (Shari) e Salmão',
        preco: 14.50,
        img: '/Assets/Imagens/Cardapio/Sushi.jpg'
    },{
        nome: 'Yakisoba',
        descricao: 'Macarrão para yakisoba, legumes, pedaços de carne e molho',
        preco: 37.40,
        img: '/Assets/Imagens/Cardapio/Yakisoba.png'
    },{
        nome: 'Sunumono',
        descricao: 'Salada japonesa com pepino agridoce, kani e molho',
        preco: 12.90,
        img: '/Assets/Imagens/Cardapio/Sunomono.jpg'
    },{
        nome: 'Hot Philadelphia',
        descricao: 'Arroz para Sushi (Shari), Salmão, Cream cheese, cebolinha (frito)',
        preco: 20.00,
        img: '/Assets/Imagens/Cardapio/Hot.jpg'
    }
]

// Carrega o carrinho do localStorage ou cria um novo vazio
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

//função para salvar as informações no local storage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

}

//função para adicioar itens ao carrinho
function adicionarAoCarrinho(index) {
    let nome = produtos[index].nome
    let descricao = produtos[index].descricao
    let imagem = produtos[index].img
    let preco = produtos[index].preco

    // Verifica se o produto já está no carrinho
    let produto = carrinho.find(p => p.nome === nome);

    if (produto) {
        produto.quantidade += 1; // aumenta a quantidade

    } else {
        carrinho.push({ nome, descricao, imagem, preco, quantidade: 1 });

    }

    salvarCarrinho();
    atualizarCarrinho();
}

//função para alterar quantidade
function alterarQuantidade(indice, quantidade) {
    if (quantidade <= 0) {
        carrinho.splice(indice, 1); // Remove o produto se quantidade <= 0

    } else {
        carrinho[indice].quantidade = quantidade;

    }

    salvarCarrinho();
    atualizarCarrinho();
}

//função que faz a adição do elemtento no DOM da pagina, deixando o carrinho dinamico
function atualizarCarrinho() {
    const carrinhoDiv = document.getElementById("carrinhoLista");
    const totalDiv = document.getElementById("carrinhoTotal");

    carrinhoDiv.innerHTML = ""; // Limpa o carrinho na tela

    let total = 0;

    if(carrinho.length != 0){
        document.getElementById('vazio').style.display = 'none'
        document.getElementById('cheio').style.display = 'flex'

        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement("div");

            const subtotal = item.preco * item.quantidade;
            total += subtotal;

            itemDiv.innerHTML = `
                <div class="card-carrinho">
                    <img class="main-img" src="${item.imagem}">
                    <div style="padding:16px; background-color: #F2F1E6; border-radius: 0 16px 16px 0; width: 100%;">
                        <h3>${item.nome}</h3>
                        <p>${item.descricao}</p>
                        <div class="d-flex justify-content-between">
                            <p class="price">R$${item.preco.toFixed(2)}</p>
                            <div class="d-flex" style="align-items: center; gap: 12px;">
                                <button onclick="alterarQuantidade(${index}, ${item.quantidade - 1})">-</button>
                                <p style="margin: unset;">${item.quantidade}</p>
                                <button onclick="alterarQuantidade(${index}, ${item.quantidade + 1})">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            carrinhoDiv.appendChild(itemDiv);
        });
    } else {
        document.getElementById('vazio').style.display = 'flex';
        document.getElementById('cheio').style.display = 'none';
    }

    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Atualiza o carrinho ao carregar a página
atualizarCarrinho();