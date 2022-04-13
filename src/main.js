import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "vue-trix"
import VueTrix from "vue-trix"

import tinymce from 'vue-tinymce-editor'
Vue.component('tinymce', tinymce)

// global register

Vue.use(VueTrix);


Vue.config.productionTip = false
Vue.use(VueRouter)


import Home from '../src/components/Home.vue'

import Admin from '../src/components/Admin.vue'
import PostByUser from '../src/components/PBU.vue'
import vuetify from './plugins/vuetify'
const router = new VueRouter({
  mode : 'history',
  routes : [
   {
     path : '/',
     component : Home
   },
   {
    path : '/post/:id',
    component : PostByUser
  },
   {
    path : '/me/taha/elkarroumy',
    component : Admin
  },
   
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
