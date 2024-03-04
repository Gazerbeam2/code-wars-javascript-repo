//Initial incorrect Solution

function mergeArrays(arr1, arr2) {
    // let newSet = new Set(concatArray)
     let newSet = new Set(arr1.concat(arr2))
     return newSet

   }
//Correct solution

function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }
