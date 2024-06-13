// EX_23 - Criando matriz identidade (7x7)
console.log("Criando uma matriz identidade (7x7) e depois mostrando");

let matriz_identidade = [];
for (let i = 0; i < 7; i++){
    matriz_identidade[i] = [];
    for (let j = 0; j < 7; j++){
        matriz_identidade[i][j] = (i == j) ? 1 : 0;
    }
}

console.log("Matriz identidade");
for (let linha of matriz_identidade){
    texto_linha = '';
    for (let num of linha) {
        texto_linha += num + ' ';
    }
    console.log(texto_linha);
}