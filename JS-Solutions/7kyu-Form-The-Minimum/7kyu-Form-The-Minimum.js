function minValue(values){
    let set = new Set (values);
    let newArray = Array.from(set)
     let sortedArray = newArray.sort((a,b) => a - b)
     let string = sortedArray.join("")
    return parseInt(string)

    //your code here
  }

  //turn array into Set to remove duplicates
  //turn set back into array using Array.from
  //sort array
  //turn the array into a string to concatenate the numbers
  //convert the numbers into a string
