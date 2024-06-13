const prompt = require("prompt-sync")();

// EX_19 - Ler e formatar horários
console.log("Lendo horários e mostrando pós formatação");
console.log("Digite separadamente a hora, minuto e segundo\n");

let horario = {
    hora: 0,
    minuto: 0,
    segundo: 0
}

let horarios = []

for (let i = 0; i < 5; i ++){
    for (let tempo in horario){
        do {
            horario[tempo] = parseInt(prompt("Digite "+ tempo+ ": "));
            if (isNaN(horario[tempo]) || horario[tempo] > 59 || horario[tempo] < 0)
                console.log("Digite um horário válido\n");
        } while (isNaN(horario[tempo]) || horario[tempo] > 59 || horario[tempo] < 0);

        if (horario[tempo] < 10){
            horario[tempo] = '0' + horario[tempo];
        }
    }

    // Cópia do objeto horário
    horarios.push(Object.assign({}, horario))

    console.log();
}

let i = 1;
for (let horario of horarios){
    let hora = ''
    for (let tempo in horario){
        if (tempo == 'segundo')
            hora += horario[tempo]
        else
            hora += horario[tempo] + "."
    }

    console.log("Horário "+ i++ +": "+ hora);
}