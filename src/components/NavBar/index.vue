<template>
  <nav class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__logo" style="padding-top: 10px">
        <img
          style="width: 80px; height: 80px" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&usqp=CAU" alt="">
      </div>
      <div class="sidebar__name" style="padding-top: 10px">Admin</div>
    </div>
    <div class="sidebar__menu">
      <div>
        <router-link to="/admin/dashboard">
          <div class="list-item-title" style="padding-bottom: 25px">Dashboard</div>
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