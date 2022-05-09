function saudacao(){
    return 'Olá Mundo';
}

var s = saudacao();

console.log(s)



var a = saudacao;

console.log(a())

// Função Anonima

var media = function (n1, n2){
    return (n1 + n2) / 2
}

console.log(media(5,6))


m = media

console.log(m(6,9))


var soma = (n1, n2) =>{
    return n1 + n2
}


console.log(soma(5,58))