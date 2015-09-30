'use strict';

var moment = require('moment');

var parser = module.exports = {};

parser.parse = function (activityList) {
  var commits = getCommits(JSON.parse(activityList));
  console.log(commits);
  return flattenCommits(commits);
};

function getCommits (activityJson) {
  return activityJson.filter(commitsOnly);
}

function commitsOnly (activity) {
  return activity.type == 'PushEvent';
}

function flattenCommits (commitList) {
  return commitList.map(function (c) {
    return {
      date: c.created_at,
      avatar_url: c.avatar_url,
      repo: c.repo,
      commits: c.payload.commits
    };
  });
}
