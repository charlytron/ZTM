# APIs
---

An application programming interface is a messenger that takes a request and
tells the system what to do.  Let's elaborate.

[Skyscanner](https://www.skyscanner.com) is an aggregator website. We use it to look for a flight, and its
search algorithms scan the websites of airlines for their lowest air fares. 

How is it able to do this?  Skyscanner does not store this information. The
data is somewhere in the database of each airline.

Not all potential customers will look to American Airlines' website to
evaluate air fares. If Americain allows its fares to be listed on these third-party sites, the airline has
yet another revenue stream. But how are Skyscanner servers able to deliver the prices without having this 
dynamic data themselves?

That's where APIs come in handy; they allow strangers to share data, to connect to 
and communicate with what were once closed systems. These strangers can now wave to
eachother, or at least make fetch requests.

An API allows computers to communicate remotely to achieve a common goal. It's resembles
how web browsers speak with servers. 

Let's pace ourselves, though. The API is a broad topic, and we've only
begun to explain it with what we've learned thus far.

Something as simple as window.fetch() in the browser console is really an API. 



