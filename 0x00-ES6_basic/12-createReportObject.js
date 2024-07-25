export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return (Object.entries(this.allEmployees).length);
    },
  };
  return obj;
}
