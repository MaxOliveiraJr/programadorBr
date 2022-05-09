var nota1 = 8.0;
var nota2 = 1.0;

var media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log('Você passou com média ' + media);
} else {
    console.log('Sua nota é ' + media + ' não passou')
}

if (media >= 7) {

    conceito = 'Ótimo'

} else if (media >= 6.5) {

    conceito = 'Bom'

} else {

    conceito = 'Regular'
}

switch (conceito) {
    case 'ótimo':
        console.log('Parabêns')
        break;

    case 'Bom':
        console.log('Precisa melhorar')
        break;
    case 'Regular':
        console.log('Estude mais')
        break
    default:
        console.log('Erro')
}
