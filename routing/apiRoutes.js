const PATH = require("path");
const FRIENDS = require("../data/friends");

module.exports = function(app) {

    app.get('/api/friends', function(req, res){
        console.log("reading API");
        res.json(friends);
    });

    app.post("/api/new", function(req, res) {
        // Variables for finding a math
        let newFriend = req.bodyl
        let newScore = req.body;
        let total = 0;
        let bestMatch = 1000;
        let index = -1;

        for(let i = 0;  i < friends.length; i++){
            // Interate through Friends database
            total = 0;

            for(let j = 0; j < newScore.length; j++){
                // Calculate the total value
                let diff = Math.abs(newScore[j] - friends[i].scores[j]);
                total += diff;
            }
            if(total < bestMath){
                bestMatch = total;
                index = i
            }
        }
        console.log('You matched with:', friends[index]);
        friends.push(newFriend);
        res.json(friends[index]);
    });
};