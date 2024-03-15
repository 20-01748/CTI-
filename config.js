const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://amielbuquid:ctiDEV02@cti-dev.ovdm1oj.mongodb.net/")

//check database connected or not 
connect.then(() => {
    console.log("Database connected Successfully");
})
.catch(() => {
    console.log("Database cannot be connected");
})

//create a schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//collection part
const collection = new mongoose.model("tut.users", Loginschema);

module.exports = collection; 