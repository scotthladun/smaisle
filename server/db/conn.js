const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, { useNewUrlParser: true, useUnifiedTopology: true });

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err) {
            if (err) {
                console.log(err);
                return;
            }
            _db = client.db('data');
            callback(client);
        });
    },

    getDb: function () {
        return _db;
    }
};
