const BaseController = require('./BaseController');
const RedisHelper = require('../helpers/RedisHelper');

const startTime = Date.now();

const statusOk = 'ok';
const statusError = 'error';

class StatusController extends BaseController {
  /**
   * @returns {RedisHelper}
   */
  static getRedisHelper() {
    return RedisHelper.getInstance();
  }

  /**
   * @returns {number}
   */
  static getUptime() {
    return Math.round((Date.now() - startTime) / 1000);
  }

  /**
   * @returns {ServerResponse}
   */
  getHealth() {
    return this.respond({
      service: statusOk,
      uptime: StatusController.getUptime(),
    });
  }

  /**
   * @returns {ServerResponse}
   */
  async getReady() {
    return this.respond({
      service: statusOk,
      uptime: StatusController.getUptime(),
      redis: await StatusController.getRedisHelper().isReady() ? statusOk : statusError,
    });
  }

  /**
   * @returns {ServerResponse}
   */
  getVersion() {
    return this.respond({
      uptime: StatusController.getUptime(),
      version: process.env.APP_VERSION,
    });
  }
}

module.exports = StatusController;
