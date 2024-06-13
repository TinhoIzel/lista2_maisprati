// EX_28 - Matriz 10x10, soma dos elementos acima e abaixo da diagonal principal!
matriz = [];
for (let i = 0; i < 10; i++){
    matriz[i] = [];
    for (let j = 0; j < 10; j++){
        matriz[i][j] = Math.floor(Math.random() * 10);
    }
}

let soma_acima = 0;
let soma_abaixo = 0;

console.log("Matriz: ");
let texto_linha = '';
for (let linha in matriz){
    texto_linha = '';
    for (let coluna in matriz){
        texto_linha += matriz[linha][coluna] + ' ';
        soma_acima += coluna > linha ? parseFloat(matriz[linha][coluna]) : 0;
        soma_abaixo += coluna < linha ? parseFloat(matriz[linha][coluna]) : 0;
    }
    console.log(texto_linha);
}

console.log("Soma dos números acima da diagonal principal: "+ soma_acima);
console.log("Soma dos números abaixo da diagonal principal: "+ soma_abaixo);