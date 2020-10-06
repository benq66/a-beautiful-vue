/*
    ---
    Const variables
    ---
*/

const currentPlanet = "Earth";

// can't do this
// currentPlanet = "Mars";

// and not this either
// const aliens;
// aliens = "Marcians";
// console.log(currentPlanet);


// Challenge: It your Dog's Birthday!

/*
 Create 2 variables related to your dog. Make one of them its age and update it by one.
 Log out all the values in a friendly way of your choosing.

 Update: How might we change our variable challenge to use const?
*/

const dogName = "Jason";
const ageIncrement = 1;
let dogCurrentAge = 3;

// update the current age after his birthday
dogCurrentAge += ageIncrement;

let dogAgeNextYear = dogCurrentAge + ageIncrement;
console.log("Here is my dog, " + dogName + ". He is " + dogCurrentAge + " years old. Next year he will be " + dogAgeNextYear + " years old.")
