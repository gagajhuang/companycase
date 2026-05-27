<template>
  <header id="pageHeader">
    <nav>
      <div class="menu__block">
        <div class="logo">
          <img src="@/assets/images/logo.svg" />
        </div>
        <ul class="menu-list" :class="{ expand: showMenu }">
          <li><nuxt-link>首頁</nuxt-link></li>
          <li><nuxt-link>English</nuxt-link></li>
          <li><nuxt-link>過往回顧</nuxt-link></li>
          <li><nuxt-link>年度活動</nuxt-link></li>
          <li><nuxt-link>個人資訊</nuxt-link></li>
          <li><nuxt-link>登出</nuxt-link></li>
          <!-- <nuxt-link class="headerBtn" :to="localePath({ name: 'index' })">{{$t("homePage")}}</nuxt-link> -->
        </ul>
        <div id="menu-btn" @click="toggleMenu()">
          <img v-if="!showMenu" src="@/assets/images/icon-open.svg" />
          <img v-else="showMenu" src="@/assets/images/icon-close.svg" />
        </div>
      </div>

    </nav>
  </header>
</template>
<style lang="scss">
header {
  position: relative;
  z-index: 999;

  nav {
    width: 100%;
    background: #fff;
    padding: 14px;

    box-shadow: 0px 3px 20px rgba($color: $primaryColorDarkBlue, $alpha: 0.25);

    .menu__block {
      max-width: 1280px;
      @include margin-auto;
      @include flex-center;

      .logo {
        width: 100px;

        img {
          width: 100%;
        }

      }

      .menu-list {
        @include flex-center;
        transition: all 0.5s;

        @include rwdWidth(960) {
          position: absolute;
          z-index: -1;
          top: 63px;
          left: 0;
          background: #fff;
          width: 100%;
          flex-direction: column;
          gap: 12px;
          padding: 40px;
          transform: translateY(-115%);
          // display: none;
        }

        li {
          @include flex-center;

          @include rwdWidth(960) {
            flex-direction: column;
            gap: 12px;
          }

          a {
            display: block;
            font-size: 20px;
            line-height: 25px;
            color: $primaryColorBlueLogo;
            @include weight(500);
            padding: 4px 20px;
            margin: 0 6px;
            cursor: pointer;
            border-radius: 8px;

            &:hover {
              background: $primaryColorBlueLogo;
              color: #fff;
            }
          }

          &:not(:last-child) {
            &::after {
              content: "";
              display: block;
              width: 1px;
              height: 20px;
              background: $primaryColorBlueLogo;

              @include rwdWidth(960) {
                width: 25px;
                height: 1px;
              }

            }
          }

        }

      }

      .expand {
        display: flex;
        transform: translateY(0);
      }

      #menu-btn {
        display: none;
        width: 28px;
        cursor: pointer;

        @include rwdWidth(960) {
          display: block;
        }

      }
    }


  }
}
</style>
<script setup>

const showMenu = ref(false);
const toggleMenu = async (e) => {
  showMenu.value = !showMenu.value;

};

</script>
