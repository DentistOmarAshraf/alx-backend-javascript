export default function hasValuesFromArray(set, array) {
  let bool = true;
  array.forEach((elem) => {
    if (!(elem in Array.from(set))) bool = false;
  });
  return bool;
}
