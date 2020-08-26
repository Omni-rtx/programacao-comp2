function prova() {
    var carros = []    
    do {  
        var carro = new Object()
        carro.info = Number(prompt('Informe sobre o carro'))    
        var achou = false     
        for (var i = 0; i < carros.length; i++) {
            if (carro.info == carros[i].info) {
                achou = true 
                break 
            }
        }
        if (achou == false) { 
            carro.modelo= prompt('Informe modelo')
            carro.marca = (prompt('Informe a marca'))
            carro.velocidade = Number(prompt('Informe a velocidade'))
            carro.preco = Number(prompt('Informe o preco'))      
            var auxiliar = prompt('Informe a data de fabricação no modelo: dd/mm/aaaa').split('/')       
            produto.fabricacao = new Date(auxiliar[2], auxiliar[1] - 1, auxiliar[0])      
            produtos.push(carro)
        } else { 
            alert('veículo já cadastrado')
            continue 
        }
        var resp = prompt('Deseja continuar ? (s/n)')
    }
    while (resp != 'n')

    // processamento de dados
    var soma=0
    var nomeMenorPreco= carros[0].preco 
    var nomeMaiorVel= carros[0].velocidade 
    
    
    var vetorDI = prompt("Informe a data inicial de fabricação").split('/')
    var dataInicial = new Date(vetorDI[2], vetorDI[1] - 1, vetorDI[0])
    var vetorDF = prompt("Informe a data final de fabricação").split('/')
    var dataFinal = new Date(vetorDF[2], vetorDF[1] - 1, vetorDF[0])

    for (var i = 0; i < carros.length; i++) {
        soma = soma + carros[i].preco
        if ((carros[i].preco < 30000) && (carros[i].velocidade>200)) {
            nomeMenorPreco = carros[i].preco 
            nomeMaiorVel = carros[i].modelo
        }
        else if ((carros[i].fabricacao>dataInicial) && (carros[i].fabricacao< dataFinal)){
         console.log(`os veículos encontrados entre essas datas foram ${carro.modelo}`)   

        }
        if (carros.length == 0) {
            console.log(`Nenhum carro foi informado`)
        } else {
            console.log(`A média é de ${soma/carros.length}`)
        }


}
}

//Rafael Soares Oliveira/ cód 22620/ C.C/ Turma B
//Não consegui fazer todas as partes do código