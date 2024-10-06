
const { expect } = require('chai');
const request = require('request');
const util = require('util');

const myRequest = util.promisify(request);


describe('Testing Express server', () => {
  const textResponse = 'Welcome to the payment system';
  let myPromise;
  beforeEach(() => {
    myPromise = myRequest({ url: 'http://localhost:7865/' })
  })
  it('Testing route (/)', async () => {
    try {
      const response = await myPromise
      expect(response.statusCode).to.equal(200);
      const data = await response.body;
      expect(data).to.equal(textResponse);
    } catch (err) { }
  })
})