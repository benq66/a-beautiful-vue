/*
    ---
    Relational Operators
    ---
*/

const number1 = 5;
const number2 = 10;
const number3 = '5';

console.log(number1 >= number2, number1 <= number2);
console.log(number1 == number2, number1 === number2);
console.log(number1 != number2, number1 !== number2);

// == checks the values, === checks the types and values
// it's encouraged to use === in most cases instead of ==
console.log(number1 == number3, number2 === number3);
console.log(number1 != number3, number2 !== number3);


// Challenge: Best Promo Code

/*
 1. Our business wants to make sure we give our users the best promo codes available for two categories.
 2. Create two promo codes in variables and compare to find out if the first one is a better value for the dollars off category.
*/

const promoCode1 = 5;
const promoCode2 = 10;
console.log(`Is the first promo code better for you?`, promoCode1 > promoCode2 ? "Yes" : "No");