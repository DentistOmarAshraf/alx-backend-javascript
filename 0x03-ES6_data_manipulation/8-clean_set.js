export default function cleanSet(set, startString) {
  if (startString === '' || startString.length === 0) return ('');
  const filterdStrings = [];
  set.forEach((elem) => {
    if (elem.startsWith(startString)) {
      filterdStrings.push(elem.replace(startString, ''));
    }
  });
  return filterdStrings.join('-');
}
