//Added Solution

function persistence(num){
    var times = 0;

    num = num.toString();

    while(num.length > 1){
        times++;
        num = num.split('').map(NUmber),reduce((a,b) => a * b).toString();
    }

    return times;
}

//Alternative Solutions

function persistence(num){
    for(var i = 0; num > 9; i++){
        num = num.toString().split('').reduce((t,c) => c *t);
    }
    return i;
}
