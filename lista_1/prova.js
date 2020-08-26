function prova() {
    // vetor de guarda os produtos
    var produtos = []
        // não sabemos quantos produtos serão criados
        // entrada de dados
    do {
        // cria um produto
        var produto = new Object()
        produto.codigo = Number(prompt('Informe codigo'))
            // vamos verificar se o código já existe cadastrado no vetor
        var achou = false // assume que o código não existe
            // vamos procurar no vetor
        for (var i = 0; i < produtos.length; i++) {
            if (produto.codigo == produtos[i].codigo) {
                achou = true // achei
                break // não precisa continuar procurando
            }
        }
        if (achou == false) { // não achei o código
            produto.nome = prompt('Informe nome')
            produto.preco = Number(prompt('Informe preço'))
            produto.qtde = Number(prompt('Informe qtde'))
            produto.tipo = prompt('Informe tipo')
                // cria um vetor com os dados do usuário
            var auxiliar = prompt('Informe validade no formato dd/mm/aaaa').split('/')
                // armazena a validade já como objeto Date
            produto.validade = new Date(auxiliar[2], auxiliar[1] - 1, auxiliar[0])
                // insere o produto no vetor
            produtos.push(produto)
        } else { // não podemos cadastrar
            alert('Código já existe')
            continue // não pede para usuário responder se quer continuar
        }
        var resp = prompt('Deseja continuar ? (s/n)')
    }
    while (resp != 'n')

    // processamento
    var soma = 0 // variável para calcular a média dos preços dos produtos
    var menorQtde = produtos[0].qtde // a menor qtde é a do 1o. produto
    var nomeMenorQtde = produtos[0].nome // o nome da menor qtde é o do 1o. produto

    // obtem a data inicial
    // cria um vetor
    var vetorDI = prompt("Informe a data inicial").split('/')
    var dataInicial = new Date(vetorDI[2], vetorDI[1] - 1, vetorDI[0])
        // obtem a data final
        // cria um vetor
    var vetorDF = prompt("Informe a data final").split('/')
    var dataFinal = new Date(vetorDF[2], vetorDF[1] - 1, vetorDF[0])

    // percorre o vetor de produtos procurando ...
    for (var i = 0; i < produtos.length; i++) {
        // soma os preços
        soma = soma + produtos[i].preco
            // verifica se tem produto com estoque menor
        if (produtos[i].qtde < menorQtde) {
            menorQtde = produtos[i].qtde // atualiza menor qtde
            nomeMenorQtde = produtos[i].nome // atualiza nome menor qtde
        }
    }
    if (produtos.length == 0) {
        console.log(`Nenhum produto informado`)
    } else {
        console.log(`A média é de ${soma/produtos.length}`)
    }
    console.log(`Nome do produto com menor qtde ${nomeMenorQtde}`)

    // 1. calcula e mostrar o nome do produto com menor qtde em estoque
    // 2. mostrar os produtos com validade entre um intervalo de data (data inicial e data final) informada pelo usuário
    // 3. mostrar todos os produtos contendo os 3 primeiros caracteres do tipo de produto informado pelo usuário
}