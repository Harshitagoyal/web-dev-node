const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/webdev');
mongoose.connect('mongodb+srv://harshi03:EYtLXFiHEMYPnw3@mongo-oregon-webdev.iw6fv.mongodb.net/webdev?retryWrites=true&w=majority')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

require('./services/movies-service')(app);
require('./services/tweeter-service')(app);
require('./services/profile-service')(app);
require('./services/who-service')(app);
require('./movies/service')(app);


let port = process.env.PORT || 4000;
app.listen(port, "0.0.0.0", () => {
    console.log("Listening on port: " + port);
});