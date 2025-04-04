let chamada = ["Pyetro","Felipe","Benjamim"];
function inserirAluno(posicao, aluno)
{
    chamada.splice(posicao,0, aluno)
}

function removerAluno(aluno, posicao) {
    chamada.indexOf(aluno)
    if (posicao != -1){
    chamada.splice(posicao, 1)
    }
}
console.log(chamada)
removerAluno("Felipe")
console.log(chamada)
inserirAluno(2, "Renan")
console.log(chamada)