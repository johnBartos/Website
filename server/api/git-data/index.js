'use strict';

var express = require('express');
var repos = require('./repos');
var activity = require('./activity');

var router = express.Router();

router.use('/repos', repos);
router.use('/activity', activity);

module.exports = router;
