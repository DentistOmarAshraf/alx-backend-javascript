export default function hasValuesFromArray(set, array) {
  if (array.length === 0) return false;
  let bool = true;
  array.forEach((elem) => {
    if (!(elem in Array.from(set))) bool = false;
  });
  return bool;
}
