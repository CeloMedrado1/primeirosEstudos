let dobro = function (a) {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(6))

let ola = function() {
    return 'olá'
}

ola = () => 'olá'
console.log(ola())

function people() {
    this.idade = 0

    setInter(() => {
    console.log(this.idade)
    }, 1)                   
}
new people

