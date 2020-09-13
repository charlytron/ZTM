# APIs
---

An application programming interface is a messenger that takes a request and
tells the system what to do.  That's a rather basic explanation, though; let's elaborate.

[Skyscanner](https://www.skyscanner.com) is an aggregator website. We use its search algorithms scan the websites of airlines for their lowest air fares. 

How does Skyscanner store this information if it doesn't exist in their own databases?

The data is dynamically updated off-site, within the database of each airline.

If that's the case, the who needs Skyscanner? Both buyers and sellers, apparently.

Not all potential buyers will use a proprietary airline website to
buy their plane tickets, especially when Networked servers allow them to view on a page 
the fares of all airlines, all available flights to a destination. 

American Airlines may well benefit by allowing its fares to be listed on these aggregator sites. 

But how are Skyscanner's servers able to deliver prices that the airline may quickly change?

The aggregator and airline databases need to be remotely linked somehow.

That's where API keys come in handy. They allow the airline and the aggregator a venue for data sharing.
Now each party may connect to and communicate with what were once closed systems. 
These strangers can now wave to eachother, or at least make fetch requests.

An API allows computers to communicate remotely to achieve a common goal. The process resembles
how web browsers speak with servers. 

This is nutshell knowledge, though. The API is a broad topic, and we've only
begun to explain it with what we've learned.

Something as simple as window.fetch() in the browser console can be an API. The browser provides 
us fetch() so that we may communicate with another machine; the console may
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

Imagine making AJAX calls to a server; it's very similar. We're asking another
machine for something, using a go-between, and the machine gives us a response,
as long as we talk to that machine in it's own language.

The server's API is a language for us to communicate remotely with it.  In the
same way, we have our previous code, from when we built Robofriends.

Our use of ReactJS exposes an API, a way to communicate with the React package
by importing React, extending the component and using JSX to render HTML in the
browser.

The API tells us how to communicate with React and enables us to do so. 

Also, remember our jsonplaceholder example
[jsonplaceholder](https://jsonplaceholder.typicode.com/)? The users that we
fetched?  The website is a fake online REST API for testing and prototyping.

Because it's an API it must be giving us information about something. It 
has [resources](https://jsonplaceholder.typicode.com/users), and the API tells 
us we may access the resources by directing our URL to the listed subfolders of
the website.

If we wish to access 'comments' it's as simple as adding a forward slash to the
end of the URL, [thusly](https://jsonplaceholder.typicode.com/users), returning
a response of 100 posts, written in JSON.

[Robohash](https://robohash.org/) works in a similar fashion. We're able to get
images of robots from a website via a very simple API. Put any expected
characters after the forward slash at the end of that URL, and Robohash will
return a random SVG of a robot.

Businesses find APIs quite useful, and they may benefit by complying with
industry standards, including handling JSON responses. 

A developer working on a company's behalf may grab bits and pieces of data from
many different websites, thus outsourcing some of the data management to open
APIs.

With the GitHub API, we can access the Facebook repository for lists of 
followers, public repositories, and so on.  All the data is in JSON format 



