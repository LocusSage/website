import Vue from 'vue'
import Router from 'vue-router'
import modules from '@/router/load/modules'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [modules.main]
})
