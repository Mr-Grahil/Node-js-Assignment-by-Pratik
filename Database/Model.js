const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    gmail :{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("Assignment",schema);