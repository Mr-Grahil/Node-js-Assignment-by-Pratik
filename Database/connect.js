const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async(url)=>{
    await mongoose.connect(url)
}
module.exports = connectToDB;