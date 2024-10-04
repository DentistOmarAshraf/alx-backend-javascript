
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber SUM', function () {
  it('Sum Assert Euqal', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  })
  it('Sum Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  })
  it('Sum Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  })
  it('Sum Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  })
  it('Sum Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUM', 2.49999, 3.4999), 5);
  })
  it('Sum Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUM', -1.5, -2.5), -3);
  })
})

describe('calculateNumber SUBTRACT', function () {
  it('Subtract Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
  })
  it('Subtract Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
  })
  it('Subtract Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
  })
  it('Subtract Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4999, 3.4999), -2);
  })
  it('Subtract Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.5), 1);
  })
  it('Subtract Assert Equal', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 10.499, 12.7), -3);
  })
})

describe('calculateNumber DIVIDE', function () {
  it('Divide assert Equal', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
  })
  it('Divide assert Equal', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -10, -1.6), 5);
  })
  it('Divide assert Equal', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -10.49999, -1.4999), 10);
  })
  it('Divide assert Equal', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 3.2, 3), 1);
  })
  it('Divide assert Equal (Error)', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -10, 0), 'ERROR');
  })
  it('Divide assert Equal', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0.4999, 20.499), 0);
  })
  it ('Divide assert Equal', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 7, 2), 3.5);
  })
  it ('Divide assert Equal', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 7.6, -3.9), -2);
  })
})