function soma() {
    let soma = 0
    for(i in  arguments) { //arguments tem todos os argumentos que foram passados para a função
        soma += arguments[1]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3)) // o resultado vai somar tudo