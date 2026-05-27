<template>
  <header id="pageHeader">
    <nav>
      <div class="menu__block">
        <div class="logo">
          <img src="@/assets/images/logo.svg" />
        </div>
        <ul
          class="menu-list"
          :class="{ expand: showMenu }"
          @click="handleClick"
        >
          <li>
            <nuxt-link to="/">{{ $t("header.home") }}</nuxt-link>
          </li>
          <li>
            <span v-if="locale === 'en'" @click.stop="setLocale('zh')"
              >中文</span
            >
            <span v-if="locale === 'zh'" @click.stop="setLocale('en')"
              >English</span
            >
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'recap' })">{{
              $t("header.recap")
            }}</nuxt-link>
          </li>
          <li @click.stop="toggleDrop" class="dropdlist">
            <span>{{ $t("header.event.title") }}</span>
            <ul
              class="dropdowns"
              :class="{ expandDrop: showDropDowns }"
              @click="toggleMenu()"
            >
              <li>
                <nuxt-link :to="localePath({ name: '25th_teamwork' })">
                  {{ $t("header.event.event1") }}
                </nuxt-link>
              </li>
              <li v-if="employeeStore.country_code == 'Taiwan'">
                <nuxt-link :to="localePath({ name: 'teamwork' })">
                  {{ $t("header.event.event2") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath({ name: 'quality' })">
                  {{ $t("header.event.event3") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath({ name: 'speed' })">{{
                  $t("header.event.event4")
                }}</nuxt-link>
              </li>
              <!-- <li>
                <nuxt-link :to="localePath({ name: '/' })" class="not-open">{{
                  $t("header.event.event4")
                }}</nuxt-link>
              </li> -->
            </ul>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'profile' })">{{
              $t("header.profile")
            }}</nuxt-link>
          </li>
          <li v-if="authStore.authenticated">
            <nuxt-link href="/logout">{{ $t("header.logout") }}</nuxt-link>
          </li>
          <li v-else>
            <nuxt-link href="/login">{{ $t("header.login") }}</nuxt-link>
          </li>
        </ul>
        <div id="menu-btn" @click="toggleMenu()">
          <img v-if="!showMenu" src="@/assets/images/icon-open.svg" />
          <img v-else="showMenu" src="@/assets/images/icon-close.svg" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useEmployeeStore } from "@/stores/employee";
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const showMenu = ref(false);
const showDropDowns = ref(false);

const toggleMenu = async (e) => {
  showMenu.value = !showMenu.value;
};

const toggleDrop = async (e) => {
  showDropDowns.value = !showDropDowns.value;
};

const handleClick = (event) => {
  if (window.innerWidth < 768) {
    if (!event.target.closest(".dropdlist")) {
      showMenu.value = !showMenu.value;
    }
  }
};

const authStore = useAuthStore();
const employeeStore = useEmployeeStore();
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 999;

  nav {
    width: 100%;
    background: #fff;
    padding: 14px;
    position: relative;
    // box-shadow: 0px 3px 20px rgba($color: $primaryColorDarkBlue, $alpha: 0.25);

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
          // top: 66px;
          left: 0;
          background: #fff;
          width: 100%;
          flex-direction: column;
          gap: 12px;
          padding: 40px;
          transform: translateY(-115%);
          // box-shadow: inset 0px 8px 12px
          //   rgba($color: $primaryColorDarkBlue, $alpha: 0.25);
        }

        li {
          @include flex-center;

          @include rwdWidth(960) {
            flex-direction: column;
            gap: 12px;
          }

          a,
          span {
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

      .dropdlist {
        position: relative;
        //   &:hover {
        //     .dropdowns {
        //       max-height: 500px;
        //       display: block;
        //     }
        //   }
      }

      .dropdowns {
        position: absolute;
        top: 55px;
        background: #fff;
        flex-direction: column;
        gap: 12px;
        font-size: 20px;
        line-height: 25px;
        color: $primaryColorBlueLogo;
        display: none;

        @include rwdWidth(960) {
          position: static;
        }

        li {
          @include flex-center;
          flex-direction: column;
          overflow: hidden;

          a {
            width: 100%;
            padding: 15px 8px;
            margin: 0;
            border-radius: 0;
            text-align: center;
            overflow: hidden;
            font-size: 18px;
          }

          &:not(:last-child) {
            &::after {
              width: 100%;
              height: 1px;
              background: $secondaryColorGray;
              // @include rwdWidth(960) {
              //   width: 25px;
              //   height: 1px;
              // }
            }
          }

          .not-open {
            cursor: default;
            color: $secondaryColorDarkGray;

            &:hover {
              background: #fff;
              color: $secondaryColorDarkGray;
            }
          }
        }

        &.expandDrop {
          display: block;
        }
      }

      // Mobile
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
