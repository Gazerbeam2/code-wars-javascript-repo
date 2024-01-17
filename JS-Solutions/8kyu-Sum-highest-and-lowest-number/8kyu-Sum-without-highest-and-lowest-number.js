//Attempted Solution

function sumArray(array) {


    let sorted

    if(array === null || array === [] ){
      return 0;
    }else{
       sorted = array.sort((a , b) => a - b);

    }

     return sorted.reduce((acc,c) => acc + c, sorted[1]);


  }

//Solution

function sumArray(array){
  if(array === null){
    return 0;
   } else if(array.length < 2){
    return 0;
   } else{
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for(var i = 1;  i < array.length - 1; i++){
      total += array[i];
    }
    return total;
   }
}
