const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const locationSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
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
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reply'
            }
        ]
    }
);

// initialize model
const Location = model('location', locationSchema);

module.exports = Location;