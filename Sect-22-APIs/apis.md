# APIs
---

An application programming interface is basically a messenger that takes a request and
tells the system what to do. But that's a skeletal description, so let's elaborate.

[Skyscanner](https://www.skyscanner.com) is an aggregator website. We use its search algorithms, 
and they will scan the websites of airlines, looking for lowest air fares. 

How does Skyscanner store this information if it doesn't exist in it's own databases?

After all, The data is dynamically updated off-site, within the database of each airline.

If that's the case, then who needs Skyscanner? Both buyers and sellers, apparently.

Not all potential buyers will use [American Airlines' proprietary website](https://www.aa.com) to
buy their plane tickets, especially when networked servers allow them to view on an aggregator site 
the fares of all airlines, all available flights to a destination. 

Indeed, American Airlines may benefit by allowing its fares to be listed on these aggregator sites. 

But how are Skyscanner's servers able to deliver prices that the airline may quickly change?

The aggregator and airline databases would need to be remotely linked somehow, right?

That's where APIs come in handy. They allow the airline and the aggregator a venue for data sharing.
Now each party may connect to and communicate with what were once closed systems. 
These strangers can now wave to eachother, or at least make fetch requests.

We might say that an API allows computers to communicate remotely to achieve a common goal. The process resembles
how web browsers speak with servers. 

This is a nutshell knowledge, though. The API is a broad topic.

Something as simple as _window.fetch_ in the browser console can be an API. The browser provides 
us fetch() so that we may communicate with another machine; so that the console may
communicate with the browser.

In the same way, although [Skyscanner]( https://www.skyscanner.com) doesn't
have access to the proprietary databases of AA, Alaska, etc. all the other
airlines use APIs or give access through APIs so that aggregators can also have that
information. 

Imagine having a waiter.  You are sitting at a table, about to order, and the
waiter has to instruct the kitchen staff, and they provide the waiter with
the deliverable product.

The waiter goes out, asks the customer what she wants, and her reply allows the
kitchen to prepare the order.

AJAX makes similar calls to a server. We're asking another
machine for something, using a go-between, and the machine gives us a response.
We need only talk to that machine in it's own language.

The remote server's API allows us to talk to the that server across the internet. Yet
we also used APIs when we build React websites, like [Robofriends](https://charlytron.github.io/robofriend).

Our use of ReactJS exposes an API. It's a way to communicate with the React package
by importing React, extending the component and using JSX to render HTML in the
browser.

The API tells us how to communicate with React and enables us to do so. 

Also, remember our example,
[jsonplaceholder](https://jsonplaceholder.typicode.com/)? The users that we
fetched?  The website is a fake online REST API for testing and prototyping.

Because it's an API it must be giving us information about something. It 
has [resources](https://jsonplaceholder.typicode.com/users), and the API tells 
us we may access the resources by directing our URL to the listed subfolders of
the website.

If we wish to access 'comments' it's as simple as adding a forward slash to the
end of the URL, [thusly](https://jsonplaceholder.typicode.com/posts), returning
a response of posts, written in JSON.

[Robohash](https://robohash.org/) works in a similar fashion. We're able to get
images of robots from a website via a very simple API. Put any expected
characters after the forward slash at the end of that URL, and Robohash will
return a random SVG of a robot.

Businesses find APIs quite useful, and they may benefit by complying with
industry standards, including handling JSON responses in their websites. 

A developer working on a company's behalf may grab bits and pieces of data from
many different websites, thus outsourcing some of the data management to open
APIs.

With the GitHub API, we can access the [Facebook repository](https://api.github.com/users/facebook) 
for lists of followers, public repositories, and so on.  
All the data is in JSON format 

If we want to build something with GitHub, we can send a request to 
[the API subdomain of GitHub](https://api.github.com/users/facebook),
get the data and create our website based on the data. 

We can utilize both XML as well as JSON to build our site. Here is a 
[sample API in XML](https://www.w3schools.com/xml/simple.xml) that
shows us a breakfast menu. We can request this data through HTTP
and return that data.

#### Let's be clear: APIs are not just websites. 

- By definition, a TV is an API by virtue  of all
the components that it links to.

- An NPM package can be an API. 

- Again, they are a way for machines to communicate, to share information. 

- Without APIs, the World Wide Web, as we now know it woudm't exist.

#### How is this useful to us?

We may build an airline aggregator site like [Skyscanner](https://www.skyscanner.com)
quite easily. We search for all the available airline APIs, and they'll tell us 
how to access this data.

An aggregator merely makes an HTTP request to the API, say a [posts
subfolder](https://jsonplacehoder.typicode.com/posts), grabs the data and adds
some CSS to it.

There are scores of APIs online, even silly ones, like the [Star Wars
API](swapi.dev). We can build a sample app using these APIs, an all we need to
do is write 
```js
fetch('https://url.com/resource')
```
get the JSON response and
convert it to a Javascript object, then style it and use it in our app.

Some very useful APIs include the [Stripe API](https://stripe.com/docs/api/node#balance_object),
for incorporating payments into our websites.  The API docs show us exactly how.

With Stripe's API we can add to our server whichever language we want.  In our
case, we're interested in Node. We're given complete directions about how to add 
Stripe as a payment method via Node on our server.

[Twillio's API](https://www.twilio.com/docs/sms/send-messages) is also quite
useful. Twillio allows sending messages to phones. We just give it a few
details, including the text body, the source and destination phone numbers.

When a user signs up for a service, we can send them a message this through the
Twillio API. 

