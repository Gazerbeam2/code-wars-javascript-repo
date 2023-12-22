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

//You Can't Code Under Pressure #1
//Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i){
  // i will be and integer. Double it and return it.

  return i * 2;
}

_______________________________________________________________________________________________________________________

//Opposites Attract

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//% is the modulo/remainder operator. It gives us the remainder (what's left over) after a number is divided by another number.

//If an even number is divided by 2, there is nothing left over, the remainder will always be 0. (60/2 = 30.00)

//If an odd number is divided by 2, there will always be a remainder of 0.5 or 1/2. (61/2 = 30.50)

//So... if (Modulus 2 of flower1) !== is NOT equal to (% 2 of flower2) then one flower has a remainder of 0, and the other has a remainder of 0.5.

//Meaning, one flower has an even number of petals, the other, odd. True is returned, they are in love!.

//else if (flower1 % 2) === (flower2 % 2), false is returned, they are not in love :( .

_________________________________________________________________________________________

//Grasshopper-Personalized Message

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message:
//case: Name equals owner; return: 'Hello boss'
//case: otherwise; return: 'Hello guest'

function greet(name,owner){
  if(name === owner){
    return 'Hello boss'
  }
  else{
    return 'Hello guest'
  }
}

 /*function greet(name,owner){
  return name === owner? 'Hello boss' : 'Hello guest';
} */
______________________________________________________________________________
