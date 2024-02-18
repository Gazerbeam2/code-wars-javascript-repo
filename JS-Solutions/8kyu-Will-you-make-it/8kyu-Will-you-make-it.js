//Solution

const zeroFuel =(distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump
}

//Distance to Pump is a set distance
//We know how much the car runs on gallons
//We know how many gallons that we have in our car
//As long as the the amount of fuel that we have left is greater than the Distance, the car should make it.
//So we multiply the amount of fuel that we have left over with the miles per hour and if the that product is greater or equal to the distance, return true, else return false
