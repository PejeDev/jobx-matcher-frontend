'use strict';
require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const passport = require('passport');
const auth_routes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

let port = __.PORT || 8080;

models.database.sync();

app.use(passport.initialize());

require('./config/passport')(passport);


app.use('/api/auth', auth_routes);

let server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
