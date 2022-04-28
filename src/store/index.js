import { createStore } from 'vuex'
import axios from '../repositories/axiosClient'

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
    type: '',
    params: {
      page: 1,
      sort_by: 'updated_at',
      order_by: 'desc',
      start_date: null,
      end_date: null,
      type: null,
      brand_id: null,
      model_id: null,
      detail_model_id: null,
      location_id: null,
      sales_status: null,
      status_latest_datetime_from: null,
      status_latest_datetime_to: null,
      status_latest_user: null,
      created_by: null,
      count: 50
    }
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
    },

    setParams(state, data) {
      state.params = { ...state.params, ...data }
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
            localStorage.setItem('startDate', 'All day')
            localStorage.setItem('endDate', 'All day')
            localStorage.setItem('status_latest_datetime_from', 'All day')
            localStorage.setItem('status_latest_datetime_from', 'All day')
            axios.defaults.headers.common['authorization'] = `Bearer ${token}`
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
        axios({ url: '/auth/logout', method: 'POST' })
          .then(() => {
            commit('logout');
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            localStorage.removeItem('password')
            localStorage.removeItem('startDate')
            localStorage.removeItem('endDate')
            localStorage.removeItem('status_latest_datetime_from')
            localStorage.removeItem('status_latest_datetime_from')
          })
        resolve()
      })
    },

    handleLoadProduct({ commit, state }) {
      state.params.page = state.currentPage
      axios.get('/v2/products', { params: state.params })
        .then(res => {
          const data = res.data.data;
          const totalPage = res.data.total;
          commit('getProduct', data)
          commit('getTotalPage', totalPage)
        }).catch(err => console.log(err))
    },

    handleActivePage({ commit }, currentPage) {
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

    handleLoadMake({ commit, state }, id) {
      state.params.brand_id = id
      state.params.model_id = null
      state.params.detail_model_id = null
      state.params.page = 1

      axios.get(`/v2/products`, { params: state.params })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    },

    handleLoadModelDetail({ commit, state }, id) {
      commit('setID', id)
      state.params.model_id = id
      state.params.detail_model_id = null
      state.params.page = 1

      axios.get(`/model-details`, { params: state.params })
        .then(res => {
          const data = res.data.data
          commit('getModelID', data)
        }).catch(err => console.log(err))
    },

    handleSetModelID({ commit, state }, modelID) {
      // const model_id = localStorage.setItem('model_id', modelID)
      commit('setModelID', modelID)
      state.params.model_id = modelID
      state.params.page = 1
      axios.get(`/v2/products`, { params: state.params })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    },

    handleSetTrim({ commit, state }, trimID) {
      commit('setTrimID', trimID)
      state.params.detail_model_id = trimID
      state.params.page = 1
      axios.get(`/v2/products`, { params: state.params })
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

    handleLoadUser({ commit, state }, id) {
      state.params.created_by = id
      state.params.page = 1
      axios.get(`/v2/products`, { params: state.params })
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

    handleLoadLocation({ commit, state }, id) {
      state.params.location_id = id
      state.params.page = 1
      axios.get(`/v2/products`, { params: state.params })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        }).catch(err => console.log(err))
    },

    handleLoadProductType({ commit, state }, type) {
      state.params.type = type
      state.params.page = 1
      axios.get("/v2/products", { params: state.params })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        })
    },

    handleLoadProductStatus({ commit, state }, status) {
      state.params.sales_status = status
      state.params.page = 1
      axios.get("/v2/products", { params: state.params })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        })
    },

    handleLoadStatusUpdateBy({ commit, state }, status_user) {
      state.params.status_latest_user = status_user
      state.params.page = 1
      axios.get("/v2/products", { params: state.params })
        .then(res => {
          const data = res.data.data
          commit('getProduct', data)
        })
    },

    handleRegistrationDate({commit, state}) {
      const start_date = localStorage.getItem('startDate')
      const end_date = localStorage.getItem('endDate')
      state.params.page = 1
      state.params.start_date = start_date
      state.params.end_date = end_date
      axios.get("/v2/products", { params: state.params })
      .then(res => {
        const data = res.data.data
        commit('getProduct', data)
      })
    },

    handleStatusDate({commit, state}) {
      const start_date = localStorage.getItem('status_latest_datetime_from')
      const end_date = localStorage.getItem('status_latest_datetime_to')
      state.params.page = 1
      state.params.status_latest_datetime_from = start_date
      state.params.status_latest_datetime_toe = end_date
      axios.get("/v2/products", { params: state.params })
      .then(res => {
        const data = res.data.data
        commit('getProduct', data)
      })
    },

    setParams({commit}, params) {
      commit('setParams', params)
    }
  },
  modules: {
  }
})
