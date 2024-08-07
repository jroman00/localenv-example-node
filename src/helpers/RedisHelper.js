const { createClient } = require('redis');

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
      const host = process.env.APP_REDIS_HOST;
      const port = parseInt(process.env.APP_REDIS_PORT, 10);

      const client = createClient({
        url: `redis://${host}:${port}`,
      });

      client.connect();

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
    return await this.client.ping() === 'PONG';
  }
}

module.exports = RedisHelper;
