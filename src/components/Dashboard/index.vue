<template>
  <div class="row" style="height: 100%">
    <div class="col-md-2">
      <NavBar />
    </div>
    <div class="col-md-10">
      <div class="container fill-height pa-0">
        <div class="row row-container justify-center">
          <div class="col-grid col">
            <div class="row" style="padding: 120px 20px 0px">
              <div class="col" style="padding-top: 40px">
                <p
                  style="
                    font-size: 48px;
                    font-weight: 300;
                    margin-bottom: 0px;
                    color: rgb(246, 110, 110);
                  "
                >
                  Welcome to
                </p>
                <h1 style="font-size: 50px; color: rgb(0, 188, 195)">
                  OKXE Back Office Administrator
                </h1>
                <p style="font-size: 24px">
                  OKXE admin page use to manage Okxe's system like products,
                  stores and other features
                </p>
              </div>
              <div class="col">
                <div class="v-image v-responsive theme--light">
                  <div
                    class="v-responsive__sizer"
                    style="padding-bottom: 71.4286%"
                  ></div>
                  <div
                    class="v-image__image v-image__image--cover"
                    style="
                      background-image: url('http://dev.okxe.vn:1112/images/dashboard.png');
                      background-position: center center;
                      background-size: cover;
                      background-repeat: no-repeat;
                      z-index: -1;
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                    "
                  ></div>
                  <div class="v-responsive__content" style="width: 518px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../NavBar/index.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
</style>