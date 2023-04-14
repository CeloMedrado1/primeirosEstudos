/*operadores:
(soma) 5 + 2 = 7
(subtração) 5 - 2 = 3
(multiplicação) 5 * 2 = 10
(divisão) 5 / 2 = 2,5
(divisão inteira) 5 % 2 = 1
(potência) 5 ** 2 = 25 */

a = 5 + 2
console.log(a)

b = 9 - 2
console.log(b)

c = 3 * 3
console.log(c)

d = 5 / 2
console.log(d)

e = 5 % 2
console.log(e)

f = 5 ** 2
console.log(f)

g = (5 + 3) / 2
console.log(g)

/*Ordem de precedência dos operadores 
1 - ()
2 - **
3 - * / %
4 - + - */

/*Adicionando valor simplificado
var n = 3
n = n + 4 fica n += 4 que é igual a 7, pois 3 + 4 = 7*/

/*incremento 
var x = 5
x = x + 1 fica x += 1 incrementando fica x++
x = x - 1 fica x -= 1 incrementando fica x-- */

var w = 5
w = w + 1
w -= 1
w++
console.log(w)

//Operadores Relacionais
/*  5 > 2 = true 5 é menor do que 2 ?
    7 < 4 = false 7 é menor do que 4 ?
    8 <= 8 = true 8 é menor ou igual a 8 ?
    9 <= 7 = false 9 é menor ou igual a 7 ?
    5 == 5 = true 5 é igual a 5?
    4 != 3 = true 4 é diferente de 3? 
    5 === '5' = false  5 é estritamente igual a 5? (não pois o segundo esté em tipo diferente)*/

var op = 5 > 2 // true
console.log(op)

var op2 = 'Java' == 'Java' //true
console.log(op2)

var op3 = 5 === '5' //false, pois são de tipos diferentes
console.log(op3)

//Operadores lógicos
/*  '!' = negação, ele é tratado como operador unário:
    Então de !false = true, e visse versa.
    '&&' = conjunção, basicamente o 'e' da programação:
    Então só ira satisfazer se ambos forem true.
    '||' = dijunção, basicamente o 'ou' da programação:
    Então ira satisfazer caso uma das duas opções seja true.*/
    //Ordem dos operadores: !, &&, ||.
var casa = true && true //true, pois deve haver dois elementos satisfazendo o 'e'.
console.log(casa)
//ex: salário > 1550 && sexo != 'M', o salário está acima de 1500 e não é homem?
//ex2: idade >= 15 && idade <=17, a idade está entre 15 e 17?

var vermelha = true
var preta = true
var canetas = vermelha || preta //true, pois satisfazem o requerimento de ser um ou outro.
console.log(canetas)
//ex: estado == 'RJ' || estado == 'SP', o estado é RJ ou SP?

//Operador ternário
/*  '?',':' no operador ternário ambos aparecem na mesma expressão.
    teste ? true : false
    ex: média >= 7 ? 'Aprovado' : 'Reprovado' */
var media = 6
console.log(media > 4? 'aprovado' : 'Reprovado') //se a media for menor do que 4 aprovado caso não reprovado

var x = 8

var res = x % 2 == 0? 5:8 //8 dividido 2 é igual a 0? se não 5 se for 8
console.log(res)

var idade = 19

var r = idade >= 18? 'Maior' : 'Menor' //a var 'r' vai receber 'maior' ou 'menor', vai depender se a idade é maior ou igual a 18
console.log(r)






    


