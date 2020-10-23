'use strict';
const express = require('express');
const router = express.Router();
const JobController = require.main.require('./controllers/job')

router.get('/offers', JobController.getOffers);

module.exports = router;
