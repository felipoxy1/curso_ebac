const alunos = [
    {nome: 'Luiz', nota : 5.9},
    {nome: 'Ruan', nota : 8},
    {nome: 'Paulo', nota : 6},
    {nome: 'Pedro', nota : 7},
    {nome: 'Lucas', nota: 4},
    {nome: 'Rafael', nota: 2}
]

const alunosAprovados = (alunos) => alunos.filter(aluno => aluno.nota >= 6)
const alunosReprovados = (alunos) => alunos.filter(aluno => aluno.nota < 6)

console.log(alunosAprovados(alunos))
console.log(alunosReprovados(alunos))
