var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var expressValidator = require('express-validator');
var helmet = require('helmet');

var app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

app.set('view engine', 'ejs');
app.set(express.static('app/public'));

consign()
  .include('./app/controllers')
  .then('./app/models')
  .then('./app/routes')
  .into(app);

app.use(function(request, response, next) {

  response.status('404').send("A página solicitada não foi encontrada!");
  next();
});

// Trata erros internos do servidor. Ex: Erro 500
app.use(function(error, request, response, next) {

  response.status('500').send("Erro interno do servidor!");
  next();
});

module.exports = app;
