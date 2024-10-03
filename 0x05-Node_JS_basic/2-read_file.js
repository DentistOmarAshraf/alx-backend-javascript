#!/usr/bin/env node

const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    const csvArray = data.split('\n');
    const columns = csvArray.splice(0, 1)[0].split(',');
    const arrOfStudent = [];
    const fieldsUnique = new Set();
    for (const student of csvArray) {
      if (student === '') break;
      const dataOfStudent = student.split(',');
      const newStudent = {};
      for (let i = 0; i < columns.length; i += 1) {
        newStudent[columns[i]] = dataOfStudent[i];
      }
      arrOfStudent.push(newStudent);
      fieldsUnique.add(newStudent.field);
    }
    console.log(`Number of students: ${arrOfStudent.length}`);
    for (const field of fieldsUnique) {
      const tempList = [];
      for (const student of arrOfStudent) {
        if (student.field === field) tempList.push(student.firstname);
      }
      console.log(`Number of students in ${field}: ${tempList.length}. List: ${tempList.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
