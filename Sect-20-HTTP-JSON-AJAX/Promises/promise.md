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
