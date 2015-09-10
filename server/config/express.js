'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');

module.exports = function(app){
    app.set('db', config.root + '/server/database/database.js');
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', '../client');
};
