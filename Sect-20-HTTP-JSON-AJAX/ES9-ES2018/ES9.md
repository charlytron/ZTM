### New feature to focus on

**Object Spread Operator**

```js
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
};

const { tiger, ...rest } = animals;
```

So this works when we paste it into the console; plug in _tiger_ and it prints _23_.
Plug in _rest_ and the remaining animals are shown.

This we could accomplish with **arrays** in ES6:

```js
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
};

const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const { tiger, ...rest } = animals;
```

With _sum(...array)_ we're able to spread the above array over the parameters so that it's the
same as

```js
sum(1, 2, 3, 4, 5);
```

to the console. The new feature **object spread operator** allows us to do the same, but with objects.
In the same manner:

```js
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);
```
