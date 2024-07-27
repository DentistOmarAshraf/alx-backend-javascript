/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      const obj = {
        status: 200,
        body: 'success',
      };
      return obj;
    })
    .catch((err) => new Error(''))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
