import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const allData = `${data[0].body} ${data[1].firstName} ${data[1].lastName}`;
      console.log(allData);
    })
    .catch(() => { console.log('Signup system offline'); });
}
