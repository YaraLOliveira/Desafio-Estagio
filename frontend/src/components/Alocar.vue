<template>
  <div>
      <b-form  id="form" @submit="store(alocar)" >
      <b-form-group
        id="input-group-1"
        label="Data de Entrada:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="alocar.dt_entrada"
          type="date"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
      <!--  -->
      <b-form-group
        id="input-group-1"
        label="Data de saida:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="alocar.dt_saida"
          type="date"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
      <!--  -->
      <b-form-group
        id="input-group-1"
        label="Ultima data de movimentação:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="alocar.dt_mov"
          type="date"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
      <!--  -->
      <b-form-group id="input-group-3" label="Lote:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="alocar.id_fk_lote"
          :options="lotes"
          required
        ></b-form-select>
      </b-form-group>
      <!--  -->
     <p>  Selecione os animais:</p>
    <b-form-select v-model="alocar.id_fk_animal" :options="animais" multiple :select-size="5"></b-form-select>
    <div class="mt-3">Animais selecionados: <strong>{{ selected }}</strong></div>
    <!--  -->
    <br>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="alocar.ativo_bez" id="checkboxes-4">
          <b-form-checkbox value="me">ic_bezerro</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <br>
      <b-button type="submit" variant="primary">Alocar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
    <br>
    <!--  -->

    <table class="table table-dark">
      <thead class="thead-dark">
        <!-- parte superior da tabela - |id| nome|  seleciona | -->
        <tr>
          <th scope="col">id</th>
          <th scope="col">Lote</th>
          <th scope="col">Data Entrada</th>
          <th scope="col">Data Saida</th>
          <th scope="col">ic Bezerro</th>
          <th scope="col" style="width: 200px;">action</th>
        </tr>
      </thead>
      <tbody>
        <!--  imput de dados  -->
        <tr v-for="alocar in alocacoes" :key="alocar.id">
          <th scope="row">{{alocar.id}}</th>
          <td>{{alocar.id_fk_lote}}</td>
          <td>{{alocar.dt_entrada}}</td>
          <td>{{alocar.dt_saida}}</td>
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
      alocacoes: [],
      alocar: {
        id_fk_animal: '',
        id_fk_lote: ''
      },
      animal: {},
      animais: [],
      lote: {},
      lotes: []
    }
  },
  methods: {
    buscarAnimais () {
      axios.get(`/animal`, {crossdomain: true})
        .then(res => {
          this.animais = res.data // <- user
        })
        .catch(error => console.log(error)
        )
    },
    buscar () {
      axios.get('/alocar', {crossdomain: true})
        .then(res => {
          this.alocacoes = res.data
        })
        .catch(error => console.log(error)
        )
    },
    store (novo) {
      axios.post('/alocar', novo)
        .then(res => {
          this.success = res
        })
        .catch(error => console.log(error))
    },
    updateAnimal (alocaUp) {
      axios.put(`/alocar/${alocaUp.id}`, alocaUp)
        .then(res => {
          console.log('atualizado')
        })
        .catch(error => console.log(error))
    },
    findAnimal (alocaId) {
      axios.get(`/animal/${alocaId}`)
        .then(res => {
          this.alocar = res.data
          console.log(res.data)
        })
        .catch(error => console.log(error))
    },
    deleteAnimal (alocaId) {
      axios.delete(`/alocar/${alocaId}`)
        .then(res => {
          console.log(res)
        })
      this.$router.push('/')
    }
  },

  created () {
    this.buscarAnimais()
    this.buscar()
  }
}

</script>

<style>
#geral{
  display: flex-colum;
}
#form{
  margin: 20px 250px;
}
</style>
