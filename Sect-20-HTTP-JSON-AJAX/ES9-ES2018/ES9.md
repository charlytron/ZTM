
### Three new features to focus on in ES9


**Object Spread Operator**

```js
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
}

const { tiger, ...rest } = animals
```

So this works when we paste it into the console; plug in _tiger_ and it prints _23_.
Plug in _rest_ and the remaining animals are shown.

This we could accomplish with **arrays** in ES6:

```js
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
}

const array = [1, 2, 3, 4, 5]
function sum (a, b, c, d, e) {
  return a + b + c + d + e
}

const { tiger, ...rest } = animals
```

With _sum(...array)_ we're able to spread the above array over the parameters so that it's the
same as

```js
sum(1, 2, 3, 4, 5)
```

to the console. The new feature **object spread operator** allows us to do the same, but with objects.
In the same manner:

```js
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}

function objectSpread (p1, p2, p3) {
  console.log(p1)
  console.log(p2)
  console.log(p3)
}

const { tiger, lion, ...rest } = animals

objectSpread(tiger, lion, rest)
```

### Now, for the other two features of ES9

---

####1. Finally

---

Allows us to do something after a promise has finished.
We add the **finally()** block at the end, and it
will be called, regardless of whether **.then()**
or **.catch()** works for us. It will be called, whether
it resolves or rejects and does what we tell it.

```js
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json())
  })
)
  .then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
  })
  .catch(() => console.log('error'))
  .finally(data => console.log('extry data, yo'))
```

The arrays are returned as well as the **finally()** string,
but what happens if we throw an error after **.then()**?

```js
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json())
  })
)
  .then(results => {
    throw Error
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
  })
  .catch(() => console.log('error'))
  .finally(data => console.log('extry data, yo'))
```

As soon as `throw error` is reached JS skips over the rest
of the code block, and 'error' within the catch block is logged to the console,
though the results of `finally()` are still logged.

An example of `finally()`: you may wish to send an email to the user, whether
or not the previous code or their API request fails. Maybe you'd like to present
the user with a notification icon?

---

#### 2. For await of

---

```javascript
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await.fetch(url);
            return response.json();
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    }   catch (err) {
        console.log('woopsie', err);
    }
}
```

Above code returns the same arrays as **for await of** loop below,
but the latter is more elegant.

```javascript
const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url))
  for await (let request of arrayOfPromises) {
    const data = await request.json()
    console.log(data)
  }
}
```

This is the new ES2018 feature. It's significant in allowing us to
loop over multiple promises, _almost as if we're writing synchronous code_.
