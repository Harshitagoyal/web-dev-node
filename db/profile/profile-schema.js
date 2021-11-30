const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: String,
    name: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: Number,
    followersCount: Number,
    tweets: Number,

}, {collection: "profiles"});
module.exports = schema;