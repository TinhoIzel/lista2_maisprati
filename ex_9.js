const prompt = require("prompt-sync")();

// EX_9 - Salário de homens de mulheres
console.log("Cálculo do salário dos homens e das mulheres");

// salario de homens e mulheres
const salarios = {
    m: 0,
    f: 0
}

let continuar = undefined;
do {
    console.log("\nDigite o salário e sexo do funcionário");
    let salario = parseFloat(prompt("Salário: "));
    let sexo = undefined;
    do {
        sexo = prompt("Sexo (M/F): ").toLowerCase();
    } while (!['m','f'].includes(sexo))
    
    if (!isNaN(salario))
        salarios[sexo] += salario;

    do {
        continuar = prompt("Continuar (s/n): ").toLowerCase();
    } while (!['s','n'].includes(continuar));
    continuar = continuar == 's' ? true : false;
} while (continuar);

console.log("Total de salários:");
console.log("Homens: R$ "+ salarios['m'].toFixed(2));
console.log("Mulheres: R$ "+ salarios['f'].toFixed(2));