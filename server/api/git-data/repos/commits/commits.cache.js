'use strict'

var cache = {
  save: function(repo, etag, commits) {
      this[repo] = {
        etag: etag,
        commits: commits
      }
  },
  getETag: function (repo) {
    var etag = '';
    if(typeof this[repo] !== 'undefined') {
      etag = this[repo].etag;
    };
    return etag;
  }
};

module.exports = cache;
