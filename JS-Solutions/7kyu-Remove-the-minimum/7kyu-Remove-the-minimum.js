//First Attempt at a Solution

function removeSmallest(numbers) {

    let lowestnumber = Math.min(...numbers)
    let index = numbers.indexOf(lowestnumber);

    if (numbers.length === 0){
      return [];
    }else{
      numbers.splice(index,1)
    }


   // return [];
  }

  //Find the lowest number with Math.min
  //Find the index of that number
  //Check the length of the Array to see if its empty return a empty Array if it is
  //

//Second Solution Attempt:

function removeSmallest(numbers) {

    let copiedArray = [...numbers]
    let lowestnumber = Math.min(...copiedArray)
    let index = numbers.indexOf(lowestnumber);

    if (copiedArray.length === 0){
      return [];
    }else{
      copiedArray.splice(index,1)
    }
    return copiedArray


  }

  //Create a copied array using the spread operator
  //Find the minimum number and its index within the Array
  //Check if the length of the Array is equal to 0 and return it as a a empty array
  //




  //Alternative Solutions
