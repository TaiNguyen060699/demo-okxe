<template>
  <div class="v-main__wrap">
    <div class="row notice-bar no-gutters">
      <span class="notice-bar__logo">NOTICE</span>
      <span class="notice-bar__post-title ml-o-5"
        >User Management With Advanced Authorization</span
      >
    </div>
    <div class="card-container">
      <div class="card-container__header">
        <div class="card-container__header-title">Product Management</div>
        <div class="card-container__header-action">
          About
          <span style="margin: 0px 5px; color: rgb(0, 188, 195)">
            116,425
          </span>
          results
        </div>
      </div>
      <FliterProduct />
    </div>
  </div>
</template>

<script>
import FliterProduct from "./FliterProduct.vue";
export default {
  components: {
    FliterProduct,
  },
};
</script>

<style lang='scss'>
@import "./index";
@import url("https://fonts.googleapis.com/css?family=Mogra|Roboto");
</style>