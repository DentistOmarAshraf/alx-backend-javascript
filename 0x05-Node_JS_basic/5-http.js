#!/usr/bin/env node

const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const text = 'Hello Holberton School!';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', text.length);
    res.end(text);
  }
  if (req.url === '/students' && req.method === 'GET') {
    const path = process.argv[2];
    const output = [];
    console.log = (data) => {
      output.push(data);
    };
    console.log('This is the list of our students');
    countStudents(path)
      .then(() => res.end(output.join('\n')))
      .catch((err) => {
        const text = err.message;
        res.statusCode = 500;
        res.end(`${text}\n`);
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server Run on ${host}:${port}`);
});
module.exports = app;
