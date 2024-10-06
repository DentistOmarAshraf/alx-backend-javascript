
const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  const text = 'Welcome to the payment system';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.send(text);
});

app.get('/cart/:id', (req, res) => {
  const idParam = req.params.id;
  if (isNaN(Number(idParam))) {
    res.statusCode = 404;
    res.send(':id Must be Number')
    return;
  }
  res.statusCode = 200;
  res.send(`Payment methods for cart ${idParam}`);
});

app.get('/available_payments', (req, res) => {
  const objResponse = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(objResponse, null, 2));
});

app.post('/login', express.json(), (req, res) => {
  const username = req.body.userName;
  const textResponse = `Welcome ${username}`;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', textResponse.length);
  res.send(textResponse);
})

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});