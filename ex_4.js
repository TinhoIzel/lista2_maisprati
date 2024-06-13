const prompt = require("prompt-sync")();

// EX_4 - Se 3 segmentos de reta podem formar um triângulo
console.log("Checando se 3 segmentos de reta formam um triângulo");
let reta1 = parseInt(prompt("Digite o tamanho da primeira reta: "))
let reta2 = parseInt(prompt("Digite o tamanho da segunda reta: "))
let reta3 = parseInt(prompt("Digite o tamanho da terceira reta: "))

if (reta1 + reta2 > reta3 && reta2 + reta3 > reta1 && reta1 + reta3 > reta2)
    console.log("É possível formar um triângulo com as retas "+ reta1 +",", reta2 +" e", reta3 +"!");

else
    console.log("Não é possível formar um triângulo com essas retas!");
    