function exe_6 () {
    //entrada de dados
    //quando não se sabe quantas vezes irá fazer o ex. use o DO WHILE
    var contas=[]
    var clientes=[]
    var contador=0
    do{
        var pizza=new Object()
        pizza.numero=contador
        contador++
        pizza.número=Number(prompt("informe número da conta"))
        pizza.cliente=Number(prompt("informe o cliente da conta"))
        pizza.saldo= Number(prompt("informe o saldo da conta"))
        contas.push(pizza)
        console.log(`cliente cadastrado`)
        //verificar se o cliente já existe
        //percorrer o vetor de clientes
        var achei=false
        for (var i=0; i<clientes.length;i++){
            if (clientes[i].numero==pizza.cliente){
                achei=true
                break
            }

        }
        if (achei==false){
            //cliente não existe
            var objeto= new Object()
            objeto.numero= pizza.cliente
            objeto.nome=prompt("informe o nome do cliente")
            objeto.telefone=prompt("informe o telefone do cliente")
            objeto.endereco=prompt("informe o endereço do cliente")
            //adiciona o cliente ao vetor
            clientes.push(objeto)


        }
        var resp= prompt("deseja conrinuar? s p/ sim e n p/ não")
    }
    while (resp !='n')
    console.log(contas)
    console.log(clientes)
}