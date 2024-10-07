#!/usr/bin/env node

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath)
      .then((data) => {
        const responseArray = ['This is the list of our students'];
        for (const field in data) {
          if (Object.hasOwn(data, field)) {
            responseArray.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
          }
        }
        const responseText = responseArray.join('\n');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Content-Length', responseText.length);
        response.send(responseText);
      })
      .catch((err) => {
        const theError = err.toString();
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Content-Length', theError.length);
        response.send(theError);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const theMajor = request.params.major;
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    if (!(['CS', 'SWE'].includes(theMajor))) {
      const textResponse = 'Major parameter must be CS or SWE';
      response.statusCode = 500;
      response.setHeader('Content-type', 'text/plain');
      response.setHeader('Content-Length', textResponse.length);
      response.send(textResponse);
    } else {
      readDatabase(dataPath)
        .then((data) => {
          const textResponse = `List: ${data[theMajor].join(', ')}`;
          response.statusCode = 200;
          response.setHeader('Content-type', 'text/plain');
          response.setHeader('Content-Length', textResponse.length);
          response.send(textResponse);
        })
        .catch((err) => {
          const theError = err.toString();
          response.statusCode = 500;
          response.setHeader('Content-Type', 'text/plain');
          response.setHeader('Content-Length', theError.length);
          response.send(theError);
        });
    }
  }
}

module.exports = StudentsController;
