const prompt = require("prompt-sync")();

// EX_13 - Sequência de Fibonacci 2
console.log("Sequência de Fibonacci (algoritmo)");

let ate = 41;
let sequencia = [];
for (let i = 1; i <= ate; i++)
    sequencia.push(fibonacci(i));

for (posicao in sequencia)
    console.log((parseInt(posicao) + 1) +" - "+ sequencia[posicao]);

function fibonacci(posicao){
    if (posicao == 1 || posicao == 2)
        return 1;
    else
        return fibonacci(posicao - 1) + fibonacci(posicao - 2);
}