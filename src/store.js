import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data : [],
    totalQueue : 1
  },
  mutations: {
    register(state, data){
      state.data.push({
        nama : data.nama, 
        umur : data.umur, 
        domisili : data.domisili
      })
      state.totalQueue++
    }
  },
  actions: {
    doRegister(context, data){
      context.commit('register', data)
    }
  },
  getters : {
    getData : state => {
      return state.data
    },
    getTotalQueue : state => {
      return state.totalQueue
    }
  }
});
