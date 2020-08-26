function exe5(){
    // entrada de dados
    var linguagem = []
    for (var i = 0; i < 7; i++) {
        linguagem.push(Number(prompt("Informe o código do aluno na disciplina de linguagem")))
    }
    var logica = []
    for (var i = 0; i < 5; i++) {
        logica.push(Number(prompt("Informe o código do aluno na disciplina de lógica")))
    }
    // processamento - intersecção
    var interseccao = []
    for (var i = 0; i < 7; i++) { // percorrendo o vetor
        // para cada elemento do vetor linguagem
        // recupera a posição do elemento da linguagem presente no vetor logica
        var posicao = logica.indexOf(linguagem[i])
        if (posicao != -1) { // está presente no vetor de lógica
            // insere o elemento no vetor intersecção
            interseccao.push(logica[posicao]) // interseccao.push(linguagem[i])
        }
    }
    console.log(`Alunos presentes nas duas disciplinas - ${interseccao}`)


}


function exe6(){
    // entrada de dados
    var nome = []
    var venda = []
    var percentual = []
    for (var i = 0; i < 5; i++) {
        nome.push(prompt("Informe o nome do vendedor"))
        venda.push(Number(prompt("Informe valor das vendas do vendedor")))
        percentual.push(Number(prompt("Informe valor do percentual de comissão do vendedor")))
    }
var total = 0
    var comissao = 0
    var menorComissao = 100000
    var nomeMenorComissao
    var maiorComissao = 0
    var nomeMaiorComissao
    for (var i = 0; i < 5; i++) { // percorre o vetor
        // calcula o total
        total = total + venda[i]
            // calcula comissao
        comissao = (venda[i] * percentual[i]) / 100
        console.log(`O vendedor ${nome[i]} vai receber de comissão ${comissao}`)
            // verifica se é a menor comissão entre todas
        if (comissao < menorComissao) {
            menorComissao = comissao
            nomeMenorComissao = nome[i]
        }
        // verifica se é a maior comissão entre todas
        if (comissao > maiorComissao) {
            maiorComissao = comissao
            nomeMaiorComissao = nome[i]
        }
    }
    console.log(`Total de vendas ${total}`)
    console.log(`Menor comissão ${menorComissao} de ${nomeMenorComissao}`)
    console.log(`Maior comissão ${maiorComissao} de ${nomeMaiorComissao}`)


}


function exe2() {
    var habitantes=[]

    for (var i=0; i<3;i++){
        habitante.salario= Number(prompt("informe salario"))
        habitante.idade= Number(prompt("informe idade"))
        habitante.filhos= Number(prompt("informe filhos"))
        habitante.sexo= prompt("informe sexo")
        //insere no vetor
        habitantes.push(habitante)
    }
    console.log(habitantes)


    var somaSalario=0
    var somaFilhos=0
    var maiorSalario= habitantes[0].salario
    for (var i=0;i<3;i++){
        somaSalario=somaSalario +habitantes[i].salario
        somaFilhos= somaFilhos+ habitantes[i].filhos
        if (habitantes[i].salario> maiorSalario){
            maiorSalario= habitantes[i].salario
        }
        if ((habitantes[i].sexo==`f`) && (habitantes[i].salario>1000)){
            qtdeM1000++
        }
    }
    console.log(h`Média ${somaSalario/3}`)
    console.log(`Média de filhos ${somaSalario/3}`)
    console.log(`média de salario ${somaFilhos/3}`)
    console.log(`% Mulheres maior 1000 ${qtdeM1000}/3*100`)
}