// This is the third express server snippet. Here we're focusing on hosting client code to a browser, such as
// Google Chrome. This will cover the basics for website servers.

// 1. Import express, set it up, blah blah blah, we've done this.
const express = require("express"),
    app = express();

// 2. We're going to use body-parser again for this app, so lets import that too.
// While we're at it lets set it up with app.
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

// Now, we're still working with middleware here (remember .use()?)
// Lets set up the express middleware for hosting a folder online.

// 3. Use the express.static() middleware to host client code.
// This will make your client code (HTML, CSS, JS) available online at a given URL.
// You will see a folder called static assets alongside this file, which contains a very basic client.
// We are hosting that folder with the following command
app.use(express.static(__dirname + "/_static_assets"));

// NOTE: '__dirname' is a variable which refers to the current folder this Javascript file is in.

// 4. Let's create some endpoints for our client to access. One GET one POST

// Our get endpoint will send the client a random drink.
app.get("/give-drink", (req, res) => {
    // Lets write some quick code that picks a drink out of a list
    let drinks = ["Coffee", "Tea", "Milk", "Stream Sludge"],
        randomPicker = Math.floor(Math.random() * drinks.length);
    // Now lets print out what the client said.
    // 'req.query' is the object that contains the client's request for a GET, as opposed to req.body for a POST
    console.log("CLIENT SAID: " + JSON.stringify(req.query));
    // Finally, lets send the client a JSON object containing their drink.
    let sendingDrink = {
        "drink": drinks[randomPicker]
    }
    res.send(sendingDrink);
});

// Our post endpoint, when hit, will tell us the client liked the drink.
app.post("/liked-drink", (req, res) => {
    // Lets see if the client sent anything in the POST body
    console.log("CLIENT SAID: " + JSON.stringify(req.body));
    // Now, lets show the client some appreciation for their feedback,
    // in JSON of course!
    res.send({
        "message": "Thank you for your positive feedback!"
    });
});

// 5. Now that we have our static client server and our endpoints set up, lets run the app!
app.listen(8080);

// 6. Run this file with the command 'node express.server.3.js'
// then go to your browser of choice and navigate to http://locahost:8080
// you should see two buttons