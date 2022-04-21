<template>
  <NavBar />
  <Product />
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '../components/NavBar/index.vue'
import Product from '../components/Product/index.vue'

export default {
  components: {
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