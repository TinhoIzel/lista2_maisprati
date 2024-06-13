const prompt = require("prompt-sync")();

// EX_3 - Cálculo do preço da viagem para o passageiro
console.log("Cálculo do preço da passagem");
let kilometros = prompt("Quantos quilômetros você deseja percorrer? ");

let preco_por_km = 0;
if (kilometros <= 200)
    preco_por_km = 0.5;
else
    preco_por_km = 0.45;

let passagem = kilometros * preco_por_km;
console.log("O preço da passagem de "+ kilometros +" Km será de R$ "+ passagem.toFixed(2));
