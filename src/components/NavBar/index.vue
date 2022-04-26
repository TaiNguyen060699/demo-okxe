<template>
  <nav class="sidebar" :class="[isActive ? 'openNav' : 'closeNav']">
    <div class="sidebar__header">
      <div class="sidebar__span">
        <svg 
          class="MuiSvgIcon-root sc-hKMtZM gAKHSM" 
          focusable="false" viewBox="0 0 24 24" aria-hidden="true"
          @click="handleActive"
        >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
      </div>
      <div class="sidebar__logo" style="padding-top: 10px">
        <img
          style="width: 80px; height: 80px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&usqp=CAU"
          alt=""
        />
      </div>
      <div class="sidebar__name" style="padding-top: 10px">Admin</div>
    </div>
    <div class="sidebar__menu">
      <div>
        <router-link to="/admin/dashboard">
          <div class="list-item-title" style="padding-bottom: 25px">
            Dashboard
          </div>
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
  data() {
    return {
      isActive: true,
    }
  },

  components: {
  },

  methods: {
    handleActive() {
      this.isActive = !this.isActive
    }
  }
};
</script>

<style lang='scss'>
@import "./index.scss";
</style>