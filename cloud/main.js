var getWeather = require('./weather').getWeather;
var saveData = require('./databrowser').saveData;
var recordActivity = require('./record_activity').recordActivity;
var listActivity = require('./record_activity').listActivity;

exports.hello = function(params, callback) {
  recordActivity({
    document: {
      "action": "Client called Cloud App"
    }
  }, function(err, docs) {
    return callback(null, {
      text: 'Hello from FeedHenry'
    });
  });
};

exports.getWeather = function(params, callback) {
  recordActivity({
    document: {
      "action": "Cloud Weather Called"
    }
  }, function(err, docs) {
    return getWeather(params, callback);
  });
};

exports.saveData = function(params, callback) {
  recordActivity({
    document: {
      "action": "Save Data in Cloud"
    }
  }, function(err, docs) {
    return saveData(params, callback);
  });
};

exports.recordActivity = function(params, callback) {
  return recordActivity(params, callback);
};

exports.listActivity = function(params, callback) {
  return listActivity(params, callback);
};