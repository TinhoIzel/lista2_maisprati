// EX_24 - Contando os números negativos em uma matriz 6x8
let matriz = []
for (let i = 0; i < 6; i++){
    matriz[i] = []
    for (let j = 0; j < 8; j++){
        let num = Math.floor(Math.random() * 10);
        let negativo = Math.floor(Math.random() * 10) > 5 ? true : false;

        matriz[i][j] = negativo ? num * -1 : num
    }
}

let negativos = []

console.log("Matriz: ");
for (let linha in matriz){
    texto_linha = ''
    negativos[linha] = 0;
    for (let num of matriz[linha]) {
        texto_linha += num + ' ';
        if (num < 0)
            negativos[linha]++;
    }
    console.log(texto_linha);
}

console.log("\nMatriz com quantidade de negativos em cada linha da matriz: ");
console.log(negativos);