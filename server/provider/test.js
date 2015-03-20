var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/LocalDB";

exports.insertRecord = function (){
  mongoClient.connect(url, function(err, db){
    if(err) { return console.dir(err); }

    db.collection('test', function(err, collection){
      if(err) { return console.dir(err); }

      var doc1 = {'hello':'doc1'};
      collection.insert(doc1, function(err, inserted){
        if(err) { return console.dir(err); }

      });
    });
  });
}

exports.getRecord = function (callback){
  mongoClient.connect(url, function(err, db){
    if(err) { return console.dir(err); }

    db.collection('test', function(err, collection){
      if(err) { return console.dir(err); }

      collection.find().toArray(function(err, items){
        if(err) { return console.dir(err); }
        callback(items);
      });
    });
  });
}
