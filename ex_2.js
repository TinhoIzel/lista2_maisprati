const prompt = require("prompt-sync")();

// EX_2 - Multa por velocidade acima do limite
console.log("Checagem de multa pela velocidade do carro");
let velocidade = prompt("Digite a velocidade do carro: ");

let velocidade_limite = 80;
let acima_do_limite = velocidade - velocidade_limite;

if(acima_do_limite <= 0)
    console.log("Você está dentro do limite. Nenhuma multa será dada!");
else {
    let multa = acima_do_limite * 5; // 5 reais por km acima do limite
    console.log("\nVocê está acima do limite!!");
    console.log("Sua multa será de R$ "+ multa.toFixed(2));
}
