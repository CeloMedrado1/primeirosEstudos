const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operação = soma) {
    console.log(operação(a, b))
}

imprimirResultado (3, 4)
const pessoa = {
    falar: function () {
        console.log('oi mano')
    }
}

pessoa.falar()