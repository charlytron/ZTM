# APIs
---

An application programming interface is a messenger that takes a request and
tells the system what to do.  That's a rather basic explanation, though; let's elaborate.

[Skyscanner](https://www.skyscanner.com) is an aggregator website. We use its search algorithms scan the websites of airlines for their lowest air fares. 

How does Skyscanner store this information if it doesn't exist in their own databases?

The data is dynamically updated off-site, within the database of each airline.

If that's the case, the who needs Skyscanner? Both buyers and sellers, apparently.

Not all potential buyers will view a proprietary airline website to
evaluate air fares. Networked servers allow them to view on a page 
the fares of all available flights to their cosen destination. 

AA improves its optics by allowing its fares to be listed on these aggregator sites. 

But how are Skyscanner's servers able to deliver the ever-changing fares of all these airlines?
The airlines' databases need to be remotely linked somehow.

That's where API keys come in handy.They allow the airline and the third-party a venue for data sharing.
Now each party may connect to and communicate with what were once closed systems. 
These strangers can now wave to eachother, or at least make fetch requests.

An API allows computers to communicate remotely to achieve a common goal. The process resembles
how web browsers speak with servers. 

Let's pace ourselves, though. The API is a broad topic, and we've only
begun to explain it with what we've learned thus far.

Something as simple as window.fetch() in the browser console can be an API. 



