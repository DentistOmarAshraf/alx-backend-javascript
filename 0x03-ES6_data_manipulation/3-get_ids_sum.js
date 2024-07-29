export default function getStudentIdsSum(obj) {
  if (!(Array.isArray(obj))) return [];
  const arrayOfStudentIds = obj.map((elem) => elem.id);
  const sumsOfIds = arrayOfStudentIds.reduce((x, y) => x + y);
  return sumsOfIds;
}
