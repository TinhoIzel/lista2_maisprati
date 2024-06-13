const promp = require('prompt-sync')();

// EX_22 - População, salário e filhos
console.log("Cálculos da população, salários e quantidade de filhos");

let pessoas = 0;
let filhos_total = 0;
let salario_total = 0;
let maior_salario = 0;
let salario_ate_350 = 0;

console.log("Para parar, digite 'PARAR'");
while (true){
    let continuar = true
    console.log("\nPessoa "+ (pessoas + 1));
    
    let salario = 0;
    do {
        salario = prompt('Salário: ');
        
        if (salario.toUpperCase() == 'PARAR') {
            continuar = false;
            break;
        }

        salario = parseFloat(salario);
    } while (isNaN(salario) || salario <= 0);

    if (!continuar) break;
    
    let filhos = 0;
    do {
        filhos = parseFloat(prompt('Número de filhos: '));
    } while (isNaN(filhos) || filhos < 0);
    
    pessoas++;
    filhos_total += filhos;
    salario_total += salario;

    if (salario <= 350)
        salario_ate_350++;

    if (salario > maior_salario)
        maior_salario = salario;
}

console.log("\n\n\nRelatório");
console.log("Média de salários: R$ "+ (salario_total/pessoas).toFixed(2));
console.log("Média do número de filhos: "+ (filhos_total/pessoas).toFixed(1));
console.log("Maior salário: "+ maior_salario);
console.log("Percentual de salários até R$ 350.00: "+ ((salario_ate_350/pessoas) * 100).toFixed(2));