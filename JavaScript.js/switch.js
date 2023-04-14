var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sábado
*/

switch (diaSem) {
    case 0: 
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 1:
        console.log('Terça')
        break
    case 1:
        console.log('Quarta')
        break
    case 1:
        console.log('Quinta')
        break
    case 1:
        console.log('Sexta')
        break
    case 1:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido!')
        break//É muito importante a utilização do break para quebra do código.
} //É melhor usar o switch para aninhamentos mais longos.