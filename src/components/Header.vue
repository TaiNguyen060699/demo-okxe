<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left">
          <span>Okxe</span>
          <span>Admin</span>
          <!-- <div v-if="isLoggedIn" class="menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
              />
            </svg>
          </div> -->
        </div>
        <div class="header__right">
          <div class="text-english">
            <button type="button">
              <span>
                English
                <img
                  src="http://dev.okxe.vn:1112/images/flag-en.svg"
                  style="width: 25px"
                  alt=""
                />
              </span>
            </button>
          </div>
          <div class="app-bar__dividers"></div>
          <button class="logout" v-if="isLoggedIn" @click="handleLogout">
            Logout
          </button>
          <div class="text-nice" v-if="!isLoggedIn">Nice to meet you</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  methods: {
    ...mapActions(["doLogout"]),
    handleLogout() {
      this.doLogout(this.$router.push("/login"));
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style lang="scss">
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    align-items: center;

    span {
      &:first-child {
        font-size: 30px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.87);
        text-transform: uppercase;
      }

      &:last-child {
        margin-left: 5px;
        color: rgb(170, 170, 170);
        font-size: 14px;
      }
    }

    .menu {
      margin-left: 20px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  &__right {
    display: flex;
    align-items: center;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 10px;
      border-radius: 10px;

      &:hover {
        background-color: #bfbfbf;
      }
    }

    .app-bar__dividers {
      width: 1px;
      height: 10px;
      background-color: #bfbfbf;
      margin: 0 20px;
    }

    .logout {
      color: #00bcc3;
    }
  }
}
</style>
