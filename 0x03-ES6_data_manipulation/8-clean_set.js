export default function cleanSet(set, startString) {
  if (!(set instanceof Set)
    || set.size === 0
    || typeof (startString) !== 'string'
    || startString.length === 0) return '';
  const filteredStrings = [];
  for (const elem of set) {
    if (typeof (elem) === 'string' && elem.startsWith(startString)) {
      filteredStrings.push(elem.substring(startString.length, elem.length));
    }
  }
  return filteredStrings.join('-');
}
