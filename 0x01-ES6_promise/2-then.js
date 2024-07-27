/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log('Got a response from the API');
      const obj = {
        status: 200,
        body: 'success',
      };
      return obj;
    })
    .catch((err) => {
      console.log('Got a response from the API');
      return new Error('');
    });
}
