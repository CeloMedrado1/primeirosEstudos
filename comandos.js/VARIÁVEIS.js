/*   VARIÁVEIS, INTEIROS, STRING.

   console.log("caneta");
   console.log(10); ----> são valores literais, definido diretamente.
   console.log(6.4);
   console.log(1.5);
   console.log(7.9);

   Variáveis são dados que criamos para poder armazenar informações, 
depois podemos referenciar esse epaço de memória pelo nome que você deu.

    EX: var nome = "Caneta";
       var quantidade = 10;
       var preco = 6.4;
       var imposto = 1.5;
       var precoFinal = preco + imposto;

       console.log(precoFinal); logo ira aparecer a soma do preco + imposto, pois esses foram valores que eu defini nas variáveis.
       console.log(quantidade); logo o que ira aparecer no terminal é o 10, pois você referenciou a quantidade a esse número.
       
       Quando quiser colocar uma string e logo depois a variável se coloca o "+".

    EX: var paulinho = "nada";

        console.log("paulinho é " + paulinho + " mas é alto");

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

      Nas variéveis de número podemos utilizar:
      variável.tofixed(algum numero);
      para limitar a contagem de decimais.