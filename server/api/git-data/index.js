'use strict'

var express = require('express');
var commitsController = require('./commits/commits.controller');
var reposController = require('./repos/repos.controller');

var router = express.Router();

router.get('/repos', reposController.getRepos);

router.get('/repo/:repoName/commits', commitsController.getCommits);

module.exports = router;
