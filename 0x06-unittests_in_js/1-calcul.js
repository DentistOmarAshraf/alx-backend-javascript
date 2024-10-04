/**
 * calculateNumber
 * @param {string} type 
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') {
    if (b === 0 || Math.round(b) === 0)
      return 'ERROR';
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;