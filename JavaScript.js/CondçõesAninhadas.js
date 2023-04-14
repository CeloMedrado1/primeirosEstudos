//CONDIÇÕES ANINHADAS//

console.log('||||||||EXERCÍCIO2 1||||||||') 
var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

//EXERCÍCIO 2//

console.log('||||||||EXERCÍCIO2 2||||||||') 
var HoraAtual = new Date()
var hora = HoraAtual.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

