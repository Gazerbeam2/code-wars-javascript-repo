//Solution

function findShort(s){
    let sArray = s.split(" ").sort((a,b) => a.length - b.length)
    return sArray[0].length;
}


//Alternative Solution

function findShort(s){
    return Math.min(...s.split(' ').map(s => s.length))
}
