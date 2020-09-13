# APIs
---

An application programming interface is a messenger that takes a request and
tells the system what to do.  That's a rather basic explanation, though; let's elaborate.

[Skyscanner](https://www.skyscanner.com) is an aggregator website. We use its search algorithms scan the websites of airlines for their lowest air fares. 

How does Skyscanner do it if not by storing flight information in their own databases?
The data is dynamically updated elsewhere, in the database of each airline.

If that's the case, the who needs Skyscanner? Well, not all potential customers will view a singular proprietary airline website to
evaluate air fares. Nowadays, a customer benefits from a more global perspective, from seeing on a page 
the fares of all available flights to their destination.

That said, it would benefit AA to allow its fares to be listed on these third-party sites. 

But how are Skyscanner's servers able to deliver the ever-changing fares of all these airlines?
After all, they may only have remote access to the airlines' databases.

That's where API keys come in handy; they allow the airline and the third-party website to share data, to connect to 
and communicate with what were once closed systems. These strangers can now wave to
eachother, or at least make fetch requests.

An API allows computers to communicate remotely to achieve a common goal. The process resembles
how web browsers speak with servers. 

Let's pace ourselves, though. The API is a broad topic, and we've only
begun to explain it with what we've learned thus far.

Something as simple as window.fetch() in the browser console can be an API. 



