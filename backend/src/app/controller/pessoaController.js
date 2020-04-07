//const connection = require('../../database/index');
const Pessoa = require('../models/pessoaModel');

class pessoaController {
  //---------------------------------------------------------------------------------------------
  async store(req, res){
   /*  const pessoaExist = await Pessoa.findOne({ where : {email: req.body.email}});
    if(pessoaExist){
      return res.status(400).json({error :'Usuario ja existente'});
    }  */
    await Pessoa.create(req.body)
    .then(response=>{
      console.log('create'+ response)
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error)
      res.status(400).send({message: 'falha'})
    });
  }


//--------------------------------------------------------------------------------------------
  async update(req, res){
   await Pessoa.findByPk(req.params.id)
   .then(pessoa=>{
     pessoa.update(req.body)
     .then(response => {
      console.log('atualizado'+ response)
       res.status(200).json(response);
     })
   })
   .catch(error => {
     console.log(error)
     res.status(400).send({ message : 'falha'});
   });
  }
  //------------------------------------------------------------------------------------------
  async get(req, res){
    if(req.params.id){
      await Pessoa.findByPk(req.params.id)
      .then(response =>{
        if(response){
          console.log(response)
          res.status(200).json(response)
        }else{ 
          console.log(error)
          res.status(400).send({
            message: 'falha1'
          });
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).send({
          message: 'falha2 '
        });
      })
    }else{
      await findAll()
      .then(response => {
        res.status(200).send(respoonse)
      })
      .catch(error => {
        res.status(500).send({
          message: 'falha'
        });
      })
    }
  }
  //----------------------------------------------------------------------------------------
  async delete(req, res){
   await Pessoa.findByPk(req.params.id)
   .then(pessoa=>{
     if(pessoa){
       pessoa.destro()
       .then(
         res.status(204).send({message: 'deletado'})
       )
     }
     res.status(400).send({message: 'nao encontrado'})
   })
   .catch(error =>{
     console.log(error)
     res.status(401).send({ message: 'falha'})
   });
  }
}
module.exports = new pessoaController();