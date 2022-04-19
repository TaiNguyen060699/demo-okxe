<template>
  <main class="v-main" data-booted="true" style="padding: 80px 0px 0px">
    <div class="v-main__wrap">
      <div
        class="container container--fluid"
        style="background-color: white; height: 100%"
      >
        <div class="row align-center justify-center" style="height: 100%">
          <div class="login-page__container">
            <img
              src="http://dev.okxe.vn:1112/images/okxe-logo-v2.svg"
              height="164"
              width="164"
            />
            <form novalidate="novalidate" class="v-form">
              <div
                class="
                  v-input
                  login__username-field
                  v-input--has-state
                  theme--light
                  v-text-field v-text-field--is-booted
                  error--text
                "
              >
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <div class="v-text-field__slot">
                      <input
                        maxlength="50"
                        id="input-19"
                        type="text"
                        placeholder="Enter your email"
                        v-model="email"
                      />
                    </div>
                  </div>
                  <div class="v-text-field__details">
                    <div
                      class="v-messages theme--light error--text"
                      role="alert"
                    >
                      <!-- <div class="v-messages__wrapper">
                        <div class="v-messages__message">Email is required</div>
                      </div> -->
                    </div>
                    <!-- <div class="v-counter theme--light">0 / 50</div> -->
                  </div>
                </div>
              </div>
              <div
                class="
                  v-input
                  login__password-field
                  theme--light
                  v-text-field v-text-field--is-booted
                "
              >
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <div class="v-text-field__slot">
                      <input
                        maxlength="50"
                        id="input-22"
                        type="password"
                        placeholder="Enter your password"
                        v-model="password"
                      />
                    </div>
                  </div>
                  <div class="v-text-field__details">
                    <div class="v-messages theme--light">
                      <div class="v-messages__wrapper"></div>
                    </div>
                    <!-- <div class="v-counter theme--light">0 / 50</div> -->
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="
                  mt-2
                  v-btn
                  v-btn--block
                  v-btn--is-elevated
                  v-btn--has-bg
                  v-btn--tile
                  theme--dark
                  v-size--x-large
                  primary
                "
                @click="handleLogin"
              >
                <span class="v-btn__content"><span> Login </span></span>
              </button>
            </form>
            <p class="login-page__hint">
              If you forget the password, please contract admin
            </p>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    ...mapActions(["doLogin"]),

    async handleLogin() {
      let data = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch(
          "doLogin",
          data,
          localStorage.setItem("email", data.email),
          localStorage.setItem("password", data.password)
        )
        .then(() => this.$router.push("/admin"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang='scss'>
@import "./index.scss";
</style>