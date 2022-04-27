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
            <form novalidate="novalidate" class="v-form" @submit="checkForm">
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
                        @input="checkFormEmail"
                        autocomplete="on"
                      />
                    </div>
                    <div class="v-text-field__details">
                      <div
                        class="v-messages theme--light error--text"
                        role="alert"
                      >
                        <div class="v-messages__wrapper" v-if="errors.length">
                          <div
                            class="v-messages__message errors"
                            v-for="(error, key) in errors"
                            :key="key"
                          >
                            {{ error }}
                          </div>
                        </div>
                      </div>
                    </div>
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
                        maxlength="51"
                        id="input-22"
                        type="password"
                        placeholder="Enter your password"
                        v-model="password"
                        @input="checkFormPW"
                      />
                    </div>
                    <div class="v-text-field__details">
                      <div
                        class="v-messages theme--light error--text"
                        role="alert"
                      >
                        <div class="v-messages__wrapper" v-if="errorsPW.length">
                          <div
                            class="v-messages__message errors"
                            v-for="(error, key) in errorsPW"
                            :key="key"
                          >
                            {{ error }}
                          </div>
                        </div>
                      </div>
                    </div>
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
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      errorsPW: "",
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
        .then(() => {
          this.$router.push("/admin");
          createToast("Welcome to OKXE Back Office Administrator");
        })
        .catch((err) => {
          createToast("Please Try Again");
          console.log(err);
        });
    },

    checkFormEmail(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.email) {
        this.errors.push("Enter your Email.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("The email is not formatted correctly.");
      }

      if (!this.errors.length) {
        return true;
      }
    },

    checkFormPW(e) {
      e.preventDefault();
      this.errorsPW = [];

      if (!this.password) {
        this.errorsPW.push("Password is required");
      } else if (this.password.length < 8 || this.password.length > 50) {
        this.errorsPW.push("Min 8 characters and Max 50 characters");
      }

      if (!this.errorsPW.length) {
        return true;
      }
    },

    validEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
  },
};
</script>

<style lang='scss'>
@import "./index.scss";
</style>