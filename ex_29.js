const prompt = require('prompt-sync')();

// EX_29 - Lendo matriz 5x5 e fazendo somas
console.log("Matriz 5x5 e somas");

matriz = [];
for (let i = 0; i < 5; i++){
    matriz[i] = [];
    console.log("Linha "+ (i + 1));
    for (let j = 0; j < 5; j++){
        matriz[i][j] = parseFloat(prompt("Coluna "+ (j + 1) +", valor: ")).toFixed(2);
        // matriz[i][j] = (Math.random() * 10).toFixed(2);
    }
}

let somaLinhaQuatro = 0;
let somaColunaDois = 0;
let somaDiagonalPrincipal = 0;
let somaTodos = 0;

console.log("Matriz: ");
let texto_linha = '';
for (let linha in matriz){
    texto_linha = '';
    for (let coluna in matriz[linha]){
        texto_linha += matriz[linha][coluna] + ' ';
        
        somaLinhaQuatro += linha == 3 ? parseFloat(matriz[linha][coluna]) : 0;
        somaColunaDois += coluna == 1 ? parseFloat(matriz[linha][coluna]) : 0;
        somaDiagonalPrincipal += coluna == linha ? parseFloat(matriz[linha][coluna]) : 0;
        somaTodos += parseFloat(matriz[linha][coluna]);
    }
    console.log(texto_linha);
}

console.log("\nSoma da linha 4: "+ somaLinhaQuatro.toFixed(2));
console.log("Soma da coluna 2: "+ somaColunaDois.toFixed(2));
console.log("Soma da diagonal principal: "+ somaDiagonalPrincipal.toFixed(2));
console.log("Soma de todos: "+ somaTodos.toFixed(2));