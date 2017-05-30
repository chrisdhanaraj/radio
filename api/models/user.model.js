const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  dj: Boolean,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  djName: String,
});

module.exports = mongoose.model('User', UserSchema);
