const express = require('express');
const routes = express.Router();
const pessoaController = require('../app/controller/pessoaController')
//const pessoa = require('./src/app/models/pessoaModel');
//------------------------------------------------------------------------
routes.post('/pessoa', pessoaController.store);
routes.get('/pessoa', pessoaController.get);
routes.put('/pessoa/:id', pessoaController.update);
routes.delete('/pessoa/:id', pessoaController.delete);

module.exports =  routes;