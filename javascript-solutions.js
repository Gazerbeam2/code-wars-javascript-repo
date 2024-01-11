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

//Implement a function which convert the given boolean value into its string representation

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

//Odd or Even?
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even"
//If the input array is consider it as: [0](array with a zero)

function oddOrEven(array) {
  let sum = array.reduce((acc,c) => acc + c, 0)
  return sum % 2 === 0 ? "even" : "odd";
   }

   ___________________________________________________

  //Find the middle element
  //As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

  //The input to the function will be an array of three distinct numbers

  function gimme (triplet){
    let minValue = Math.min(...triplet);
    let maxValue = Math.max(...triplet);

    for(let index = 0; index < triplet.length; index++){
      if(triple[index] > minValue && triplet[index] < maxValue){
        return index;
      }
    }
  }

  /*function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1]) //Splice works better probably
}*/

_____________________________________________________________________________________

//Round up to the next multiple of 5
//Give an integer as input, can you round it to the next(meaing, "greater than or equal") multiple of 5?

function roundToNext5(n){
  return Math.ceil(n / 5) * 5;
}

/*function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}*/
____________________________________________________________________________________________________________________________________

//Beginnner Series #4 Cockroach
/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (=floored) */

function cockroachSpeed(s){
    return Math.floor(s * 27.778)
}

_________________________________________________________________________________________________________________________________________

/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */

//create a counter variable
//iterate through the array
//for every item in the array, check if the value is trie or false (including null or undefined)
//if the value is true, add +1 to counter variable and if not true skip and keep moving
//return the variable

//Mistake made: Left the return statement inside the For Loop so it returns the value before the loop was able to fully complete.

function countSheeps(sheep) {
  let sum = 0
 for(let i = 0; i <= sheep.length; i++){

   if(sheep[i] === true){
     sum += 1;

   }

 }
 return sum
 }

 ________________________________________________________________________________________________________________________________________

 //Complete the solution so that the function will break up camel casing, using a space between words.

 function solution(string){
  return (string.replace(/([A-Z])/g, '  $1'));
 }

 ____________________________________________________________________________________________________

 /* Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages. */

var isSquare = function(n){
  if(Math.sqrt(n) % 1 === 0){
  return true;
}
return false;
}

function isSquare(n){
  return Math.sqrt(n) % 1 === 0;
}

__________________________________________________________________________________________

/* This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors

Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number. */
function checkForFactor (base, factor) {
  return base % factor === 0
  // code here
}

________________________________________________

//Vowel Count
//Return the number(count) of vowels in the given string.
//We will consider a,e,i,o,u as vowels for this Kata
//The input string will only consist of lower case letters and/or spaces.

function getCount(str){
  let count = 0;
  for(let i = 0; i <= str.length; i++){
    if(str[i] === "a"){
      count +=1
  }else if(str[i] === "e"){
    count += 1
  }else if(str[i] === "i"){
    count += 1
  }else if(str[i] === "o"){
    count += 1
  }else if (str[i] === "u"){
    count += 1
  }
}
return count;
}


function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }

 _________________________________________________________________________________________--

/* Given an array of integers you solution should find the smallest integer. */

class SmallestIntegerFinder{
  findSmallestInt(args){
    let sortedArray = args.sort((a,b) => a -b)
    return sortedArray[0];
  }
}

class SmallestIntegerFinder{
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

_____________________________________________________________________
