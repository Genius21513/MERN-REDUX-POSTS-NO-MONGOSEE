const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (db) {
                _db = db.db('myFirstDatabase');
                console.log('Successfully connected to MongoDB');
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }
}