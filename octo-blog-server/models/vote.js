const mongoose = require('mongoose');


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

module.exports = mongoose.model("Vote", voteSchema);
