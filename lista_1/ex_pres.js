function exe2(){
var vetor =[]
//entrada de dados
for (var i=0; i<7; i++){
    //processamento
    var mult2=[]
    var mult3=[]
    var mult23=[]
    // percorre o vetor
    for (var i=0; i<7; i++){
        if (vetor[i]%2==0){
            mult2.push(vetor[i])
        }
        if (vetor[i]%3==0){
            mult3.push(vetor[i])
        }
        if ((vetor[i]%2==0)&& (vetor[i]% 3== 0)){
            mult23.push(vetor[i])
    }
}
console.log(`multiplos de 2 ${mult2}`)
console.log(`multiplos de 3 ${mult3}`)
console.log(`multiplos de 2 e 3 ${mult23}`)
}
}

function exe4(){
    var vetor=[]
    for (var i=0; i<15; i++){
        vetor.push(Number(prompt("informe um número")))
    }
    //processamento
    var posicoes = []
    for (var i=0; i<15; i++){
        if (vetor[i]==30){
            posicoes.push(i)
        }
    }
    console.log (`posicoes dos ${posicoes.lenght}números 30 encontrados: ${posicoes}`)
        
    
}

function exe3(){
    //entrada de dados
    var nome= []
    var qtde= []
    for (var i; i<10; i++){
        nome.push(prompt("informe o nome do produto"))
        qtde.push(Number(prompt("informe qtde do produto")))
    }
    //processamento
    var codigo
    codigo= Number(prompt("informe código do cliente"))
    do{
        var nomeVenda= prompt("informe o nome do produto para venda")
        //verifica se o produto existe
        var pos= nome.indexOf(nomeVenda)
        if (pos== -1){
            console.log("produto não existe")
        }
        else{
            //quanto tem em estoque
            var estoque= qtde [pos]
            var qtdeVenda=Number(prompt("informe qtde para compra"))
            if (qtdeVenda > estoque){
                console.log(`estoque não suportado - ${estoque}`)
            }else{
                //att o estoque
                qtde[pos]= qtde[pos]-qtdeVenda
                console.log(`venda realizada com sucesso`)
            }
        }
        codigo= Number(prompt("nforme código do cliente. Digite 0 para encerrar"))
    }
    while (codigo !=0)

}






