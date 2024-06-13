const prompt = require('prompt-sync')();

// EX_32 - Matriz 3x3, diagonais, multiplicando..
console.log("Multiplicando os elementos da diagonal principal pela média da diagonal secundária de uma matriz 3x3");

let matriz = [];
let diagonalPrincipal = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    console.log("Linha "+ (i + 1));
    for (let j = 0; j < 3; j++){
        matriz[i][j] = parseInt(prompt("Coluna "+ (j + 1) +". Valor: ")); 
        // matriz[i][j] = Math.floor(Math.random() * 10);
        if (i == j){
            diagonalPrincipal.push(matriz[i][j])
        }
    }
}

let mediaDiagonalSecundaria = 0;
let numerosDiagonal = 0;
let numeroLinhas = 3;
for (let linha in matriz){
    numerosDiagonal++;
    mediaDiagonalSecundaria += matriz[linha][numeroLinhas - numerosDiagonal];
}

mediaDiagonalSecundaria /= numerosDiagonal;

console.table(matriz);

let matrizMultiplicada = [];
for (let i = 0; i < 3; i++) {
    matrizMultiplicada[i] = [];
    for (let j = 0; j < 3; j++){
        matrizMultiplicada[i][j] = (i != j) ? matriz[i][j] : (matriz[i][j] * mediaDiagonalSecundaria).toFixed(2);
    }
}

console.table(matrizMultiplicada);
console.log("Média da diagonal secundária: "+ mediaDiagonalSecundaria);