
// let soma = require("./soma");
// let mult = require("./mult");


let calc = require("./calc");

var args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = '';

if (args[0] == 's') {
    c = calc.soma(a, b);
} else if (args[0] == 'm') {
    c = calc.mult(a, b);
} else {
    c = 'opção inválida';
}

console.log(c);


