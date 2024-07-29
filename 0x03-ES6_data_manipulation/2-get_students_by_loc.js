export default function getStudentsByLocation(objOfStudend, city) {
  if (!(Array.isArray(objOfStudend))) return [];
  const studentInLocation = objOfStudend.filter((obj) => obj.location === city);
  return studentInLocation;
}
