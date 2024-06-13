// EX_46 - Resumindo as vendas dos vendedores

const vetorVendas = [
    { vendedor: 'Alice', valor: 523.45 },
    { vendedor: 'Bob', valor: 234.78 },
    { vendedor: 'Carlos', valor: 998.32 },
    { vendedor: 'Diana', valor: 123.45 },
    { vendedor: 'Eduardo', valor: 678.90 },
    { vendedor: 'Fátima', valor: 312.67 },
    { vendedor: 'Gabriel', valor: 456.78 },
    { vendedor: 'Helena', valor: 890.12 },
    { vendedor: 'Igor', valor: 234.56 },
    { vendedor: 'Julia', valor: 789.01 },
    { vendedor: 'Alice', valor: 123.99 },
    { vendedor: 'Bob', valor: 987.65 },
    { vendedor: 'Carlos', valor: 432.10 },
    { vendedor: 'Diana', valor: 876.54 },
    { vendedor: 'Eduardo', valor: 345.67 }
];

const vendasResumido = {};
let vendedores = [];
for (let venda of vetorVendas){
    if (!vendedores.includes(venda.vendedor)){
        vendedores.push(venda.vendedor);
        vendasResumido[venda.vendedor] = venda.valor;
    } else {
        vendasResumido[venda.vendedor] += venda.valor;
    }
}

console.table(vendasResumido);