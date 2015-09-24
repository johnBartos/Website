'use strict';

var cache = {
  etag : '',
  names : [],
  save: function (etag, repoNames) {
    this.etag = etag;
    this.names = repoNames;
  }
};

module.exports = cache;
