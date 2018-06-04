const PATH = require("path");
const FRIENDS = require("../data/friends.js");

module.exports = function(app) {

    app.get('/api/friends', function(req, res){
        console.log("reading API");
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        let userInput = req.body;
            let userResponse = userInput.scores;
            let match = {
                name: "",
                photo: "",
                difference: 500
            };
        
        for (let i = 0; i < friends.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < userResponse.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - userResponse[j]);

                if (totalDifference <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].hoto;
                    match.difference = totalDifference;
                }
            }
        }
        friends.push(userInput);

        res.json(match);
    });
};