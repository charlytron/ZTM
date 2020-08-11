**********************************************

### forEach() loop

**********************************************
```
const basket = ["apples", "oranges", "grapes"];

const detailedBasket = {

apples: 5,

oranges: 45,

grapes: 1000

}
```
Let's face it; this is a little ungainly:
```
for (let i = 0; i < basket.length; i++) {

console.log(basket[i]);

}
```
we could make this a _lot_ cleaner:

```
basket.forEach((item) => {

	console.log(item);
});
```


**************************************************

### for of (iteration: going through one-by-one)

**************************************************

```
for (item of basket) {

console.log(item);

}

```

As epected, we iterate over and return the items of the array. 

What if, then...

```
for (item of detailedBasket) {

console.log(item);

} 
```
if you run this you get an error: detailedBasket is not iterable (objects are not)

**************************************************

### forIn() loop

****************************************************

Works well with objects.

```
for (item in detailedBasket) {

console.log(item);

} 
```
We're allowed to loop over and see the object properties.
The tricky part here  though is that we're NOT iterating; that's
what we do with arrays and strings. With an **object**, we are instead **enumerating**, as properties of an object are considered **enumerable**.

```
for (item in basket) {

console.log(item);

} 
```
The console returns the indices 0, 1, 2 because under the hood an array is like an object, and the indices would be the properties of the object.

```
const basket = [

0: "apples",

1: "oranges",

2: "grapes"

];
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3MTU3NTk1NDJdfQ==
-->