const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const replySchema = new Schema(
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
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// initialize model
const Reply = model('reply', replySchema);

module.exports = Reply;