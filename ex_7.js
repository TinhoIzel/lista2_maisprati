const prompt = require("prompt-sync")();

// EX_7 - Aluguel de carros
console.log("Cálculo do preço do aluguel de carros");
console.log("Tipos oferecidos\n - Popular\n - Luxo");

let tipo = undefined
do {
    tipo = prompt("Qual o tipo do carro alugado (escreva corretamente): ").toLowerCase();
} while (!['popular','luxo'].includes(tipo));

let dias = prompt("Quantos dias durou o aluguel? ");
let km = prompt("Quantos quilômetros foram percorridos? ");

const popular = (km,dias) => {
    if (km <= 100)
        return `A aluguel do carro de luxo, que durou ${dias} dias, será de R$ ${(km * 0.2).toFixed(2)}`
    else
        return `A aluguel do carro de luxo, que durou ${dias} dias, será de R$ ${(km * 0.1).toFixed(2)}`
}

const luxo = (km,dias) => {
    if (km <= 200)
        return `A aluguel do carro de luxo, que durou ${dias} dias, será de R$ ${(km * 0.3).toFixed(2)}`
    else
        return `A aluguel do carro de luxo, que durou ${dias} dias, será de R$ ${(km * 0.25).toFixed(2)}`
}

switch (tipo){
    case 'popular':
        console.log(popular(km,dias));
        break;
    case 'luxo':
        console.log(luxo(km,dias));
        break;
}