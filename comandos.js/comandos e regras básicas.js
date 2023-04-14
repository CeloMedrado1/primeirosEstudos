/*console.log é usado para exibir algo no terminal.
EX: console.log("hello world");
*/

/* BLOCOS DE CÓDIGO E SENTENÇAS.    

   Dentro do bloco de código(que são formados apartir de chaves"{}")
o papel do bloco é agrupar sentenças de códigos para fazer determinada coisa.

EX: {   }

   Existem sentenças de códigos que saõ formadas a partir do";",  que é basicamente
uma linha.

EX: {
    console.log("oi celo");
}

   Dentro do bloco de códigos podem existir outros blocos de códigos,
porém os blocos internos devem ser fechados dentro do bloco externo.

EX: {
    {

    }
}

   No caso podemos usar blocos que só se realizarão caso alguma  condição seja feita.
exemplo do if (){
} 
ou seja, if quer dizer caso, então caso certa ação aconteção o bloco após o if ira codar.
   Códigos se organizam em pastas, arquivos(exemplo: projeto.js, pois é um aqquivo em java.),
   sentenças e blocos.

 /*   VARIÁVEIS, INTEIROS, STRING E CONSTANTES.

   console.log("caneta");
   console.log(10); ----> são valores literais, definido diretamente.
   console.log(6.4);
   console.log(1.5);
   console.log(7.9);

   Variáveis são dados que criamos para poder armazenar informações, depois podemos referenciar esse epaço de memória pelo nome que você deu.

    EX: var nome = "Caneta";
       var quantidade = 10;
       var preco = 6.4;
       var imposto = 1.5;
       var precoFinal = preco + imposto;

       console.log(precoFinal); logo ira aparecer a soma do preco + imposto, pois esses foram valores que eu defini nas variáveis.
       console.log(quantidade); logo o que ira aparecer no terminal é o 10, pois você referenciou a quantidade a esse número.
       
       Quando quiser colocar uma string e logo depois a variável se coloca o "+".

    EX: var paulinho = "nada";

        console.log("paulinho é " + paulinho + " mas é cherozo");

        Quando for string a variável deve ser colocada entre "".
     quando for em inteiros pode ser colocada solta.

    EX: var nome = "caneta"
        var desconto = 12.

      (a variável let é apenas dentro de blocos).

      *typeof mostra o tipo da variável.

         Sempre quando  for trabalhar com numeros interiros, vão ser números.
         Definimos uma string usando aspas duplas "" ou aspas simples´´.
         Existem três tipos mais comuns de valores dentro do javascript, são os números(inteiros)
      string que são caractéries colocadas dentro das aspas duplas
      temos a true ou false.

      Devemos evitar usar nomes genéricos e estranhos nas variáveis.

      CONSTANTE

      Ao decorrer dos códigos nos podemos acrescentar e diminuir valor as variávaeis.
      
    EX: let a = 3;
      a = a + 10;
      console.log(a);

      no teriminal ira aparecer 13, pois você somou um valora a sua variável.

      Quando apresentamos uma variável con const ela é constante e não pode ser modificada.
      
    EX: const a = 3;
      a = a + 10;
      console.log(a);

      Ira aparecer no terminal o número 10, que você atribuiu no início
     a sua variável constante(não pode ser mudada). é melhor atribuirmos
     mais variáveis contantes, se realmente precisarmos mudar, então 
     trocamos para let.

      Temp

      Podemos atribuir uma variável temporária.

    EX: let a = 7;
       let b = 94;

       let temp = a;
       a = b;
       b = temp;

       console.log(a);
       console.log(b);

       Então os resuiltados trocaram.

       podemos trocar variáveis também dessa forma
    EX: let a = 10
       let b = 2

       [a, b] = [b, a];

       então os valores se invertem, lembrando que elas podem ser modificadas
    por serem variáveis let e não const.


