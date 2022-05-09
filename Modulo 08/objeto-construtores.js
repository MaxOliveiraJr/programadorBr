

var calcMedia = function(){
    return (this.nota1 + this.nota2)  / 2
}

var turma = [
    {
        nome:'igor',
        nota1: 9,
        nota2: 10,
        media: calcMedia
    }, 
    {
        nome:'João',
        nota1: 9,
        nota2: 10,
        media: calcMedia
    }
]

var aluno = turma[0];
console.log(aluno)
console.log(aluno.media());

function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2
        }
        
    }
}


alunos2 = [
    criarAluno('João',5,6),
    criarAluno('Max',10,5)
]

console.log(alunos2[1].media())


function construtor(nome, n1, n2){
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = function media(){
        return (this.nota1 + this.nota2) / 2
    }
}


aluno4 = new construtor('Max', 10, 8)

console.log(aluno4.media())