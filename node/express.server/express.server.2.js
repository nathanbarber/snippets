// This is the second express server snippet. Here we're focusing on middleware,
// which is code that helps the server automatically deal with certain types of requests.
// Here, we'll be specifically focusing on body parser, which allows the server to read
// a client's message in the body of a POST request.

// We're starting here assuming the first example is understood.

// 1. Go ahead and initialize your express instance
const express = require("express"),
    app = express();

// 2. Now, we get into the middleware. Go ahead and import the 'body-parser' library.
const bodyParser = require("body-parser");

// 3. Now we allow our express app to use the library. We do that with the .use() function of app.
// We tell app to use the bodyparser function that accepts JSON, our favorite format, and the function that
// skips the extention of URLs (the latter is nice to have but not necessary)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 4. Now, instead of creating a .get() endpoint like the previous example, use the .post() function of app.
// Then run your server.
app.post("/", (req, res) => {
    // This is where bodyparser comes in handy. You'll be able to see the client's message in the 'req' object.
    // In our example, the following line will print out 'Cafe blues'
    console.log(req.body);
    // And just like last time, send the response back to the client.
    res.send("Yes. Cafe blues")
});

app.listen(8080);

// TESTING

// 5. Just like last time, we import request and test out our server.
const request = require("request");

// 6. Unlike last time, we specify a POST request instead of a get. To do this, we use the .post() function of request.
// Before, in the GET request, our options object was empty. This time, we're going to add a request JSON body.
// Make sure to set JSON option to true, as that is the format our server expects.

// Finish by adding a response listener function to the end '(err, res, body) => {}'
let options = {
    body: {
        "message": "Cafe blues"
    },
    json: true
}
request.post("http://localhost:8080", options, (err, res, body) => {
    // Print out the body like last time. Guess what it says...
    console.log(body);
});

// NOTE: The exchanges between client and server are a conversation, which in most cases are started by the client.
// NOTE: It's typical for a server and client to speak in the same language. In this case, it's JSON. That's why body-parser is necessary.
// NOTE: If you have any questions, Google and StackOverflow are your friends.