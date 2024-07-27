import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  photo
    .then((data) => data)
    .then((resp) => {
      user
        .then((data) => console.log(`${resp.body} ${data.firstName} ${data.lastName}`));
    })
    .catch(() => console.log('Signup system offline'));
}
