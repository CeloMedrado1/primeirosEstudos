const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //se for verdadeiro retorna ao aprovado.
//quando forem multiplos parametros fica entre parenteses. parametro vem depois do '='.
console.log(resultado(7.1))
console.log(resultado(6.7))

//se quiser que seja uma função arrow com corpo

/*const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}*/
