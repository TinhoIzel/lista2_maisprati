// EX_42 - Propriedades de objetos

const dados = {
    numero1: 123,
    numero2: 456,
    numeros1: [1,2,3],
    numeros2: [4,5,6],
    caracter: 'A',
    palavra: 'não'
}

function devolveSomenteArrays(objeto) {
    const objeto_novo = {};

    for (let propriedade in objeto){
        // devolve true se o parametro for um Array
        if (Array.isArray(objeto[propriedade]))
            objeto_novo[propriedade] = objeto[propriedade];
    }

    return objeto_novo;
}

const dados_novo = devolveSomenteArrays(dados)
console.log(dados_novo);