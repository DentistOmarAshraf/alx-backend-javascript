export default function updateStudentGradeByCity(listOfStudent, city, newGrades) {
  const studentInCity = listOfStudent.filter((obj) => obj.location === city);
  const afterAddGrade = studentInCity.map((obj) => {
    let change = false;
    newGrades.forEach((elem) => {
      if (elem.studentId === obj.id) {
        // eslint-disable-next-line no-param-reassign
        obj.grade = elem.grade;
        change = true;
      }
      // eslint-disable-next-line no-param-reassign
      if (!(change)) obj.grade = 'N/A';
    });
    return obj;
  });
  return afterAddGrade;
}
