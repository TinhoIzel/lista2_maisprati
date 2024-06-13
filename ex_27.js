const prompt = require('prompt-sync')();

// EX_27 - Lendo matriz 6x6 e multiplicando por A, em um vetor (36)
console.log("Matriz 6x6, digite os valores: ");

let matriz = [];
for (let i = 0; i < 6; i++){
    matriz[i] = [];
    console.log("Linha "+ (i+1));
    for (let j = 0; j < 6; j++){
        matriz[i][j] = parseFloat(prompt("Coluna "+ (j+1) +", digite o valor: "));
        // matriz[i][j] = (Math.random() * 10).toFixed(2);
    }
}

let A = parseFloat(prompt("Digite o valor de A para multiplicar a matriz: "));
// let A = (Math.random() * 10).toFixed(2);

let vetor = [];
let posicao = 0;

console.log("Matriz: ");
let texto_linha = '';
for (let linha in matriz){
    texto_linha = '';
    for (let coluna in matriz){
        texto_linha += matriz[linha][coluna] + ' ';
        vetor[posicao++] = (parseFloat(matriz[linha][coluna]) * A).toFixed(2);
    }
    console.log(texto_linha);
}

console.log("\nValor de A: "+ A);
console.log("Vetor: ");
console.log(vetor);