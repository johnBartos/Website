'use strict'

var express = require('express');
var repos = require('./repos');

var router = express.Router();

router.use('/repos', repos);

module.exports = router;
