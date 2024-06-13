const prompt = require("prompt-sync")();

// EX_1 - Tempo de vida perdido por um fumante
console.log("Cálculo do tempo de vida perdido por um fumante");
let por_dia = prompt("Quantos cigarros você fumou por dia? ");
let anos = prompt("Por quantos anos você tem fumado? ")

let dias_no_ano = anos * 365
let perda_por_cigarro = 10 // minutos
let dias_perdidos = perda_por_cigarro * por_dia * dias_no_ano // minutos
let minutos_no_dia = 60 * 24
dias_perdidos = Math.floor(dias_perdidos / minutos_no_dia)

console.log("Foram perdidos "+ dias_perdidos +" dias por fumar cigarro!");
