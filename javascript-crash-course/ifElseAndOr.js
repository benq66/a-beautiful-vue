/*
    ---
    If, Else If, Else, And & Or
    ---
*/

let example = 3;

if (example === 3) {
    console.log("Plan A works!");
} else if (example === 4) {
    console.log("Plan A did not work, time for Plan B!");
} else {
    console.log("Everything failed, time for Plan C!");
};


example = 4;

// AND - &&, OR - ||
if (example % 4 && example < 5) {
    console.log("AND");
} else if (example === 5 || example > 3) {
    console.log("OR");
};


// Challenge 1: User Age

/*
 1. Our business wants to keep track of what age range a user falls into.
 2. If they are 12 or younger log 'child'.
 3. If not a child but the user's age is under 20 log 'teenager'.
 4. If neither log 'adult'.
*/

const age = 18;

if (age <= 12) {
    console.log("child");
} else if (age < 20) {
    console.log("teenager");
} else {
    console.log("adult");
};

// Challenge 2: Practice and or Operators

/*
    1. Look at the examples below and see if you can guess the
*/

console.log(10 === 10 && 5 < 4);  // false  v

console.log(10 === 10 || 5 < 4);  // true  v

console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);  //  true  v
