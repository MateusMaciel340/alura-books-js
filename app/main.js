let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);
    exibirOsLivrosNaTela(livros);
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
            <div class="livros__card">
                <img src="${livro.imagem}" alt="${livro.alt}" title="${livro.alt}" class="livros__card-imagem"/>
                <h2 class="livros__card-titulo">${livro.titulo}</h2>
                <h3 class="livros__card-autor">${livro.autor}</h3>
                <h4 class="livros__card-preco">R$ ${livro.preco}</h4>

                <div class="livros__card-tipo-livros">
                    <a href="#" class="livros__card-tipo-livros-opcoes">${livro.categoria}</a>
                </div>
            </div>
        `;
    })
}