'ues strict';

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/LocalDB";

exports.get = function (jobId) {

  return new Promise(function (resolve, reject) {

    mongoClient.connect(url, function (err, db){
      if (err) { reject(err); }

        db.collection('Technologies', function (err, collection){
          if (err) { reject(err); }

          collection.find({jobId: jobId}).toArray(function (err, items){
            if (err) { reject(err); }
            resolve(items);
          });
        });
    });

  });

};
