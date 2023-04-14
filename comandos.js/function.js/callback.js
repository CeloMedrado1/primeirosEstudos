const fabricantes = [' mercedes',' audio',' fiat'] //callback é passar uma função para outra função e quando acontecer ela sera chamada de volta

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
}
fabricantes.forEach(imprimir) //'para cada elemento que achar dentro do array ele vai chamar de volta a função'

