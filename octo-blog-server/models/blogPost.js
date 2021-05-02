const mongoose = require('mongoose');

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

module.exports = mongoose.model("BlogPost", blogPostSchema);
