var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// dados:

var contatos = [
	{serial: 123456, nome: 'Pedro', telefone: '99998888', data: new Date(), operadora: {nome: 'Tim'}},
	{serial: 234567, nome: 'Ana', telefone: '99998877', data: new Date(), operadora: {nome: 'Tim'}},
	{serial: 891234, nome: 'Maria', telefone: '99998866', data: new Date(), operadora: {nome: 'Tim'}}
];

var operadoras = [
	{nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2.0},
	{nome: 'Tim', codigo: 15, categoria: 'Celular', preco: 2.1},
	{nome: 'Vivo', codigo: 41, categoria: 'Celular', preco: 2.2},
	{nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 2.3},
	{nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 2.4}
];

// allow origin:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api:

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/contatos', function(req, res) { 		
	res.json(contatos);
});

app.post('/api/contatos', function(req, res) { 	
	contatos.push(req.body)
	res.json(req.body);
});

app.get('/api/operadoras', function(req, res) { 		
	res.json(operadoras);
});

// server:

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

