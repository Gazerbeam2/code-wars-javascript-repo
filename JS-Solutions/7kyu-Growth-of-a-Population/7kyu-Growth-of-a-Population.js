//Attempted Solution

function nbYear(p0, percent, aug, p) {

    for(let i = 1; p0 <= p; i++){
     Math.ceil(p0 + (p0 * percent + aug));
      return i
    }
}

//Solution

function nbYear(p0, percent, aug, p){
    for(var years = 0; p0 < p; year++){
        p0 = Math.floor(p0 + p0 * percent /100 + aug);
    }
    return years
}

//Alternative Solution

function nbYear(p0, percennt, aug, p){
    var count = 0;
    while(p0 < p){
        p0 = Math.floor((1 + percent / 100) * p0 + aug);
        count++
    }
    return count;
}
