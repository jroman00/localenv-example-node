const RedisHelper = require('../../../src/helpers/RedisHelper');
const StatusController = require('../../../src/controllers/StatusController');

describe('StatusController tests', () => {
  const req = {};
  const res = {};
  const statusController = new StatusController(req, res);

  beforeAll(() => {
    jest.spyOn(statusController, 'getUptime')
      .mockReturnValue(12345);

    statusController.respond = jest.fn();
  });

  afterEach(() =>{
    jest.clearAllMocks();
  });

  describe('get redisHelper', () => {
    it('should return an instance of redisHelper', () => {
      expect(statusController.redisHelper).toBeInstanceOf(RedisHelper);
    });
  });

  describe('health', () => {
    it('should return uptime', () => {
      statusController.getHealth();

      expect(statusController.respond.mock.calls[0][0].uptime).toBe(12345);
    });
  });

  describe('ready', () => {
    const redisHelper = new RedisHelper();

    it('should return uptime and redis ok if isReady returns true', () => {
      jest.spyOn(redisHelper, 'isReady')
        .mockReturnValue(true);

      jest.spyOn(statusController, 'redisHelper', 'get')
        .mockReturnValue(redisHelper);

      statusController.getReady();

      expect(statusController.respond.mock.calls[0][0].uptime).toBe(12345);
      expect(statusController.respond.mock.calls[0][0].redis).toBe('ok');
    });


    it('should return uptime and redis error if isReady returns false', () => {
      jest.spyOn(redisHelper, 'isReady')
        .mockReturnValue(false);

      jest.spyOn(statusController, 'redisHelper', 'get')
        .mockReturnValue(redisHelper);

      statusController.getReady();

      expect(statusController.respond.mock.calls[0][0].uptime).toBe(12345);
      expect(statusController.respond.mock.calls[0][0].redis).toBe('error');
    });
  });

  describe('version', () => {
    it('should return uptime and version', () => {
      statusController.getVersion();

      expect(statusController.respond.mock.calls[0][0].uptime).toBe(12345);
      expect(statusController.respond.mock.calls[0][0].version).toBe(process.env.APP_VERSION);
    });
  });
});
