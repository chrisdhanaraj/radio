const express = require('express');
const path = require('path');
const port = process.env.PORT || 9099;
const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const resolve = require('path').resolve;
const app = express();

// app.use('/api', api)

app.use(express.static('./public'));
setup(app, {
  outputPath: resolve(process.cwd(), 'public'),
  publicPath: '/',
});

app.listen(port, () => {
  console.log('live at port', port);
});
