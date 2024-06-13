const prompt = require('prompt-sync')();

// EX_30 - Soma das colunas e das linhas de uma matriz 5x5
console.log("Soma das colunas e das linhas de uma matriz 5x5");
console.log("Digite os valores dos elementos da matriz: ");

matriz = [];
for (let i = 0; i < 5; i++){
    matriz[i] = [];
    // console.log("Linha "+ (i+1));
    for (let j = 0; j < 5; j++){
        matriz[i][j] = parseFloat(prompt("Coluna "+ (j+1) +", digite o valor: ")).toFixed(2);
        // matriz[i][j] = (Math.random() * 10).toFixed(2);
    }
}

console.log("Matriz: ");

let somaLinhas = [];
let somaColunas = [];

for (let coluna in matriz[0]){
    somaColunas[coluna] = 0;
}

let texto_linha = '';
let pos_linha = 0;

for (let linha of matriz){
    texto_linha = '';

    somaLinhas[pos_linha] = 0;

    for (let coluna in linha){
        texto_linha += linha[coluna] + ' ';
        somaLinhas[pos_linha] += parseFloat(linha[coluna]);

        somaColunas[coluna] += parseFloat(linha[coluna]);
    }

    somaLinhas[pos_linha] = somaLinhas[pos_linha].toFixed(2);
    pos_linha++;
    
    console.log(texto_linha);
}

for (let coluna in matriz[0]){
    somaColunas[coluna] = somaColunas[coluna].toFixed(2);
}

console.log("\nSoma das linhas: "+ somaLinhas);
console.log("Soma das colunas: "+ somaColunas);