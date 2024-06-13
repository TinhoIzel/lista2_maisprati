const prompt = require("prompt-sync")();

// EX_10 - Vários números
console.log("Armazenando e trabalhando com vários números");

let maior = undefined;
let menor = undefined;
let soma = 0;
let total = 0; // para a média

let primeiro = true;
do {
    let numero;
    console.log();
    do 
        numero = parseFloat(prompt("Digite o número: "));
    while (isNaN(numero))
    
    if (primeiro) {
        maior = numero;
        menor = numero;
        primeiro = false;
    }

    if (numero > maior)
        maior = numero;

    if (numero < menor)
        menor = numero;

    soma += numero;
    total ++;
    
    do {
        continuar = prompt("Continuar (s/n): ").toLowerCase();
    } while (!['s','n'].includes(continuar));
    continuar = continuar == 's' ? true : false;
} while (continuar);

console.log("\nRelatório final");
console.log(`Maior: ${maior}\nMenor: ${menor}\nSomatório: ${soma}\nMédia: ${soma/total}`);