var express = require("express");
var friends = require('../data/friends.js');
//GET Route with the url /api/friends   This will be used to display a JSON of all possible friends
  
var apiRoutes = function(app) {

  app.get("/api/friends", function(req, res) {
      return res.json(friends);
      console.log("seeing the display");
    });


  // a POST routes /api/friends   This will be used to handle incoming survey results.  This route will also be used to handle the compatibility logic
  app.post("/api/friends", function(req, res){
  
  //logic to compare newFriend with existing friends array
  //after choosing closest match, store that friend as a variable
  //bestMatch = {}
var userScores = req.body.scores;
  var bestMatch = {
    leastDif: 100,
        friend: {}
    }

    for (var i=0; i<friends.length; i++){

  var totalDif = 0; 
    for(var j=0; j<9; j++) {
        var scoreDif = Math.abs(userScores[j] - friends[i].scores[j]);
          totalDif += scoreDif;
      }
            
    if(totalDif < bestMatch.leastDif) {
        bestMatch.friend = friends[i];
          bestMatch.leastDif = totalDif;
      }
    }

    friends.push(req.body);
      res.json(bestMatch);
    });
}

module.exports = apiRoutes;


