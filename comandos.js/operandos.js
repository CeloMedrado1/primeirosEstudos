/* v e v -> true / pois são iguais
v e f -> false / pois são diferentes
f e ? -> false / com o 'e' todos os operandos tem que ser verdadeiros para que a operação
seja verdadeira, basta 1 ser falso que a operação fica falsa.
//para uma operação de 'e' é utilizado no java o '&&'

v ou ? -> true / com o 'ou' eu não preciso analisar o segundo operando, pois apartir
do primeiro podemos inferir a resposta.
f ou v -> true / basta 1 dar verdadeiro na operação com ou que ela vira verdadeira.
f ou f -> false // 'ou' em java utiliza dois pipes ||

v xor v -> false / o 'xor' os dois obrigatoriamente tem que ser diferentes para ser
verdadeiro.
v xor f -> true   
f xor v -> true    
f xor f -> false

!v -> f / '!' aqui é a negação lógica, onde quando colocado o valor é mudado.
!f -> v */ 

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2 //aqui se os dois trabalhos derem certo irei comprar a tv.(no caso se os dois forem verdadeiros)
    const comprartv32 = trabalho1 != trabalho2 //aqui o '!=' significa diferente.
    const manterSaudavel = !comprarSorvete // vai ser a negação lógica de tomarsorvete

    return { comprarSorvete, comprarTv50, comprartv32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))












