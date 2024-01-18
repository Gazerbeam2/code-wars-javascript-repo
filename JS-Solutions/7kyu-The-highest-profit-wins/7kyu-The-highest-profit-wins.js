//Attempted Solutions

function minMax(arr){
    let min = Math.min(arr);
    let max = Math.max(arr);

    return     //New array with both these values, Tried to do map.
}

function minMax(arr){
    let sorted  = arr.sort((a,b) => a - b)
      return sorted[0].concat(sorted - 1);              //Tried to concat the first index and the last index into a new array
     // return [0,0]; // fix me!
    }


// Solutions

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]; /* Three dots like that is "spread syntax", basically it allows an iterable (like an array in this case) to be expanded into multiple arguments in certain situations.

    Read more about it on mdn here, I think the example given is a good demonstration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */
}

//Not as time efficient

function minMax(arr){
    var a = arr.sort(function(a,b){return a-b});
    return [a[0], a[a.length-1]];
}
