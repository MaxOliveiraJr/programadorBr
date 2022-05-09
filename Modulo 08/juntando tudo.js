

// Lista com nome do aluno separado pela nota 1, nota 2 e média. Um status de aprovado ou reprovado

var nomes = ["Igor","José","Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];


function media(n1, n2){
    return (n1 + n2) / 2
}


function status(media){
    if(media > 7){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

for(index in nomes){

    nome = nomes[index]
    av1 = notasA[index]
    av2 = notasB[index]
    m = media(av1, av2)


    console.log(nome +  " AV1: " + av1 + " AV2: "+ av2 + " Média: " + m + ' Status: ' + status(m))
}