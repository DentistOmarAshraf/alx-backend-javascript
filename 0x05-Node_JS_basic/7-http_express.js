#!/usr/bin/env node

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  const output = [];
  console.log = (data) => {
    output.push(data);
  };
  console.log('This is the list of our students');
  countStudents(path)
    .then(() => {
      const text = output.join('\n');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.send(text);
    })
    .catch((err) => {
      const text = err.message.toString();
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.send(text);
    });
});

app.listen(port, () => {
  console.log(`Server is ready on port: ${port}`);
});

module.exports = app;
