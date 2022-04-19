<template>
  <nav class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__logo"></div>
      <div class="sidebar__name">Admin</div>
    </div>
    <div class="sidebar__menu">
      <div>
        <router-link to="/admin/dashboard">
          <div class="list-item-title">Dashboard</div>
        </router-link>
      </div>
      <div>
        <router-link to="/admin/product">
          <div class="list-item-title">Product</div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang='scss'>
@import "./index.scss";
</style>