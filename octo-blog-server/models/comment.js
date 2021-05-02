const mongoose = require('mongoose');

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

module.exports = mongoose.model("Comment", commentSchema);