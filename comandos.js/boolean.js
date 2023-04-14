let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // Quando utiliza a exclamação estamos transformando esse
                       // valor em falso, já exclamação duas vezes vira verdadeiro
//os falsos

console.log(!!0);
console.log(!!''); // se estamos em uma situação de se o nome está vazio ou não
console.log(!!NaN);// podemos passar uma string, se tiver vazia é false, se tiver 
console.log(!!null);// preenchido é true.
console.log(undefined);

//exemplo
let nome = ''
console.log(nome || 'Desconhecido');  // o || significa caso, então se a pessoa
                                      // nao colocou o nome ira imprimir desconhecido.
                                      // seria algo como caso isso aqui não esteja
                                      // valido use essa informação.


