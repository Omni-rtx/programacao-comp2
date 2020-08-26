function exe3(){
    var vetor=[]
    for (var i=0;i<5; i++){
        vetor.push({
            sexo: prompt("informe M para Masculino e F para feminino"),
            altura: Number(prompt("informe a alturado habitante")),
            idade: Number(prompt("informe a idade do habitante")),
            olhos: prompt("informe a cor dos olhos, (C para castanhos,V p verde e A p/ azuis")
        })

    }
}
//entrada de dados do vetor, de cima até aqui.
var somaIdade=0 //Soma as idades
var cont=0 //Conta quantas mulheres com salário superior a 1500
var maiorIdade=vetor[0].idade //assuma que maior idade é do primeiro habitante
var qtde=0
var qtdeM=0
for (var i=0; i<5; i++){
    if ((vetor[i].olhos=="c") && (vetor[i].altura>1.60)){
        somaIdade= somaIdade+ vetor[i].idade
        cont++
    }
    if (vetor[i].idade> maiorIdade){
        maiorIdade= vetor[i].idade
    }
    if (((vetor[i].sexo == "F") && (vetor[i].idade >= 20) && (vetor[i].idade <= 45)) ||
            ((vetor[i].olhos == "V") && (vetor[i].altura < 1.70))) {
            qtde++
        }
        if (vetor[i].sexo=="M"){
            qtdeM++
        }

    
}
console.log (`resultado do item 1 ${somaIdade/cont}`)
console.log(`maior idade ${maiorIdade}`)
console.log(`resultado item 3${qtde}`)
console.log(`resultado do item 4 ${atdeM/5*100}`)
//Fim

