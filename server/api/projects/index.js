'use strict'

var express = require('express');
var controller = require('./projects.controller');

var router = express.Router();

router.get('/personal', controller.get_personal);
router.get('/work', controller.get_work);


module.exports = router;
