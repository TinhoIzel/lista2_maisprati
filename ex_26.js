// EX_26 - Calculando o produto de duas matrizes (3x5 e 5x3)

// criando matriz A
// 3 = 5, 2 = 3
let matrizA = [];
for (let i = 0; i < 2; i++){
    matrizA[i] = [];
    for (let j = 0; j < 3; j++){
        matrizA[i][j] = Math.floor(Math.random() * 10);
    }
}

// criando matriz B
let matrizB = [];
for (let i = 0; i < 3; i++){
    matrizB[i] = [];
    for (let j = 0; j < 2; j++){
        matrizB[i][j] = Math.floor(Math.random() * 10);
    }
}

// mostrando as matrizes
let textoLinha = '';

// matrizA
console.log("Matriz A: ");
for (let linha of matrizA){
    textoLinha = ' ';
    for (let num of linha){
        textoLinha += num + ' ';
    }
    console.log(textoLinha);
}

// matrizB
console.log("\nMatriz B: ");
for (let linha of matrizB){
    textoLinha = ' ';
    for (let num of linha){
        textoLinha += num + ' ';
    }
    console.log(textoLinha);
}

// multiplicação
let matriz_multiplicada = [];
let elemento;
for (let linha in matrizA){
    matriz_multiplicada[linha] = [];
    // repetir cada linha, para cada coluna
    for (let colunaB in matrizB[0]){

        elemento = 0;
        
        for (let colunaA in matrizA[linha]){
            elemento += matrizA[linha][colunaA] * matrizB[colunaA][colunaB];
        }

        matriz_multiplicada[linha][colunaB] = elemento;
    }
}

// matrizB
console.log("\nMatriz multiplicada: ");
for (let linha of matriz_multiplicada){
    textoLinha = ' ';
    for (let num of linha){
        textoLinha += num + ' ';
    }
    console.log(textoLinha);
}
