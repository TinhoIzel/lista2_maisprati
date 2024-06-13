const prompt = require('prompt-sync')();

// EX_39 - Leitura de um vetor de 100 elementos
// e tirando os nulos e negativos

console.log("Lendo um vetor de 100 posições e limpando ele");

let vetor = [];
let num;
for (let i = 0; i < 100; i++){
    while (true){
        // num = Math.floor(Math.random() * 20);
        // num *= Math.floor(Math.random() * 10) > 4 ? -1 : 1;

        num = parseInt(prompt("Digite o "+ (i+1) +"º número: "));
        if (isNaN(num)){
            console.log("Digite um número!!");
            continue;
        }

        vetor[i] = num;
        break;
    }
}

console.log("Vetor com os 100 elementos");
console.log(""+vetor);

// filter é um loop que passar por todos os elementos do vetor
// e só devolve caso a condição seja cumprida
let vetor_limpo = vetor.filter(elemento => elemento > 0);

console.log("Vetor limpo");
console.log(""+vetor_limpo);
