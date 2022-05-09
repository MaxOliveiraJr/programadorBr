// Cada pessoa come em média 400 Gramas de Carne, + de 6 horas de evendo 650gramas
//Cerveja 1200 ml por pessoa + de 6 horas 2000ml
//refri e agua 1000 ml + 6horas 1500ml

// crianças valem por 0,5


let inputAdultos= document.getElementById('adulto');
let inputCriancas= document.getElementById('criancas');
let inputDuracao= document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos + (cervejaPP(duracao) / 2 * criancas);
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2L de Bebidas</p>`
}

function carnePP(duracao){
    if(duracao >= 6 ){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}