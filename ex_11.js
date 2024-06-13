const prompt = require("prompt-sync")();

// EX_11 - Progressão Aritmética
console.log("Progressão aritmética dado um termo inicial e a razão");
let primeiro = parseInt(prompt("Digite o primeiro termo: "));
let razao = parseInt(prompt("Informe a razão: "));

let soma = primeiro;
for (let i = 0; i < 10; i++){
    console.log((1+i) +"º termo: "+ (primeiro + i * razao));
    soma += i * razao;
}

console.log("Soma dos termos: "+ soma);