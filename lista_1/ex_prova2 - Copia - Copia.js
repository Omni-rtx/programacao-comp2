function prova2() {
    var produtos = []   
    do {  
        var produtoBF = new Object()
        produtoBF.codigo = Number(prompt('Informe o código do produto'))    
        var achou = false     
        for (var i = 0; i < produtos.length; i++) {
            if (produtoBF.codigo == produtos[i].codigo) {
                achou = true 
                break 
            }
        }
        if (achou == false) { 
            produtoBF.nome= prompt('Informe o nome do produto')   
            produtos.push(produto)
        } else { 
            alert('produto já cadastrado')
            continue 
        }
        var resp = prompt('Deseja continuar ? (s/n)')
    }
    while (resp != 'n')

    do{
    var produtoDM= new Object()
    produtoDM.codigo = Number(prompt('Informe o código do produto'))    
        var achou = false     
        for (var i = 0; i < produtos.length; i++) {
            if (produtoDM.codigo == produtos[i].codigo) {
                achou = true 
                break 
            }
        }
        if (achou == false) { 
            produtoDM.nome= prompt('Informe o nome do produto')   
            produtos.push(produto)
        } else { 
            alert('produto já cadastrado')
            continue 
        }
        var resp = prompt('Deseja continuar ? (s/n)')
    }
    while (resp != 'n')
}
//Rafael Soares Oliveira/ cód 22620/ C.C/ Turma B
//Não entendi o exercício exatamente e só consegui fazer a entrada de dados
    



