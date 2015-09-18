'use strict'

var express = require('express');
var controller = require('./commits.controller');

var router = express.Router();

router.get('/repos', controller.getRepos);
router.get('/repo/:repoName', controller.getCommits);

module.exports = router;
