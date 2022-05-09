var a = {
    nome: 'Max',
    sobrenome: 'Olivera'
}

console.log(a)


function obj(n,s){
    return{
        nome: n, 
        sobrenome:s
    }
}

var b = obj('Max','Junior')

console.log(b)

function obj2(n, s){
    this.nome = n;
    this.sobrenome = s;
}


c = new obj('Oliveira','Max');

console.log(c)