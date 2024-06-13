const prompt = require("prompt-sync")();

// EX_14 - Nomes e mostrando ao contrário
console.log("Armazenando 7 nomes e os mostrandos ao contrário");

let nomes = [];
for (let i = 1; i <= 7; i++)
    nomes.push(prompt("Digite o "+ i +"º nome: "));

nomes = nomes.reverse()
console.log("Mostrando os nomes ao contrário: ");
for (let nome of nomes)
    console.log(nome);