export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const numberOfRequest = weakMap.get(endpoint);
  if (!numberOfRequest) weakMap.set(endpoint, 1);
  else weakMap.set(endpoint, numberOfRequest + 1);
  if (numberOfRequest >= 5) {
    throw new Error('Endpoint load is high');
  }
}
