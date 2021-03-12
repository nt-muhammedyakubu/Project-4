// For environment variables
const dotenv = require('dotenv');
dotenv.config();


var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js')

var https = require('follow-redirects').https;
var fs = require('fs');


var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': '/sentiment-2.1?key=<9eea55e36716c9c438c6c0094693c168>&lang=<lang>&txt=<text>&model=<model>',
    'headers': {},
    'maxRedirects': 20
};

var req = https.request(options, function(res) {
    var chunks = [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    res.on("end", function(chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function(error) {
        console.error(error);
    });
});

req.end();

// Creating an instance of the app

const app = express();

// Configuring express to use body-parser as middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin
app.use(cors());

// Initialise the production folder

app.use(express.static('dist'));


app.get('/', sendFile);

function sendFile(req, res) {
    res.sendFile('dist/index.html')
}

// Set up the server
const port = 8080;

const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}!`);
}