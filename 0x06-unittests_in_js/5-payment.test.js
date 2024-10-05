
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('Testing Utlis.caclulateNumber', () => {
  let spyLog;
  beforeEach(() => {
    spyLog = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spyLog.restore()
  });
  it('Check paramter and logs (100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyLog.calledOnce).to.be.true;
    expect(spyLog.calledWith('The total is: 120')).to.be.true;
  });
  it('Check paramter and logs (10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyLog.calledOnce).to.be.true;
    expect(spyLog.calledWith('The total is: 20')).to.be.true;
  });
})
