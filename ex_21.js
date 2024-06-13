// EX_21 - Peso ideal de homens e mulheres
console.log("Cálculo do peso ideal\n");

let altura;
let sexo;
do
    altura = parseFloat(prompt("Qual a sua altura? "));
while (isNaN(altura));

console.log();

do
    sexo = prompt("Qual o seu sexo (m/f)? ").toLowerCase();
while (!['m','f'].includes(sexo))

console.log("\nSeu peso ideal é de "+ PesoIdeal(altura,sexo).toFixed(2) +" kg.");

function PesoIdeal(altura,sexo) {
    if (sexo == 'm')
        return altura * 72.7 - 58;
    else
        return altura * 62.1 - 44.7;
}