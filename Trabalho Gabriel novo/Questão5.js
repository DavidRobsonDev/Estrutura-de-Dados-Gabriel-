let eventos = ["08:00 - Reunião","10:00 - Aula","14:00 - Treinamento"];
function inserirEvento(posicao, evento)
{
    eventos.splice(posicao,0, evento)
}

function removerEvento(Evento, posicao) {
    eventos.indexOf(Evento)
    if (posicao !== -1){
    eventos.splice(posicao, 1)
    }
}
console.log(eventos)
removerEvento("08:00 - Reunião")
console.log(eventos)
inserirEvento(2)
console.log(eventos)
