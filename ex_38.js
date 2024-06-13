const prompt = require('prompt-sync')();

// EX_38 - Leitura de um vetor de 6 posições
// e fazendo alguma operação a partir dele

console.log("Lendo um vetor de 6 posições e fazendo algo");

let vetor = [];
let num;
for (let i = 0; i < 6; i++){
    while (true){
        num = parseInt(prompt("Digite o "+ (i+1) +"º número: "));
        if (isNaN(num)){
            console.log("Digite um número!!");
            continue;
        }

        vetor[i] = num;
        break;
    }
}

console.log("\nOperações com o vetor");
console.log('1- Soma dos elementos;');
console.log('2- Produto dos elementos;');
console.log('3- Média dos elementos;');
console.log('4- Ordene os elementos em ordem crescente;');
console.log('5- Mostre o vetor.');
let opcao;
while (true){

    opcao = parseInt(prompt("Opção escolhida: "))
    if (isNaN(opcao)){
        console.log("Digite uma opção válida!!");
        continue;
    }

    if (opcao > 5 || opcao < 1){
        console.log("Opções são entre 1 e 5");
        continue;
    }

    break;
}

switch (opcao) {
    case 1:
        console.log(somaElementos(vetor));
        break;
    case 2:
        console.log(produtoElementos(vetor));
        break;
    case 3:
        console.log(mediaElementos(vetor));
        break;
    case 4:
        console.log(ordenarElementos(vetor));
        break;
    case 5:
        console.log(vetor);
        break;
    
    default:
        break;
}

function somaElementos(vetor) {
    let soma = 0;
    for (elemento of vetor){
        soma += elemento;
    }

    return soma;
}

function produtoElementos(vetor) {
    let produto = 1;
    for (elemento of vetor){
        produto *= elemento;
    }

    return produto;
}

function mediaElementos(vetor) {
    soma = somaElementos(vetor);
    return (soma / vetor.length);
}

function ordenarElementos(vetor) {
    let ajuda;
    let vetor_ordenado = vetor;
    for (let i = 0; i < (vetor.length - 1); i++){
        for (let j = 0; j < ((vetor.length - 1) - i); j++){
            if (vetor_ordenado[j] > vetor_ordenado[j+1]){
                ajuda = vetor_ordenado[j];
                vetor_ordenado[j] = vetor_ordenado[j+1];
                vetor_ordenado[j+1] = ajuda;
            }
        }
    }
    return vetor_ordenado;
}