const config = require('../config')
const { Temporal } = require('@js-temporal/polyfill')
const pkg = require('../../package.json')

class Healthcheck {
  static async getHealth(req, res, next) {
    try {
      const response = {
        environment: config.env,
        name: config.aplication_name,
        // version: config.version,
        up: true,
        uptime: process.uptime(),
        server_time: Temporal.Now.zonedDateTimeISO(),
        api_version: pkg.version
      }
      return res.status(200).json(response)
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = Healthcheck
