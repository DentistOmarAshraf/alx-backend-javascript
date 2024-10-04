
const { expect } = require('chai')
const  calculateNumber  = require('./2-calcul_chai')

describe('calculateNumber SUM', () => {
  it('Sum 1, 2', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equals(3);
  });
  it('Sum 1, 3.7', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equals(5);
  });
  it('Sum 1.2, 3.7', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equals(5);
  });
  it('Sum 1.5, 3.7', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equals(6);
  });
  it('Sum 2.4999, 3.4999', () => {
    expect(calculateNumber('SUM', 2.4999, 3.4999)).to.equals(5);
  });
  it('Sum -1.5, -2.5', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equals(5);
  });
})

describe('calculateNumber SUBTRACT', () => {
  it('SUB 3, 1', () => {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.equals(2);
  });
  it('SUB 3.7, 1', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equals(3);
  });
  it('SUB 3.7, 1.2', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equals(3);
  });
  it('SUB 2.1, 3.7', () => {
    expect(calculateNumber('SUBTRACT', 2.1, 3.7)).to.equals(-2);
  });
  it('SUB 1.4999, 3.4999', () => {
    expect(calculateNumber('SUBTRACT', 1.4999, 3.4999)).to.equals(-2);
  });
  it('SUB -1.5, -2.5', () => {
    expect(calculateNumber('SUBTRACT', -1.5, -2.5)).to.equals(1);
  });
  it('SUB 10.499, 12.7', () => {
    expect(calculateNumber('SUBTRACT', 10.499, 12.7)).to.equals(-3);
  });
})

describe('calculateNumber DIVIDE', () => {
  it('DIV 1, 2', () => {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equals(0.5)
  });
  it('DIV -10, -1.6', () => {
    expect(calculateNumber('DIVIDE', -10, -1.6)).to.equals(5)
  });
  it('DIV 0.4999, 20.4999', () => {
    expect(calculateNumber('DIVIDE', 0.4999, 20.4999)).to.equals(0)
  });
  it('DIV -10.4999, -1.4999', () => {
    expect(calculateNumber('DIVIDE', -10.4999, -1.4999)).to.equals(10)
  });
  it('DIV 7, 2', () => {
    expect(calculateNumber('DIVIDE', 7, 2)).to.equals(3.5)
  });
  it('DIV 7.6, -3.9', () => {
    expect(calculateNumber('DIVIDE', 7.6, -3.9)).to.equals(-2)
  });
  it('DIV 1.4999, 0.4999 (ERR)', () => {
    expect(calculateNumber('DIVIDE', 1.499, 0.499)).to.equals('ERROR')
  });
  it('DIV 1.4999, 0.4999 (ERR)', () => {
    expect(calculateNumber('DIVIDE', 1.4999, 0.4999)).to.equals('ERROR')
  });
})