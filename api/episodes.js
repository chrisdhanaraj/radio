const EpisodeModel = require('./models/episode.model');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const goLive = (req, res) => {
  const data = _.merge(req.body, { live: true });

  const episode = new EpisodeModel(data);

  EpisodeModel.updateMany(
    {
      live: false,
    },
    (err, result) => {
      if (err) throw err;

      episode.save((saveErr, episode) => {
        if (saveErr) throw saveErr;
        EpisodeModel.populate(episode, 'show', (popErr, popEpisode) => {
          req.io.sockets.emit('showStart', popEpisode);
          res.json({
            success: true,
            data: popEpisode,
          });
        });
      });
    }
  );
};

const getLive = (req, res) => {
  EpisodeModel.findOne(
    {
      live: true,
    },
    (err, episode) => {
      if (err) {
        throw err;
      }

      if (episode === null) {
        res.json({
          live: false,
        });
      } else {
        EpisodeModel.populate(episode, 'show', (popErr, popEpisode) => {
          if (popErr) {
            res.json({
              error: popErr,
            });
          }

          console.log(popEpisode);
          res.json(popEpisode);
        });
      }
    }
  );
};

const createEpisode = (req, res) => {
  const episode = new EpisodeModel(req.body);

  episode.save(err => {
    if (err) res.send(err);
    const omitPass = _.omit(episode, 'password');
    const token = jwt.sign(omitPass, 'radio');

    res.json({
      success: true,
      token,
    });
  });
};

const getAllEpisodes = (req, res) => {
  EpisodeModel.find((err, episodes) => {
    if (err) res.send(err);
    res.json(episodes);
  });
};

const getEpisode = (req, res) => {
  const { id } = req.params;

  EpisodeModel.findById(id, (err, episode) => {
    if (err) res.send(err);

    if (!episode) {
      res.json({
        success: 'false',
        message: 'No episode with that id',
      });
    } else {
      res.json({
        success: 'true',
        episode,
      });
    }
  });
};

const updateEpisode = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  EpisodeModel.findOneAndUpdate({ _id: id }, body, (err, episode) => {
    if (err) {
      console.log('error: ', err);
      res.send(err);
    }

    if (!episode) {
      res.json({
        success: false,
        message: 'Episode not found',
      });
    } else {
      req.io.sockets.emit('update', body);
      res.json({
        success: true,
        message: 'Updated',
      });
    }
  });
};

const deleteEpisode = (req, res) => {
  const { id } = req.params;

  EpisodeModel.findByIdAndRemove({ _id: id }, (err, episode) => {
    if (err) res.send(err);

    res.json({
      success: true,
      message: 'Deleted',
    });
  });
};

module.exports = {
  getEpisode,
  getLive,
  goLive,
  createEpisode,
  getAllEpisodes,
  updateEpisode,
  deleteEpisode,
};
