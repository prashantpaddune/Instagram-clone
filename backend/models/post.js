const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "No photo"
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true } );

module.exports = mongoose.model("Post", postSchema);