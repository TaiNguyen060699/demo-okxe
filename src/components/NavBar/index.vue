<template>
  <nav
    class="
      sidebar
      v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open
      theme--dark
    "
    data-booted="true"
    style="
      height: 100vh;
      top: 0px;
      transform: translateX(0%);
      width: 260px;
      background-color: rgb(44, 44, 44);
      border-color: rgb(44, 44, 44);
      max-height: calc(100% - 0px);
    "
  >
    <div class="v-navigation-drawer__prepend">
      <div class="row sidebar__userinfo text-center no-gutters">
        <div class="col">
          <div
            class="v-avatar sidebar__userinfo-avatar"
            style="height: 82px; min-width: 82px; width: 82px"
          ></div>
          <div class="sidebar__userinfo-name">admin</div>
          <div class="sidebar__userinfo-role">Admin</div>
        </div>
      </div>
    </div>
    <div class="v-navigation-drawer__content">
      <div class="sidebar__nav">
        <div class="v-list v-sheet theme--dark">
          <div>
            <a
              href="/"
              class="v-list-item v-list-item--link theme--dark"
              tabindex="0"
              router=""
              ><div class="v-list-item__content">
                <div class="v-list-item__title">Dashboard</div>
              </div></a
            >
          </div>
          <div>
            <div class="v-list-group">
              <div
                tabindex="0"
                aria-expanded="false"
                role="button"
                class="
                  v-list-group__header
                  v-list-item v-list-item--link
                  theme--dark
                "
              >
                <div class="v-list-item__title">Admin User Management</div>
                <div
                  class="v-list-item__icon v-list-group__header__append-icon"
                >
                  <i
                    aria-hidden="true"
                    class="v-icon notranslate mdi mdi-chevron-down theme--dark"
                  ></i>
                </div>
              </div>
              <!---->
            </div>
          </div>
          <div>
            <a
              href="/stores"
              class="v-list-item v-list-item--link theme--dark"
              tabindex="0"
              router=""
              ><div class="v-list-item__content">
                <div class="v-list-item__title">Store Management</div>
              </div></a
            >
          </div>
          <div>
            <a
              href="/transactions"
              class="v-list-item v-list-item--link theme--dark"
              tabindex="0"
              router=""
              ><div class="v-list-item__content">
                <div class="v-list-item__title">Transaction Management</div>
              </div></a
            >
          </div>
          <div>
            <div class="v-list-group v-list-group--active white--text">
              <div
                tabindex="0"
                aria-expanded="true"
                role="button"
                class="
                  v-list-group__header
                  v-list-item v-list-item--active v-list-item--link
                  theme--dark
                  group-menu-active
                "
              >
                <div class="v-list-item__title">Product Management</div>
                <div
                  class="v-list-item__icon v-list-group__header__append-icon"
                ></div>
              </div>
              <div class="v-list-group__items" style="">
                <a
                  href="/products/register"
                  class="v-list-item v-list-item--link theme--dark"
                  tabindex="0"
                  router=""
                  ><div class="v-list-item__title px-o-10">
                    Register Product
                  </div></a
                ><a
                  href="/products"
                  class="
                    v-list-item--active
                    v-list-item v-list-item--link
                    theme--dark
                  "
                  tabindex="0"
                  router=""
                  aria-current="page"
                  ><div class="v-list-item__title px-o-10">Products</div></a
                >
              </div>
            </div>
          </div>
          <div>
            <a
              href="/brands"
              class="v-list-item v-list-item--link theme--dark"
              tabindex="0"
              router=""
              ><div class="v-list-item__content">
                <div class="v-list-item__title">
                  Brand &amp; model Management
                </div>
              </div></a
            >
          </div>
          <div>
            <div class="v-list-group">
              <div
                tabindex="0"
                aria-expanded="false"
                role="button"
                class="
                  v-list-group__header
                  v-list-item v-list-item--link
                  theme--dark
                "
              >
                <div class="v-list-item__title">Promotion Management</div>
                <div
                  class="v-list-item__icon v-list-group__header__append-icon"
                ></div>
              </div>
              <!---->
            </div>
          </div>
          <div>
            <div class="v-list-group">
              <div
                tabindex="0"
                aria-expanded="false"
                role="button"
                class="
                  v-list-group__header
                  v-list-item v-list-item--link
                  theme--dark
                "
              >
                <div class="v-list-item__title">Ads Management</div>
                <div
                  class="v-list-item__icon v-list-group__header__append-icon"
                ></div>
              </div>
              <!---->
            </div>
          </div>
          <div>
            <a
              href="/leads"
              class="v-list-item v-list-item--link theme--dark"
              tabindex="0"
              router=""
              ><div class="v-list-item__content">
                <div class="v-list-item__title">Lead Management</div>
              </div></a
            >
          </div>
          <div>
            <a
              href="/partners"
              class="v-list-item v-list-item--link theme--dark"
              tabindex="0"
              router=""
              ><div class="v-list-item__content">
                <div class="v-list-item__title">Partner Management</div>
              </div></a
            >
          </div>
          <div>
            <div class="v-list-group">
              <div
                tabindex="0"
                aria-expanded="false"
                role="button"
                class="
                  v-list-group__header
                  v-list-item v-list-item--link
                  theme--dark
                "
              >
                <div class="v-list-item__title">FAQs</div>
                <div
                  class="v-list-item__icon v-list-group__header__append-icon"
                >
                  <i
                    aria-hidden="true"
                    class="v-icon notranslate mdi mdi-chevron-down theme--dark"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="v-navigation-drawer__border"></div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>