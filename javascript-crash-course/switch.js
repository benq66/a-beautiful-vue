/*
    ---
    Switch
    ---
*/

let subjectGrade = "A";

switch (subjectGrade) {
    case "A":
        console.log("Perfect!");
        break;

    case "B":
        console.log("Amazing!");
        break;

    case "C":
        console.log("Good job!");
        break;

    default:
        console.log("Try again!");
};


// Challenge: Customer Upgrade

/*
 1. Our business wants to convince users to upgrade their accounts.
 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
 5. If a user is a 'super shopper' tell them they are the best!
 6. If we don't know user's status they are a guest.
*/

const userAccountType = "guest";

switch (userAccountType) {
    case "shopper":
        console.log("Do you want to upgrade to a \"Super shopper\"?");
        break;

    case "super shopper":
        console.log("You are the best!");
        break;

    // the user is a guest
    default:
        console.log("Do you want to upgrade to a \"Shopper\"?");
};
