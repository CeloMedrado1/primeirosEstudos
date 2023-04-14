// O while é focado em repedições normalmente sem vezes determinadas.
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {                   // Enquanto a expressao for verdadeira continue executando o laço.
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while(opcao != -1)
console.log('Até a proxima')