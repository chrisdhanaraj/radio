const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Class',
  new Schema({
    owner: {
      type: String,
      required: true,
    },
    students: Array,
  }),
);
