var numero = 1  //let tem escopo global, de função e bloco.
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) //os valores podem coexistir pois não estão no mesmo escopo.

