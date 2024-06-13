const prompt = require("prompt-sync")();

// EX_17 - Vetores de posição relacionadas - nome e idade
console.log("2 vetores, nome e idade, relacionados!");

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    console.log("\nPessoa "+ (i+1));
    nomes[i] = prompt("Digite o nome: ");
    idades[i] = prompt("Digite a idade: ");
}

console.log("Pessoas menores de idade");
let i = 1;
for (let posicao in idades){
    if (idades[posicao] < 18){
        console.log("\nPessoa "+ i++);
        console.log("Nome: "+ nomes[posicao] +"\nIdade: "+ idades[posicao]);
    }
}