export default function cleanSet(set, startString) {
  if (!(set instanceof Set)
    || typeof (startString) !== 'string'
    || startString.length === 0) return '';
  const filteredStrings = [];
  for (const elem of set) {
    if (typeof (elem) !== 'string') return '';
    if (elem.startsWith(startString)) {
      filteredStrings.push(elem.replace(startString, ''));
    }
  }
  return filteredStrings.join('-');
}
