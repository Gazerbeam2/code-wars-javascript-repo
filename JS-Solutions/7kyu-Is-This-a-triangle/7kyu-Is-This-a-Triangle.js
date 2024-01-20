//Solution

function isTriangle(a,b,c){
    if(a * b * c <= 0){
        return false
    }else if(((a + b) > c) && ((b + c) > a ) && ((a + c) > b)){
        return true;
    }else{
        return false
    }
}

//Refactored Solution

function isTriangle(a,b,c){
    return a * b * c <= 0 ? false : (((a + b) > c) && ((b + c) > a) && ((a + c) > b)) ? true : false
}

//Alternative Solution

var isTriangle = (a,b,c) => Math.max(a,b,c) > (a+b+c)/2
