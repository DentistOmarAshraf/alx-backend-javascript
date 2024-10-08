
const Utils = {
  calculateNumber: function (type, a, b) {
    if (type === 'SUM') return (Math.round(a) + Math.round(b));
    if (type === 'SUBTRACT') return (Math.round(a) - Math.round(b));
    if (type === 'DIVIDE') {
      if (Math.round(b) === 0)
        return ('ERROR');
      return (Math.round(a) / Math.round(b));
    }
  }
}

module.exports = Utils;
