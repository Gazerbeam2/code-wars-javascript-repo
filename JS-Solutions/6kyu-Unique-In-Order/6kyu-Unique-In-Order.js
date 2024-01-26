//Intial Attempt

var uniqueInOrder=function(iterable){
    let emptyArray = []

    for(let i = 0; i <= iterable.length; i++){
      if(iterable[i] !== emptyArray([i])){
        emptyArray.push(iterable[i])
      }
      return emptyArray
    }


    //your code here - remember iterable can be a string or an array
  }

  //Refactored Solution

  var uniqueInOrder = function(iterable){
    let uniqueArray = []

    for(let i = 0; i < iterable.length; i++){
        if(i === 0 || iterable[i] !== iterable[i - 1]){
            uniqueArray.push(iterable[i])
        }
    }
        return uniqueArray
  }

  //One Line Solution

  var uniqueInOrder = function(iterable){
    return [...iterable].filter((a,i) => a !== iterable[i-1])
  }

  /*iterable takes in a form of list or string. So, we have to apply the spread operator (also known as splat operatior in other languages) to convert string into list whilst list remains the same.

The filter method then has value (a) and its index (i) as parameter, so it will check whether the current value is not strictly equal to its previous one. To access the previous value, one should have the array / string (iterable) and its previous index (position) represented as i - 1 at hand.

It is worth noting that for the 1st index (i - 1 --> -1 since i starts from 0) , iterable[i - 1] represents undefined because the subscript value of accessing arrays cannot be < 0 . So, the 1st iteration also results in true, thus is always returned as 1st element of the array. */

function uniqueInOrder(it) {
    var result = []
    var last

    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }

    return result
  }
