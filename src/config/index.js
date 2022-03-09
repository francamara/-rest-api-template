const pkg = require('../../package.json');

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  aplication_name: pkg.name,

}
