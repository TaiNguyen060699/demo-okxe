import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    email: '',
    status: '',
    token: localStorage.getItem('token') || '',
    product: [],
    currentPage: 1,
    totalPage: 0,
    brands: [],
    model: [],
    trim: [],
    id: ''
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

    getProduct(state, product) {
      state.product = product
    },

    getTotalPage(state, totalPage) {
      state.totalPage = totalPage
    },

    isActivePage(state, data) {
      state.currentPage = data
    },

    getBrands(state, data) {
      state.brands = data
    },

    getModel(state, data) {
      state.model = data
    },

    getTrim(state, data) {
      state.trim = data
    },

    setID(state, data) {
      state.id = data
      state.product = data
    }
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

    doLogout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        resolve()
      })
    },

    handleLoadProduct({ commit, state }) {
      const token = state.token
      axios.get(`http://dev.okxe.vn:9060/api/v2/products?page=${this.state.currentPage}&sort_by=updated_at&order_by=desc&count=50`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then(res => {
          const data = res.data.data;
          const totalPage = res.data.total;
          commit('getProduct', data)
          commit('getTotalPage', totalPage)
        }).catch(err => console.log(err))
    },

    handleActivePage({ commit }, currentPage = 1) {
      commit('isActivePage', currentPage)
    },

    handleLoadBrands({ commit, state }) {
      const token = state.token
      axios.get('http://dev.okxe.vn:9060/api/brands', {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then(res => {
          const data = res.data.data;
          console.log(data)
          commit('getBrands', data)
        })
        .catch(err => console.log(err))
    },

    handleLoadModel({ commit, state }) {
      const token = state.token
      axios.get(`http://dev.okxe.vn:9060/api/brands/${state.id}/models`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then(res => {
          const data = res.data.data
          commit('getModel', data)
        }).catch(err => console.log(err))
    },

    handleSetID({ commit, state }, id) {
      const token = state.token
      commit('setID', id)
      axios.get(`http://dev.okxe.vn:9060/api/v2/products?page=1&sort_by=updated_at&order_by=desc&brand_id=${id}&count=50`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    }
  },
  modules: {
  }
})
