export default function getFullResponseFromAPI(success) {
  if (success) {
    const obj = {
      status: 200,
      body: 'Success',
    };
    return Promise.resolve(obj);
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
