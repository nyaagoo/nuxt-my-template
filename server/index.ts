import express from 'express';

const app = express();

app.get('/greet', function(_req, res) {
  res.send({ data: 'HelloWorld' });
});

module.exports = {
  path: '/api/v1/',
  handler: app
};
