'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/LocalDB";

var db = module.exports = {
  connection : {}
};

db.openConnection = function () {

    return new Promise(function (resolve, reject) {

      mongoClient.connect(url, function (err, conn) {
        if (err) { reject(err); }
        db.connection = conn;
        resolve();
      });

    });

};

db.getFromCollection = function (collectionName) {

    return new Promise(function (resolve, reject) {

      db.connection.collection(collectionName, function (err, collection) {
        if (err) { reject(err); }

        collection.find().toArray(function (err, items) {
          if (err) { reject(err); }
          resolve(items);
        });

      });

    });
};
