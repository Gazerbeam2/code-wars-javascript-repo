// Solutions
function dnaStrand(dna){
    let newArray = [];
    let dnaArray = dna.split("")
    for(let i = 0; i < dnaArray.length; i++){
      dnaArray[i] === "A" ? newArray.push("T") : dnaArray[i] === "T" ? newArray.push("A"): dnaArray[i] === "C" ? newArray.push("G") : newArray.push("C")
    }
    return newArray.join("")
  }

  // Alternative Solutions

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
