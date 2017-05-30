const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  show: {
    type: Schema.Types.ObjectId,
    ref: 'Show',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  episodeName: String,
  episodeDescription: String,
  episodeGif: String,
  episodeBackground: String,
  tracklist: Array,
  live: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Episode', EpisodeSchema);
