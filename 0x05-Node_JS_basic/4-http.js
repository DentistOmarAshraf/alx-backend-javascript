#!/usr/bin/env node

const { createServer } = require('node:http');

const hostname = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
  const responseText = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-length', responseText.length);
  res.write(Buffer.from(responseText));
});

app.listen(port, hostname);

module.exports = app;
