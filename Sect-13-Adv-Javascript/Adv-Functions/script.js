/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Negoie
Section 13: 146 
Advanced Functions
***********************************************************/



//whatever happens in the universe below only matters to itself
const first = () => {
  const greet = "hello";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// closures:
// --A function runs. the function executed. it won't execute again.
// child scope always has access to the parent scope, as if it remembers

// Currying: Process of converting a function that takes multiple arguments into
// a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);


// currying changes the function to only accept one parameter at a time
// think of the above arrows as functions

// Compose
const compose = (f, g) => (a) => f(g());
//f is a function, as is g; both are highlighted.

const sum = (num) =>  num + 1;

compose(sum, sum)(5);

// Avoiding side effects, functional purity
var a = 1;
function b() {
    a = 2;
}

//Functional purity is where we always get a return while avoiding side effects
//By doing this we create deterministic functions: 
//No matter what, if my inputs go through the function, the return value will always 
//be as expected, without ranndom errors occurring.