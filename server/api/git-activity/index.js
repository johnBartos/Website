'use strict';

var activityController = require('./activity.controller.js');

var express = require('express');
var router = express.Router();

router.get('/', activityController.getActivity);

module.exports = router;
