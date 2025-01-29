function Pessoa(nome) {
    this.nome = nome
}

function Funcionario(nome, cargo, salario){
    Pessoa.call(this, nome)

    let _cargo = cargo
    let _salario = salario

    this.getCargo = function(){
        return _cargo
    }
    this.getSalario = function(){
        return _salario
    }

    this.setSalario = function(valor){
        if(typeof valor === 'number' && valor !== _salario){
            _salario = valor
        } else {
            throw Error("Precisa ser um numero ou o valor nao pode ser o mesmo que o atual")
        }
        
    }

    this.setCargo = function(novoCargo){
        if(novoCargo == _cargo){
            throw Error('O cargo nao pode ser o mesmo que o atual')
        } else {
            _cargo = novoCargo
        }
    }
}

function Cliente(nome, carro) {
    Pessoa.call(this, nome)

    let _carro = carro

    this.getCarro = function(){
        return _carro
    }
}

const funcionario1 = new Funcionario("Orlando", "Gerente", 5000)
const funcionario2 = new Funcionario("Davi", "Lavador", 1600)
const funcionario3 = new Funcionario("Pedro","Lavador", 1600)

const cliente1 = new Cliente("Ruan", "HB20")
const cliente2 = new Cliente("Orlando", "Palio")
const cliente3 = new Cliente("Luiz", "Argo")

funcionario2.setSalario(2500)
funcionario2.setCargo("sub-gerente")

console.log(funcionario1.nome, funcionario1.getCargo() ,funcionario1.getSalario())
console.log(funcionario2.nome, funcionario2.getCargo() ,funcionario2.getSalario())
console.log(funcionario3.nome, funcionario3.getCargo() ,funcionario3.getSalario())

console.log(cliente1.nome, cliente1.getCarro())
console.log(cliente2.nome, cliente2.getCarro())
console.log(cliente3.nome, cliente3.getCarro())


