# Async-Await is part of ES8

It's built on top of promises. Under the hood, an async function is one that returns a promise.
Async-await makes code easier to read.

below is a promise:

```js
// asychronous chained code
movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));
```

#### Async-await makes code easier to read

```js
async function playerStart() {
  await movePlayer(100, "Left"); //pause
  await movePlayer(400, "Left"); //pause
  await movePlayer(10, "right"); //pause
  await movePlayer(333, "Left"); //pause
}
```

The goal is to make asychronous code look synchronous. Async-await code
blocks are just promises under the hood. Known as **syntactic sugar**, they
do the same thing but with different syntax (to make it look prettier).

Although the above two code blocks do the same thing, the async playerStart() function
declares a function as async. That gives us access to the **await** keyword,
which tells the JS engine, "pause this function until I have something for you."
Once the promise is resolved the function moves to the next line.

#### A more realistic example of this...

remember that **fetch()** gets a promise in the console.

using **jsonplaceholder**, we can grab the _users_ endpoint:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);
```

But how can we turn this into an _async_ function?

```js
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
```

when we run this block in the console, then, at the next cursor prompt add **fetchUsers()**
we are returned an array of users.

#### Now for something more realistic

---

```js
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
  .then((array) => {
    console.log("users", array[0]);
    console.log("posts", array[1]);
    console.log("albums", array[2]);
  })
  .catch("oops!");

// The second code block above, written in async syntax

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json()))
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};
```
We're not catching errors with this method, which some don't like, but
we can get used to that with try-catch blocks.

```js
const getData = async function () {
  try {
        const [users, posts, albums] = await Promise.all(urls.map((url) => 
            fetch(url).then((resp) => resp.json())
));
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
} catch (err) {
  console.log('Oopsie Daisy', err)
}
    }
  
```
Now, if we misspell one of the URLs the console will catch the error.