const express = require('express');

const recordRoutes = express.Router();

// Connect to MongoDB
const dbo = require('../db/conn');

// Convert id from string to ObjectId for the _id in the database
const ObjectId = require('mongodb').ObjectId;

// Get all records
recordRoutes.route('/record').get(function (req, res) {
    let db_connect = dbo.getDb("data");
    db_connect.collection('records').find({}).toArray(function (err, records) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(records);
        }
    });
});

// Get a record by id
recordRoutes.route('/record/:id').get(function (req, res) {
    let db_connect = dbo.getDb("data");
    db_connect.collection('records').findOne({ _id: ObjectId(req.params.id) }, function (err, record) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(record);
        }
    });
});

// Create a record
recordRoutes.route('/record').post(function (req, res) {
    let db_connect = dbo.getDb("data");
    db_connect.collection('records').insertOne(req.body, function (err, record) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(record);
        }
    });
});

// Update a record by id
recordRoutes.route('/record/:id').post(function (req, res) {
    let db_connect = dbo.getDb("data");
    db_connect.collection('records').updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body }, function (err, record) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(record);
        }
    });
});

// Delete a record by id
recordRoutes.route('/record/:id').delete(function (req, res) {
    let db_connect = dbo.getDb("data");
    db_connect.collection('records').deleteOne({ _id: ObjectId(req.params.id) }, function (err, record) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(record);
        }
    });
});

module.exports = recordRoutes;