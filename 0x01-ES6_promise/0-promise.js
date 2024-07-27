export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    try {
      resolve('hi omar');
    } catch (err) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('error');
    }
  });
  return myPromise;
}
