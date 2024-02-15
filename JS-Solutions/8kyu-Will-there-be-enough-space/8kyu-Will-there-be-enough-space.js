//Solution

function enough(cap,on,wait){
    let leftoverSpace = (cap -on);

    return leftoverSpace >= wait ?  0 : Math.abs(leftoverSpace - wait)
}
