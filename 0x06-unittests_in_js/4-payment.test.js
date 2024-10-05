
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('Stub Utils.calculateNumber', () => {
    const stub = sinon.stub(Utils, 'calculateNumber')
    const spyLog = sinon.spy(console, 'log');

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.equal(1);
    expect(spyLog.calledWith('The total is: 10')).to.be.true;
    expect(spyLog.callCount).to.equal(1);
    spyLog.restore();
    stub.restore();
  });
})