#!/usr/bin/env node

const fs = require('fs');

function countStudents(path) {
  const myPromise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const csvArray = data.split('\n');
        const columns = csvArray.splice(0, 1)[0].split(',');
        const arrOfStudent = [];
        const uniqueFields = new Set();
        for (const st of csvArray) {
          if (st === '') break;
          const stData = st.split(',');
          const newStudent = {};
          for (let i = 0; i < columns.length; i += 1) {
            newStudent[columns[i]] = stData[i];
          }
          arrOfStudent.push(newStudent);
          uniqueFields.add(newStudent.field);
        }
        console.log(`Number of students: ${arrOfStudent.length}`);
        for (const field of uniqueFields) {
          const tempArr = [];
          for (const st of arrOfStudent) {
            if (st.field === field) tempArr.push(st.firstname);
          }
          console.log(`Number of students in ${field}: ${tempArr.length}. List: ${tempArr.join(', ')}`);
        }
        resolve('Done');
      }
    });
  });

  return myPromise;
}

module.exports = countStudents;
