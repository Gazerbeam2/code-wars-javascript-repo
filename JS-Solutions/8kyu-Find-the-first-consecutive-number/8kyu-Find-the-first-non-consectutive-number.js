//Solution

function firstNonConsecutive (arr) {
    for(let i = 0; i <=arr.length; i++){
      if((i > 0) && ((arr[i]) - (arr[i - 1]) > 1)){
        return arr[i]
      }
    } return null
  }

  //Loop through the array
  //make sure it starts at the second irteration
  //If the difference between the current number and the previous number is greater than 1 return [i]
  //else return null

  function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }
