// Função assincrona para injetar Header e Footer a partir da ref do id 
async function loadHTML(id, file) {
    try {
        const response = await fetch(file); //capta o arquivo html por requisição local
        if (!response.ok) throw new Error('Erro ao carregar ' + file);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;

    } catch (e) {
        console.error(e);

    }

    // função para chamar o carrinho somente apos a execução do header
    if(id == 'header'){
        loadHTML('carrinho', '/Estrutura/Carrinho/carrinho.html'); //Invocação do carrinho
    }

    //função para executar o script do carrinho
    if (id === 'carrinho') {
        const script = document.createElement('script');
        script.src = '/Estrutura/Carrinho/carrinho.js';
        document.body.appendChild(script);
    }
}

loadHTML('header', '/Estrutura/Components/header.html'); //Invocação do Header
loadHTML('footer', '/Estrutura/Components/footer.html'); //Invocação do Footer