import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pessoa from '@/components/Pessoa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/pessoa', name: 'Pessoa', component: Pessoa}
  ]
})
