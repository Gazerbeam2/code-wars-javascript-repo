//Solution

function isPalindrome(x) {
    let ReversedString = x.split('').reverse().join('')
    return ReversedString.toLowerCase() === x.toLowerCase()
  }

  //String needs to be equal
  //String needs to be forced to lowercase to check
  //Create variable for reversed string
  //reverse string see if its equal to current string

//Ternary Solution

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
