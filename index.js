const serverless = require('serverless-http');
const express = require('express');
var bodyParser = require('body-parser');

const users = require('./endpoints/users');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/users', users);

module.exports.handler = serverless(app);