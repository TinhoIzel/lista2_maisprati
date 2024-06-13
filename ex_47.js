// EX_47 - Criando um novo objeto após uma função ser usada em todas as propriedades

const objetinho = {
    stringo1:'é uma string',
    stringo2: 'não é uma string',
    numero1: 6743,
    numero2: 1,
    array: [1,2,'string'],
    objeto: {
        nome: 'elehilton',
        idade: 18
    }
}

function descobrirTipoDasPropriedades(objetinho) {
    const objeto_tipos = {};

    for (let propriedade in objetinho){
        if (typeof(objetinho[propriedade]) == 'string'){
            objeto_tipos[propriedade] = 'string';
            continue;
        }

        if (typeof(objetinho[propriedade]) == 'number'){
            objeto_tipos[propriedade] = 'number';
            continue;
        }

        if (Array.isArray(objetinho[propriedade])){
            objeto_tipos[propriedade] = 'array';
            continue;
        }

        if (typeof(objetinho[propriedade]) == 'object'){
            objeto_tipos[propriedade] = 'object';
            continue;
        }
    }

    return objeto_tipos;
}

const objeto_novo = descobrirTipoDasPropriedades(objetinho);
console.log(objeto_novo);