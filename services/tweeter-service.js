let tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    app.get('/api/tweets', findAllTweets);

    const createTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatarIcon": "/images/elon_musk_avatar.jpeg",
            "block_image": "/images/space_suit.jpeg",
            "comments": 123,
            "retweets": 234,
            "likes": 345,
            ...req.body,
        }
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }

    app.post('/api/tweets', createTweet);

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = parseInt(req.params['id']);
        let updatedTweet = null;
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                console.log("Found id: " + id);
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.likes--;
                } else {
                    tweet.liked = true;
                    tweet.likes++;
                }
                updatedTweet = tweet;
                return tweet;
            } else {
                return tweet;
            }
        });
        res.json(updatedTweet);
    }
    app.put('/api/tweets/:id/like', likeTweet);
};
