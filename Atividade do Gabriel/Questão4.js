let videos = [1, 2, 3];
function botao() {
    if (videos.length > 0) {
        let removido = videos.pop();
        console.log("Botão pressionado para o video para remover:", removido);  
    } else {
        console.log("Nenhum video disponivel para remover.");
    }
}

botao (4)