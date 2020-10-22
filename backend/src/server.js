'use strict';
require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const passport = require('passport');
const auth_routes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/auth', auth_routes);

models.database.sync().then(resp => {
    app.listen(__.PORT, () => {
        if (__.DEBUG) console.log(__);
    });
}).catch(error => {
    console.error(error);
});