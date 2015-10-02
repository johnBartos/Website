'use strict';

var moment = require('moment');

var parser = module.exports = {};

parser.parse = function (activityList) {
  var commits = getPushesFromActivityList(JSON.parse(activityList));

  console.log(commits);

  return parsePushEvents(commits);
};

function getPushesFromActivityList (activityJson) {
  return activityJson.filter(function (activity) {
     return activity.type == 'PushEvent';
   });
}

function parsePushEvents (pushList) {
  var parsedPushEvents = [];

  for (var push of pushList) {
    var formattedPush = formatPush(push);
    parsedPushEvents.push(formattedPush);
  }

  return parsedPushEvents;
}

function formatPush (push) {
  var formattedPush = {
    date: moment(push.created_at).fromNow(),
    avatar_url: push.actor.avatar_url,
    repo: {
      name: push.repo.name,
      url: createProperRepoUrl(push.repo.name)
    },
    commits: []
  };

  for (var commit of push.payload.commits) {
    var formattedCommit = {
      url: createProperCommitUrl(push.repo.name, commit.sha),
      message: commit.message
    };
    formattedPush.commits.push(formattedCommit);
  }
  return formattedPush;
}

function createProperRepoUrl (repoName) {
  return 'https://github.com/' + repoName;
}

function createProperCommitUrl (repoName, sha) {
  return 'https://github.com/' + repoName + '/commit/' + sha;
}
