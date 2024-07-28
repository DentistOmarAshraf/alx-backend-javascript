import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// signUpUser(firstName, lastName)   resolved
// uploadPhoto(fileName)   rejected

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([sign, photo])
    .then((result) => {
      const arrayOfData = result.map((result) => {
        if (result.status === 'fulfilled') {
          return {
            status: result.status,
            value: result.value,
          };
        }
        return {
          status: result.status,
          value: result.reason.toString().split('\n')[0],
        };
      });
      return arrayOfData;
    });
}
