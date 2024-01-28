//Solution

function calculateYears(principal, interest, tax, desired) {

    let y = 0
    while(principal < desired){
       principal += (principal * interest)  * (1 - tax)
      y++
    }
    return y

    }
