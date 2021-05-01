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
module.exports.User = mongoose,mongoose.model('User', userSchema);
const blogPostSchema = new mongoose.Schema({
    title : {
        type : String,
        minlength : 10,
        maxlength : 200,
        required : true,
        unique : true
    },
    content : {
        type : String
    },
    creation_time : Date,
    is_modified : Boolean,
    last_modified_time : Date,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    votes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Vote"
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
});

module.exports.BlogPost = mongoose.Model("BlogPost", blogPostSchema);

const voteSchema = new mongoose.Schema({
    votetype : Number,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    blogpost: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "BlogPost"
    }
});

module.export.Vote = mongoose.model("Vote", voteSchema);

const commentSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "BlogPost"
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    content : String
});

module.exports.Comment = mongoose.Model("Comment", commentSchema);