let eventos = ["08:00 - Reunião","10:00 - Aula","14:00 - Treinamento"];
function inserirEvento(posicao, evento)
{
    eventos.splice(posicao,0, evento)
}

function removerEvento(Evento, pos) {
    pos = eventos.indexOf(Evento)
    if (pos != -1){
    eventos.splice(pos, 1)
    }
}
console.log(eventos)
removerEvento("08:00 - Reunião")
console.log(eventos)
inserirEvento(2, "15:00 Ir no restaurante")
console.log(eventos)