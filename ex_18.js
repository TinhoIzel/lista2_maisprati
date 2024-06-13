const prompt = require("prompt-sync")();

// EX_18 - Registro de um funcionário - objeto
console.log("Registro de um funcionário\nDigite os dados do funcionário\n");

const funcionario = {
    nome: 0,
    cargo: 0,
    salario: 0
}

for (let atributo in funcionario)
    funcionario[atributo] = prompt("Digite o "+ atributo +" do funcionário: ");
console.log();
for (let atributo in funcionario)
    console.log(atributo +": "+ funcionario[atributo]);