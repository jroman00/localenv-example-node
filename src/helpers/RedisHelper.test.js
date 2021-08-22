const RedisHelper = require("./RedisHelper")
// @ponicode
describe("RedisHelper.getInstance", () => {
    test("0", () => {
        let callFunction = () => {
            RedisHelper.getInstance()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isReady", () => {
    let inst

    beforeEach(() => {
        inst = new RedisHelper()
    })

    test("0", async () => {
        await inst.isReady()
    })
})
