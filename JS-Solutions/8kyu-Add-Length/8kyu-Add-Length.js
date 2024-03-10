//Solutions

function addLength(str) {
    let newArray = str.split(' ')
    let emptyArray = []
    for(let i = 0; i < newArray.length; i++){
      emptyArray.push(newArray[i] + ' ' + newArray[i].length)
    }return emptyArray
  }

  //Alternative Solutions

  function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }

  //Alternative Solutions

  var addLength = s => s.split(' ').map(x => x + ' ' + x.length);
