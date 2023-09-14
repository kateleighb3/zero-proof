const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now
        },
        commentBody: {
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

module.exports = commentSchema;