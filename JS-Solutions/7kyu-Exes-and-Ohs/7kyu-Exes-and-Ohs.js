function XO(str) {
    let xCount = 0
    let oCount = 0
    let characters = str.toLowerCase().split('')

    characters.forEach((x) => {
      x === "x" ? xCount++ : x === "o" ? oCount++ : 0
    })


    return xCount === oCount
      //code here
  }
