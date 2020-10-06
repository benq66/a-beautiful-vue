/*
    ---
    While and Do While
    ---
*/

let counter = 0;


// will run only if the while condition is true
while (true) {
    counter++;
    if (counter >= 20) break;
};

// console.log(counter);


counter = 0;

// will run at least once, even if while condition is false
do {
    counter++;
    if (counter >= 20) break;
}
while (true);

// console.log(counter);


// Challenge: Analytics

/*
 1. Track our user's activity.
 2. While the total updates is under 10 updates keep logging the update count.
 3. After we reach our threshold say, 'No longer tracking the user'.
 4. Change the logic to a do while with it updating just a single time.
*/

let totalUpdates = 0;

while (totalUpdates < 10) {
    totalUpdates++;
    console.log(totalUpdates);
}
console.log("No longer tracking the user.");


totalUpdates = 0;

do {
    console.log(totalUpdates++);
}
while (totalUpdates == 0);

console.log("No longer tracking the user.");