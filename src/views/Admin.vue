<template>
  <Header />
  <NavBar />
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header.vue'
import NavBar from '../components/NavBar/index.vue'

export default {
  components: {
    Header,
    NavBar
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style>

</style>