
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('assert Equal', function () {
    assert.equal(calculateNumber(1, 3), 4);
  })
  it('assert Equal', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  })
  it('assert Equal', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  })
  it('assert Equal', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  })
  it('assert Equal', function () {
    assert.equal(calculateNumber(1.4999, 3.499), 4);
  })
  it('assert Equal', function () {
    assert.equal(calculateNumber(-1.5, -2.5), -3);
  })
  it('assert Equal', function () {
    assert.equal(calculateNumber(Infinity, 2), Infinity);
  })
  it('assert Equal', function () {
    assert.equal(calculateNumber(NaN, 2), NaN);
  })
})
