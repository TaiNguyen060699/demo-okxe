<template>
  <Header />
  <Login/>
</template>

<script>

import Login from '../components/Login/index.vue'
import Header from '../components/Header.vue'
export default {
  name: 'Home',
  components: {
    Login,
    Header
  }
}
</script>
