'use strict';

var moment = require('moment');

var parser = module.exports = {};

parser.parse = function (activityList) {
  var commits = getCommits(JSON.parse(activityList));

  console.log(commits);

  return parseCommits(commits);
};

function getCommits (activityJson) {
  return activityJson.filter(function (activity) {
     return activity.type == 'PushEvent';
   });
}

function parseCommits (pushList) {
  var parsedCommits = [];

  for (var push of pushList) {
    var date = push.created_at;
    var avatar_url = push.actor.avatar_url;
    var repo = push.repo;

    for (var commit of push.payload.commits) {
      var formattedCommit = {
        date: moment(date).fromNow(),
        avatar_url: avatar_url,
        url: getProperCommitUrl(repo.name, commit.sha),
        message: commit.message
    };

    parsedCommits.push(formattedCommit);
  }
}

  return parsedCommits;
}

function getProperCommitUrl (repoName, sha) {
  return 'https://github.com/' + repoName + '/commit/' + sha;
}
