import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// signUpUser(firstName, lastName)   resolved
// uploadPhoto(fileName)   rejected

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const file = uploadPhoto(fileName);
  return Promise.all([sign, file])
    .then((data) => data)
    .catch((err) => err);
}
