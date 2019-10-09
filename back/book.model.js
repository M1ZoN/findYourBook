const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
    name: {
        type: String
    },
    edition: {
        type: Number
    },
    author: {
        type: String
    },
    year: {
        type: String
    },
    seller: {
        type: String
    },
});

module.exports = mongoose.model('Book', Book);