
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('testing sinon', () => {
  it('testing', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(10, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.returnValues).to.deep.equal([30]);
    expect(spy.args[0]).to.deep.equal(['SUM', 10, 20])
    console.log(spy.args)
  })
})