let contatos = ['Pyetro', 'David Senku: +55 44 99901-1369', 'Benjamim Arola']
let contato = encontrarContato(contatos);

function encontrarContato(contatos) {
    return contatos.find(contato => contato.length > 10);
}

console.log(contato);
