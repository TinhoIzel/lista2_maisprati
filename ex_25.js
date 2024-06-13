const prompt = require('prompt-sync')();

// EX_25 - Soma das colunas de uma matriz 15x20
console.log("Montando uma matriz 15x20 e somando as colunas");

matriz = [];
for (let i = 0; i < 15; i++){
    matriz[i] = [];
    console.log("Linha "+ (i + 1));
    
    for (let j = 0; j < 20; j++){
        // matriz[i][j] = (Math.random() * 10).toFixed(2); se precisar pra testar
        matriz[i][j] = parseFloat(prompt('Digite o valor a ser colocado na coluna '+ (j+1) +': ')).toFixed(2);
    }
}

soma_coluna = [];
// colocando 0 em cada coluna para conseguir somar
for (let coluna in matriz[0]){
    soma_coluna[coluna] = 0;
}

console.log("Matriz");

for (let linha of matriz){
    texto_linha = '';

    for (let coluna in linha){
        soma_coluna[coluna] += parseFloat(linha[coluna]);
    }

    for (let num of linha) {
        texto_linha += num + ' ';
    }
    console.log(texto_linha);
}

let somados = ''
for (let num of soma_coluna) {
    somados += num.toFixed(2) + ' ';
}
console.log("\n\n\nSoma das colunas: ");
console.log(somados);