<template>
  <div id="index">
    <div class="kv">
      <div class="visible-desktop">
        <img
          class="img-kv01"
          data-aos="fade-up"
          data-aos-duration="1000"
          src="@/assets/images/index/img-kv01.png"
          alt=""
        />
        <img
          class="img-kv02"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          src="@/assets/images/index/img-kv02.png"
          alt=""
        />
        <img
          class="icon"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          src="@/assets/images/index/icon.png"
          alt=""
        />

        <div class="img-B01">
          <img
            class="img-ballon"
            src="@/assets/images/index/img-B01.png"
            alt=""
          />
        </div>
        <div class="img-B02">
          <img
            class="img-ballon"
            src="@/assets/images/index/img-B02.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- 前言 -->
    <section id="intro">
      <div class="container">
        <div class="des">
          <h3 data-aos="fade-up">
            <span class="sub">{{ $t("index.intro.h3Sub") }}</span>
            {{ $t("index.intro.h3") }}
          </h3>
          <h4>
            {{ $t("index.intro.h4") }}
          </h4>
        </div>
        <div class="video w-960">
          <h2 data-aos="fade-up">{{ $t("index.intro.videoH2") }}</h2>
          <iframe
            src="https://www.youtube.com/embed/i4QfWgn0RSg?si=f8KXBsQr30Lmvolh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          >
          </iframe>
          <!-- <div class="video-btn">
              <img src="../assets/images/index/icon-play.svg" alt="">
            </div> -->
        </div>
      </div>
    </section>

    <!-- 2025 活動區 -->
    <section id="activity">
      <div class="container">
        <div class="annual w-960">
          <h2 data-aos="fade-up">
            {{ $t("index.activity.annual.title") }}
            <p class="sub">
              {{ $t("index.activity.annual.name")
              }}<span>{{
                locale == "zh" ? profile.name_tw : profile.name_en
              }}</span
              >｜{{ $t("index.activity.annual.location")
              }}<span>{{ profile.country_code }}</span>
            </p>
          </h2>
          <!-- 個人積分 -->
          <div class="annual-rank">
            <div class="annual-points w-960 block-style01 quality">
              <div class="title title-purple">
                {{ $t("index.activity.annual.quality.title") }}
              </div>
              <div class="annual-content">
                <!-- <div class="annual-info">
                <div>
                  {{ $t("index.activity.annual.name") }}<span>Vivotek</span>
                </div>
                <div>
                  {{ $t("index.activity.annual.location") }}<span>Taiwan</span>
                </div>
              </div>
              <div class="annual-num">
                <div class="num-item quality">
                  <span>20</span>{{ $t("index.activity.annual.quality") }}
                </div>
                <div class="num-item speed">
                  <span>20</span>{{ $t("index.activity.annual.speed") }}
                </div>
                <div class="num-item ranking">
                  <span>1</span>{{ $t("index.activity.annual.ranking") }}
                </div>
                <div class="num-item points">
                  <span>20</span>{{ $t("index.activity.annual.points") }}
                </div>
              </div> -->
                <table>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">
                        {{ $t("index.activity.annual.quality.points") }}
                      </th>
                      <th scope="col">
                        {{ $t("index.activity.annual.quality.ranking") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        {{ $t("index.activity.annual.quality.topic1") }}
                      </th>
                      <td class="num">
                        {{ points.ultimate_explorer.topic_one?.points }}
                      </td>
                      <td class="num">
                        {{ points.ultimate_explorer.topic_one?.rank }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {{ $t("index.activity.annual.quality.topic2") }}
                      </th>
                      <td class="num">
                        {{ points.ultimate_explorer.topic_two?.points }}
                      </td>
                      <td class="num">
                        {{ points.ultimate_explorer.topic_two?.rank }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {{ $t("index.activity.annual.quality.topic3") }}
                      </th>
                      <td class="num">
                        {{ points.ultimate_explorer.topic_three?.points }}
                      </td>
                      <td class="num">
                        {{ points.ultimate_explorer.topic_three?.rank }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="annual-points w-960 block-style01 speed">
              <div class="title title-blue2">
                {{ $t("index.activity.annual.speed.title") }}
              </div>
              <div class="annual-content">
                <table>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">
                        {{ $t("index.activity.annual.speed.points") }}
                      </th>
                      <th scope="col">
                        {{ $t("index.activity.annual.speed.ranking") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        {{ $t("index.activity.annual.speed.topic1") }}
                      </th>
                      <td class="num">
                        {{ points.net_zero_walker.mission_one?.points }}
                      </td>
                      <td class="num">
                        {{ points.net_zero_walker.mission_one?.rank }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {{ $t("index.activity.annual.speed.topic2") }}
                      </th>
                      <td class="num">
                        {{ points.net_zero_walker.mission_two?.points }}
                      </td>
                      <td class="num">
                        {{ points.net_zero_walker.mission_two?.rank }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {{ $t("index.activity.annual.speed.topic3") }}
                      </th>
                      <td class="num">
                        {{ points.net_zero_walker.mission_three?.points }}
                      </td>
                      <td class="num">
                        {{ points.net_zero_walker.mission_three?.rank }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- 2025 活動 -->
        <div class="annual-event w-960">
          <h2 data-aos="fade-up">{{ $t("index.activity.event.title") }}</h2>
          <div class="activity-block">
            <template v-for="(item, index) in activityItem" key="index">
              <!-- 台灣地區 -->
              <div
                v-if="
                  !item.isTaiwanOnly ||
                  (item.isTaiwanOnly && employeeStore.country_code == 'Taiwan')
                "
                :class="['activity-item', { disabled: !item.isActive }]"
              >
                <img :src="getImagePath1(item.img)" alt="" />
                <div class="item-content">
                  <p class="item-name">
                    {{ item.title }}<span>{{ item.month }}</span>
                  </p>
                  <hr />
                  <p class="item-text">
                    {{ item.des }}
                  </p>
                  <!-- btn -->
                  <div class="login-btn">
                    <button
                      v-if="item.isActive"
                      class="btn-style"
                      type="button"
                    >
                      <nuxt-link :to="item.url">
                        {{ $t("index.activity.event.btnMore") }}
                      </nuxt-link>
                    </button>
                    <button v-else class="btn-style" type="button">
                      {{ $t("index.activity.event.btnComing") }}
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <!-- 全球積分 特搜王 -->
        <div class="global-points w-1280">
          <h2 data-aos="fade-up">
            {{ $t("index.activity.global.title") }}
          </h2>
          <div class="tabs-block">
            <div class="tabs-btn">
              <div
                class="tabs-item"
                :class="{ active: categoryName === 'work' }"
                data-item="work"
                @click="tabsChange($event, 'rank')"
              >
                {{ $t("index.activity.annual.quality.topic1") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryName === 'travel' }"
                data-item="travel"
                @click="tabsChange($event, 'rank')"
              >
                {{ $t("index.activity.annual.quality.topic2") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryName === 'city' }"
                data-item="city"
                @click="tabsChange($event, 'rank')"
              >
                {{ $t("index.activity.annual.quality.topic3") }}
              </div>
            </div>
            <div class="tabs-category">
              <template v-for="(item, index) in topicItem" :key="index">
                <div
                  class="category-style"
                  :class="
                    categoryName === item.category
                      ? ['active', 'show', categoryName]
                      : []
                  "
                >
                  <div class="block-style01">
                    <div class="title title-blue">
                      {{ $t("index.activity.global.title") }}
                    </div>
                    <div class="global-content">
                      <div class="global-table">
                        <table>
                          <thead>
                            <tr>
                              <th>{{ $t("index.activity.global.ranking") }}</th>
                              <th>{{ $t("index.activity.global.name") }}</th>
                              <th>
                                {{ $t("index.activity.global.location") }}
                              </th>
                              <th>{{ $t("index.activity.global.points") }}</th>
                              <th>
                                {{ $t("index.activity.global.rankingChanges") }}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, idx) in getRanksList(index)"
                              :key="idx"
                            >
                              <td>{{ item.rank }}</td>
                              <td>
                                {{
                                  item.employee.name_tw || item.employee.name_en
                                }}
                              </td>
                              <td>{{ item.employee.country_code }}</td>
                              <td>{{ item.points }}</td>
                              <td>{{ item.last_rank - item.rank }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <div class="global-remark">
                <p>{{ $t("index.activity.global.remark01") }}</p>
                <p>{{ $t("index.activity.global.remark02") }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 全球積分 競走賽 -->
        <div class="global-points w-1280">
          <h2 data-aos="fade-up">
            {{ $t("index.activity.globalSpeed.title") }}
          </h2>
          <div class="tabs-block">
            <div class="tabs-btn">
              <div
                class="tabs-item"
                :class="{ active: categoryMonth === '9' }"
                data-item="9"
                @click="tabsChange($event, ' ')"
              >
                {{ $t("index.activity.annual.speed.topic1") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryMonth === '10' }"
                data-item="10"
                @click="tabsChange($event, ' ')"
              >
                {{ $t("index.activity.annual.speed.topic2") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryMonth === '11' }"
                data-item="11"
                @click="tabsChange($event, ' ')"
              >
                {{ $t("index.activity.annual.speed.topic3") }}
              </div>
            </div>
            <div class="tabs-category">
              <template v-for="(item, index) in topicItem" :key="index">
                <div
                  class="category-style"
                  :class="
                    categoryMonth === item.category
                      ? ['active', 'show', categoryMonth]
                      : []
                  "
                >
                  <div class="block-style01">
                    <div class="title title-blue">
                      {{ $t("index.activity.global.title") }}
                    </div>
                    <div class="global-content">
                      <div class="global-table">
                        <table>
                          <thead>
                            <tr>
                              <th>
                                {{ $t("index.activity.globalSpeed.ranking") }}
                              </th>
                              <th>
                                {{ $t("index.activity.globalSpeed.name") }}
                              </th>
                              <th>
                                {{ $t("index.activity.globalSpeed.location") }}
                              </th>
                              <th>
                                {{ $t("index.activity.globalSpeed.points") }}
                              </th>
                              <!-- <th>
                                {{ $t("index.activity.global.rankingChanges") }}
                              </th> -->
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, idx) in getRanksList(index)"
                              :key="idx"
                            >
                              <td>{{ item.rank }}</td>
                              <td>
                                {{
                                  item.employee.name_tw || item.employee.name_en
                                }}
                              </td>
                              <td>{{ item.employee.country_code }}</td>
                              <td>{{ item.points }}</td>
                              <!-- <td>{{ item.last_rank - item.rank }}</td> -->
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <div class="global-remark">
                <p>{{ $t("index.activity.globalSpeed.remark01") }}</p>
                <p>{{ $t("index.activity.globalSpeed.remark02") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2024 活動亮點 -->
    <section id="review">
      <div class="container">
        <div>
          <h2 data-aos="fade-up">
            {{ $t("index.review.h2") }}
            <p class="sub">{{ $t("index.review.h2Sub") }}</p>
          </h2>
          <!-- 績效 -->
          <div class="performance">
            <div class="performance-item">
              <p>{{ $t("index.review.performanceItem01") }}</p>
              <p>
                <span class="performance-num">675</span
                >{{ $t("index.review.performanceItem01Text") }}
              </p>
            </div>
            <div class="performance-item">
              <p>{{ $t("index.review.performanceItem02") }}</p>
              <p>
                <span class="performance-num">18.2</span
                >{{ $t("index.review.performanceItem02Text") }}
              </p>
            </div>
            <div class="performance-item">
              <p>{{ $t("index.review.performanceItem03") }}</p>
              <p>
                <span class="performance-num">1,514</span
                >{{ $t("index.review.performanceItem03Text") }}
              </p>
            </div>
          </div>
        </div>

        <!-- 照片輪播 -->
        <div class="photo" style="position: relative">
          <ClientOnly>
            <swiper-container ref="containerRef" :loop="true" :init="false">
              <swiper-slide v-for="(item, index) in 26" :key="index">
                <img :src="getImagePath2(`${index + 1}.jpg`)" alt="" />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
          <!-- btn -->
          <div class="photo-btn">
            <button class="btn-style" type="button">
              <a
                href="https://drive.google.com/drive/folders/13Y7fo2IANUTvMuK9R47WObuOT2fSE6IR?usp=sharing"
                target="_blank"
                >{{ $t("index.review.btn") }}</a
              >
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { useEmployeeStore } from "@/stores/employee";
import { reactive } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const { t, locale, setLocale } = useI18n();
const email = ref("");
const employeeId = ref("");
const errorMsg = ref(false);
const authStore = useAuthStore();
const employeeStore = useEmployeeStore();
const router = useRouter();

const isActive = ref(true);
const categoryName = ref("work");
const categoryMonth = ref("9");

/* 動態圖片路徑 */
// 活動圖
const glob1 = import.meta.glob("@/assets/images/index/*", { eager: true });
// console.log(glob);

function getImagePath1(imageName) {
  const path = `/assets/images/index/${imageName}`;
  return glob1[path]?.default || "";
}
// 照片
const glob2 = import.meta.glob("@/assets/images/index/photos/*", {
  eager: true,
});

function getImagePath2(imageName) {
  const path = `/assets/images/index/photos/${imageName}`;
  return glob2[path]?.default || "";
}

const activityItem = reactive([
  {
    img: "img-activity01.jpg",
    url: "/25th_teamwork",
    title: t("index.activity.event.event1.title"),
    month: t("index.activity.event.event1.date"),
    des: t("index.activity.event.event1.des"),
    isActive: true,
    isTaiwanOnly: false,
  },
  {
    img: "img-activity02.jpg",
    url: "/teamwork",
    title: t("index.activity.event.event2.title"),
    month: t("index.activity.event.event2.date"),
    des: t("index.activity.event.event2.des"),
    isActive: true,
    isTaiwanOnly: true,
  },
  {
    img: "img-activity03.jpg",
    url: "/quality",
    title: t("index.activity.event.event3.title"),
    month: t("index.activity.event.event3.date"),
    des: t("index.activity.event.event3.des"),
    isActive: true,
    isTaiwanOnly: false,
  },
  {
    img: "img-activity04.jpg",
    url: "/speed",
    title: t("index.activity.event.event4.title"),
    month: t("index.activity.event.event4.date"),
    des: t("index.activity.event.event4.des"),
    isActive: true,
    isTaiwanOnly: false,
  },
]);

// Swiper
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  slidesPerView: 1,
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  // grid: {
  //   rows: 2,
  //   fill: "row",
  // },
  breakpoints: {
    379: {
      slidesPerView: 2,
      spaceBetween: 8,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 24,
      grid: {
        rows: 2,
        fill: "row",
      },
      // slidesOffsetBefore: 140,
      // slidesOffsetAfter: 70,
    },
  },

  // centeredSlides: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

const profile = useState("profile", () => ({
  name_tw: "-",
  name_en: "-",
  country_code: "-",
}));
const points = useState("points", () => ({
  ultimate_explorer: {},
  net_zero_walker: {},
}));
const ranks = useState("ranks", () => ({
  ultimate_explorer: {},
  net_zero_walker: {},
}));
const getProfile = async () => {
  const res = await $fetch(`/api/my/profile`);
  if (res) {
    profile.value.name_tw = res.data.name_tw;
    profile.value.name_en = res.data.name_en;
    profile.value.country_code = res.data.country_code;
  } else {
    console.error("Failed to fetch profile data");
  }
};
const getPoints = async () => {
  const res = await $fetch(`/api/my/points`);
  if (res) {
    points.value = res.points;
  } else {
    console.error("Failed to fetch profile data");
  }
};
const getRanks = async () => {
  const res = await $fetch(`/api/ranks`);
  if (res) {
    ranks.value.ultimate_explorer = res.ultimate_explorer;
    ranks.value.net_zero_walker = res.net_zero_walker;
  } else {
    console.error("Failed to fetch profile data");
  }
};
const getRanksList = (index) => {
  if (index === 0) {
    return ranks.value.ultimate_explorer.topic_one;
  } else if (index === 1) {
    return ranks.value.ultimate_explorer.topic_two;
  } else if (index === 2) {
    return ranks.value.ultimate_explorer.topic_three;
  } else if (index === 3) {
    return ranks.value.net_zero_walker.mission_one;
  } else if (index === 4) {
    return ranks.value.net_zero_walker.mission_two;
  } else if (index === 5) {
    return ranks.value.net_zero_walker.mission_three;
  } else {
    return [];
  }
};

onMounted(() => {
  AOS.init({
    anchorPlacement: "top-center",
  });
  getProfile();
  getPoints();
  getRanks();
});

definePageMeta({
  middleware: "auth",
});

const topicItem = reactive([
  {
    category: "work",
    title: t("index.activity.annual.quality.topic1"),
  },
  {
    category: "travel",
    title: t("index.activity.annual.quality.topic2"),
  },
  {
    category: "city",
    title: t("index.activity.annual.quality.topic3"),
  },
  {
    category: "9",
    title: t("index.activity.annual.speed.topic1"),
  },
  {
    category: "10",
    title: t("index.activity.annual.speed.topic2"),
  },
  {
    category: "11",
    title: t("index.activity.annual.speed.topic3"),
  },
]);

// tabs 切換
const tabsChange = async (e, target) => {
  const dataItem = e.currentTarget.getAttribute("data-item");
  if (target === "rank") {
    categoryName.value = dataItem;
  } else {
    categoryMonth.value = dataItem;
  }
};
</script>
<style lang="scss">
$indexImgUrl: "@/assets/images/index/";

#index {
  .kv {
    position: relative;
    width: 100vw;
    height: vwXL(1080);
    background: url($indexImgUrl + "bg-kv.jpg") no-repeat top/cover #e0e0ec;

    @include mobile {
      width: 100%;
      height: vw(600);
      background: url($indexImgUrl + "kv_m.jpg") no-repeat top/cover #e0e0ec;
    }

    .icon {
      position: absolute;
      top: 0;
      z-index: 1;
    }

    .img {
      &-kv01 {
        position: absolute;
        top: 0;
        z-index: 2;
      }

      &-kv02 {
        position: absolute;
        top: 0;
        z-index: 3;
      }

      &-ballon {
        transform: translateX(5%);
        animation: ballon-act 2s 0s infinite;

        @keyframes ballon-act {
          0% {
            transform: translateX(10%);
          }

          50% {
            transform: translateX(-10%);
          }

          100% {
            transform: translateX(10%);
          }
        }
      }

      &-B01 {
        position: absolute;
        opacity: 0;
        top: vwXL(450);
        right: vwXL(890);
        width: vwXL(75);
        animation: B01-act 3.5s 1.7s infinite;

        @keyframes B01-act {
          0% {
            opacity: 0;
            top: vwXL(400);
            right: vwXL(890);
            transform: scale(1);
          }

          10% {
            opacity: 1;
            top: vwXL(400);
            right: vwXL(890);
            transform: scale(1);
          }

          90% {
            opacity: 1;
            top: vwXL(250);
            right: vwXL(890);
            transform: scale(0.7);
          }

          100% {
            opacity: 0;
            top: vwXL(250);
            right: vwXL(890);
            transform: scale(0.7);
          }
        }
      }

      &-B02 {
        position: absolute;
        opacity: 0;
        top: vwXL(350);
        left: vwXL(870);
        width: vwXL(60);
        animation: B02-act 3.5s 2.3s infinite;

        @keyframes B02-act {
          0% {
            opacity: 0;
            top: vwXL(350);
            left: vwXL(870);
            transform: scale(1);
          }

          15% {
            opacity: 1;
            top: vwXL(350);
            left: vwXL(870);
            transform: scale(1);
          }

          90% {
            opacity: 1;
            top: vwXL(220);
            left: vwXL(870);
            transform: scale(0.7);
          }

          100% {
            opacity: 0;
            top: vwXL(220);
            left: vwXL(870);
            transform: scale(0.7);
          }
        }
      }
    }
  }

  #intro {
    background: url($indexImgUrl + "bg-intro.jpg") no-repeat top/cover #e0e0ec;

    .des {
      @include flex-center;
      flex-direction: column;
      gap: 24px;
      text-align: center;

      @include mobile {
        gap: vw(24);
      }

      h3 {
        color: $primaryColorDarkBlue;

        .sub {
          font-size: 22px;
          line-height: 30px;
          display: block;
          color: $primaryColorDarkBlack;

          @include mobile {
            font-size: vw(22);
            line-height: vw(30);
          }
        }
      }
    }

    .video {
      position: relative;
      text-align: center;

      iframe {
        width: 100%;
        height: 540px;
        @extend %bor-radius24;

        @include mobile {
          width: vw(700);
          height: vw(395);
          margin: 0 auto;
        }
      }

      &-btn {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }

  #activity {
    background: url($indexImgUrl + "bg-sec01.jpg") no-repeat bottom/cover;
    .annual {
      width: 100%;
      .annual-rank {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        @include flex-center;
        // max-width: 462px;
        @include margin-auto;
        gap: 36px;
        @include mobile {
          display: grid;
          grid-template-columns: 1fr;
          gap: vw(36);
        }
        .annual-points {
          .annual-content {
            padding: 24px 40px;
            @include flex-center;
            flex-direction: column;
            gap: 24px;

            @include mobile {
              padding: vw(24) vw(40);
              gap: vw(24);
            }
            table {
              width: 100%;
              font-weight: 600;
              text-align: center;
              thead {
                tr {
                  th,
                  td {
                    padding: 16px 20px;
                    vertical-align: middle;
                  }
                }
              }
              tbody {
                tr {
                  border-bottom: 12px solid #fff;
                  th,
                  td {
                    padding: 16px 20px;
                    vertical-align: middle;
                  }
                  .num {
                    font-size: 32px;
                    color: $primaryColorPurple;
                    font-weight: 600;
                  }
                }
              }
            }
          }
          &.quality {
            table {
              tbody {
                tr {
                  background: #f0f0fa;
                  &:nth-child(even) {
                    background: #e3e3f9;
                  }
                  .num {
                    color: $primaryColorPurple;
                  }
                }
              }
            }
          }
          &.speed {
            table {
              tbody {
                tr {
                  background: #f0f6fa;
                  &:nth-child(even) {
                    background: #e3f0f9;
                  }
                  .num {
                    color: $primaryColorBlueLogo;
                  }
                }
              }
            }
          }
        }
      }
    }

    .annual-event {
      .activity {
        &-block {
          @include flex-style(space-between, stretch);
          flex-wrap: wrap;
          gap: 40px;

          @include mobile {
            gap: vw(20);
          }
        }

        &-item {
          max-width: 460px;
          width: 100%;
          background: #ffffff;
          flex: 1 1 calc(50% - 40px); // 每行顯示兩個項目 -gap 間距
          // flex: 1 1 100%; 每行只顯示一個項目
          padding: 24px 24px 40px;
          border-radius: 24px;
          @include mobile {
            width: vw(340);
            padding: vw(12) vw(12) vw(20);
            border-radius: vw(24);
          }

          .item-content {
            padding: 24px 16px 0 16px;
            @include flex-style(center, stretch);
            flex-direction: column;
            gap: 24px;

            @include mobile {
              padding: vw(24) vw(16) vw(0) vw(16);
              gap: vw(12);
            }

            .item {
              &-name {
                font-size: 32px;
                font-weight: 600;
                @include flex-style(space-between, flex-end);
                white-space: pre-line;

                @include mobile {
                  font-size: vw(32);
                }

                span {
                  font-size: 16px;
                  font-weight: 500;
                  color: $secondaryColorDarkGray;
                  white-space: nowrap;

                  @include mobile {
                    font-size: vw(16);
                  }
                }
              }

              &-text {
                color: $secondaryColorDarkGray;
                font-size: 20px;
                line-height: 30px;
                white-space: pre-line;
                height: 170px;

                @include mobile {
                  font-size: vw(18);
                  line-height: vw(22);
                  height: vw(135);
                }
              }
            }
          }
        }
      }
    }

    .global-points {
      .tabs-item.active {
        background: $primaryColorDarkBlue;
      }
      .global-content {
        padding: 24px 40px;

        @include mobile {
          padding: vw(20) vw(20);
        }
        .global-table {
          height: 500px;
          overflow-y: scroll;
          @include mobile {
            height: vw(450);
          }
        }

        table {
          width: 100%;
          text-align: center;
          table-layout: fixed;

          tbody {
            tr {
              &:not(:last-child) {
                border-bottom: 1px solid #bbbbbb;
              }

              &:nth-child(-n + 3) {
                background: #f0f0fa;
                position: relative;

                &::after {
                  content: "";
                  position: absolute;
                  width: 23px;
                  height: 18px;
                  background: url($indexImgUrl + "icon-crown.svg") no-repeat
                    center/contain;
                  left: 15px;
                  top: 15px;

                  @include mobile {
                    width: vw(23);
                    height: vw(18);
                    left: vw(15);
                    top: vw(15);
                  }
                }
              }
            }
          }

          th,
          td {
            width: 100%;
            padding: 12px 0;
            font-size: 20px;

            @include mobile {
              padding: vw(12) 0;
              font-size: vw(16);
            }
          }

          th {
            font-weight: 500;
            color: #000;
            border-bottom: 1px solid $primaryColorDarkBlack;
          }

          td {
            // border-bottom: 1px solid #BBBBBB;
          }
        }
      }

      .global-remark {
        margin-top: 12px;
        font-size: 16px;
        line-height: 25px;
        padding-left: 40px;

        @include mobile {
          margin-top: vw(12);
          font-size: vw(16);
          line-height: vw(25);
          padding-left: vw(40);
        }
      }
    }
  }

  #review {
    background: #f0f0f0;

    .container {
      h2 {
        margin-bottom: 50px;

        @include mobile {
          margin-bottom: vw(50);
        }
      }

      .performance {
        @include flex-center;
        gap: 80px;
        padding: 20px;

        @include mobile {
          gap: vw(30);
          padding: vw(20);
        }

        .performance-item {
          @include flex-center;
          flex-direction: column;
          font-size: 20px;
          line-height: 30px;
          font-weight: 500;
          color: $secondaryColorDarkGray;

          @include mobile {
            font-size: vw(20);
            line-height: vw(30);
          }
        }

        .performance-num {
          font-size: 48px;
          line-height: 50px;
          color: $primaryColorDarkBlue;
          margin-right: 8px;

          @include mobile {
            font-size: vw(48);
            line-height: vw(50);
            margin-right: vw(8);
          }
        }
      }

      .photo {
        width: 100%;

        swiper-slide {
          border-radius: 8px;
          overflow: hidden;
          max-width: 400px;
          width: 100%;

          @include mobile {
            border-radius: vw(8);
            max-width: vw(400);
          }
        }

        .photo-btn {
          margin-top: 24px;
          text-align: center;
        }
      }
    }
  }
}
</style>
