let Express = require("express");
let app = Express();
let port = 3000;
const bodyParser = require("body-parser");

app.use(Express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
})

app.get("/api/whoami", function(req, res) {
    res.json({ipaddress: req.ip, language: req.headers["accept-language"], software: req.headers["user-agent"]});
})


app.listen(port, function() {
    console.log("Server has been started on port: "+port);
})