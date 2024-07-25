export default function createIteratorObject(report) {
  const toRet = [];
  for (const val of Object.values(report.allEmployees)) {
    toRet.push(...val);
  }
  return toRet;
}
