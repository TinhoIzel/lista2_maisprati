const prompt = require("prompt-sync")();

// EX_8 - Programa de saúde = dinheiro
console.log("Cálculo de ganhos por atividade física");

let horas = Math.floor(prompt("Digite quantas horas de exercício físico você fez no mês: "));
let texto = 'Os seus ganhos são de R$'

if (horas <= 10)
    console.log(texto, (horas * 2 * 0.05));
else if (horas <= 20)
    console.log(texto, (horas * 5 * 0.05));
else
    console.log(texto, (horas * 10 * 0.05));