const dao = require('../db/profile/profile-dao');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        dao.findProfileById('jannunzi').then(profile => res.json(profile));
    }

    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        dao.updateProfile(req.params.id, req.body)
            .then(status => {
                res.sendStatus(200);
            });
    }
    app.put('/api/profile/:id', updateCurrentProfile);
};