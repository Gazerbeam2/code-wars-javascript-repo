//Solution

function reverseWords(str) {
    let split = str.split(" ")
    let emptyArray = []
    for(let i = 0; i < split.length; i++){
     emptyArray.push(split[i].split('').reverse().join(''))
    }
   return emptyArray.join(' ')
    // Go for i
  }


//Alternate Solutions

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }
