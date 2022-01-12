const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path: './config.env' });

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
// app.use(require('./routes/record'));

// get driver connection
const dbo = require('./db/conn');
const List = require('./models/List');
const Products = require('./models/Product');
const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/list', (req, res) => {
    // let db_connect = dbo.getDb("data");
    // db_connect.collection('lists').find({ user: req.headers.id }).toArray(function (err, lists) {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         res.status(200).json(lists);
    //     }
    // });
    List.find({ user: req.headers.id }, (err, lists) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(lists);
        }
    })
});

app.post('/products', (req, res) => {
    const page = req.body.page ? parseInt(req.body.page) : 1;
    const skip = (page - 1) * 12;
    Products.find({}).sort({ "name": 1 }).skip(skip).limit(12).then((products, err) => {
        if (products) {
            res.status(200).json(products);
        } else {
            res.status(500).send(err);
        }
    });
});

// Handle product search
app.post('/products/search', (req, res) => {
    const searchTerm = String(req.body.searchTerm);
    console.log(searchTerm);
    Products.aggregate([
        {
            '$search': {
                'index': 'productSearch',
                'text': {
                    'query': searchTerm,
                    'path': {
                        'wildcard': '*'
                    }
                }
            }
        }
    ]).then((products, err) => {
        if (products) {
            res.status(200).json(products);
        } else {
            res.status(500).send(err);
        }
    });
});

// Get product count for pagination
app.get('/products/count', (req, res) => {
    Products.find({}).countDocuments().then((count, err) => {
        if (count) {
            res.status(200).json(count);
        } else {
            res.status(500).send(err);
        }
    });
});


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});