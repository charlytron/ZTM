### Before covering backend basics..

---

#### A Front-end review

---

- We began asking _who is google.com?_, then we approached the ISP, asking for the **nameserver**
  for the IP address.
- Upon receiving the nameserver, we asked the IP address to find the Google servers in order to give us our HTML, CSS and JS files through these channels:
  - HTML page itself
  - `<link>` tag for CSS
  - `<script>` tag for JS
- The browser reads the HTML and CSS files for us

- The Javascript engine uses the browser to read the Javascript.

- We manipulate the DOM using Javascript.

Some other things important to backend developers:

- The location of the server is important

- how many trips, how many HTTP requests

- The size of the files

- Content Delivery Networks (CDN)

- Minimizing our files (style.min.css)

- **AJAX** taught us how to talk to the server,while the user
  is still browsing the site, and receive a **JSON** response
  to update the website in realtime.

HTTP is a language that both frontend and backend can speak.
Using **AJAX** and **JSON** we're able to dynamically enable that
conversation.

---

#### The role of the backend developer

---

They're the ones that work with servers and databases, and the server is
responsible for what we view in the browser. From the browser, we can ask anything; go to
Google.com, whatever. What matters is that the web server can give us whatever it is programmed
to give us.

If the just going to send me to twitter.com instead--in the case of a header redirect perhaps--
that's up to the backend developer.

Whatever we need we request that of the server, hoping that it delivers what we ask.

A server is just a computer that listens to HTTP connections, that 'hears' our questions and asks us
if we have any files.  It leverages the **LAMP** stack to do this.

LAMP was useful for the most basic of websites; simple and informative, like Wordpress, where nothing
complex is happening.

- **Linux** server
- **Apache** server
  - accepts requests
    - listens for www.website.com
  - sends out responses of files, i.e **index.html**, etc..
    - if a subfolder is specified in the URL, then it is rendered (i.e. **about.html**)
  - like any computer:
    - has its own filesystem
    - stores the files of the website
  - Without having server software to host our site, our computer is unreachable.
- **MySQL** database
  - stores data such as comments or whatever fields we choose
- **PHP**
  - A procedural language
  - allows us to apply conditional logic to how our servers work.

---

#### Modern websites like Facebook or Amazon cannot use the LAMP stack

LAMP is for very basic sites. What we need is an **application server**.

---

Unlike Apache, a **Node server** allows us to write a script which says, "if
I receive a request fo a login, then check the user's username in the database. If it matches, let me know, then send a response through JSON to the frontend application.

So far, we've only been able to use JS on the frontend, but now with Node.js we can use it on the server;
on a computer that isn't running a web browser.

With Node.js we can write Javascript such that if we post something on Facebook, and we generate, say, a click event, the post will get sent via JSON to the listening Node serve, telling it we just posted something.

The Node.JS and Express.js file on the server will read the JSON and will say "we want to store this post our database." The database is going to store the post so that when we the users come back next time it's still there.

Once that's done, the database is going to respond with a success, saying that my post is a success, that it displays on my timeline.

In our next project, we will create a Node server, using Express.js. Then we'll create our own database, where we store user information. we'll be using AJAX and JSON to constantly create, sign in, update user info. all This should give us a complete understanding of the Node system.

If we're building websites and web apps, we're not really building these. Is this the ultimate end all
to what is possible in a server backend infrastructure? No.

We haven't even considered what would warrant load balancers yet.
At some point though, we may need to consider copying servers in order to scale an application. This is something that Facebook uses. 

In many cases those copied servers still use the same database such that all servers will have access to
the same data.

A **load balancer** may listen for an HTTP request and notice that one of its servers is very busy. It will
transfer the client to another server, balancing the load among all of the servers. We can keep growing this, having more and more servers as we have more and more users.

We could even have multiple databases so that they don't get overwhelmed with requests, each database maintaining a copy of the other.

**To work with the backend, the goal is to make sure that, when we make an http request from the front end,
we get a response as fast as possible, with correct data.**
