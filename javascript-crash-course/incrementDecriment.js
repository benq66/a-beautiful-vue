/*
    ---
    Increment and decriment
    ---
*/

let exampleNumber = 1;

exampleNumber++;  // increase by one
exampleNumber--;  // decrease by one
exampleNumber += 2;  // increase by N
exampleNumber -= 2;  // decrease by N
exampleNumber *= 5;  // multiply by N
exampleNumber /= 5;  // divide by N
exampleNumber %= 2;  // modulo by N


// Challenge: Upsell Quantity

/*
 1. Our business wants to upsell items in a user's cart.
 2. Ask the user if they would like to add one more item (with the variable provided). Update the quantity variable if they do.
 3. Log the current quantity.
*/

const customerAnswer = Math.random() >= 0.5;

let amountOfItemsInBasket = 2;

// customerAnswer ? amountOfItemsInBasket++ : null;

if (customerAnswer) amountOfItemsInBasket++

console.log(amountOfItemsInBasket);
