'use strict';
require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let port = __.PORT || 8080;

let server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
