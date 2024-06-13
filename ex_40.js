const prompt = require('prompt-sync')();

// EX_40 - Leitura de um resultado de Loto
// e o números de 50 apostadores,
// apostador tem código do cartão, números, acertos e mensagem.
// se acertar tudo (5) mostrar "Ganhador"

console.log("Casa de apostas com 5 números e 50 apostadores");

// Vetor dos números
console.log("Digite o resultado oficial");
let numeros_gabarito = [];
let num;
for (let i = 0; i < 5; i++){
    while (true){
        // num = Math.floor(Math.random() * 30);
        num = parseInt(prompt("Digite o "+ (i+1) +"º número: "));
        
        if (numeros_gabarito.includes(num)){
            console.log("Número já está no gabarito");
            continue;
        }
        break;
    }

    numeros_gabarito[i] = num;
}

const apostadorFactory = function(codigo, numeros, acertos, mensagem){
    return {codigo, numeros, acertos};
}

// Apostadores
let apostadores = [];
let numeros_apostador = [];
let acertos = 0;
let mensagem = "";

console.log("Escreva os dados dos participantes: ");
for (let i = 0; i < 50; i++){

    console.log("Apostador "+ (1001 + i));
    for (let j = 0; j < 5; j++){
        while (true){
            // num = Math.floor(Math.random() * 30);
            num = parseInt(prompt("Digite o "+ (j+1) +"º número: "));

            if (numeros_apostador.includes(num)){
                console.log("Número já foi apostado");
                continue;
            }
            break;
        }

        numeros_apostador[j] = num;
    }

    for (let numero of numeros_apostador){
        if (numeros_gabarito.includes(numero))
            acertos++;
    }

    if (acertos == numeros_gabarito.length){
        mensagem = "Ganhador"
    }

    apostadores[i] = apostadorFactory((i+1001), numeros_apostador, acertos, mensagem);
    numeros_apostador = [];
    acertos = 0;
    mensagem = "";
    console.log();
}

console.log("Gabarito: "+ numeros_gabarito +"\n");
console.log("Apostadores: ");
for (let apostador of apostadores){
    if (apostador.acertos == 5){
        console.log("Apostador "+ apostador.codigo +" é um Ganhador!!!");
    }
}
