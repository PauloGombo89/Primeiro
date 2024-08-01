function NumeroPares(array){

    let pares = []

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            pares.push(array[i])
        } 
    }

    return pares   
}




