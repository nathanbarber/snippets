// This is a basic express sever, and the first of many snippets

// 1. Import express from node_modules
const express = require("express");

// 2. Set up your express instance
// The imported value of express is a function that can be called immediately. Call it into a new variable 'app'
const app = express();

// 3. Give your server an endpoint. In the callback function (a function triggered by a request to the server), create two
// variables, req (contains request details) and res (contains response details).
// Use the res (response) variable to send a message to the client.
app.get("/", (req, res) => {
    res.send("Cafe blues");
});

// 4. Run your server
app.listen(8080);

// TESTING
// We are going to include code to test the server we just created. This can be done through the request library.

// 5. Import request from node_modules
const request = require("request");

// 6. Send a request to our local server using our request library,
// then print out the response. 
request.get("http://localhost:8080", {}, (err, res, body) => {
    console.log(body);
    // Should print out "Cafe blues"
});

// Done. You have just created an ExpressJS HTTP server, set up an endpoint, and pinged it with a request library.
// Try to experiment and use these in your own implementation.