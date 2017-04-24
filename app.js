const express = require('express');
const resolve = require('path').resolve;
const setup = require('./middlewares/frontendMiddleware');

const port = process.env.PORT || 8080;
const app = express();

// static
app.use(express.static('./public'));

// front-end
setup(app, {
  outputPath: resolve(process.cwd(), 'public'),
  publicPath: '/',
});

// start the server
app.listen(port, () => {
  console.log('live at port', port);
});
