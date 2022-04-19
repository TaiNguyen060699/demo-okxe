import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    email: '',
    status: '',
    token: localStorage.getItem('token') || '',
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },

  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },

    auth_success(state, token, email) {
      state.status = 'success'
      state.token = token
      state.user = email
    },

    auth_error(state) {
      state.status = 'error'
    },

    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    doLogin({ commit }, email) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://dev.okxe.vn:9060/api/auth/login', data: email, method: 'POST' })
          .then(resp => {
            const token = resp.data.data.access_token;
            const email = resp.data.data.user.email;
            localStorage.setItem('token', token)
            localStorage.setItem("email", email)
            axios.defaults.headers.common['authorization'] = `Token ${token}`
            commit('auth_success', token, email)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    doLogout({commit}) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        resolve()
      })
    }
  },
  modules: {
  }
})
