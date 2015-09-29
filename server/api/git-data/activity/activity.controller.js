'use strict';

var rp = require('request-promise');
var cache = require('./activity.cache.js');

var activityController = module.exports = {};

activityController.getActivity = function (req, res) {

  console.log('getting git activity');

  var getActivity = function () {
    var options = getActivityOptions();
    return rp(options)
    .then(function (activity) {
      res.status(200).json(activity);
    })
    .catch(function (reason) {
      res.status(500).json({
        success: false,
        reason: reason
      });
    });
  };

  getActivity();
};


var getActivityOptions = function () {
  return  {
    uri: 'https://api.github.com/users/johnBartos/events',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: getActivityTransform,
    resolveWithFullResponse: true
  };
};

function getActivityTransform (body, headers){
  return body;
}
