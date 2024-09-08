function warnTheSheep(queue) {
    for(let i = queue.length - 1; i>=0; i--){
      if((queue[i] === "wolf") && (i === queue.length - 1)){
        return "Pls go away and stop eating my sheep"
      } else if(queue[i] === "wolf"){
        return `Oi! Sheep number ${ queue.length - 1 - i}! You are about to be eaten by a wolf!`
                }
    }
  }

  //Alternative Solutions

  function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }


  //We to loop through the array
  //Start at the end of the array and go backwards
  //If last element of the array is

  //Two conditions have to be filled for this response
  //Current element has to match "wolf" = respond with "Response 1"
  //Secondary condition has to be next value after sheep = wolf.
  //Return previous value
