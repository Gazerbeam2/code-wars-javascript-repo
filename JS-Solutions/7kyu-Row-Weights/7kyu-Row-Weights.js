function rowWeights(array){
    let team1 = array.filter((x,index) => index % 2 === 0).reduce((acc,c) => acc + c,0)
    let team2 = array.filter((x,index) => index % 2 !== 0).reduce((acc,c) => acc + c,0)

                             return [team1,team2]
    //your code here

  }
