
const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  const text = 'Welcome to the payment system';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.send(text);
})

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
})