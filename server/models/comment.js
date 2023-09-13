const {model, Schema} = require('mongoose');
const sequelize = require('../config/connection');
const CommentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        validate: [({length}) => length <= 280, 'Comment must be less than 280 characters.']
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }
},
{
    toJSON: {
        getters: true
    }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;