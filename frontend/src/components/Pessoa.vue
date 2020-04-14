<template>
<div id = "geral">
  <form id = "form">
  <div class="form-row" >
    <div class="form-group col-md-6">
      <label for="inputNome4">Nome</label>
      <input type="Nome" class="form-control" id="inputNome4" placeholder="Nome" v-model="nome" >
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="Email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email" >
    </div>
  </div>
  <div class="form-group col-md-4">
    <label for="inputAddress">Endereço</label>
    <input type="text" class="form-control" id="inputAddress" style="width:300px" placeholder="endereco" v-model="endereco">
  </div>
  <div class="form-row">
    <div class="form-group col-md-15" >
      <label for="inputState">Sexo</label>
      <select id="inputState" class="form-control"  v-model="sexo" >
        <option selected ></option>
        <option>M</option>
        <option>F</option>
      </select>
    </div>
  </div>
  <div class="form-group col-md-1 "  >
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" style="position: center;" v-model="status" >
      <label class="form-check-label" for="gridCheck" >
        Ativo
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" @click="store"  >Cadastrar</button>
</form>
<!------------------------------>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nome</th>
      <th scope="col">Email</th>
      <th scope="col">status</th>
      <th scope="col" style="width: 200px;">action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{user.id}}</th>
      <td>{{user.nome}}</td>
      <td>{{user.email}}</td>
      <td>{{user.status}}</td>
      <td>

        <button type="submit" class="btn btn-warning">Editar</button>
        <button type="submit" class="btn btn-danger" >Remove</button>

      </td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import axios from '../axios'
export default {
  data () {
    return {
      users: {
        nome: '',
        email: '',
        endereco: '',
        sexo: '',
        status: false
      },
      error: []

    }
  },
  methods: {
    buscar () {
      this.submitting = true
      axios.get('/pessoa', {crossdomain: true})
        .then(res => {
          this.users = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    store () {
      axios.post('/pessoa')
        .then(res => {
          this.users = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this.buscar()
  }
}
</script>

<style>
#geral{
  display: flex-colum;
}
#form{
  padding: 50px 150px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

</style>
