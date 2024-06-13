const prompt = require('prompt-sync')();

// EX_32 - Matriz 3x3, diagonais, multiplicando..
console.log("Lendo 30 números, separando em impar de par, e a cada 5 mostrar e limpar o vetor");

let numero;
let vetorPares = [];
let vetorImpares = [];

let posicaoPar = 0;
let posicaoImpar = 0;

for (let i = 0; i < 30; i++) {
    numero = parseInt(prompt("Digite o valor do "+ (i+1) +"º número: "));

    if (numero % 2 == 0){
        vetorPares[posicaoPar] = numero;
        posicaoPar++;
        if (vetorPares.length == 5){
            console.log("Vetor par cheio! - "+ vetorPares);
            vetorPares = [];
            posicaoPar = 0;
        }
    } else {
        vetorImpares[posicaoImpar] = numero;
        posicaoImpar++;
        if (vetorImpares.length == 5){
            console.log("Vetor ímpar cheio! - "+ vetorImpares);
            vetorImpares = [];
            posicaoImpar = 0;
        }
    }
}

console.log("Conteúdo dos vetores: ");
console.log("Vetor par: "+ vetorPares);
console.log("Vetor ímpar: "+ vetorImpares);