let biblioteca = ["As cronicas de Narnia - CS. Lewis", "Senhor dos aneis - JR. Tolkien", "Sherlock Holmes - Arthur Connan"]

function verificarLivro(livro, pos) {
       pos = biblioteca.indexOf(livro)
    if (pos != -1) {
        console.log(`A posição é ${pos}`);
    }
    else{
        console.log("Livro não encontrado")
    }
}

verificarLivro("Madagascar");

verificarLivro("As cronicas de Narnia - CS. Lewis")