import { createStore } from 'vuex'
import  axios from '../repositories/axiosClient'

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
    id: '',
    modelID: '',
    listModelID: [],
    trimID: '',
    user: [],
    location: [],
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

    getModelID(state, data) {
      state.listModelID = data
    },
    getTrim(state, data) {
      state.trim = data
    },

    setID(state, data) {
      state.id = data
    },

    setModelID(state, data) {
      state.modelID = data
    },

    setTrimID(state, data) {
      state.trimID = data
    },

    getUser(state, data) {
      state.user = data
    },

    getLocation(state, data) {
      state.location = data
    }
  },

  actions: {
    doLogin({ commit }, email) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: '/auth/login', data: email, method: 'POST' })
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
      const params = {
        page: state.currentPage,
        sort_by: 'updated_at',
        order_by:'desc',
        count: 50,
      }
      axios.get('/v2/products', { params: params })
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

    handleLoadBrands({ commit }) {
      axios.get('/brands')
        .then(res => {
          const data = res.data.data;
          commit('getBrands', data)
        })
        .catch(err => console.log(err))
    },

    handleLoadModel({ commit }, id) {
      commit('setID', id)
      axios.get(`/brands/${id}/models`)
        .then(res => {
          const data = res.data.data.model
          commit('getModel', data)
        }).catch(err => console.log(err))
    },

    handleSetID({ commit }, id) {
      const setID = localStorage.setItem('brand_id', id);
      commit('setID', setID)
      const params = {
        brand_id: id,
        page: this.state.currentPage
      }
      axios.get(`/v2/products`, {params: params})
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    },

    handleLoadModelDetail({ commit }, id) {
      commit('setID', id)
      axios.get(`/model-details`, {params: {model_id: id}})
        .then(res => {
          const data = res.data.data
          commit('getModelID', data)
        }).catch(err => console.log(err))
    },

    handleSetModelID({ commit }, modelID) {
      const id = localStorage.getItem('brand_id')
      const model_id = localStorage.setItem('model_id', modelID)
      commit('setModelID', model_id)
      const params = {
        brand_id: id,
        model_id: modelID
      }
      axios.get(`/v2/products`, { params: params })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    },

    handleSetTrim({ commit }, trimID) {
      commit('setTrimID', trimID)
      axios.get(`/v2/products`, {params: {detail_model_id: trimID}})
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    },

    handleSetUser({ commit }) {
      axios.get('/users')
        .then(res => {
          const data = res.data.data
          commit('getUser', data)
        }).catch(err => console.log(err))
    },

    handleLoadUser({ commit }, id) {
      axios.get(`/v2/products`, {params: {created_by: id}})
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    },

    handleGetLocation({ commit }) {
      axios.get(`/locations/cities`)
        .then(res => {
          const data = res.data.data
          commit('getLocation', data)
        }).catch(err => console.log(err))
    },

    handleLoadLocation({ commit }, id) {
      axios.get(`/v2/products`, {params: { location_id:id }})
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    }
  },
  modules: {
  }
})
