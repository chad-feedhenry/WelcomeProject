var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://127.0.0.1:27017/test';
if (process.env && process.env.FH_MONGODB_CONN_URL) {
  dbUrl = process.env.FH_MONGODB_CONN_URL;
}
console.log('dbUrl = ' + dbUrl);

var dbConn;
MongoClient.connect(dbUrl, function(err, db) {
  if (err) {
    console.log("Failed to connect to MongoDB", err);
    dbConn = null;
    return;
  }
  dbConn = db;
  console.log("Db connection established");
});

exports.recordActivity = function(params, callback) {
  if (dbConn == null) {
    return callback("DB connection error");
  }
  var collection = "User Activity";
  var doc = params.document;
  doc.created = new Date().getTime();
  var collection = dbConn.collection(collection);
  collection.insert(doc, function(err, docs) {
    if (err) {
      console.log('Failed to create data', err);
      return callback('Data creation error.');
    }
    return callback(null, {
      'status': 'ok'
    });
  });
};

exports.listActivity = function(params, callback) {
  if (dbConn == null) {
    return callback("DB connection error");
  }
  var collection = "User Activity";
  var collection = dbConn.collection(collection);

  collection.find().toArray(function(err, docs) {
    if (err) {
      console.log('Failed to read data', err);
      return callback('Data read error.');
    }
    return callback(null, docs);
  });
}