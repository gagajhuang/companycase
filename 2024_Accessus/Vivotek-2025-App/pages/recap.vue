<template>
  <div id="recap">
    <div class="kv">
      <div class="visible-desktop">
        <img class="img-kv01" data-aos="fade-up" data-aos-duration="1000" src="@/assets/images/index/img-kv01.png"
          alt="">
        <img class="img-kv02" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
          src="@/assets/images/index/img-kv02.png" alt="">
        <img class="icon" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"
          src="@/assets/images/index/icon.png" alt="">

        <div class="img-B01">
          <img class="img-ballon" src="@/assets/images/index/img-B01.png" alt="">
        </div>
        <div class="img-B02">
          <img class="img-ballon" src="@/assets/images/index/img-B02.png" alt="">
        </div>
      </div>
    </div>
    <!-- 前言 -->
    <section id="intro">
      <div class="container">
        <div class="des">
          <h3 data-aos="fade-up">
            <span class="sub">{{ $t('recap.intro.h3Sub') }}</span>
            <span class="style-origin">{{ $t('recap.intro.h3') }}</span>
          </h3>
          <h4>
            {{ $t('recap.intro.h4') }}
          </h4>
        </div>
        <div>
          <h2 data-aos="fade-up">
            {{ $t('recap.review.h2') }}
            <p class="sub">{{ $t('recap.review.h2Sub') }}</p>
          </h2>
          <!-- 績效 -->
          <div class="performance" :class="{ performanceEn: locale === 'en' }">
            <div class="performance-item" data-aos="zoom-in">
              <p>{{ $t('recap.review.performanceItem01') }}</p>
              <p><span class="performance-num">1,163</span>{{ $t('recap.review.performanceItem01Text') }}</p>
            </div>
            <div class="performance-item" data-aos="zoom-in" data-aos-delay="300">
              <p>{{ $t('recap.review.performanceItem02') }}</p>
              <p>
                <span class="performance-num">{{ $t('recap.review.performanceItem02Num1') }}</span>{{
                  $t('recap.review.performanceItem02Text') }}
                <span class="performance-num">{{ $t('recap.review.performanceItem02Num2') }}</span>{{
                  $t('recap.review.performanceItem02Text2') }}
              </p>
            </div>
            <div class="performance-item" data-aos="zoom-in" data-aos-delay="600">
              <p>{{ $t('recap.review.performanceItem03') }}</p>
              <p><span class="performance-num">29.9</span>{{ $t('recap.review.performanceItem03Text') }}</p>
            </div>
            <div class="performance-item" data-aos="zoom-in" data-aos-delay="900">
              <p>{{ $t('recap.review.performanceItem04') }}</p>
              <p><span class="performance-num">2,489</span>{{ $t('recap.review.performanceItem04Text') }}</p>
            </div>
            <div class="performance-item" data-aos="zoom-in" data-aos-delay="1200">
              <p>{{ $t('recap.review.performanceItem05') }}</p>
              <p><span class="performance-num">6</span>{{ $t('recap.review.performanceItem05Text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 回顧區 -->
    <section id="activity">
      <div class="container">
        <div class="activity-content">
          <h2 data-aos="fade-up">
            {{ $t('recap.activity.h2') }}
            <!-- <p class="sub">{{ $t('recap.review.h2Sub') }}</p> -->
          </h2>
          <div class="tabs-block" id="tabs-block">
            <div class="tabs-btn">
              <div class="tabs-item" :class="{ active: categoryName === '2024' }" data-item="2024" @click="tabsChange">
                2024
              </div>
              <div class="tabs-item" :class="{ active: categoryName === '2023' }" data-item="2023" @click="tabsChange">
                2023
              </div>
            </div>
            <div class="tabs-category" :class="{ categoryEn: locale === 'en' }">
              <template v-for="category in activityData" :key="index">
                <div class="category-style" :class="{
                  active: categoryName === category.year,
                  show: categoryName === category.year,
                }">
                  <img class="activity-KV" :src="getImagePath1(category.img)" alt="" />
                  <p class="category-title">{{ category.title }}</p>

                  <div class="timeline">
                    <div class="bottom-line"></div>
                    <!-- 00 -->
                    <div class="timeline-item" data-aos="fade-up" v-for="items in category.item" :key="index">
                      <div class="item-style">
                        <div class="item-content">
                          <div class="item-text">
                            <p class="item-title">{{ items.title }}</p>
                            <p class="item-sub">{{ items.des }}</p>
                          </div>
                          <img class="item-img" :src="getImagePath2(items.photo)" alt="" />
                        </div>
                        <img class="item-line" src="@/assets/images/recap/img-line.png" alt="">
                      </div>
                    </div>

                  </div>

                </div>
              </template>

            </div>
          </div>
          <p class="activity-conclusion">加入 BRAND BOOST！VIVOTEK 因你而更精彩！</p>
        </div>

      </div>
    </section>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth';
import { useEmployeeStore } from '@/stores/employee';
import { reactive } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { t, locale, setLocale } = useI18n();
const email = ref('');
const employeeId = ref('');
const errorMsg = ref(false);
const authStore = useAuthStore();
const employeeStore = useEmployeeStore();
const router = useRouter();

const categoryName = ref("2024");


const tabsChange = async (e) => {
  const dataItem = e.currentTarget.getAttribute("data-item");
  categoryName.value = dataItem;
  // console.log(dataItem);
  
  await nextTick();
  AOS.init({
    anchorPlacement: 'top-center',
  });

};

/* 動態圖片路徑 */
// 活動圖
const glob1 = import.meta.glob('@/assets/images/recap/*', { eager: true })
// console.log(glob);

function getImagePath1(imageName) {
  const path = `/assets/images/recap/${imageName}`;
  return glob1[path]?.default || '';
}
// 照片
const glob2 = import.meta.glob('@/assets/images/recap/*', { eager: true })

function getImagePath2(imageName) {
  const path = `/assets/images/recap/${imageName}`;
  return glob2[path]?.default || '';

}

const activityData = reactive([
  {
    year: "2024",
    img: "img-kV1.png",
    title: t("recap.activity.24th.title"),
    item: [
      {
        title: t("recap.activity.24th.item.01.title"),
        des: t("recap.activity.24th.item.01.des"),
        photo: "photo-24_01.png",
      },
      {
        title: t("recap.activity.24th.item.02.title"),
        des: t("recap.activity.24th.item.02.des"),
        photo: "photo-24_02.png",
      },
      {
        title: t("recap.activity.24th.item.03.title"),
        des: t("recap.activity.24th.item.03.des"),
        photo: "photo-24_03.png",
      },
      {
        title: t("recap.activity.24th.item.04.title"),
        des: t("recap.activity.24th.item.04.des"),
        photo: "photo-24_04.png",
      }

    ]
  },
  {
    year: "2023",
    img: "img-kV2.png",
    title: t("recap.activity.23th.title"),
    item: [
      {
        title: t("recap.activity.23th.item.01.title"),
        des: t("recap.activity.23th.item.01.des"),
        photo: "photo-23_01.png",
      },
      {
        title: t("recap.activity.23th.item.02.title"),
        des: t("recap.activity.23th.item.02.des"),
        photo: "photo-23_02.png",
      },
      {
        title: t("recap.activity.23th.item.03.title"),
        des: t("recap.activity.23th.item.03.des"),
        photo: "photo-23_03.png",
      },
      {
        title: t("recap.activity.23th.item.04.title"),
        des: t("recap.activity.23th.item.04.des"),
        photo: "photo-23_04.png",
      }

    ]
  }
]);



onMounted(() => {
  AOS.init({
    anchorPlacement: 'top-center',
  });
});

definePageMeta({
  middleware: 'auth',
})
</script>
<style lang="scss">
$recapImgUrl: '@/assets/images/recap/';
$indexImgUrl: '@/assets/images/index/';

#recap {
  .kv {
    position: relative;
    width: 100vw;
    height: vwXL(1080);
    background: url($indexImgUrl + 'bg-kv.jpg') no-repeat top/cover #e0e0ec;

    @include mobile {
      width: 100%;
      height: vw(600);
      background: url($indexImgUrl + 'kv_m.jpg') no-repeat top/cover #e0e0ec;

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
    background: url($recapImgUrl + 'bg-intro.jpg') no-repeat bottom/contain #e0e0ec;

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
        text-transform: uppercase;

        .sub {
          font-size: 40px;
          line-height: 48px;
          display: block;
          color: $primaryColorDarkBlack;

          @include mobile {
            font-size: vw(40);
            line-height: vw(48);
          }
        }

        .style-origin {
          color: $primaryColorDarkBlack;
        }
      }
    }

    .performance {
      @include flex-center;
      gap: 60px;
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


        @include mobile {
          font-size: vw(16);
          line-height: vw(22);
          // white-space: nowrap;
        }
      }

      .performance-num {
        font-size: 48px;
        line-height: 50px;
        color: $primaryColorDarkBlue;
        margin-right: 8px;

        @include mobile {
          font-size: vw(30);
          line-height: vw(48);
          margin-right: vw(8);
        }
      }
    }

    .performanceEn {
      @include mobile {
        gap: vw(20);
        padding: vw(20);
      }

      .performance-item {
        @include mobile {
          white-space: pre-line;
          text-align: center;
        }
      }
    }
  }

  #activity {
    background: url($recapImgUrl + 'bg-recap.jpg') no-repeat top/cover;
    padding-bottom: 50px;

    @include mobile {
      padding-bottom: vw(50);
      background: url($recapImgUrl + 'bg-recap_m.jpg') no-repeat top/cover;
    }

    .activity-content {
      width: 100%;
    }

    .activity-KV {
      max-width: 800px;
      @include margin-auto;
    }

    .tabs-block {
      max-width: 1200px;
      @include margin-auto;

      .tabs-btn {
        @include flex-style(center, stretch);
        margin-bottom: 40px;
        gap: vwXL(24);

        .tabs-item {
          @include flex-style(center, center);
          border: 1px rgb(65 65 65 / 70%) solid;
          color: rgb(65 65 65 / 80%);
          padding: 16px 64px;
          border-radius: 16px;
          font-weight: bold;
          font-size: 32px;
          letter-spacing: 1px;
          cursor: pointer;
          text-align: center;

          @include mobile {
            padding: vw(16) vw(64);
            border-radius: vw(16);
            font-size: vw(24);
          }

          &.active {
            background: $primaryColorPurple;
            border: none;
            color: #fff;
            position: relative;

            &::after {
              content: '';
              display: block;
              background: url($recapImgUrl + 'icon-arrow.png') no-repeat bottom/contain;
              width: 16px;
              height: 14px;
              position: absolute;
              bottom: -12px;
            }
          }
        }
      }

      .tabs-category {
        max-width: 1030px;
        @include margin-auto;
        position: relative;

        .category-style {
          @include flex-style(space-around, center);
          flex-direction: column;
          gap: 36px;
          width: 100%;
          display: none;

          @include mobile {
            gap: vw(36);
          }

          &.active {
            display: flex;
          }

        }

        .category-title {
          font-size: 24px;
          line-height: 35px;
          font-weight: 500;
          text-align: center;
          white-space: pre-line;

          @include mobile {
            font-size: vw(24);
            line-height: vw(35);
          }
        }

        .timeline {
          position: relative;
          width: 100%;
          padding: 20px 0 60px 0;

          @include mobile {
            padding: vw(20) 0 vw(60) 0;
          }

          .bottom-line {
            position: absolute;
            height: 100%;
            width: 1px;
            background: #9DC6FF;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
          }

          .timeline-item {
            width: 100%;
            position: relative;

            .item-style {
              width: 50%;
              @include flex-style(center, flex-start);
              gap: 10px;
              margin-left: 7px; // 對齊底線

              @include mobile {
                gap: vw(10);
                margin-left: vw(7); // 對齊底線
              }

              .item-content {
                @include flex-style(center, flex-end);
                flex-direction: column;

                .item-text {
                  @include flex-style(center, flex-end);
                  flex-direction: column;

                  .item-title {
                    color: $primaryColorBlueLogo;
                    font-size: 22px;
                    line-height: 28px;
                    font-weight: 500;
                    @include flex-style(flex-start, center);
                    gap: 12px;
                    margin-bottom: 9px;
                    text-align: right;

                    @include mobile {
                      font-size: vw(18);
                      line-height: vw(28);
                      gap: vw(12);
                      margin-bottom: vw(9);
                      white-space: pre-line;
                    }
                  }

                  .item-sub {
                    font-size: 18px;
                    line-height: 25px;
                    margin-bottom: 24px;
                    text-align: right;

                    @include mobile {
                      font-size: vw(16);
                      line-height: vw(24);
                      margin-bottom: vw(24);
                    }
                  }
                }

                .item-img {
                  max-width: 425px;
                  width: 100%;
                }
              }

              .item-line {
                width: 67px;
                margin-top: 8px;

                @include mobile {
                  width: vw(50);
                  margin-top: vw(8);
                }
              }
            }

            &:nth-child(odd) {
              display: flex;
              justify-content: flex-end;

              .item-style {
                flex-direction: row-reverse;
                margin-left: 0;
                margin-right: 7px;

                .item-content {
                  @include flex-style(center, flex-start);

                  .item-text {
                    align-items: flex-start;

                    .item-sub {
                      text-align: left;
                    }
                  }
                }

                .item-line {
                  transform: rotate(180deg);
                }
              }
            }

            &:not(:nth-child(2)) {
              margin-top: -15px;

              @include mobile {
                margin-top: vw(-20);
              }

            }
          }

        }
      }

      .categoryEn {
        max-width: 1200px;

        .category-title {
          @include mobile {
            font-size: vw(21);
            line-height: vw(30);
          }
        }
      }
    }

    .activity-conclusion {
      font-size: 24px;
      line-height: 35px;
      text-align: center;
      margin-top: 50px;

      @include mobile {
        font-size: vw(24);
        line-height: vw(35);
        margin-top: vw(50);
      }
    }

  }
}
</style>