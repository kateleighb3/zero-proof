const {Schema, model } = require('../models');

const Profileschema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
})

const Profile = model('Profile', Profileschema);

module.exports = Profile;