const BaseController = require('../../../src/controllers/BaseController');

describe('BaseController tests', () => {
  const req = {};
  const res = {
    status: jest.fn(),
    send: jest.fn(),
  };
  const baseController = new BaseController(req, res);

  afterEach(() =>{
    jest.clearAllMocks();
  });

  describe('respond', () => {
    it('should set proper body and http code', () => {
      jest.spyOn(res, 'status').mockReturnThis();
      jest.spyOn(res, 'send').mockReturnThis();

      baseController.respond({foo: 'bar'}, 404);

      expect(res.status).toBeCalledTimes(1);
      expect(res.send).toBeCalledTimes(1);

      expect(res.status.mock.calls[0][0]).toBe(404);
      expect(res.send.mock.calls[0][0].foo).toBe('bar');
    });
  });
});
