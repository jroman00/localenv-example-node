class BaseController {
  /**
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  /**
   * @param {string|object|array} body
   * @param {number} httpCode
   * @returns {ServerResponse}
   */
  respond(body, httpCode = 200) {
    return this.res.status(httpCode).send(body);
  }
}

module.exports = BaseController;
