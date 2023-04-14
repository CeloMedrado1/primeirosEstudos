 /* if (condição) {
 true 
} else {     
 false
}
* If significa 'se'.
* Else significa 'se não'.
* O bloco de if ira acontecer caso o valor seja verdadeiro.
* O bloco do else ira ocorrer caso o valor seja falso. 
*/

var vel = 90
var lim = 80

    console.log(`Seu carro está a ${vel}km/h`)
if (vel <= lim) {
    console.log('Velocidade permitida!')
} else { 
    vel >= lim 
    console.log('Limite de velocidade exedido')
}

var pais = 'EUA'
console.log(`Vivendo em ${pais}`)
if (pais == 'Brasil') { // pode usar != também, que significa estrangeiro
    console.log('Você é Brasileiro')
} else {
    console.log('Você é estrangeiro')
}