const express = require('express');
const resolve = require('path').resolve;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const setup = require('./middlewares/frontendMiddleware');
const config = require('./config');
const apiRoutes = require('./api');
const port = process.env.PORT || 8080;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// io

io.on('connection', socket => {
  socket.on('updateState', data => {});

  socket.on('endShow', () => {});
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

// static
app.use(express.static('./public'));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

// mongo
mongoose.connect(config.db);

// API
app.use('/api', apiRoutes);

// front-end
setup(app, {
  outputPath: resolve(process.cwd(), 'public'),
  publicPath: '/',
});

// start the server
server.listen(port, () => {
  console.log(`live at http://localhost:${port}`);
});
