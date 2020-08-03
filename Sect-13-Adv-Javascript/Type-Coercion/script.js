/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 152
Type Coercion
***********************************************************/

// There is some form of type coercion at different levels of the stack.
// Javascript is liberal with type coercion because it's dynamically typed.

1 == "1"; // notice the use of ==  meaning compare the two values,
// and if they have different types, try to coerce one into the same type.
//  Is == useful? Some argue it can have interesting applications, where we 
// make a quick coercive check, but it's not predictable code. More likely, 
// it's a gotcha that's going to trick people, so best practice? maybe not.
// Always use === instead of ==.

/* Be aware that type coercion doesn't always happen with the = sign. */
if (1) {
    comsole.log(5);
}
//this works because JS coerces 1 to be true

if (0) {
    comsole.log(5);
}
// this won't work bec JS coerces 0 into the false boolean.

// == is rather abstract; tends to introduce inconsistences, weird edge cases.
// The same goes for some of the "if" cases; they can really be tricky.

// MAKE NOTE OF MDN: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

1 === "1"; //this returns false

-0 === +0 // evaluates to true, but they are different acc to the JS engine.

Object.is(-0, +0) // returns false. Object.is works similarly to the === except 
// in certain cases, like +0, -0.

// NaN is another weird one.
NaN === NaN // When you run it returns false.  It's a problem we'll seldom encounter, but 
// that just underscores how confusing type coercion can be.

// The Equality Comparison Algorithm spec treats type comparison in greater depth:
// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
