

var alunos = new Array('Max','Jose','Igor','Jorge');

console.log(alunos[0])

var alunos2 = ['Igor','Jose','Marcos','Mariana'];

console.log(alunos)
console.log(alunos.length)

for(i = 0; i < alunos.length; i++){
   console.log(alunos[i])
}
console.log('----------')
for(var aluno of alunos){
    console.log(aluno)
}

console.log('----------')

for(var i in alunos){
    console.log(alunos[i])
}

