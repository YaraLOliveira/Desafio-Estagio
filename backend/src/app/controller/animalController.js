const connection = require('../../database/index');
const Animal = require('../models/animalModel');
Animal.init(connection);

class animalController {
  // tratar id pessoa  get id 
  async idPessoa(req,res){

  }

  async store (req, res){
    if (
      req.body.nome != undefined &&
      req.body.raca != undefined &&
      req.body.sexo != undefined &&
      req.body.peso != undefined &&
      req.body.nascimento != undefined
    ){}
  }
}