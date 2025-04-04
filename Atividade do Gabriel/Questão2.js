let lista = ["Benjamim", "David", "Alana", "Anne", "Maria"];
lista.unshift('Gabriel')

function deletar() {
    const index = lista.indexOf('Benjamim');
    if (index > -1) {
        lista.splice(index, 1)
    }
}

console.log(deletar())
console.log(lista)