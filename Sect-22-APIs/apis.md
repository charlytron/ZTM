# APIs
---

An application programming interface is a messenger that takes a request and
tells the system what to do.  Let's elaborate.

[Skyscanner](https://www.skyscanner.com) is an aggregator website. We use it to look for a flight, and its
search algorithms scan the websites of airlines for their lowest air fares. 

How does Skyscanner do it?  They don't store the the flight information in their own databases;
rather, this dynamic data is elsewhere, frequently updated in the database of each airline.

Not all potential customers will look to American Airlines' website to
evaluate air fares. If a customer benefits from seing the fares of  all airlines flying to their destination,
then AA may wisely join in, allowing its fares to be listed on these third-party sites. 

That said, how are Skyscanner's servers able to deliver the prices without having immediate local
access to the data?

That's where APIs come in handy; they allow the airline and the third-party website to share data, to connect to 
and communicate with what were once closed systems. These strangers can now wave to
eachother, or at least make fetch requests.

An API allows computers to communicate remotely to achieve a common goal. It's resembles
how web browsers speak with servers. 

Let's pace ourselves, though. The API is a broad topic, and we've only
begun to explain it with what we've learned thus far.

Something as simple as window.fetch() in the browser console is really an API. 



