const express = require('express');
const routes = express.Router();
const pessoaController = require('./src/app/controller/pessoaController')
//const pessoa = require('./src/app/models/pessoaModel');
//------------------------------------------------------------------------
routes.post('/pessoa', pessoaController.post);
routes.get('/pessoa', pessoaController.get);
routes.put('/pessoa/:id', pessoaController.put);
routes.delete('/pessoa/:id', pessoaController.delete);

module.exports =  routes;