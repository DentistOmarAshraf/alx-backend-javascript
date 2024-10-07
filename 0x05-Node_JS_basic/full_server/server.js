#!/usr/bin/env node

const express = require('express');
const myRoutes = require('./routes/index');

const app = express();

app.use('/', myRoutes);

app.listen(1245, () => {
  console.log('Server listen to port 1245');
});

module.exports = app;
