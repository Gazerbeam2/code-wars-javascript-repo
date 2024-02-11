// Solution

function remove (string) {

    let newarray = string.split('')


    if(newarray[newarray.length -1] === "!"){

      newarray.pop()

       } return newarray.join("")
  }


  //Split string into a arry
  //Check last index of a array
  //If last index of a string is ! pop the value off
  //Join the array and then return it

  //RegEx

  const remove = s => s.replace(/!$/, '');
