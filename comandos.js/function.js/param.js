//estratégia 1 de gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1 // || é ou
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3))
 //como nenhum valor foi passado ele pegou o valor dos || q era 1.

 //estrategia 2, 3 e 4 ára gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2())

//valor padrao do es2015
function soma3( a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3))