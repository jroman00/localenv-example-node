const ServerResponse = require('http');
const BaseController = require('./BaseController');
const RedisHelper = require('../helpers/RedisHelper');

const startTime = Date.now();

const statusOk = 'ok';
const statusError = 'error';

class StatusController extends BaseController {
  /**
   * @returns {RedisHelper}
   */
  get redisHelper() {
    return new RedisHelper();
  }

  /**
   * @returns {number}
   */
  getUptime() {
    return Math.round((Date.now() - startTime) / 1000);
  }

  /**
   * @returns {ServerResponse}
   */
  getHealth() {
    return this.respond({
      uptime: this.getUptime(),
    });
  }

  /**
   * @returns {ServerResponse}
   */
  getReady() {
    return this.respond({
      uptime: this.getUptime(),
      redis: this.redisHelper.isReady() ? statusOk : statusError,
      service: statusOk,
    });
  }

  /**
   * @returns {ServerResponse}
   */
  getVersion() {
    return this.respond({
      uptime: this.getUptime(),
      version: process.env.APP_VERSION,
    });
  }
}

module.exports = StatusController;
