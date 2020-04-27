const connection = require('../../database/index');
const Animalote = require('../models/animaloteModel');
const Animal = require('../models/animalModel');
const Lote = require('../models/loteModel');
Animalote.init(connection);

class animaloteController {
  async store(req, res){
    if ( 
      req.body.id_fk_animal != undefined &&
      req.body.id_fk_lote != undefined &&
      req.body.dt_entrada != undefined &&
      req.body.dt_saida != undefined &&
      req.body.dt_mov != undefined &&
      req.body.ativo_bez != undefined 
    ){
      if(Animal.findByPk(req.body.id_fk_animal) && Lote.findByPk(req.body.id_fk_lote)){
        Animalote.create(req.body)
          .then(resp =>{
            console.log(resp)
             res.store(200).send(resp)
          })
          .catch(error => res.status(400).send(error))
      }else{
        res.status(400).send({error: 'id invalido'})
      }
    }else{
      res.status(400).send({ error : 'falta de dados'})
    }
  }
  //------------------------------------------------------------------------------------
  async update(req, res){
    await Animalote.findByPk(req.params.id)
      .then(alocar =>{
        alocar.update(req.body)
          .then(resp =>{
            console.log('atualizado' + resp)
            res.status(200).send(resp)
          })
      })
      .catch(error => res.status(400).send({error: 'falha ao atualizar', error}))
  }
  //-------------------------------------------------------------------------------------
  async delete(req,res) {
    await Animalote.findByPk(req.params.id)
      .then(alocar =>{
        alocar.destroy();
        res.status(200).send(alocar)
      })
      .catch( error => res.status(400).send({error: `locação ${animalote.id} excluida`}, error))
  }
  //--------------------------------------------------------------------------------------
  async get(req, res){
    if(req.params.id){
      await Animalote.findByPk(req.params.id)
        .then(resp =>{
          if(resp){
           console.log(resp);
           res.status(200).send({resp})
          }else{
           console.log(error);
           res.status(400).send( {error : " animal nao encontrado"})
          }
      })
       .catch(error => res.status(400).send(error, {error :" falha ao  buscar animal"}))
    }else{
      await Animalote.findAll()
        .then(resp=>{
          res.status(200).send(resp)
        })
        .catch(error => res.status(400).send(error))
    }
  }
}

module.exports = new animaloteController();