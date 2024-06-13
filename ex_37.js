const prompt = require('prompt-sync')();

// EX_37 - Leitura de um gabarito com 20 caracteres de prova,
// e as respostas de 50 alunos da turma,
// veja o número de acertos de cada aluno
// aluno tem numero, respostas e acertos.
// se acertar pelo menos 12 "APROVADO" senão "REPROVADO"

console.log("Gabarito de uma prova com 50 alunos");

// Vetor dos números
console.log("Digite o gabarito da prova (a, b, c, d ou e)");
let gabarito = [];
let caracteres = ['a','b','c','d','e']
let caractere;


for (let i = 0; i < 20; i++){
    while (true){
        caractere = prompt("Digite a "+ (i+1) +"ª resposta: ").toLowerCase();
        if (!caracteres.includes(caractere)){
            console.log("As alternativas só podem ser 'a', 'b', 'c', 'd' ou 'e'");
            continue;
        }
        break;
    }

    gabarito[i] = caractere;
}
// gabarito = ['a', 'c', 'b', 'd', 'e', 'a', 'c', 'd', 'b', 'e', 'c', 'a', 'd', 'e', 'b', 'a', 'c', 'd', 'e', 'b'];



const AlunoFactory = function(numero, respostas, acertos, condicao){
    return {numero, respostas, acertos, condicao};
}

// Alunos
let alunos = [];
let respostas_aluno = [];
let acertos = 0;

console.log("Escreva as respostas dos alunos: ");
for (let i = 0; i < 50; i++){

    console.log("Aluno "+ (i + 1));
    for (let j = 0; j < 20; j++){
        while (true){
            
            // resposta = Math.floor(Math.random() * 5);
            // resposta = caracteres[resposta];

            resposta = prompt("Digite a "+ (j+1) +"ª resposta: ").toLowerCase();
            
            if (!caracteres.includes(resposta)){
                console.log("Resposta deve ser 'a', 'b', 'c', 'd' ou 'e'");
                continue;
            }
            break;
        }
        respostas_aluno[j] = resposta;
    }

    for (let posicao in respostas_aluno){
        if (respostas_aluno[posicao] == gabarito[posicao]){
            acertos++;
        }
    }

    condicao = acertos >= 12 ? 'APROVADO' : 'REPROVADO';
    alunos[i] = AlunoFactory((i+1), respostas_aluno, acertos, condicao);
    respostas_aluno = [];
    acertos = 0;
}

console.log("Gabarito: "+ gabarito +"\n");
console.log("Alunos: ");
console.table(alunos, ['numero','acertos','condicao'])
