const BaseController = require('./BaseController');
const MysqlHelper = require('../helpers/MysqlHelper');
const PostgresHelper = require('../helpers/PostgresHelper');
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
   * @returns {PostgresHelper}
   */
  static getPostgresHelper() {
    return PostgresHelper.getInstance();
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
      version: process.env.APP_VERSION,
      uptime: StatusController.getUptime(),
    });
  }

  /**
   * @returns {ServerResponse}
   */
  async getReady() {
    const mysqlHelper = await StatusController.getMysqlHelper();
    const postgresHelper = await StatusController.getPostgresHelper();
    const redisHelper = await StatusController.getRedisHelper();

    const mysqlIsReady = await mysqlHelper.isReady();
    const postgresIsReady = await postgresHelper.isReady();
    const redisIsReady = await redisHelper.isReady();

    let status = 200;
    if (!mysqlIsReady || !postgresIsReady || !redisIsReady) {
        status = 500;
    }

    return this.respond({
      service: statusOk,
      uptime: StatusController.getUptime(),
      mysql: mysqlIsReady ? statusOk : statusError,
      postgres: postgresIsReady ? statusOk : statusError,
      redis: redisIsReady ? statusOk : statusError,
    }, status);
  }
}

module.exports = StatusController;
