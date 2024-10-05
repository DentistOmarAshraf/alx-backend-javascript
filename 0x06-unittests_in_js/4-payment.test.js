
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('Checking usage of Utils.calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(10, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.returnValues).to.deep.equal([30]);
    expect(spy.args[0]).to.deep.equal(['SUM', 10, 20])
    spy.restore()
  });
  it('Stub Utils.calculateNumber', () => {
    const stub = sinon.stub(Utils, 'calculateNumber')
    const spyLog = sinon.spy(console, 'log');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.returnValues).to.deep.equal([10]);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(spyLog.calledWith('The total is: 10')).to.be.true;
    expect(spyLog.callCount).to.equals(1);
    spyLog.restore();
    stub.restore();
  });
})