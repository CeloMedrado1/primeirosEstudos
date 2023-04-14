const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //o this acesso o atributo principal(saudacao) do obj(pessoa).
    }
} //se não usar o this, vai pegar todo o bloco da função
pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //this sempre sera oq vc passou para o bind
falarDePessoa() 

