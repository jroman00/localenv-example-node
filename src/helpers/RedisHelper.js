const redis = require('redis');
const util = require('util');

let instance;

class RedisHelper {
  /**
   * @param {RedisClient} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * @returns {RedisHelper}
   */
  static getInstance() {
    if (!instance) {
      const client = redis.createClient({
        host: process.env.APP_REDIS_HOST,
        port: parseInt(process.env.APP_REDIS_PORT, 10),
      });

      instance = new RedisHelper(client);
    }

    return instance;
  }

  /**
   * @param {RedisHelper} redisHelper
   */
  static setInstance(redisHelper) {
    instance = redisHelper;
  }

  /**
   * @returns {boolean}
   */
  async isReady() {
    const myGet = util.promisify(this.client.ping).bind(this.client);

    return await myGet() === 'PONG';
  }
}

module.exports = RedisHelper;
