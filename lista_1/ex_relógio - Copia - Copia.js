function ex_Data(){
    var data1= prompt("informe data 1(dd/mm/aa)")
    var data2=prompt("informe data 2(dd/mm/aa)")
    //cria vetor data1, data2
    var vetor1=data1.split('/')
    var vetor2=data.split('/')
    // cria date de vetor1
    var d1= new date(vetor1[2], vetor1[1]-1, vetor1[0])
    var d2= new date(vetor2[2], vetor2[1]-1, vetor2[0])
    if (d1>d2){
        console.log("A primeira parte é maior")
    }
    else{
        console.log("A segunda é maior")
    }
}