var express = require("express");
var router = express.Router();
var app = express();

app.use(express.static('/public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


router.get('', function(req,res){
    console.log("Home Page is Active.");
    res.render("index")
});

module.exports = router;