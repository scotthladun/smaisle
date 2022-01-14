const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    user: { type: String, required: true },
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
    }],
    createdAt: { type: Date, default: Date.now },
    name: { type: String },
});

const List = mongoose.model('List', listSchema);
module.exports = List;
