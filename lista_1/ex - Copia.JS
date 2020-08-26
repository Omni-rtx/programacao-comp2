function exe18(){
    var idade
    var sexo
    var salario
    var contador=0
    var somaSalario=0
    var maioridade=0
    var menoridade=200
    var qtdeM200=0
    idade = Number(prompt("infrome sua idade"))
    do{
        contador++
        sexo=(prompt("informe seu sexo"))
        salario = Number (prompt("informe seu salário"))
        //atualiza o menor salario
        if (salario< menorSalario){
            menorSalario=salario
            idadeMenorSalario=idade
            sexoMenorsalario
        }
        somaSalario= somaSalario + salario
        if ((sexo=='f') && (salario<200)){
            qtdeM200++
        }
        //ifs
    }   
     if (idade>maioridade){
        maioridade=idade   //atualiza
    }if (idade<menoridade){
        menoridade= idade//atualiza
    }
    idade = Number(prompt("infrome sua nova idade, digite idade negativa para encerrar"))
    
    while (idade >=0)
    //mostra resultados
    console.log(`A média salarial é ${somaSalario/contador}`)
    console.log(`A maior idade é ${maioridade} e a menor idade é ${somaSalario/contador}`)
    console.log(`A maior idade é ${maioridade} e a menor idade é ${somaSalario/contador}`)
    console.log(`A maior idade é ${maioridade} e a menor idade é ${somaSalario/contador}`)

    
}






function exe1_vetor(){
    var vetor = [] // vetor
    var i = 0 // índice do vetor
        // entrada de dados
    while (i < 6) {
        vetor.push(Number(prompt("Informe um número")))
        i++
    }
    // cálculo dos pares e ímpares
    var pares = []
    var impares = []
    i = 0
    while (i < 6) {
        if (vetor[i] % 2 == 0) {
            pares.push(vetor[i]) // insere no vetor par
        } else {
            impares.push(vetor[i]) // insere no vetor ímpar
        }
        i++
    }
    console.log(`Elementos pares ${pares} - Qtde: ${pares.length}`)
    console.log(`Elementos ímpares ${impares} - Qtde: ${impares.length}`)

}

