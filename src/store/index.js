import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signupInfoData: {}
  },
  mutations: {
    setSignupInfoData(state, signupInfoData) {
      state.signupInfoData = signupInfoData
    }
  },
  actions: {
    getSignupInfoData: ({commit}, signupInfoData) => {
      commit('setSignupInfoData', signupInfoData)
    }
  },
  getters: {
    signupInfoData: state => {
      return state.signupInfoData
    }
  }
})
