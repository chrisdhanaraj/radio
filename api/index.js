const express = require('express');
const users = require('./users');
const shows = require('./shows');
const episodes = require('./episodes');

const router = express.Router();

// users
router.post('/users', users.createUser);
router.get('/users', users.getAllUsers);
router.get('/user/:id', users.getUser);
router.patch('/users/updatePassword/:id', users.updatePassword);
router.patch('/users/:id', users.updateUser);
router.post('/users/check', users.checkIfExists);
router.post('/users/authenticate', users.authenticateUser);

// shows
router.post('/shows', shows.createShow);
router.get('/shows', shows.getAllShows);
router.post('/show', shows.getOwnShows);
router.get('/show/:id', shows.getShow);
router.patch('/shows/:id', shows.updateShow);
router.post('/shows/check', shows.checkIfUnique);
router.delete('/shows/:id', shows.deleteShow);

// episodes
router.get('/episodes/live', episodes.getLive);
router.post('/episodes/live', episodes.goLive);
router.post('/episodes', episodes.createEpisode);
router.get('/episodes', episodes.getAllEpisodes);
router.get('/episode/:id', episodes.getEpisode);
router.patch('/episodes/:id', episodes.updateEpisode);
router.delete('/episodes/:id', episodes.deleteEpisode);

module.exports = router;
