//const connection = require('../../database/index');
const Pessoa = require('../models/pessoaModel');

class pessoaController {
  //---------------------------------------------------------------------------------------------
  async store(req, res){
   /*  const pessoaExist = await Pessoa.findOne({ where : {email: req.body.email}});
    if(pessoaExist){
      return res.status(400).json({error :'Usuario ja existente'});
    } */
    try{
       const { id,nome, email, endereco, sexo, ic_ativo } = await Pessoa.create(request.body);
      return res.json({
        id,nome, email, endereco, sexo, ic_ativo,} );
    }catch (e) {
      res.status(400).send({
        message: 'Falha ao realizar cadastro'}
      );
    }
  }
//--------------------------------------------------------------------------------------------
  async update(req, res){
   const pessoa = await Pessoa.findByPk(req.params.id);
   const{ nome , email, endereco, sexo, ic_ativo } = await pessoa.update(req.body);
   return res.json({
    id,nome, email, endereco, sexo, ic_ativo,} );
  }
  //------------------------------------------------------------------------------------------
  async get(req, res){
    try {
      const pessoa = await Pessoa.findByPk(req.params.id);  
      const list = pessoa.findAll();
      res.status(200).send({list});
    } catch (e) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição'
      });
    }
  }
  //----------------------------------------------------------------------------------------
  async delete(req, res){
    try{
      const pessoa = await Pessoa.findByPk(req.params.id);
        if(pessoa){
        await pessoa.destroy();
        return res.status(204).send({message: 'deletado com sucesso'});
        }
      }catch(e){
      return res.status(401).send({message:'falha ao deletar'});
    }
  }
}
module.exports = new pessoaController();