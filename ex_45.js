// EX_45 - Array de strings e contagem das vezes que se repetem

const vetor = ['apple', 'banana', 'apple', 'cherry', 'fig', 'banana', 'fig', 'grape', 'apple', 'lemon'];

const objetoValores = {};
let vetorValores = [];
for (let valor of vetor){
    if (vetorValores.includes(valor)){
        objetoValores[valor] += 1;
    } else {
        vetorValores.push(valor);
        objetoValores[valor] = 1;
    }
}

console.log(objetoValores);