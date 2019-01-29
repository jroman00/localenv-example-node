const RedisHelper = require('../../../src/helpers/RedisHelper');

describe('RedisHelper tests', () => {
  const redisHelper = new RedisHelper();

  afterEach(() =>{
    jest.clearAllMocks();
  });

  describe('isReady', () => {
    it('should return true', () => {
      const actual = redisHelper.isReady();

      expect(actual).toBe(true);
    });
  });
});
