function problem(x){
    if(typeof x === "string"){
        return "Error"
    }else{
        return (x * 50) + 6
    }
}

//Refactored Ternary

function problem(x){
    return typeof x === "string" ? "Error" : (x * 50) + 6
}

//x should be a number
//Check if x  is a string and if so return "Error"
//Calculate the value of x and return it
