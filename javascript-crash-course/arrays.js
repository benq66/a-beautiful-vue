/*
    ---
    Arrays
    ---
*/

let exampleArray = [1, 2, 3];

console.log(exampleArray);
console.log(exampleArray.length);
console.log(exampleArray[0]);

// arrays methods

exampleArray.push(4, 5);
console.log(exampleArray);

exampleArray.pop();
console.log(exampleArray);

exampleArray[0] = 0;
console.log(exampleArray);

exampleArray.forEach((value) => {
    console.log(value);
});


// Challenge - Manage Inventory

/*
    1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
    2. Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
    3. Sanitizer sells out. Remove it from the list.
    4. Business is so good the company launches a new product: Bleach. Add it to the list.

    Note: After creating the initial array do not just create a brand new array. Modify it accordingly.
*/

// 1
const challengeArray = ["toilet paper", "bottled water", "sanitizer"];
console.log(challengeArray);

// 2
challengeArray[challengeArray.indexOf("toilet paper")] = "paper towels";
console.log(challengeArray);

// 3
challengeArray.splice(challengeArray.indexOf("sanitizer"));
console.log(challengeArray);

// 4
challengeArray.push("bleach");
console.log(challengeArray);
