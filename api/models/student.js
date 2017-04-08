const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Student',
  new Schema({
    name: String,
    password: String,
    class: String
  })
);
