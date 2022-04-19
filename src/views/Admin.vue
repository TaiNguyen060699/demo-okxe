<template>
  <Header />
  <NavBar />
  <Product />
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header.vue'
import NavBar from '../components/NavBar/index.vue'
import Product from '../components/Product/index.vue'

export default {
  components: {
    Header,
    NavBar,
    Product
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style>

</style>