function findAverage(array){
    if(array[0] > 0){
        return array.reduce((a,c) => a + c)/array.length;
    }
    else{
        return 0
    }
}

//Alterative Solutions

let find_average = (array) =>{
    return array.length === 0 ? 0 : array.reduce((acc,ind) => acc + ind, 0)/array.length
}
