const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) { //i é indicie de um elemento
        notasBaixas1.push(notas[i]) //push para puxar de um array

    }

}

console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
  //filter para filtrar em cima de um determinado critério
  console.log(notasBaixas2)

  const notasBaixas3 = notas.filter(nota => nota < 7)
  console.log(notasBaixas3)