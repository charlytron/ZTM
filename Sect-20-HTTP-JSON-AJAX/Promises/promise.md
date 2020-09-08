# What is a promise?

### A new feature in ES6

An object that may produce a single value sometime in the future, either a resolved value or a reason that it's not resolved (i.e. rejected).

So a promise has three possible states:

- fulfilled
- rejected
- pending

But must grasp **callbacks** before we can understand promises:
when something is done, execute a piece of code.

```js
el.addEventlistener('click', submitForm)
```

Once the user clicks, answer with **submitForm**.

#### Or we can experience the callback pyramid of doom.

A nested complex of code really. Move the player to the Left by 100, and it
invokes a callback function, which is to move player 400 to the left,
thus moving the player 10 to the right, and so on.

```js
//callback pyramid of Doom
movePlayer(100, 'Left', function () {
  movePlayer(400, 'Left', function () {
    movePlayer(10, 'Right', function () {
      movePlayer(400, 'Left', function () {})
    })
  })
})
```

Nested callbacks become very difficult to read. **Here's something more realistic**
involving promises, which serve the same purpose:

```js
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'))
```

#### How to create a promise

```js
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Go, man, go!')
  } else {
    reject('Oopsy daisy! It broke')
  }
})
```

if we put this into a console at the cursor, it won't work.
But if we add the following after running the code block the `resolve()` works, giving
the requisite message, because of `if (true)`:

```js
promise.then(result => console.log(result))
```

The console will also indicate the resolution of the promise:

`Promise {<fulfilled>: undefined}`

#### What can we do with promises?

```js
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Go, man, go!')
  } else {
    reject('Oopsy daisy! It broke')
  }
})

// grab the result and add an exclamation mark, then use chaining
promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2);
})
```
##### What happens if we get an error though? (We *catch* it)

```js
promise
    .then(result => result + '!')
    .then(result2 => {
throw Error
        console.log(result2);
})
.catch(() => console.log('error'))
```
When we run this, we console log 'error'.  But what if the ```throw Error``` happens before?

```js
promise
    .then(result => {
        throw Error
        return result + '!'
    })
    .then(result2 => {
    console.log(result2);
})
.catch(() => console.log('error'))
```
We still get the same error when we run the block in the console. ```.catch()``` catches 
any errors that happen within a chain of ```.then()``` statements.

What happens if we do the following?

```js
promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error'))
    .then(result3 => {
        console.log(result3 + '!');
    })
```

The punctuation marks added in each successive .then() will be added at the end
of the resolved 'Go, man, go!', giving us 'Go, man, go!!?!' in the console.

.catch() only runs if something fails within the chain, which doesn't happen here.

#### Promises are great for asynchronous programming. 

When we don't want JS to block the execution of our 
code (i.e. API calls, grabbing data from a database, optimizing an image) we use a promise so that the 
task happens in the background. When the promise gets resolved or rejected, we'll receive the response 
accordingly.

#### What else makes promises powerful?

What if we added successive promises to the first one?

```js
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Go, man, go!')
  } else {
    reject('Oopsy daisy! It broke')
  }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hayowdeh')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Bah-bah-bah-boogie')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Bawitaba')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
    console.log(values);
})

```
The console waits until **all** of the promises above are resolved, then
returns the values of each simultaneously.
