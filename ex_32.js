const prompt = require('prompt-sync')();

// EX_32 - Lendo uma matriz 12x13 e dividindo a linha pelo maior módulo
console.log("Dividindo as linhas de uma matriz 12x30 pelo maior módulo");

let matriz = [];
let maior = [];
for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    console.log("Linha "+ (i + 1));
    for (let j = 0; j < 13; j++){
        matriz[i][j] = parseInt(prompt("Coluna "+ (j + 1) +". Valor: ")); 
        // matriz[i][j] = Math.floor(Math.random() * 10) * (Math.random() * 10 > 5 ? 1 : -1);
        if (!maior[i]){
            maior[i] = Math.abs(matriz[i][j]);
        } else {
            maior[i] = matriz[i][j] > Math.abs(maior[i]) ? Math.abs(matriz[i][j]) : maior[i];
        }
    }
}


let matriz_dividida = [];
for (let i = 0; i < 12; i++){
    matriz_dividida[i] = [];
    for (let j = 0; j < 13; j++){
        matriz_dividida[i][j] = (matriz[i][j] / maior[i]).toFixed(2);
    }
}

console.table(matriz);
console.table(matriz_dividida)
console.log("Maiores números (em módulo) de cada linha: "+ maior);