var numero1 = 4 //Acessivel globalmente
let numero2 = 5 //Acessivel somente no bloco
const numero3 = [6] // Pode ser atribuido somente uma vez, o valor pode mudar. Acessivel somente no bloco

numero3.push(7)

console.log(numero1)
console.log(numero2)
console.log(numero3)