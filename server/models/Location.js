const { Schema, model } = require('mongoose');

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
        // add once comments model is made
        // comments: [Comment]
    }
)