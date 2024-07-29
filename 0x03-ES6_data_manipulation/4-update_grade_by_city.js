export default function updateStudentGradeByCity(listOfStudent, city, newGrades) {
  // First filter Student in City
  const studentInCity = listOfStudent.filter((obj) => obj.location === city);
  // Using map to change grades on all students at city
  const afterAddGrade = studentInCity.map((obj) => {
    // Bring student grade from newGrades
    const degreOfStudent = newGrades.filter((elem) => elem.studentId === obj.id);
    const newObj = obj;
    if (degreOfStudent.length === 0) {
      newObj.grade = 'N/A';
    } else {
      newObj.grade = degreOfStudent[0].grade;
    }
    return newObj;
  });
  return afterAddGrade;
}
