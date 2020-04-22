const express = require('express');
const routes = express.Router();
const pessoaController = require('../app/controller/pessoaController');
const loteController = require("../app/controller/loteController");
//const pessoa = require('./src/app/models/pessoaModel');

//---------------pessoas--------------------------------------------------------
routes.post('/pessoa', pessoaController.store);
routes.get('/pessoa', pessoaController.get);
routes.get('/pessoa/:id', pessoaController.get);
routes.put('/pessoa/:id', pessoaController.update);
routes.delete('/pessoa/:id', pessoaController.delete);
//-------------lote-------------------------------------------------------------
routes.post('/lote', loteController.store);
routes.get('/lote', loteController.get);
routes.get('/lote/:id', loteController.get);
routes.put('/lote/:id', loteController.update);
routes.delete('/lote/:id', loteController.delete);


module.exports =  routes;