const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        commentText: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: false
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