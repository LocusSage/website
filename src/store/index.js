import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/store/load/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
