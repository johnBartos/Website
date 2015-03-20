'use strict';

var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app){

    app.set('views', __dirname + '/server/views');
    app.set('db', __dirname + '/server/database/database.js');
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    var root = path.normalize(__dirname + '/../..');
    app.use(express.static(path.join(root, 'client')));
    app.set('appPath', 'client');
};
