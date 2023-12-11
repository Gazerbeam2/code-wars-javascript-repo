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
