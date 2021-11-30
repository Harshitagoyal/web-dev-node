const mongoose = require('mongoose');

const schema = mongoose.Schema({
    topic: String,
    posted: {type: Date, defaultValue: Date.now},
    userName: String,
    verified: {type: Boolean, defaultValue: false},
    handle: String,
    block_title: String,
    block_description: String,
    block_image: String,
    block_link: String,
    message: String,
    attachments: {
        image: String
    },
    time: String,
    avatarIcon: String,
    comments: {type: Number, defaultValue: 0},
    retweets: {type: Number, defaultValue: 0},
    likes: {type: Number, defaultValue: 0},
    liked: {type: Boolean, defaultValue: false},
}, {collection: "tweets"});
module.exports = schema;
