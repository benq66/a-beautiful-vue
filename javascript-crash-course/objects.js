/*
    ---
    Numbers
    ---
*/

let exampleObject = {
    firstName: "Andrew",
    lastName: "Beliy",
    nestedObject: {
        nestedKey1: "nested value 1",
        nestedKey2: "nested value 2",
    },
    listObject: ["1", "2", 3],
};

// console.log(exampleObject, exampleObject.firstName, exampleObject.lastName);

// // get nested values from the object
// console.log(exampleObject.nestedObject.nestedKey1);

// // get keys and values from the object
// console.log(`Keys ${Object.keys(exampleObject)}\nValues ${Object.values(exampleObject)}`);

// // check if the key exists (i.e. if there is such property)
// console.log(exampleObject.hasOwnProperty('nestedObject'));


/* Challenge - User Profile Form
    1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
    2. Store a user's first and last name.
    3. Store a user's address. City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
    4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
    5. Are they a gold member? Store a boolean with this value.
*/

const userProfileForm = {
    firstName: "name",
    lastName: "surname",
    address: {
        city: "city",
        state: "state",
    },
    hobbies: ["hobby1", "hobby2", "hobby3"],
    isGoldMember: false,
};

userProfileForm["address"] = {
    city: "Bergen",
    state: "Vestland",
};

userProfileForm.firstName = "Andrew";
userProfileForm.lastName = "Beliy";
userProfileForm["hobbies"] = ["coding", "reading", "cooking"];
userProfileForm["isGoldMember"] = true;

console.log(userProfileForm)
