
const { expect } = require('chai');
const request = require('request');
const util = require('util');

const myRequest = util.promisify(request);


describe('Testing Express server', () => {
  it('Testing route (/)', async () => {
    const textResponse = 'Welcome to the payment system';

    const response = await myRequest({ url: 'http://localhost:7865/' });
    expect(response.statusCode).to.equal(200);

    const data = await response.body;
    expect(data).to.equal(textResponse);
  });
  it('Testing route (/cart/:id) Status Code 200', async () => {
    const idNum = 357
    const textResponse = `Payment methods for cart ${idNum}`;

    const response = await myRequest({ url: `http://localhost:7865/cart/${idNum}` });
    expect(response.statusCode).to.equal(200);

    const data = await response.body;
    expect(data).to.equal(textResponse);
  });
  it('Testing route (/cart/:id) Status Code 404', async () => {
    const wrongParm = "text"
    const textResponse = `:id Must be Number`;

    const response = await myRequest({ url: `http://localhost:7865/cart/${wrongParm}` });
    expect(response.statusCode).to.equal(404);

    const data = await response.body;
    expect(data).to.equal(textResponse);
  });
  it('Testing route (/available_payments) Status Code 200', async () => {
    const objCompare = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    const response = await myRequest({ url: 'http://localhost:7865/available_payments' });
    expect(response.statusCode).to.equal(200);

    const data = JSON.parse(response.body);
    expect(data).to.deep.equal(objCompare);
  });
  it('Testing route (/login) Status Code 200', async () => {
    const url = 'http://localhost:7865/login';
    const body = {userName: "Omar Ashraf"};

    const response = await myRequest({
      url: url,
      method: 'POST',
      body: body,
      json: true
    })
    expect(response.statusCode).to.equal(200);

    const data = response.body;
    expect(data).to.equal(`Welcome ${body.userName}`);
  })
})