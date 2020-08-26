function exe_nome(){
    var nome1=prompt("escreva seu nome")
    var nome2=prompt("escreva seu nome")
    var nome3=prompt("escreva seu nome")
    if ((nome1<nome2) && (nome1<nome3)){
        if (nome2<nome3){
            console.log(`${nome1} ${nome2} ${nome3}`)
        }else{
            console.log(`${nome1} ${nome3} ${nome2}`)
        }

    }else if (nome2<nome3){
        console.log(`${nome2} ${nome3} ${nome1}`)
    }else{
        console.log(`${nome2} ${nome1} ${nome3}`)
    }
} else if (nome2<nome1){
    console.log(`${nome3} ${nome2} ${nome1}`)
}else{
    console.log(`${nome3} ${nome1} ${nome2}`)
}

