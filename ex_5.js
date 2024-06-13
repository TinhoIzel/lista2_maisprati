const prompt = require("prompt-sync")();

// EX_5 - Pedra, papel, tesoura (contra o JS)
console.log("Pedra, papel e tesoura contra o computador");

let escolhas = ['pedra','papel','tesoura'];
let escolha = undefined;

let continuar = true;
do {
    
    let ok;
    do {
        escolha = prompt("(escreva corretamente) Pedra, papel, tesoura... ").toLowerCase();
        ok = escolhas.includes(escolha);
    } while (!ok);

    escolha = escolhas.indexOf(escolha);
    escolha_maquina = Math.floor(Math.random() * 3);

    console.log("\nVocê escolheu "+ escolhas[escolha] +" e a máquina escolheu "+ escolhas[escolha_maquina]);
    if (escolhas[escolha] == escolhas[escolha_maquina])
        console.log("EMPATE!!");
    else {
        // 2 ganha de 1 que ganha de 0 (2 menos 1 / 1 menos 0, 0 menos 2)
        if ([1,-2].includes(escolha - escolha_maquina))
            console.log("VOCÊ VENCEU!!");
        else
            console.log("VOCÊ PERDEU!!");
    }

    do {
        continuar = prompt("Jogar de novo? (s/n): ").toLowerCase();
    } while (continuar != 'n' && continuar != 's');

    continuar = continuar == 's' ? true : false;
} while (continuar);
