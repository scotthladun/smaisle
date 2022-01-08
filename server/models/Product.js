const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [50, 'Name must be less than 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be greater than 0']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [3, 'Description must be at least 3 characters'],
        maxlength: [500, 'Description must be less than 500 characters']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        minlength: [3, 'Image must be at least 3 characters'],
        maxlength: [500, 'Image must be less than 500 characters']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        minlength: [3, 'Category must be at least 3 characters'],
        maxlength: [50, 'Category must be less than 50 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});