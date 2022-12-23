const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://henrikabn:cinemongodb@clustercine.ak8zknk.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("MongoDB Connected (UserAuth)")
})
.catch(() => {
    console.log("MongoDB Failed (UserAuth)")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("User_Data_Collection", LogInSchema)

module.exports = collection