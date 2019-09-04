import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/HelloWorld'
import PageA from './components/pageA'
import PageB from './components/pageB'
import PageC from './components/pageC'
import Erreur404 from './components/404'

Vue.config.productionTip = false

Vue.use(VueRouter)

/* require(['./components/pageD'], function (pageD) {
  console.log(pageD)
}) */

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Hello, name: 'root'},
    {path: '/article/:id(\\d+)', components: {default: PageA, sidebar: PageC}, name: 'A'},
    {path: '/pageB', component: PageB, name: 'B', children: [{path: 'pageC', component: PageC, name: 'b.c'}, {path: 'pageA', component: PageA, name: 'b.a'}]},
    {path: '/PageA', component: PageA },
    {path: '/PageC',
      component: PageC,
      beforeEnter (route, redirect, next) {
        let confirm = window.confirm('voulez vous vraiment vous rendre sur la page C?')
        if (confirm) {
          next()
        } else {
          redirect('/')
        }
      } },
    {path: '/PageD', name: 'D', component: resolve => require(['./components/pageD'], resolve)},
    {path: '*', component: Erreur404}

  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
