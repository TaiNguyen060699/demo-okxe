<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.errors {
  list-style: none;
  color: red;
  font-size: 12px;
  overflow: hidden;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
}

.dp__menu {
  transform: translateX(-34%) !important;
}

.dp__main {
  width: 335px;
}
</style>
