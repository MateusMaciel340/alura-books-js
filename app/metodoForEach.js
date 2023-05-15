const elementoParaInserirLivros = document.getElementById('livros');

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = '';
    listaDeLivros.forEach(livro => {

        // let disponibilidade = verificarDisponibilidadeDoLivro(livro);
        let disponibilidade = livro.quantidade > 0 ? 'livros__card-imagem' : 'livros__card-imagem indisponivel';

        elementoParaInserirLivros.innerHTML += `
            <div class="livros__card">
                <img src="${livro.imagem}" alt="${livro.alt}" title="${livro.alt}" class="${disponibilidade}"/>
                <h2 class="livros__card-titulo">${livro.titulo}</h2>
                <h3 class="livros__card-autor">${livro.autor}</h3>
                <h4 class="livros__card-preco">R$ ${livro.preco.toFixed(2)}</h4>

                <div class="livros__card-tipo-livros">
                    <a href="#" class="livros__card-tipo-livros-opcoes">${livro.categoria}</a>
                </div>
            </div>
        `;
    })
}

/* function verificarDisponibilidadeDoLivro(livro) {
    if (livro.quantidade > 0) {
        return 'livros__card-imagem';
    } else {
        return 'livros__card-imagem indisponivel';
    }
} */