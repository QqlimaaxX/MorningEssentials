import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' //using for get reqs
import VueRouter from 'vue-router'

Vue.use(VueRouter); 
Vue.use(VueResource); 

new Vue({
  el: '#app',
  render: h => h(App)
})
