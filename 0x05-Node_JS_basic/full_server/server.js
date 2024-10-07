#!/usr/bin/env node

import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

app.listen(1245, () => {
  console.log('Server listen to port 1245');
});

export default app;
