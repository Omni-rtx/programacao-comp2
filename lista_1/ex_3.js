function exe3(){
var a, b, c, d
var grupo=0
while (grupo<5){
    a = Number(prompt("Informe 1o. número"))
    b = Number(prompt("Informe 2o. número"))
    c = Number(prompt("Informe 3o. número"))
    d = Number(prompt("Informe 4o. número"))

    // ordenação crescente
    var troca
    var contador = 0 // varia de 0 a 3
    while (contador < 4) {
        if (a > b) {
            troca = a
            a = b
            b = troca
        }
        if (b > c) {
            troca = b
            b = c
            c = troca
        }
        if (c > d) {
            troca = c
            c = d
            d = troca
        }
    }
    alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
    alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
    grupo++
}
}

function exe6(){
    var vtVista=0
    var vtPrazo=0
    var codigo
    var preco
    for (var contador=1; contador<= 15; contador++){
    codigo= prompt("informe V para à vista e P para à prazo")
    preco= number (prompt("informe o preço"))
    switch(codigo){
        case "V":
             vtVista= vtVista + preco
             break
             case "P":
                 vtPrazo= vtPrazo + preco
                 break
    }
}
    console.log(`valor total a vista ${vtVista}`)
    console.log(`valor total a vista ${vtPrazo}`)
    console.log(`valor total a vista ${vtVista + vtPrazo}`)
    console.log(`valor total a vista ${vtPrazo / 3}`)

}


function exe15 (){
    var i
    var resposta
    var sexo
    var qtdeSim=0 //qtde de respostas SIM
    var qtdeNao=0
    var qtdeFS=0
    var qtdeMN=0
    for(var i=1;i<=15; i++){
        respota = prompt ("informe S para Sim ou N para Não")
        sexo = primpt ("informe F para feminino ou M para masculino")
        switch (resposta){
            case 'S': qtdeSim++
            if (sexo=='F'){
                qtdeFS++
            }else{ qtdeMS++ 

            }
            break
            case 'N': qtdeNao++
            if (sexo=='M'){
                if (sexo=='m'){
                    qtdeMN++
                }

            }
            break
        }
        console.log(`qtde de respostas S ${qtdeSim}e qtde de respostas N ${qtdeNao}`)
        console.log (`qtde de mulheres que responderam S ${qtdeFS}`)
        console.log(`% de homens que responderam N entre todos os homens ${qtdeMN(qtdeMN+qtdeMS)/100}`)
    }
}

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









 
