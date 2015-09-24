'use strict';

var express = require('express');

var namesController = require('./names/names.controller');
var commitsController = require('./commits/commits.controller');

var router = express.Router();

router.get('/names', namesController.getRepoNames);

router.get('/:repoName/commits', commitsController.getCommits);

module.exports = router;
