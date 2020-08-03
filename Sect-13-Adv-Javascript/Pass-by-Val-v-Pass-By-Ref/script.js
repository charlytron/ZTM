/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 151
Pass by Value vs. Pass by Reference
***********************************************************/

/*
Primitive types are immutable. Why?  In order to change them we need to remove the 
primitive type.
*/

var a = 5;

/* In order to  change the 5 you have to remove it from memoru and create something new. When
we change var a to 10, we are passing by value */
var a = 10;

/* Objects, on the other hand, pass by reference */
var a = 5;
var b = 10;

// both a and b are said to have an address in memory for their respective values

// but say we do the following:
var a = 5;
var b = a;
b++;

console.log(a);
console.log(b);

// making b = to a just stores a copy in the memory stack
// we copy the value and we create that value somewhere else

let obj1 = { name: "HarryCaray", password: "Bud" };
let obj2 = obj1;

obj2.password = "yesorno"; //change the password on the object in memory, since obj2
// is pointing to object 1

console.log(obj1);
console.log(obj2);
/* passwords of both objects are changed due to passing by reference.
// { name: "HarryCaray", password: "yesorno" };
// { name: "HarryCaray", password: "yesorno" };
Object1 and object2 are both pointing to the same memory location. 

Why would we ever want to do this? By having one object above, we're 
saving space in memory. No need to load up memory heap if we can pass by 
reference.

the con is that someone else may change a reference to that object.*/

//Let's try this with an array since they're really objects:
var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push("8899999");

console.log(c); //keeps the old array intact
console.log(d); //makes space to push elememt without affecting c.

//Objects are more difficult though:
let obj = {
  a: "a",
  b: "b",
  c: { deep: "try and copy me!" },
};
// how can we have the above object in a different location in memory?
//let obj2 = obj1 // is merely passing by reference; we're just referencing the same object

// Try cloning the object instead:
let clone = Object.assign({}, obj);
// Otherwise we can just use the spread operator.
let clone2 = { ...obj };

// if ww change
obj.c = 5;
console.log(clone);
// We note that when the original object is cloned, changing its properties does not
// affect the cloned object, i.e. { a: "a", b: "b", c: "c" };
console.log(clone2);

// But what happens if we have an object within and object? It raises the issue of having to make
// either shallow or deep copies.

let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hawhawhaw!"; //this will overwrite the object and the clone bec
// we are passing by reference. We cloned the first level within the memory obj.
// But within this object there is another address to another object.
// How to get around this:

console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
