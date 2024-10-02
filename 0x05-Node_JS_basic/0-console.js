/**
 * displayMessage - print to stdout
 * @param {string} text
 */
const displayMessage = (text) => {
  process.stdout.write(`${text}\n`);
};

module.exports = displayMessage;
