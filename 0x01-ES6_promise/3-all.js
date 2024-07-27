import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  photo
    .then((data) => process.stdout.write(`${data.body} `))
    .then(() => {
      user
        .then((data) => console.log(`${data.firstName} ${data.lastName}`));
    })
    .catch(() => console.log('Signup system offline'));
}
