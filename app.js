var express = require('express');
var app = express();
var somar = require('./src/Calculator');

app.get('/', function (req, res) {
  res.send(`A soma de 1+1 é: ${calculadora.somar(1, 1)}`);
});

app.listen(3000, function () {
  console.log('🚀 Servidor rodando na porta 3000');
});