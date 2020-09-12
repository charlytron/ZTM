# APIs
---

An application programming interface is a messenger that takes a request and
tells the system what to do.  Let's elaborate.

[Skyscanner](https://www.skyscanner.com) is an aggregator website. We use it to look for a flight, and its
search algorithms scan the websites of airlines for their lowest air fares. 

How does Skyscanner do it?  They don't store the the flight information in their own databases;
rather, this dynamic data is elsewhere, frequently updated in the database of each airline.

And who needs Skyscanner? Well, not all potential customers will view one airline website to
evaluate air fares. Nowadays, a customer benefits from a more global perspective, from seeing on a page 
the fares of all available flights to their destination.

So AA joins the game, allowing its fares to be listed on these third-party sites. 

But how are Skyscanner's servers able to deliver the ever-changing fares of all airlines
that wish to fly me to Rio. After all, they may only have remote access to the airlines' databases.

That's where API keys come in handy; they allow the airline and the third-party website to share data, to connect to 
and communicate with what were once closed systems. These strangers can now wave to
eachother, or at least make fetch requests.

An API allows computers to communicate remotely to achieve a common goal, resembling
how web browsers speak with servers. 

Let's pace ourselves, though. The API is a broad topic, and we've only
begun to explain it with what we've learned thus far.

Something as simple as window.fetch() in the browser console can be an API. 



