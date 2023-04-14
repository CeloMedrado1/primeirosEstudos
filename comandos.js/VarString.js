const escola = "Mari1 José";

console.log(escola.charAt(4)); /* O ´charAt()´ é utilizaddo para selecionar uma 
                                  caracterie da string.*/
console.log(escola.substring(1)); /* O ´substring()´ ou 'substring(0, 3)' 
                                  é utilizado para mostrar as caracteries 
                                  depois ou até o indicie que você
                                  escolher.*/
console.log('Escola '.concat(escola).concat("!")); /* É utilizado para acrescen-
                                                      tar strings a variável, ou
                                                      concatenar.*/
console.log('Marcelo,Rhael,Bassalo'.split(',')); /* Utilizado para quebrar elementos.*/

const nome = 'Rebeca';
const concatenacao = 'olá ' + nome + '!';    
const template = `     
    olá   
    ${nome}!`    
console.log(concatenacao, template); /* Para colocar uma funçaõ dentro de uma
                                      string se usa o '$ {}'.
                                      com o 'template' você consegue fazer quebra
                                      de linha com mais facilidade.*/
console.log(`1 + 1 = ${1 + 1}`);     /* Um exemplo de como utilizar '$'.
                                      Lembrando que para utilizar é
                                      necessário utilizar o acento como
                                      áspas.


