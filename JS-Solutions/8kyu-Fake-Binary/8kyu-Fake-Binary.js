//My Solution

function fakeBin(x){

    let digitArray = x.split('');

    for(let i = 0; i < digitArray.length; i++ ){
        if(digitArray[i] < 5){
            digitArray[i] = 0
        }else{
            digitArray[i] = 1
        }
    }
    return digitArray.join('')
}

//Alternative Solutions

function fakeBin(x){
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x){
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);                    //The g means global which means check the entire string and don't just stop at the first number it finds.


}
