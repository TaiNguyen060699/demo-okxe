<template>
  <Header/>
  <Login/>
</template>

<script>
import Header from '../components/Header.vue'
import Login from '../components/Login/index.vue'
export default {
  name: 'Home',
  components: {
    Header, 
    Login
  }
}
</script>
