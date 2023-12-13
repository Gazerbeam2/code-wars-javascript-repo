//Square(n) Sum

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9

function squareSum(numbers){
  return numbers.reduce((acc,c) => acc + c**2, 0)
}

____________________________________________________________________________________________________________________________

//Function 2 - squaring an argument

//Now you have to write a function that takes an argument and returns the square of it.

function square(num){
    return num * num
  }

_____________________________________________________________________________________________________________________________

//Convert a Boolean to a String

//Implement a function which convert the given boolean value into its string representation \

function booleanToString(b){
  return b.toString()
}

___________________________________________________________________________________________________________________________________

//Sum of two lowerst positive integers

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers){
          numbers.sort(function(a,b){return a - b });
          return numbers[0] + numbers[1]
}
