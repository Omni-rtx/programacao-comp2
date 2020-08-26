function data(){
    //entrada de dados
 var consultas=[] //vetor no plural, pois guarda vários valores de consulta
 for (var i=0;i<10;i++){
     //cria uma consulta
     var consulta=new Object()// objeto no singular
     consulta.codigo= Number(prompt('informe o tratamento da consulta'))
     consulta.diagnostico=prompt('informe o diagnóstico da consulta')
     consulta.tratamento=prompt('informe o tratamento da consulta')
     consulta.data=prompt('informe a data da consulta dd/mm/aaaa')
     //insere objeto no vetor
     consultas.push(consulta)
 }   
 //processamento de dados
 var dataInicial=prompt('informe a data inicial')
 var dataFinal=prompt('informe data final')
 //convertendo string (textos em laranja) para VETOR
 var dataIniciaVetor=dataInicialTexto.split('/')
 var dataFinalVetor=dataFinalTexto.split('/')
 //vamos criar objetos de Date
 var dataInicial= new Date(dataInicialVetor[2], dataInicialVetor[1]-1, dataInicialVetor[0])
 var dataFinal=new Date(dataFinalVetor[2], dataInicialVetor[1]-1, dataInicialVetor[0])
 //percorrer vetor...?
 for (var i=0; i< consulta.lenght; i++){
     //converte data da consulta em vetor
     var dataVetor= consulta[i].data.split('/')
     //converte vetor em objeto date
     var dataConsulta= new Date (dataVetor[2], dataVetor[1]-1, dataVetor[0])
     if ((dataConsulta>= dataInicial && (dataConsulta <= dataFinal))){
         console.log(consulta[i])
     }
 }


}

function calculoidade(){
    var nasceVetor=prompt('informe nascimento dd/mm/aaaa').split('/')
    var nasce= new Date(nasceVetor[2], nasceVetor[1]-1, nasceVetor[0])
    var agora= new Date()
    var idade=agora.getFullYear()-nasce.getFullYear()
    if (nasce.getMonth()>agora.getMonth()){
    idade-- //subtraí
    }
    if (nasce.getMonth()==agora.getMonth() && (nasce.getDate()>agora.getDate())){
        idade--

    }
    console.log(`minha idade${idade}`)



}
