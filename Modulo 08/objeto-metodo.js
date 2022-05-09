var aluno = {
    nome: 'Max',
    notas: [5, 8],
    media: function(n1, n2){
        return (n1 + n2) / 2;
    }
}


console.log(aluno.nome)
console.log(aluno.media(aluno.notas[1], aluno.notas[0]))


var aluno1 = {
    nome: 'Oliveira',
    notas: [6, 8],
    media: function(){
        return (this.notas[0] + this.notas[1]) / 2;
    }
}

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[1], aluno1.notas[0]))

var calcMedia = function(){
    return (this.notas[0] + this.notas[1]) / 2;
}


var aluno2 = {
    nome: 'Junior',
    notas: [6, 9],
    media: calcMedia
}

console.log(aluno2.nome)
console.log(aluno2.media(aluno2.notas[1], aluno2.notas[0]))