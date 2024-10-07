#!/usr/bin/env node

const fs = require('fs');

/**
 * readDatabase - Read Database.csv file async
 * @param {string} path
 * @returns Promise
 */

const readDatabase = (path) => {
  const myPromise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentRows = data.split('\n');
        const fields = studentRows.splice(0, 1)[0].split(',');
        const allStudentData = [];
        const uniqueFields = new Set();
        for (const student of studentRows) {
          if (student === '') break;
          const studentObj = {};
          const studentData = student.split(',');
          for (let i = 0; i < fields.length; i += 1) {
            studentObj[fields[i]] = studentData[i];
          }
          allStudentData.push(studentObj);
          uniqueFields.add(studentObj.field);
        }
        const returnData = {};
        for (const fld of uniqueFields) {
          returnData[fld] = [];
          for (const st of allStudentData) {
            if (st.field === fld) returnData[fld].push(st.firstname);
          }
        }
        resolve(returnData);
      }
    });
  });
  return myPromise;
};

module.exports = readDatabase;
