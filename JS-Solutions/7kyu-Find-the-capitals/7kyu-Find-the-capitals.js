// Solution

var capitals = function (word) {
    let array = []
    let wordArray = word.split("")

    for(let i = 0; i < wordArray.length; i++){
      if(wordArray[i] === wordArray[i].toUpperCase()){
        array.push(i)
      }
    } return array

    //  return word.split("").filter((x,index) => (x === x.toUpperCase()))
      // Write your code here
  }
  //loop through word
