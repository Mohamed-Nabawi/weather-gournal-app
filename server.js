// Setup empty JS array to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes


const express = require('express');
const app=express();

// Start up an instance of app
// Dependencies
const bodyParser = require('body-parser');


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
// creating port 
const port =8887;
// define server with to parameters selected port and listening function
const server = app.listen(port, listening);
function listening(){
    console.log("server running"); 
   console.log(`running on localhost:${port}`);}
//intializing get route with callBack function
   app.get('/all', function (req, res) {
    res.send(projectData);
    projectData=[];
  });
  // post route with callbackfunction to return the required data date ,temp, content
app.post('/add', function (req, res) {
    console.log(req.body);
    newEntry={
        date:    req.body.date,
        temp:    req.body.temp,
        content: req.body.content,
    }
    projectData.push(newEntry);
    res.status(200).end();
});





