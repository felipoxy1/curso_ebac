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

const funcionario1 = new Funcionario("Orlando", "Gerente", 5000)
const funcionario2 = new Funcionario("Davi", "Lavador", 1600)

funcionario2.setSalario(2500)
funcionario2.setCargo("sub-gerente")

console.log(funcionario1.nome, funcionario1.getCargo() ,funcionario1.getSalario())
console.log(funcionario2.nome, funcionario2.getCargo() ,funcionario2.getSalario())

