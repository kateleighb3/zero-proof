const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now
        },
        commentText: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// initialize model
const Comment = model('comment', commentSchema);

module.exports = Comment;