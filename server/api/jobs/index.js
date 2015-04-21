'use strict'

var express = require('express');
var controller = require('./jobs.controller');

var languages = require('./languages');
var projects = require('./works');
var technologies = require('./technologies');

var router = express.Router();

router.use('/languages', languages);
router.use('/works', projects);
router.use('/technologies', technologies);

router.get('/', controller.get_all);
router.get('/:jobId', controller.get_one);


module.exports = router;
