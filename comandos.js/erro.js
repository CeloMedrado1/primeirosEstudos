function tratarErroELancar(erro) {
   //throw new Error('... o erro foi recebido') // aqui é uma mensagem para ser passada, aqui o erro é recebido.
   //throw 10
   //throw true
   //throw é utilizado para colocar a mensagem do erro
}

function imprimirNomegritado(obj) {
    try { //é um bloco que dentro dele voce vai colocar algo que possa gerar um erro.
        console.log(obj.name.toUpperCase() + '!!!' )
    } catch (e) { //se quiser tratar o erro voce coloca esse bloco catch associado, se tiver o erro vai ser pego pelo catch e pode ser tratado.
        tratarErroELancar(e)
    } finally {
        console.log('final') //mesmo que ocorra erro ou não vai chamar o finally.
    }
}
const obj = { nome: 'Roberto' }
imprimirNomegritado(obj)