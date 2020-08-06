/**********************************************
 * forEach() loop
 **********************************************/

const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
    apples: 5,
    oranges: 45,
    grapes: 1000

}
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

//we could make this a lot cleaner:
// basket.forEach((item) => {
//   console.log(item);
// });

/**************************************************
 * for of  (iteration: going through one-by-one)
 **************************************************/
for (item of basket) {
  console.log(item);
}
// as epected, we iterate over and return the items of the array

// what if...
for (item of detailedBasket) {
    console.log(item);
  }  // if you run this you get an error: detailedBasket is not iterable (objects are not)

/**************************************************
 * forIn() loop
 ****************************************************/

//  works with objects
for (item in detailedBasket) {
    console.log(item);
}  // this allows us to loop over and see the object properties

// ^^^ The tricky part here is that we're NOT iterating; that's 
// what we do with arrays and strings. With an OBJECT, we are instead
// ENUMERATING.  properties of an object are considered ENUMERABLE.

for (item in basket) {
    console.log(item);
}  // returns the indices 0, 1, 2 bec under the hood an array is like an object.
// the indices would be the properties of the object.

/* 
const basket = [
    0: "apples", 
    1: "oranges", 
    2: "grapes"
];
*/
