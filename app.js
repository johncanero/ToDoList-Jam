// jshint esversion:6

// essentials
const express = require("express");
const bodyParser =  require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
const items = ["Study Web Development", "Build Something"];
const workItems = [];

// set-up view: EJS
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// public > css (styles)
app.use(express.static("public")); 






// essentials: running server
app.listen(3000, function(){
console.log("Server is running on port 3000");
});