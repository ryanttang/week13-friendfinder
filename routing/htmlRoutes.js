const PATH = require("path");

module.exports = function(APP) {

    APP.use('/', function (req, res) {
        res.sendFile(path.join(__dirname, "..public/home.html"));
    });

    APP.get('/survey', function (req, rs) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};