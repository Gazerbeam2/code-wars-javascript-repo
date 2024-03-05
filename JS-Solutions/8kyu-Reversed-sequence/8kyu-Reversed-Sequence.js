//Solutions

const reverseSeq = n =>{
    let counter = []
    while(n > 0){
        counter.push(n);
        n--
    }
    return counter;
}

const reverseSeq = n =>{
    let arr = []
    for(let i = n; i > 0; i--){
        arr.push(i);
    }return arr;
}
