const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    password: {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    followers: Number,
    following: Number,
    kollektion: Number,
    other: Number,
    // praise: Number = 0,
    // share: Number = 0,

})

const User = mongoose.model("User", userSchema)

module.exports = User