#!/usr/bin/env node

const express = require('express');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server avalibale on port ${port}`);
});

module.exports = app;
