var express = require("express");
var path = require("path");
//var routes = require("./routes");
var app = express();
const mongoose = require('mongoose')
const collection = require("./mongodb")

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use("/", require("./routes/web"));
app.use("/", require("./routes/api"));

app.listen(app.get("port")
,function(){
console.log("Server Stared on port" + app.get("port"));
});

//Database

/*
const database = module.exports = () => {
    //const connectionParams = {
    //    useNewUrlParser: true,
    //    useUnifieldTopology: true,
    //}
    try{
        mongoose.set("strictQuery", true);
        mongoose.connect('mongodb+srv://henrikabn:cinemongodb@clustercine.ak8zknk.mongodb.net/?retryWrites=true&w=majority');
        console.log("MongoDB Connected");
    } catch(error){
        console.log("Error");
    }
}

database();*/

app.use(express.urlencoded({
    extended : false 
}))

mongoose.set("strictQuery", false);

app.post("/login",async (req,res) => {

    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password === req.body.password){
            res.render("critics")
        }else{
            res.send("WRONG PASSWORD")
        }
    }catch{

        res.send("WRONG CREDENTIALS")
    }

    res.render("critics")
})


app.post("/signin",async (req,res) => {
    const data = {
        name:req.body.name,
        password:req.body.password ,
    }

    await collection.insertMany([data])

    res.render("critics")
})