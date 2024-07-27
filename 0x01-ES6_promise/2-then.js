/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  promise
    .then((response) => {
      const obj = {
        status: 200,
        body: 'success',
      };
      return obj;
    })
    .catch((err) => new Error(''));
}
