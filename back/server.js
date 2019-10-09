const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = express.Router();
const PORT = 4000;
let Book = require('./book.model');

app.use(cors);
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/books", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log("MongoDB connected successfully!");
});

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});