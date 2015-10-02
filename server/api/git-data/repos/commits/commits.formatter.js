'use strict';

var moment = require('moment');

exports.format = function (blob, n){
  var commits = JSON.parse(blob);
  var last_commits = commits.slice(0, n);
  var formatted_commits = [];

  for(var i in last_commits)
    {
      var record = last_commits[i];
      var formatted_commit = {
        date: moment(record.commit.committer.date).fromNow(),
        message: record.commit.message.trunc(55),
        url: record.html_url,
        avatar_url: record.committer.avatar_url
      };
      formatted_commits.push(formatted_commit);
    }
    return formatted_commits;
};

String.prototype.trunc = function(n){
    if(this.length < n)
      return this;

    var truncStr = this.substr(0, n-1);
    truncStr = truncStr.substr(0, truncStr.lastIndexOf(' '));
    return truncStr + '...';
};
