var alunos = ["igor","jose"]

console.log(alunos[0])

var aluno = {
    nome: "Max",
    notas: [7.5, 5.0]
}


console.log(aluno.nome)
console.log(aluno['notas'][1])

aluno.matriculo = 10155
aluno["sobrenome"] = "Oliveira"

ultimoNome = "Junior"


aluno["ultimoNome"] = ultimoNome 

console.log(aluno)


var aluno2 = new Object();

aluno2.nomeCompleto = "Max Oliveira"
aluno2.funcao = function media(){}

console.log(aluno2)


