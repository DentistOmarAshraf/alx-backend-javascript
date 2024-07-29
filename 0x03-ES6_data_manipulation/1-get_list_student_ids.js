export default function getListStudentsIds(arrayOfObject) {
  if (!(Array.isArray(arrayOfObject))) {
    return [];
  }
  try {
    const arrayOfIds = arrayOfObject.map((obj) => {
      if (obj.id) return obj.id;
      throw TypeError('not Object');
    });
    return arrayOfIds;
  } catch (err) {
    return [];
  }
}
