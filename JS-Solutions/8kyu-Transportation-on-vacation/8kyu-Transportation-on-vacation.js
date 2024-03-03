//Solution

function rentalCarCost(d) {
    let totalAmount = d * 40; // Calculate the basic total cost without discounts

    // Apply discounts after calculating the basic total
    if(d >= 7) {
      totalAmount -= 50; // Apply $50 discount for rentals over 7 days
    } else if (d >= 3) {
      totalAmount -= 20; // Apply $20 discount for rentals over 3 days
    }

    return totalAmount;
  }
