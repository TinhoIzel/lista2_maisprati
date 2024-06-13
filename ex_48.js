// EX_48 - Juntando o inventário de duas lojas!

// descobri que tem como usar 'propriedade' in 'objeto'
// pra saber se já existe...

const inventarioLojaA = {
    agua: 100,
    refrigerante: 20,
    leite: 50,
    arroz: 70,
    feijao: 40,
    macarrao: 30,
    ovos: 14
};

const inventarioLojaB = {
    agua: 55,
    refrigerante: 54,
    leite: 35,
    arroz: 20,
    feijao: 10,
    oleo: 37,
    azeite: 10
};

function combinandoInventarios(inventario1, inventario2) {
    const combinado = inventario1;

    for (let item in inventario2){
        if (item in combinado){
            combinado[item] += inventario2[item];
        } else {
            combinado[item] = inventario2[item];
        }
    }

    return combinado;
}

const inventarioCombinado = combinandoInventarios(inventarioLojaA, inventarioLojaB);

console.log(inventarioCombinado);