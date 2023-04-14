//armazenando uma funçao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenadno em arrow
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

function teste() {   //não podemos colocar algo fora da function para imprimir valor ou adicionar
    var local = 123
    console.log(local)
 }
 teste()
