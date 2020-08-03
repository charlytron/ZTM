/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 149 
Advanced Objects
***********************************************************/
// reference type
([] == [][1]) === //false
  [1]; //false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// Context (gets confused alot with scope)
// function doesn't know anything about the root scope
// which is outside the block

function b() {
  let a = a;
}

// writing console.log(a) down here throws an error
// because we're now out of scope
// Context differs from scope in that it tells us where we are
// within the object

console.log(this);
//we get highlighting, because we're referring to the window object
console.log(this === window);
// yields 'true' in the console, thereby allowing
this.alert("Yello Whirl");

// 'this' just lets us know just what is the object environment we're in now.
window.alert("Yello Whirl"); // is the same thing as above, so...

function a() {
  console.log(this);
}

// what happens when you call
a(); //?

// You get the window object. That said...
window.a();
// gives the same result

const object4 = {
  a: function () {
    console.log(this);
  },
};
// now when you run
object4.a();
// in the console
//'this' is object4, not 'window' object
// This becomes useful when we pursue instantiation:
// making multiple copies of an object.

// INSTANTIATION IN JS:

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(
      `Hello, I am the Walrus, ${this.name}, I'm a ${this.type}. Koo-koo-katchoo`
    );
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(
      `Heavens to Murgatroyd! I'm ${this.name}, and I'm a ${this.type}. yyyyipppayy!`
    );
  }
}

const wizard1 = new Wizard("Smellie", "Peeler");
const wizard2 = new Wizard("Shaner", "Bicycle Repairman");

object1 === object2; // true
object1 === object3; // false

object1.value = 15;
object2.value; // 15
object3.value; // 10

// Objects are known as reference types in JS.

// context
// instantiation
