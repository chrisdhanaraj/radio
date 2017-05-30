const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShowSchema = new Schema({
  showOwner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  showName: String,
  showDescription: String,
  showTime: Object,
  showLength: Number,
  showPicture: String,
});

module.exports = mongoose.model('Show', ShowSchema);
