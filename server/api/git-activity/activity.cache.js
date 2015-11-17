'use strict';

var cache = module.exports = {
  etag: {},
  activity: {},
  save: function (etag, activity) {
    this.etag = etag;
    this.activity = activity;
  }
};
