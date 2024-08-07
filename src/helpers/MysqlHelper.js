const mysql = require('mysql2/promise');

let instance;

class MysqlHelper {
  /**
   * @param {MysqlClient} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * @returns {MysqlHelper}
   */
  static async getInstance() {
    if (!instance) {
      const connection = await mysql.createConnection({
        host: process.env.APP_MYSQL_HOST,
        port: parseInt(process.env.APP_MYSQL_PORT, 10),
        user: process.env.APP_MYSQL_USER,
        password: process.env.APP_MYSQL_PASSWORD,
        database: process.env.APP_MYSQL_DATABASE,
      });

      instance = new MysqlHelper(connection);
    }

    return instance;
  }

  /**
   * @param {MysqlHelper} mysqlHelper
   */
  static setInstance(mysqlHelper) {
    instance = mysqlHelper;
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

module.exports = MysqlHelper;
