/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 154
ES7
***********************************************************/

//'hello'.includes('o');  //true

const pets = ["cat", "dog", "bat"];

pets.includes("bird"); // returns false

// exoponential operator
const square = (x) => x ** 2; // x squared
square(2); //4

const cube = (y) => y ** 3;
cube(3); //9

// ecmascript plans to release incremental periodic changes
// as of ES7, mainly because ES6 presented a huge bump in the
// learning curve for JS

// The homework asks us to filter a subset of an item from an array,
// though it was covered earlier.  Good use case for includes!

dragons.filter((name) => name.includes("John")); // from solutions
