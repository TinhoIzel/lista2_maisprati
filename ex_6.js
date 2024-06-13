const prompt = require("prompt-sync")();

// EX_6 - Descobrindo o número que o computador sorteou
console.log("Descubra o número que o computador sorteou");

let n_sorteado = 1 + Math.floor(Math.random()*5);

let tentativa = prompt("Qual número você acha que o computador sorteou (1-5)? ");

console.log("O número sorteado foi... "+ n_sorteado);
if (tentativa == n_sorteado)
    console.log("Parabéns, você acertou!");
else
    console.log("Que pena! Não foi dessa vez.");
