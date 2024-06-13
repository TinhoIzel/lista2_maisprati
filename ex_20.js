const prompt = require('prompt-sync')();

// EX_20 - Folha salarial de 80 funcionários de uma indústria
console.log("Leitura e cálcula da folha salarial de 80 funcionários");
const funcionarioFactory = function(matricula,nome,salarioBruto){
    return {matricula,nome,salarioBruto};
}

// lendo dados dos funcionarios
let funcionarios = [];
let funcionario, matricula, nome, salarioBruto;
for (let i = 0; i < 3; i++){
    console.log("Digite os dados do "+ (i+1) +"º funcionário");
    matricula = prompt("Matrícula: ");
    nome = prompt("Nome: ");
    salarioBruto = parseInt(prompt("Salário bruto: "));

    funcionario = funcionarioFactory(matricula, nome, salarioBruto);
    funcionario.deducao = funcionario.salarioBruto * 12 / 100;
    funcionario.salarioLiquido = funcionario.salarioBruto - funcionario.deducao;
    funcionarios.push(funcionario);
}

console.table(funcionarios)