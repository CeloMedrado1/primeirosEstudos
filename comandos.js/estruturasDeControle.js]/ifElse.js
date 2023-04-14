const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Não foi aprovado Nota: ' + nota)
    }
}
imprimirResultado(5)
imprimirResultado(10)
const paciente = {
    nome: 'Angela',
    idade: 43,
    peso: 64
}
console.log(paciente)

const relatorio = function(nota) {
    if(nota == 0) {
        console.log('permitido')
    } else {
        console.log('Não permitido')
    }
}
relatorio(2)
