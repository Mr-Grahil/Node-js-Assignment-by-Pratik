const express = require("express");
const app = express();
const router = require("./route");
const connectToDB = require("./Database/connect")
require("dotenv").config()


app.use(express.static(__dirname + "/public"))
app.use(express.json());
app.use(express.urlencoded());

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/public/login.html")
})
app.use("/api/v1",router);

const port = 5000;

const start = async(url)=>{
    await connectToDB(url);
    app.listen(process.env.PORT||port,console.log("Server is running successfully"))
}
start(process.env.Mongo_url);
// app.listen(process.env.PORT||port,console.log("Server is running successfully"))