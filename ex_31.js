const prompt = require('prompt-sync')();

// EX_31 - Comparando números iguais e diferentes em uma matriz 30x30
console.log("Comparando um inteiro A com os valores de uma matriz 30x30");

let A = parseInt(prompt("Digite o valor de A: "));
let iguaisA = 0;
let diferentesA = [];

matriz = [];
for (let i = 0; i < 30; i++){
    matriz[i] = [];
    console.log("Linha "+ (i+1));
    for (let j = 0; j < 30; j++){
        matriz[i][j] = parseInt(prompt("Coluna "+ (j+1) +". Digite o valor: "));
        // matriz[i][j] = Math.floor(Math.random() * 100);
        
        if (matriz[i][j] == A) {
            iguaisA++;
            continue;
        }

        if (diferentesA.indexOf(matriz[i][j]) == -1){
            diferentesA.push(matriz[i][j]);
        }
    }
}

console.table(matriz);
console.log("Números iguais a A na matriz: "+ iguaisA);
console.log("Números diferentes de A na matriz: "+ diferentesA);