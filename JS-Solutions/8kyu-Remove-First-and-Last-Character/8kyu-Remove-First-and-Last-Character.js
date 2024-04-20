function removeChar(str){
    /*let WordArray = str.split("")
    let removedFirstLast = []

    for(let i = 1; i < WordArray.length - 1;i++){
      removedFirstLast.push(WordArray[i])
    }

     return removedFirstLast.join("")*/

     return str.split("").filter((x,index,array) => (index !== 0) && index !== array.length-1).join("")

    //You got this!

   };
