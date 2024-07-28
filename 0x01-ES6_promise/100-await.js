import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const respons = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
    return respons;
  } catch (err) {
    const respons = {
      photo: null,
      user: null,
    };
    return respons;
  }
}
