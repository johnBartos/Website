'use strict';

var rp = require('request-promise');
var errors = require('request-promise/errors');

var cache = require('./activity.cache.js');
var parser = require('./activity.parser.js');


var activityController = module.exports = {};

activityController.getActivity = function (req, res) {

  console.log('getting git activity');

  var getActivity = function () {
    var options = getActivityOptions(cache.etag);

    return rp(options)
      .then(function (response) {
        cache.save(response.etag, response.activity);
        res.status(200)
          .json(parser.parse(response.activity));
      })
      .catch(errors.StatusCodeError, function (reason) {
        if (reason.statusCode == '304') {
          console.log('Git activity hasnt changed, using values from cache');
          res.status(200)
            .json(cache.activity);
        }
        else {
          res.status(500)
            .json({
              success: false,
              reason: reason
          });
        }
      })
      .catch(errors.RequestError, function (reason) {
        res.status(500)
          .json({
            success: false,
            reason: reason
        });
      });
    };

  getActivity();
};


var getActivityOptions = function (etag) {
  return  {
    uri: 'https://api.github.com/users/johnBartos/events',
    method: 'GET',
    headers: {'user-agent': 'node.js', 'If-None-Match': etag},
    transform: getActivityTransform,
    resolveWithFullResponse: true
  };
};

function getActivityTransform (body, response) {
  return {
    activity: body,
    etag: response.headers.etag
  };
}
