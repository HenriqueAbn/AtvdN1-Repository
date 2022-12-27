var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
    console.log("Home Page is Active.");
    res.render("home/index")
});


router.get('/critics', function(req,res){
    console.log("Critics Page is Active.");
    res.render("reviews/critics")
});

router.get('/login', function(req,res){
    console.log("Log In Page is Active.");
    res.render("userAuth/login")
});

router.get('/signin', function(req,res){
    console.log("Sign In Page is Active.");
    res.render("userAuth/signin")
});

router.get('/criticsAuth', function(req,res){
    console.log("Critics Page is Active.");
    res.render("reviews/criticsAuth")
});

router.get('/indexAuth', function(req,res){
    console.log("Home Page is Active.");
    res.render("home/indexAuth")
});

router.get('/Watchlist', function(req,res){
    console.log("Watchlist Page is Active.");
    res.render("userAuth/watchlist")
});

router.get('/X-Movie', function(req,res){
    console.log("Review Page is Active.");
    res.render("reviews/xmovie")
});

router.get('/X-MovieAuth', function(req,res){
    console.log("Review Page is Active.");
    res.render("reviews/xmovieAuth")
});

router.get('/blackadamAuth', function(req,res){
    console.log("Review Page is Active.");
    res.render("reviews/blackadamAuth")
});

router.get('/blackadam', function(req,res){
    console.log("Review Page is Active.");
    res.render("reviews/blackadam")
});

router.get('/batman', function(req,res){
    console.log("Review Page is Active.");
    res.render("reviews/thebatman")
});

router.get('/batmanAuth', function(req,res){
    console.log("Review Page is Active.");
    res.render("reviews/thebatmanAuth")
});

module.exports = router;
