const ShowModel = require('./models/show.model');
const EpisodeModel = require('./models/episode.model');
const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const createShow = (req, res) => {
  const show = new ShowModel(req.body);

  show.save(err => {
    if (err) res.send(err);

    res.json({
      success: true,
      show,
    });
  });
};

const getAllShows = (req, res) => {
  ShowModel.find().populate('showOwner').exec((err, shows) => {
    if (err) res.send(err);
    console.log(shows);
    res.json(shows);
  });
};

const getShow = (req, res) => {
  const { id } = req.params;

  ShowModel.findById(id, (err, show) => {
    if (err) res.send(err);

    if (!show) {
      res.json({
        success: 'false',
        message: 'No show with that id',
      });
    } else {
      res.json({
        success: 'true',
        show,
        token,
      });
    }
  });
};

const getOwnShows = (req, res) => {
  const { showOwner } = req.body;

  ShowModel.find(
    {
      showOwner,
    },
    (err, shows) => {
      Promise.map(shows, show => {
        return EpisodeModel.find(
          {
            show: show._id,
          },
          'episodeName episodeDescription date'
        );
      }).then(episodeArray => {
        const popShows = shows.map((show, index) => {
          const showPop = show.toObject();
          showPop.episodes = episodeArray[index];
          return showPop;
        });

        console.log(popShows);

        if (!popShows) {
          res.json({
            success: 'false',
            message: 'No show with that id',
          });
        } else {
          res.json({
            success: 'true',
            shows: popShows,
          });
        }
      });
    }
  );
};

const updateShow = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  ShowModel.findOneAndUpdate({ _id: id }, body, (err, show) => {
    if (err) res.send(err);

    if (!show) {
      res.json({
        success: false,
        message: 'Show not found',
      });
    } else {
      res.json({
        success: true,
        message: 'Updated',
      });
    }
  });
};

const deleteShow = (req, res) => {
  const { id } = req.params;

  ShowModel.findByIdAndRemove({ _id: id }, (err, episode) => {
    if (err) res.send(err);

    res.json({
      success: true,
      message: 'Deleted',
    });
  });
};

const checkIfUnique = (req, res) => {
  const { time } = req.body;

  ShowModel.find((err, shows) => {
    if (err) res.send(err);

    const unique = shows.some(show => {
      return _.isEqual(show.time, time);
    });

    return unique;
  });
};

module.exports = {
  getShow,
  getOwnShows,
  getAllShows,
  createShow,
  updateShow,
  deleteShow,
  checkIfUnique,
};
