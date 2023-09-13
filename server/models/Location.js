const { Schema, model } = require('mongoose');
const Comment = require('./Comment');

const locationSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now
        },
        name: {
            type: String
        },
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },
        photo_ref: {
            type: String
        },
        description: {
            type: String
        },
        username: {
            type: String,
            required: true
        },
        comments: [Comment]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = locationSchema;