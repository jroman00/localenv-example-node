const redis = require('redis');
const RedisHelper = require('../../../src/helpers/RedisHelper');

describe('RedisHelper tests', () => {
  const client = {
    ping: jest.fn(),
  };

  afterEach(() =>{
    jest.clearAllMocks();
  });

  describe('getInstance', () => {
    it('should cache instances appropriately', () => {
      redis.createClient = jest.fn().mockReturnValue(client);

      // Start with a null instance
      RedisHelper.setInstance(null);

      // Test that the received instance is of type RedisHelper
      instance1 = RedisHelper.getInstance();
      expect(instance1).toBeInstanceOf(RedisHelper);

      // Test that the second request to getInstance returns a cached instance
      instance2 = RedisHelper.getInstance();
      expect(instance2).toBe(instance1);

      RedisHelper.setInstance(null);

      // Test that a new instance gets created
      instance3 = RedisHelper.getInstance();
      expect(instance3).not.toBe(instance1);
    });
  });
});
