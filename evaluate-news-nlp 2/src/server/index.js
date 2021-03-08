const dotenv = require('dotenv');
dotenv.config();


var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js')


// Credentials for the api
var textAPI = new meaningcloud({
    application_key: process.env.API_Key
});

// Creating an instance of the app

const app = express()

// Configuring express to use body-parser as middleware

app.use(bodyParser.urlencorded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin
app.use(cors());

// Initialise the production folder

app.use(express.static('dist'));

// Request
app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

app.post("/api", (req, res) => {
    const text = req.body;
    console.log("Request to '/api' endpoint", text);
    textAPI.sentiment(text, (error, result, remaining) => {
        if (error) console.log(error);
        console.log("MeaningCloud Callback Response and Remaining requests available", result, remaining);
        res.send(result);
    });


});

// designates what port the app will listen to for incoming requests
const port = 8080;

app.listen(port, function() {
    console.log(`Evaluate NLP app's server listening on port ${port}!`);
});