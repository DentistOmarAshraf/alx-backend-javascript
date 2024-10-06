
const { expect } = require('chai');
const request = require('request');
const util = require('util');

const myRequest = util.promisify(request);


describe('Testing Express server', () => {
  const textResponse = 'Welcome to the payment system';
  let myPromise;
  beforeEach(() => {
    myPromise = myRequest({url: 'http://localhost:7865/'})
  })
  it('Testing route (/)', (done) => {
    myPromise
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        return response.body
      })
      .then((data) => {
        expect(data).to.equal(textResponse);
        done()
      })
      .catch(done);
  })
})