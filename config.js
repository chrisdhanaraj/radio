const isProd = process.env.NODE_ENV === 'production';
const db = 'mongodb://localhost:27017/radio';

module.exports = {
  secret: 'zenith',
  db,
};
