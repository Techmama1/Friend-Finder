
// Routes
var express = require("express");
var path = require("path");

module.exports = function (app){ 

  // GET route to the home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  console.log("the first html get route works");
})

//GET rout to the survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
  console.log("the second html get route works");
})

}


