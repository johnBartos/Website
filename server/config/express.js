'use strict';

var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');

module.exports = function(app){

    //app.set('views', config.root + '/server/views');
    app.set('db', config.root + '/server/database/database.js');
    //app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', '../client');
};
