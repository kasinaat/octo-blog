const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type : String,
        required : true,
        unique : true,
        maxlength : 20
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        trim : true
    },
    firstName : {
        type : String,
        required : true,
        trim : true
    },
    lastName : {
        type : String,
        trim : true
    },
    description : {
        type : String,
        minlength : 15
    },
    avatar : {
        type : String
    },
    creation_time : {
        type : Date,
        required : true
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "BlogPost"
    }],
    votes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Vote"
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
});
module.exports = mongoose.model('User', userSchema);