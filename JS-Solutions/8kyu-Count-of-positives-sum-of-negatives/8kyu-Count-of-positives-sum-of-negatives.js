//Solution

function countPositivesSumNegatives(input) {
    let newArray = []
    let count = 0
    let negativeNumberSum = 0 //hold negative NumberSum

    for(let i = 0; i <= input.length;i++){
      if(input[i] > 0){
        count += 1
      }else if (input[i] < 0){
        negativeNumberSum += input[i]
      }else{
        return negativeNumberSum
      }
      // newArray.push(negativeNumberSum)
    }return newArray.push(count)
  }

  //Needs to be new array
  //Create a new array
  //Needs to know the positive numbers
  //Use reduce for the negative numbers
  //The number of the current array is positive add that to a counter variable and push that onto a empty array
  //If the number is negative add it to a variable ad push it .


//Correct Solution

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }

    return [positive, negative];
}
