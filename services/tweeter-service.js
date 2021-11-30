const dao = require('../db/tweets/tweet-dao');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets().then(tweets => res.json(tweets));
    }

    const createTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatarIcon": "/images/elon_musk_avatar.jpeg",
            "block_image": "/images/space_suit.jpeg",
            "block_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "block_description": "Test description",
            "block_link": "netflix.com",
            "comments": 123,
            "retweets": 234,
            "likes": 345,
            ...req.body,
        }
        console.log("Creating new tweet");
        console.log(newTweet);
        dao.createTweet(newTweet).then(newTweet => res.json(newTweet));
    }

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));

    const likeTweet = (req, res) => {
        dao.findTweet(req.params.id)
            .then(tweet => {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.likes--;
                } else {
                    tweet.liked = true;
                    tweet.likes++;
                }
                dao.updateTweet(req.params.id, tweet)
                    .then(status => {
                        res.json(tweet)
                    });
            })
    }

    app.get('/api/tweets', findAllTweets);
    app.post('/api/tweets', createTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.put('/api/tweets/:id/like', likeTweet);
};
