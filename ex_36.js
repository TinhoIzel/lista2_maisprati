const prompt = require('prompt-sync')();

// EX_36 - Leitura de um gabarito com 13 questões,
// e o número do cartão de 100 apostadores,
// veja o número de acertos de cada apostador
// apostador tem código do cartão, números e acertos.
// se acertar as 13 mensagem: "Parabéns, tu foi o GANHADOR"

console.log("Casa de apostar com 13 números e 100 apostadores");

// Vetor dos números
console.log("Digite o gabarito da aposta");
let numeros_gabarito = [];
let num;
for (let i = 0; i < 13; i++){
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

const apostadorFactory = function(codigo, numeros, acertos){
    return {codigo, numeros, acertos};
}

// Apostadores
let apostadores = [];
let numeros_apostador = [];
let acertos = 0;

console.log("Escreva os dados dos participantes: ");
for (let i = 0; i < 100; i++){

    console.log("Apostador "+ (1001 + i));
    for (let j = 0; j < 13; j++){
        while (true){
            // num = Math.floor(Math.random() * 30);
            num = parseInt(prompt("Digite o "+ (j+1) +"º número: "));
            if (numeros_apostador.includes(num)){
                console.log("Número já está apostado");
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

    apostadores[i] = apostadorFactory((i+1001), numeros_apostador, acertos);
    numeros_apostador = [];
    acertos = 0;
    console.log();
}

console.log("Gabarito: "+ numeros_gabarito +"\n");
console.log("Apostadores: ");
for (let apostador of apostadores){
    console.log("Apostador "+ apostador.codigo);
    console.log("Números apostados: "+ apostador.numeros);
    console.log("Acertos: "+ apostador.acertos);
    if (apostador.acertos == 13){
        console.log("Parabéns, tu foi o GANHADOR");
    }
    console.log();
}
