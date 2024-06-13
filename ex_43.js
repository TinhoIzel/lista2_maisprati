// EX_43 - obj1 e obj2, e fazendo uma função que junta eles

const obj1 = {
    numero: 10,
    forma: 'quadrado',
    nome: 'Lucas'
}

const obj2 = {
    numero: 14,
    comida: 'macarrao',
    cidade: 'Floripa'
}

function juntaObjetos(objeto1, objeto2) {
    const objeto_novo = objeto1;

    for (let propriedade in objeto2){
        objeto_novo[propriedade] = objeto2[propriedade];
    }

    return objeto_novo;
}

const obj3 = juntaObjetos(obj1, obj2);

console.log(obj3);