const BaseController = require('./BaseController');
const MysqlHelper = require('../helpers/MysqlHelper');
const RedisHelper = require('../helpers/RedisHelper');

const startTime = Date.now();

const statusOk = 'ok';
const statusError = 'error';

class StatusController extends BaseController {
  /**
   * @returns {MysqlHelper}
   */
  static getMysqlHelper() {
    return MysqlHelper.getInstance();
  }

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
    const mysqlHelper = await StatusController.getMysqlHelper();
    const redisHelper = await StatusController.getRedisHelper();

    return this.respond({
      service: statusOk,
      uptime: StatusController.getUptime(),
      mysql: await mysqlHelper.isReady() ? statusOk : statusError,
      redis: await redisHelper.isReady() ? statusOk : statusError,
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
