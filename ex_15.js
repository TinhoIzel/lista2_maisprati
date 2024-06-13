const prompt = require("prompt-sync")();

// EX_15 - Números pares e suas posições
console.log("Digitando 10 números e devolvendo os pares (e sua posição no vetor)");

let numeros = []
for (let i = 0; i < 10; i++)
    do numeros[i] = parseInt(prompt((i+1) +"º número: "));
    while (isNaN(numeros[i]));

console.log("\nNúmeros pares");
numeros.forEach((numero,posicao) => {(numero % 2 == 0) ? console.log(numero +" na posição "+ posicao): false})