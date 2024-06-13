const prompt = require('prompt-sync')();

// EX_50 - Sistema de reserva de hotéis

let hoteis = [];

let reservas = [];

const hotelFactory = function(id, nome, cidade, quartosTotais, quartosDisponiveis, mediaAvaliacao, quantidadeAvaliacoes){
    return {id, nome, cidade, quartosTotais, quartosDisponiveis, mediaAvaliacao, quantidadeAvaliacoes};
}

const reservaFactory = function(idReserva, idHotel, nomeCliente){
    return {idReserva, idHotel, nomeCliente};
}

// Telinha principal
let opcao;
while (true) {
    console.log("Sistema de reserva de hotéis");
    console.log("Opções: ");
    console.log("1 - Adicionar hotel");
    console.log("2 - Buscar hotéis por cidade");
    console.log("3 - Fazer reserva");
    console.log("4 - Cancelar reserva");
    console.log("5 - Listar Reservas");
    console.log("6 - Fazer Checkout");
    console.log("7 - Sair\n");
    
    while (true) {
        opcao = parseInt(prompt("Opção escolhida: "));
        if (isNaN(opcao)){
            console.log("Digite uma opção válida");
            continue;
        }
        if (opcao < 1 || opcao > 7){
            console.log("Digite um número de 1 a 7");
            continue;
        }
        
        break
    }
    switch (opcao) {
        case 1:
            adicionarHotel();
            break;
        case 2:
            buscarHoteisCidade();
            break;
        case 3:
            fazerReserva();
            break;
        case 4:
            cancelarReserva();
            break;
        case 5:
            listarReservas(1);
            break;
        case 6:
            fazerCheckout();
            break;
        
        default:
            break;
    }
    if (opcao === 7){
        console.log("FECHANDO SISTEMA...");
        break;
    }
}



function adicionarHotel() {
    console.log("Adicionando hotel...");
    console.log("Digite os dados do hotel: ");
    
    let nome, cidade, quartosT;
    nome = prompt("Nome do hotel: ");
    cidade = prompt("Cidade: ");
    while (true) {
        quartosT = parseInt(prompt("Quantidade de quartos: "));
        if (isNaN(quartosT) || quartosT <= 0){
            console.log("Digite um número válido!!");
            continue;
        }
        break;
    }

    if (hoteis.length == 0){
        const hotel = hotelFactory(1001, nome, cidade, quartosT, quartosT, 0, 0);
        hoteis.push(hotel);
    } else {
        let ultimoId = hoteis[hoteis.length - 1].id;
        const hotel = hotelFactory((ultimoId + 1), nome, cidade, quartosT, quartosT, 0, 0);
        hoteis.push(hotel);
    }

    console.log("Hotel adicionado com sucesso!!\n");
}



function buscarHoteisCidade() {
    console.log("Buscando hotel por cidade...");

    let cidades = [];
    for (let hotel of hoteis){
        if (!cidades.includes(hotel.cidade)){
            cidades.push(hotel.cidade);
        }
    }

    console.log("Cidades com hoteis: "+ cidades);
    
    let cidade = prompt("Cidade escolhida: ");
    let hoteisCidade = [];
    for (let hotel of hoteis){
        if (hotel.cidade == cidade){
            hoteisCidade.push(hotel);
        }
    }

    if (hoteisCidade.length == 0 ){
        console.log("Nenhum hotel nesta cidade\n");
    } else {
        console.table(hoteisCidade);
    }
}



function fazerReserva() {
    console.log("Fazendo reserva...");
    console.log("Digite os dados da reserva: ");
    
    let hotel, cliente;

    let nomesHoteis = [];
    for (let hotel of hoteis){
        if (!nomesHoteis.includes(hotel.nomes)){
            nomesHoteis.push(hotel.nome);
        }
    }    
    console.log("Hoteis: "+ nomesHoteis +"\n");
    
    while (true){    
        hotel = prompt("Nome do hotel da reserva: ");
        if (!nomesHoteis.includes(hotel)){
            console.log("Digite um nome existente ou válido!!");
            continue;
        }

        break;
    }

    cliente = prompt("Nome do cliente: ");

    let idHotel;
    for (let hot of hoteis){
        if (hot.nome == hotel){
            idHotel = hot.id;
            hot['quartosDisponiveis'] -= 1;
        }
    }

    if (reservas.length == 0){
        const reserva = reservaFactory(2001, idHotel, cliente);
        reservas.push(reserva);
    } else {
        let ultimoId = reservas[reservas.length - 1].idReserva;
        const reserva = reservaFactory((ultimoId + 1), idHotel, cliente);
        reservas.push(reserva);
    }

    console.log("Reserva feita com sucesso!!\n");
}



function cancelarReserva() {
    console.log("Cancelando reservas...");

    let reservasCompleto = listarReservas(0);

    let reservaCancelar;
    while (true){
        reservaCancelar = parseInt(prompt("Id da reserva a ser cancelada: "));
        
        let encontrou = false;
        for (let reserva of reservasCompleto){
            if (reserva.idReserva == reservaCancelar){
                idHotelCancelar = reserva.idHotel;

                for (let hotel of hoteis){
                    if (hotel.id == idHotelCancelar) hotel.quartosDisponiveis++;
                }

                encontrou = true;
            }
        }

        if (encontrou) break;
        console.log("Id não válido ou existente");
    }

    for (let reserva of reservas){
        if (reserva.idReserva == reservaCancelar){
            let indexReserva = reservas.indexOf(reserva);
            delete reservas.splice(indexReserva, 1);
            break;
        }
    }

    console.log("Reserva cancelada com sucesso!!\n");
}



function listarReservas(tipo) {
    if (tipo == 1) console.log("Listando reservas...");

    let listaReservas = [];
    let reservaCompleto = {};
    let hotelReserva;

    for (let reserva of reservas){
        
        for (let hotel of hoteis){
            if (hotel.id == reserva.idHotel){
                hotelReserva = hotel;
                break
            }
        }

        reservaCompleto = {
            idHotel: hotelReserva.id,
            nomeHotel: hotelReserva.nome,
            cidadeHotel: hotelReserva.cidade,
            mediaAvaliacao: hotelReserva.mediaAvaliacao,
            idReserva: reserva.idReserva,
            nomeCliente: reserva.nomeCliente
        }

        listaReservas.push(reservaCompleto);
    }
    console.table(listaReservas);

    return listaReservas;
}



function fazerCheckout() {
    console.log("Fazendo checkout...");

    let reservasCompleto = listarReservas(0);

    let reservaCheckout;
    while (true){
        reservaCheckout = parseInt(prompt("Id da reserva a fazer o checkout: "));
        
        let encontrou = false;
        for (let reserva of reservasCompleto){
            if (reserva.idReserva == reservaCheckout){
                idHotelCheckout = reserva.idHotel;

                for (let hotel of hoteis){
                    if (hotel.id == idHotelCheckout){ 
                        hotel.quartosDisponiveis++;

                        // avaliando hotel
                        console.log("Avaliação do hotel "+ hotel.nome);
                        let avaliacao;
                        while (true){
                            avaliacao = parseInt(prompt("Digite a nota (1-5): "));
                            if (isNaN(avaliacao)){
                                console.log("Avaliação não válida");
                                continue;
                            }

                            if (avaliacao < 1 || avaliacao > 5){
                                console.log("Avaliação deve ser entre 1 e 5");
                                continue;
                            }

                            break;
                        }

                        let avaliacaoTotal = hotel.mediaAvaliacao * hotel.quantidadeAvaliacoes;
                        avaliacaoTotal += avaliacao;
                        hotel.quantidadeAvaliacoes++;
                        hotel.mediaAvaliacao = avaliacaoTotal / hotel.quantidadeAvaliacoes;

                    }
                }

                encontrou = true;
            }
        }

        if (encontrou) break;
        console.log("Id não válido ou existente");
    }

    for (let reserva of reservas){
        if (reserva.idReserva == reservaCheckout){
            let indexReserva = reservas.indexOf(reserva);
            delete reservas.splice(indexReserva, 1);
            break;
        }
    }
}