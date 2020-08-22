# Back to basics

<https://trailhead.salesforce.com/en/content/learn/modules/pw-api-basics/make-apis-for-you-and-me>

For decades, most computer software has been created and distributed with one type of user in mind: a human. No matter what chain of events took place under the hood of that software, a human user was traditionally at the end of that chain. Because of this, the user was only able to access data through a user interface (UI).

But what if that same data could just as easily be accessed by another piece of software? For example, your smartwatch sharing the number of steps you’re taking with a performance-charting service on the web or with the electronic health records (EHR) system used by the doctor who you’ve asked to help improve your fitness? In this case, the UI concerns are very different. After all, software doesn’t have eyes, emotions, or intuition—it doesn’t need an over-the-top graphical user interface. However, in the same way a UI is tailored to humans, software needs an interface that makes it easy to get data or functionality from other software.

Say “hello” to application programming interfaces, otherwise known as APIs. When applications, data, or devices share data or functionality within some purpose-built context (like visualizing fitness data), APIs are behind the scenes and are responsible for the connectivity that happens in that context.

````md
Básicamente API son estructuras para que otros softwares puedan comunicarse entre ellos
```

## What Is an API?

**An API is equivalent to a user interface, except it’s designed for software instead of humans.**

The client sends a request for specific information or functionality to another system. That system returns the data or functionality in a response. To send or receive data, there is an expectation that it will be in a specific format that both sides can understand. In many cases, they involve a reciprocal exchange of value.

APIs serve as a layer of abstraction between the data or function being provided and the logic required to complete and run a task at the source. In other words, your software just needs to know how to connect to the other system, not how the other system works.

| HTTP Verbs | Descriptions |
| ------- | -------- |
| POST | Submit requested data to a server for processing |
| GET | Retrieve requested data from a server |
| PUT | Update and replace existing data with new data being sent in the request |
| DELETE | Remove the requested data from the server |

One comes from Facebook, called GraphQL, and the other is from Google, called gRPC.

Both have their own advantages over current web APIs. For example, GraphQL is inspired by the idea of a social graph and how different data items like friends, photos, places of work, and so on, form labyrinths of interrelated information. GraphQL makes it possible to request information from across an entire graph of data at once (versus the multiple round-trips of requests it takes traditional APIs to accomplish the same thing). 

gRPC on the other hand has its own advantages. It relies on HTTP/2 (HTTP version 2) which can stream data bidirectionally. Using HTTP/2, gRPC can turn an API into a streaming API that feeds its data to the consuming application as soon as that data becomes available. For certain real-time applications like a stock market ticker, that’s a much more efficient way of getting data as opposed to forcing the app to constantly check if there’s new data available like traditional APIs do.
