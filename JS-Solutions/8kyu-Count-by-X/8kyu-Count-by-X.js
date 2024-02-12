//Initial Solution

function countBy(x,n){
    let z = [];

    for(let i = 0; i <= n; i++){
        z.push(n * x)
    }

    return z;
}

//Second Solution

function countBy(x,n){
    let z = [];

    for(let i = 1; i <= n; i++){
        z.push(i * x)
    }
    return z;
}
