const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Book', BookSchema);