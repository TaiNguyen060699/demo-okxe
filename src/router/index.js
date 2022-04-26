import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import store from '../store/index'
import Product from '../components/Product/index.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Home
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '/admin/product',
    name: 'Product',
    component: Product
  }
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters.isLoggedIn) next({ name: 'Login' })
  else next()
})

export default router
