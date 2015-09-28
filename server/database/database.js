'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/LocalDB";

var db = module.exports = {
  connection : {}
};

db.OpenConnection = function () {

    return new Promise(function (resolve, reject) {

      mongoClient.connect(url, function (err, conn) {
        if (err) { reject(err); }
        db.connection = conn;
        resolve();
      });

    });

};

db.GetFromCollection = function (collectionName) {

    return new Promise(function (resolve, reject) {

      openCollection(collectionName)
        .then(function (collection) {
          collection.find().toArray(function (err, items) {
            if (err) { reject(err); }
            resolve(items);
          })
          .catch(function (reason) {
            console.log('Couldnt get from collection ' + collectionName  + ' ' + reason);
            reject(reason);
          });
      });

    });
};

db.FindInCollection = function (collectionName, findParameters) {

  return new Promise(function (resolve, reject) {

    openCollection(collectionName)
      .then(function (collection) {
        collection.find(findParameters).toArray(function (err, items) {
          if (err) { reject(err); }
          resolve(items);
        });
      })
      .catch(function (reason) {
        console.log('Couldnt find in collection ' + collectionName  + ' ' + reason);
        reject(reason);
      });

  });

};


  function openCollection (collectionName) {
    return new Promise(function (resolve, reject) {
      db.connection.collection(collectionName, function (err, collection) {
        if (err) { reject(err); }
        resolve(collection);
      });
    });
  }
