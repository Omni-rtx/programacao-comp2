chefe()
function chefe(){
    var vetor= [] // vetor de escopo global- vetor que iremos passar os parâmetros da função
    do {
        var opcao= Number(prompt("digite req1[1] re2[2] req3[3] req4[4] req5[5]"))
        switch (opcao){
            case 1: requisito1(vetor)
            break
            case 2: requisito2(vetor)
            break
            case 3: requisito3(vetor)
            break
            case 4: requisito4(vetor)
            break
            case 5: requisito5(vetor)
            break
            case 6: console.log(`Programa vai ser encerrado`)
            break
            default: console.log (`opcao inválida`)
        }
    }
    while (opcao !=6)
}


function requisito1(vet){ //vet aponta para vetor

}

function requisito2(vet){ //vet aponta para vetor
    
}

function requisito3(vet){ //vet aponta para vetor
    
}

function requisito4(vet){ //vet aponta para vetor
    
}

function requisito5(vet){ //vet aponta para vetor
    
}