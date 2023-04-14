function fun1() {} //mais tradicional

const fun2 = function () {} //para chamar esse funcao deve invocar com os parenteses

const array = [function (a,b) { return a + b }, fun1, fun2]// usando array
console.log(array[0](2, 3)) 

const obj = {}
obj.falar = function() { return 'opa' } //em objeto
console.log(obj.falar()) //para invocar a funcao coloca parenteses

function run(fun) { //funcao como parametro
    fun()
}
run(function () {console.log('executando... ')})

function soma(a, b) {
    console.log(a + b)
    return (a, b)
}
soma(3, 4)
