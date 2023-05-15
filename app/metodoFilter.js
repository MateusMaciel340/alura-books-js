const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria == 'livros-disponiveis' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);

    if (categoria == 'livros-disponiveis') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorDeLivrosDisponiveis.innerHTML = `
    <div class="aviso-livros__titulo">
        <h2>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></h2>
    </div>
    `;
}