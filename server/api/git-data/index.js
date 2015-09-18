'use strict'

var express = require('express');
var commitsController = require('./commits/commits.controller');
var reposController = require('./repos/repos.controller');

var router = express.Router();

router.get('/repos', controller.getRepos);

router.get('/repo/:repoName/commits', controller.getCommits);

module.exports = router;
