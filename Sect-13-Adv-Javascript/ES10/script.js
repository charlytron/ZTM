/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 159
ES10
***********************************************************/

// ES10 was the latest in 2019

/*************************************** 
// flat()  method to be used on arrays
****************************************/

const array = [1, 2, 3, 4, 5];
array.flat();
/* if we run this in the console, nothing happens; 
it returns the same array. Things change when you apply flat() to 
nested arrays */

const array2 = [1, [2, 3], [4, 5]];
array2.flat(); // returns a normal one-dimensional array, nothing nested

const array3 = [1, 2, [3, 4, [5]]];
array3.flat(); // returns  [1, 2, 3, 4, Array(1)], so it's not a flat array,
//when the arrays are nested this deeply
// that said, we are still able to dictate how many layers of arrays can be flattened,
// just add the number of levels we wish to see flattened as an argument to flat().
array3.flat(2); // gives us a one-dimensional array.

// flat() is also a good way to clear up empty data
const entries = [
  "Bobbb",
  "Sallywally",
  ,
  ,
  ,
  ,
  "Cinnamindy",
  "Fozzy Bear",
  "Waka-Waka",
];
entries.flat();

/************************** 
// flatMap()
**************************/
const jurassicparkchaos = jurassicPark.flatmap(creature => )


/*********************************************
 *  trimStart() and trimEnd()
 *********************************************/

const userEmail = '       jackstrop@briefs.com'
const userEmail2 = 'johnnydangerously@farqubostich.com         '
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());  // in both cases, whitespace is trimmed as exp.

/***************************************
 *  fromEntries 
 ***************************************/

 // transforms a list of key-value pairs into an object
 //eg...

 //inside of an array we have the user profiles of a game
 userProfiles = [['captainTom', 23], ['murgatroydEbn', 45], ['rumpledShirtskin', 18]]
 // as arrays they're useless. 
 // this is a job for an object, where each username is assoc with an age.
 Object.fromEntries(userProfiles)  // this will return an object: 
 // {captainTom: 23, murgatroydEbn: 45, rumpledShirtskin: 18}
 Object.entries() // cf. ES8: it allowed us to do the opposite thing.

 // That said, if we write...
 const obj = Object.fromEntries(userProfiles);
 // ...and then give obj as an argument to
 Object.entries(obj)
 // We'll get what we had in line 66

 /*******************************************
  *  Update to the try{} catch block
  *******************************************/

  // try a piece of code, and if there are any errors, catch them:

  try {
    4 + 5
  } catch {
    console.log('are you serious?')
  }  // returns 9
 
  try {
    true + 'hi'
  } catch {
    console.log('are you serious?')
  }  // returns truehi
 
  try {
    bob + 'hi'
  } catch {
    console.log('are you serious?')
  }  // returns catch block
 
  // Before you had to pass the block an error object, 107

try {
    bob + 'hi'
  } catch (error){
    console.log('are you serious?' + error)
  }  // returns are you serious?ReferenceError: bob is not defined
  // Before, we had to pass the error parameter, but that's not the case 
  // anymore
