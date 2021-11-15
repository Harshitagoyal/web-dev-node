let profileData = {
    "name": 'Jose Annunziato',
    "handle": 'jannunzi',
    "profilePicture": '/images/jose.jpeg',
    "bannerPicture": '/images/polyglot.jpeg',
    "bio": 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements.',	website: 'youtube.com/webdevtv',
    "location": 'Boston, MA',
    "dateOfBirth": 'Nov 21, 1968',
    "dateJoined": 'April 2009',
    "followingCount": 312,
    "followersCount": 180,
    "tweets": 5196,
};

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profileData);
    }

    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        profileData = req.body;
        res.sendStatus(200);
    }
    app.put('/api/profile', updateCurrentProfile);
};