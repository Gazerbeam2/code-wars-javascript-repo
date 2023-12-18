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

____________________________________________________________________________________________________________________________

//Clock shows h hours, m minutes and s seconds after midnight

//Your task is to write a function which returns the time since midnight in milliseconds

function past(h, m, s){
  let hoursToMilliseconds = h * 3600000;
  let minutesToMilliseconds = m * 60000;
  let secondsToMilliseconds = s * 1000.;

  return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds;
}

________________________________________________________________________________________________________

//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message(as a string) that says:
//"found the needle at position " plus the index it found the needle,so:

function findNeedle(haystack){
  for (let i = 0; i < haystack.length; i++){
    if(haystack[i] == "needle"){

      return `found the needle at position ${i}`
    }
  }
}

____________________________________________________________________________________________________________

//Reverse List Order
//In this kata you will create a function that takes in a list and returns a list with the reverse order

function reverseList(list){

  list.reverse()
  return list
}

___________________________________________________________________________________________________
