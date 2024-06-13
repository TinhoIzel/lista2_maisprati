const prompt = require('prompt-sync')();

// EX_32 - Matriz 50x50, diagonal principal multiplica a respectiva linha
console.log("Lenda uma matriz 50x50 e multiplicando cada linha pelo número na diagonal principal");

let matriz = [];
let diagonalPrincipal = [];
for (let i = 0; i < 50; i++) {
    matriz[i] = [];
    console.log("Linha "+ (i + 1));
    for (let j = 0; j < 50; j++){
        matriz[i][j] = parseFloat(prompt("Coluna "+ (j + 1) +". Valor: ")).toFixed(2); 
        // matriz[i][j] = (Math.random() * 10).toFixed(2);
        if (i == j){
            diagonalPrincipal.push(matriz[i][j])
        }
    }
}

for (let linha in matriz){
    for (let coluna in matriz[linha]){
        matriz[linha][coluna] = (matriz[linha][coluna] * diagonalPrincipal[linha]).toFixed(2);
    }
}

console.table(matriz);