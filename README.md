MEAN - mongodb, express, angular 6, node.js
=====================================
This is a RESTful API server and web application built with the MEAN (Angular 2) stack. It is a sample application for demonstrating.


Get started
------------

Clone the project:
```sh
$ git clone  https://github.com/amiss18/mean_book.git
$ cd mean_book
$ npm install
```


Run `yarn run start` for a dev server. Navigate to `http://localhost:8000/`. 

Register a new Book:
```
$ curl -i -X POST -H "Content-Type: application/json" -d '{ "isbn":"12356","title":"Les Misérables","author": "Victor.H","Examining the nature of law and grace, the novel elaborates upon the history of France, the architecture and urban design of Paris, politics, moral philosophy, antimonarchism, justice, religion, and the types and nature of romantic and familial love.","publisher":"A & Cie" }' localhost:8000/books

-> HTTP/1.1 200 OK
```