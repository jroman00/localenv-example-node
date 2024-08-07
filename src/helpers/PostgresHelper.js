const { Client } = require('pg');

let instance;

class PostgresHelper {
  /**
   * @param {PostgresClient} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * @returns {PostgresHelper}
   */
  static async getInstance() {
    if (!instance) {
      const client = new Client({
        host: process.env.APP_POSTGRES_HOST,
        port: parseInt(process.env.APP_POSTGRES_PORT, 10),
        user: process.env.APP_POSTGRES_USER,
        password: process.env.APP_POSTGRES_PASSWORD,
        database: process.env.APP_POSTGRES_DATABASE,
      });
      await client.connect()

      instance = new PostgresHelper(client);
    }

    return instance;
  }

  /**
   * @param {PostgresHelper} postgresHelper
   */
  static setInstance(postgresHelper) {
    instance = postgresHelper;
  }

  /**
   * @returns {boolean}
   */
  async isReady() {
    try {
      await this.client.query('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = PostgresHelper;
