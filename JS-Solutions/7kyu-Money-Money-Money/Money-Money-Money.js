//Solution

function calculateYears(principal, interest, tax, desired) {

    let y = 0
    while(principal < desired){
       principal += (principal * interest)  * (1 - tax) //When you pay taxes you dont get the 100% of your money, you get 100% - TAX(in percent, its the same as 1 - 0.18(in example)
      y++
    }
    return y

    }
