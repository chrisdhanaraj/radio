module.exports = {
  secret: "thecakeisalie"
  database: process.env.NODE_ENV !== 'development' ? 'http://localhost:27017/zenith' : ''
};
