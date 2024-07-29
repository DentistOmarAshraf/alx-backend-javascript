class Student {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

export default function getListStudents() {
  const arrayOfStudent = [];
  arrayOfStudent.push(new Student(1, 'Guillamume', 'San Francisco'));
  arrayOfStudent.push(new Student(2, 'James', 'Columbia'));
  arrayOfStudent.push(new Student(5, 'Serena', 'San Francisco'));
  return arrayOfStudent;
}
