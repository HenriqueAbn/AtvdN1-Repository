var express = require("express");
var path = require("path");
var routes = require("./routes")

var app = express();


app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs")

app.use(express.static('/public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


app.use(routes);

app.listen(app.get("port")
,function(){
console.log("Server Stared on port" + app.get("port"));
});
