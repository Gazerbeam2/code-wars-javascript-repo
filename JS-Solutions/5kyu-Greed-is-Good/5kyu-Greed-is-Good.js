function score( dice ) {
    let totalScore = 0;
    let counterArray = [0,0,0,0,0,0]

    for(let i = 0; i < dice.length; i++){
      if(dice[i] === 1){
        counterArray[0] += 1
      }else if(dice[i] === 2){
        counterArray[1] += 1
      }else if(dice[i] === 3){
        counterArray[2] += 1
      }else if(dice[i] === 4){
        counterArray[3] += 1
      }else if(dice[i] === 5){
        counterArray[4] += 1
      }else if(dice[i] === 6){
        counterArray[5] += 1
      }
    }



    for(let i = 0; i < counterArray.length; i++){
      let count = counterArray[i];
      if(count >= 3){
        if(i === 0){
          totalScore+=1000
        }else{
          totalScore +=(i+1) * 100
        }
        count -= 3
      }

      if(i === 0){
        totalScore += count * 100
      }else if(i === 4){
        totalScore += count * 50
      }
    }return totalScore;
    // Fill me in!
  }
