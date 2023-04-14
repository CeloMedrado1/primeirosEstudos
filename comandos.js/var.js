function teste() {   //não podemos colocar algo fora da function para imprimir valor ou adicionar
   var local = 123  //essa variável só é visivel dentro dessa function.
   console.log(local)  //evite usar var globais.
}
teste()

var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

















































