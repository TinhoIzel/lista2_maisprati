// EX_44 - Contagem de propriedades do tipo string

const objeto_qualquer = {
    um: 1,
    dois: 2,
    tres: 'a',
    quatro: 'b',
    cinco: 'cinco',
    seix: 'seix',
    seete: [1,2,34],
    oito: '8',
    nove: 5
}

function contagemDeStrings(objeto) {
    let contagem = 0;

    for (let propriedade in objeto){
        contagem += typeof(objeto[propriedade]) == 'string' ? 1 : 0;
    }

    return contagem;
}

console.log("Quantidade de strings: "+ contagemDeStrings(objeto_qualquer));