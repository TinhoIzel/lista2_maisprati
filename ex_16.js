// EX_16 - Gerando números e ordenando eles
console.log("Gerando números entre 0 e 99...");

let numeros = [];
for (let i = 0; i < 20; i++)
    numeros.push(Math.floor(Math.random() * 100));

let mostrar = "";
console.log("Valores no vetor: ");
for (let numero of numeros)
    mostrar += numero +" ";
console.log(mostrar);


selection_sort(numeros);
mostrar = "";
console.log("Valores ordenados: ");
for (let numero of numeros)
    mostrar += numero +" ";
console.log(mostrar);

// ordenando - selection sort
// muda a própria lista de entrada, não precisa atribuir
function selection_sort(lista){
    for (let posicao in lista){

        // variáveis que vai precisar
        let menor = lista[posicao];
        let posicao_menor = posicao;
        let mudar = false;

        // encontrando o menor número, e se tiver um menor, pegando a posição dele
        for (let i = parseInt(posicao) + 1; i < lista.length; i ++){
            if (lista[i] < menor) {
                menor = lista[i];
                posicao_menor = i;
                mudar = true;
            }
        }

        // trocando posições, se necessário
        if (mudar) {
            let temp = lista[posicao];
            lista[posicao] = menor;
            lista[posicao_menor] = temp;
        }
    }
}