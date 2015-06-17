exports.format = function (blob, n){
  var commits = JSON.parse(blob);
  var last_commits = commits.slice(0, n);
  var formatted_commits = [];

  for(i in last_commits)
    {
      var record = last_commits[i];
      var formatted_commit = {
        name: record.commit.committer.name,
        email: record.commit.committer.email,
        date: record.commit.committer.date,
        message: record.commit.message,
        html_url: record.html_url,
        avatar: record.committer.avatar_url,
        url: record.committer.url
      };
      formatted_commits.push(formatted_commit);
    }
    return formatted_commits;
}


// var CommitList = function(blob)
// {
//   this.jsonArray = JSON.parse(blob);
// }
//
// Commit.prototype.last(n){
//   var formatted_commits = [];
//   var last_commits = jsonArray.slice(0, n);
//   for(record in last_commits)
//     {
//       var formatted_commit = {
//         name: record.commit.committer.name,
//         email: record.commit.committer.email,
//         date: record.commit.committer.date,
//         message: record.commit.message,
//         html_url: record.html_url,
//         avatar: record.committer.avatar_url,
//         url: record.committer.url
//       };
//       formatted_commits.push(formatted_commit);
//     }
//   return formatted_commits;
// }
