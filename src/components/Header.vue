<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left">
          <span>Okxe</span>
          <span>Admin</span>
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
