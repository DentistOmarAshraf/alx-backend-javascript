export default function divideFunction(numerator, denomonator) {
  if (denomonator === 0) throw Error('cannot divide by 0');
  return (numerator / denomonator);
}
