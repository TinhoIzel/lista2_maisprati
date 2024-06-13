// EX_49 - TRANSAÇÕES FINANCEIRAS

const transacoes = [
    { id: 1001, valor: 150.75, data: '2023-06-01', categoria: 'Alimentação' },
    { id: 1002, valor: 2300.00, data: '2023-06-05', categoria: 'Salário' },
    { id: 1003, valor: 75.00, data: '2023-06-10', categoria: 'Transporte' },
    { id: 1004, valor: 300.50, data: '2023-06-12', categoria: 'Educação' },
    { id: 1005, valor: 50.00, data: '2023-06-15', categoria: 'Lazer' },
    { id: 1006, valor: 120.00, data: '2023-06-18', categoria: 'Saúde' },
    { id: 1007, valor: 450.25, data: '2023-06-20', categoria: 'Moradia' },
    { id: 1008, valor: 90.00, data: '2023-06-22', categoria: 'Alimentação' },
    { id: 1009, valor: 60.50, data: '2023-06-25', categoria: 'Transporte' },
    { id: 1010, valor: 180.75, data: '2023-06-28', categoria: 'Lazer' },
    { id: 1011, valor: 2000.00, data: '2023-07-01', categoria: 'Salário' },
    { id: 1012, valor: 125.30, data: '2023-07-03', categoria: 'Saúde' },
    { id: 1013, valor: 340.00, data: '2023-07-05', categoria: 'Educação' },
    { id: 1014, valor: 75.50, data: '2023-07-10', categoria: 'Transporte' },
    { id: 1015, valor: 500.00, data: '2023-07-15', categoria: 'Moradia' }
];

function organizarTransacoes(transacoes) {
    const transacoesOrganizadas = {};

    transacoes.forEach(transacao => {

        let categoria = transacao.categoria;
        
        if (!(categoria in transacoesOrganizadas)){
            transacoesOrganizadas[categoria] = [];
        }

        delete transacao['categoria'];
        
        transacoesOrganizadas[categoria].push(transacao)
        }
    );

    for (let categoria in transacoesOrganizadas){
        let subtotal = 0;
        for (let transacao of transacoesOrganizadas[categoria]){
            subtotal += transacao.valor;
        }
        transacoesOrganizadas[categoria].subtotal = subtotal;
    }

    return transacoesOrganizadas;
}

const transacoesOrganizadas = organizarTransacoes(transacoes)
console.log(transacoesOrganizadas);