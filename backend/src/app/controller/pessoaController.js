const connection = require('../../database/index')
//------------------------post / concluido -----------------------------
module.exports = {
  async post( request, response){
    try{
      const{ nome, email, endereco, sexo, ic_ativo} = request.body;
      await connection ('pessoa').insert(
      { nome, email, endereco, sexo, ic_ativo,})
      return response.status(201).send({message: 'Cadastro realizado com sucesso!'
      });
    } catch (e) {
      response.status(400).send({
        message: 'Falha ao realizar cadastro'}
      );
    }
  },
//------------- get / concluido -----------------------------------------
  async get(request, response){
    const pessoa = await connection ('pessoa').select('*');
    return response.json(pessoa);
  }, 
  //---------------delete / concluido ----------------------------------------------------
  async delete(request, response){
    const {id} = request.params;
    try{
      await connection('pessoa')
      .where('id', id)
      .delete();
      return response.status(204).send({message: 'deletado com sucesso'});
    }catch(e){
      return response.status(401).send({message:'falha ao deletar'})
    }

  },
  //---------------put / concluiod---------------------------------------------------------------
  async put( request, response){
    try{
      const pessoa = await connection('pessoa').update( request.body);
      return response.status(200).send({message:'atualizado com sucesso'})
    }catch(e){
      return response.status(400).json({error:' falha ao alterar' })
    }
  }

}