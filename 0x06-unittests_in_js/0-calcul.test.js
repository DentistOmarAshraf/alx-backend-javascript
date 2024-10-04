
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('assert Equal', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  })
  it('assert Equal', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  })
  it('assert Equal', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  })
  it('assert Equal', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  })
  it('assert Equal', function () {
    assert.strictEqual(calculateNumber(2.4999, 3.4999), 5);
  })
  it('assert Equal', function () {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  })
})
