<template>
  <div id="teamwork">
    <!-- 動畫最後做 -->
    <div class="kv">
      <div class="visible-desktop">
        <div class="img-F01" data-aos="fade-up">
          <img src="@/assets/images/teamwork/img-kv1.png" alt="">
        </div>
        <div class="img-F02" data-aos="fade-up" data-aos-delay="500">
          <img src="@/assets/images/teamwork/img-kv2.png" alt="">
        </div>
        <div class="img-F03" data-aos="zoom-in" data-aos-delay="1000">
          <img class="img-fire" src="@/assets/images/teamwork/img-kv3.png" alt="">
        </div>
      </div>
    </div>
    <!-- 前言 -->
    <section id="intro">
      <div class="container w-1280">
        <div class="des">
          <h3 data-aos="fade-up">
            <span class="sub">晶睿地球日</span>
            TEAMWORK
            <span class="style-origin">Makes Tomorrow Easier, Today!</span>
          </h3>
          <h4>
            晶睿通訊 25 週年 × 好食好事基金會 × EARTHDAY.ORG 攜手響應地球日 #OurPowerOurPlanet！<br>
            4/22 限定，雙主題「綠色市集 + 永續對話」，探索永續生活，享受獨家優惠與驚喜！<br>
            延續去年熱烈響應，今年更進一步號召同仁、友商與中和遠東科技園區，共創更大的永續影響力！
          </h4>
        </div>

        <div id="activity">
          <!-- 倒數計時 -->
          <!-- <div id="countdown_dashboard">
            倒數計時
            <div class="dash days_dash">
              <template v-for="(d, i) in formatTwoDigits(days)" :key="'d' + i">
                <span class="digit">{{ d }}</span>
              </template>
              <span class="label">日</span>
            </div>
            <div class="dash hours_dash">
              <template v-for="(d, i) in formatTwoDigits(hours)" :key="'h' + i">
                <span class="digit">{{ d }}</span>
              </template>
              <span class="label">時</span>
            </div>
          </div> -->

          <!-- 兩大主題  -->
          <div class="global block-style01">
            <div class="title title-blue">兩大主題</div>
            <div class="content">
              <div class="directions">
                <div class="directions-item">
                  <div class="img">
                    <img src="@/assets/images/teamwork/activity-img1.svg" alt="">
                  </div>
                  <p class="title">綠色市集</p>
                  <p class="sub">11:00-16:00 @優派 1F 大廳</p>
                  <hr>
                  <span class="des">六大品牌聯手登場，美味現場直送，<br>帶你品嚐每道在地故事！</span>

                  <!-- btn -->
                  <div class="login-btn">
                    <button class="btn-style" type="button">
                      <NuxtLink to="#booths">詳細資訊</NuxtLink>
                    </button>
                  </div>
                </div>
                <div class="directions-item">
                  <div class="img">
                    <img src="@/assets/images/teamwork/activity-img2.svg" alt="">
                  </div>
                  <p class="title">永續對話</p>
                  <p class="sub">12:30-14:00 @優派 5F 公共空間</p>
                  <hr>
                  <span class="des">攜手基金會與六大品牌聊聊綠色轉型，<br>探索永續生活的無限可能！</span>

                  <!-- btn -->
                  <div class="login-btn">
                    <button class="btn-style" type="button">
                      <NuxtLink to="#lectures">詳細資訊</NuxtLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 多重亮點 -->
        <div id="points">
          <h2 data-aos="fade-up">
            多重亮點
            <!-- <p class="sub">{{ $t('25th.activity.headquarters.h2Sub') }}</p> -->
          </h2>
          <div class="block">
            <div class="item" data-aos="fade-up" data-aos-delay="500" v-for="(item, index) in pointsItem" :key="index">
              <div class="img">
                <img :src="getImagePath1(item.img)" alt="" />
              </div>
              <div class="content">
                <p class="title">{{ item.title }}</p>
                <p class="des">{{ item.des }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 精彩活動回顧 -->
    <section id="teamwork-recap">
      <div class="container">
        <div class="w-1280">
          <h2 data-aos="fade-up">
            精彩活動回顧
            <!-- <p class="sub">{{ $t('25th.activity.headquarters.h2Sub') }}</p> -->
          </h2>
          <div class="block">
            <div class="recap-list" v-for="(item, index) in recapItem" :key="index">
              <div class="item">
                <div class="img">
                  <img :src="getImagePath1(item.img)" alt="" />
                </div>
                <div class="content">
                  <p class="title">{{ item.title }}</p>
                  <p class="des">{{ item.des }}</p>
                </div>
                <button class="btn-style" type="button">
                  <NuxtLink :to="item.link" target="_blank">前往查看</NuxtLink>
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- 照片輪播 -->
        <div class="photo" style="position: relative;">
          <ClientOnly>
            <swiper-container ref="containerRefRecap" :loop="true" :init="false">
              <swiper-slide v-for="(item, index) in 15" :key="index">
                <img :src="getImagePath2(`${index + 1}.jpg`)" alt="" />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>

    </section>

    <!-- 綠色市集 -->
    <section id="booths">
      <div class="container w-1280">
        <div class="block">
          <h2 data-aos="fade-up">
            <span>綠色市集</span> │ 探索永續美味與生活
            <p class="sub">11:00-16:00 @優派 1F 大廳</p>
          </h2>
          <p class="slogan">
            限時五小時，六大永續品牌，美味一次嚐遍！<br>
            雙重優惠來襲：<span>獨家折扣 + 限量 $100 消費券</span>，滿額折抵，搶先兌換！
          </p>
          <div class="global block-style01">
            <div class="title title-blue2">永續品牌</div>
            <div class="content">
              <div class="item" v-for="(item, index) in boothsItem" :key="index">
                <NuxtLink :to="item.link" target="_blank">
                  <div class="img">
                    <img :src="getImagePath1(item.img)" alt="" />
                  </div>
                  <div class="hover-text">
                    <p class="title">{{ item.title }}</p>
                    <p class="des">{{ item.des }}</p>
                    <button class="btn-style" type="button">前往查看</button>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 講座 -->
    <section id="lectures">
      <div class="container w-1280">
        <!-- 嘉賓 -->
        <div class="block">
          <h2 data-aos="fade-up">
            <span>永續對話</span> │ 永續品牌心法大揭密
            <p class="sub">12:30-14:00 @優派 5F 公共空間</p>
          </h2>
          <p class="slogan">
            想知道這些品牌如何實現永續轉型嗎？來聽六大品牌與基金會分享成功秘訣和背後故事！<br>
            提早參與，還有<span>早鳥禮品</span>等著你，數量有限，先到先得！
          </p>
          <img class="guests" src="@/assets/images/teamwork/img-lectures1.svg" alt="">
        </div>
        <!-- 六大品牌代表獨家分享 -->
        <div class="block brand">
          <h2 data-aos="fade-up">
            六大品牌代表獨家分享
            <!-- <p class="sub">12:30-14:00 @優派 5F 公共空間</p> -->
          </h2>
          <img class="question" data-aos="fade-up-right" data-aos-delay="500"
            src="@/assets/images/teamwork/img-lectures2.svg" alt="">
          <img class="brand-team" data-aos="fade-up-left" data-aos-delay="1000"
            src="@/assets/images/teamwork/img-lectures3.svg" alt="">

        </div>
      </div>

    </section>

    <!-- 合作夥伴 -->
    <section id="partner">
      <div class="container w-1280">
        <div class="block">
          <h2 data-aos="fade-up">
            合作夥伴：好食好事基金會
            <!-- <p class="sub">12:30-14:00 @優派 5F 公共空間</p> -->
          </h2>
          <div class="content">
            <NuxtLink to="https://www.hao-shi.org/tw" target="_blank" class="logo">
              <img src="@/assets/images/teamwork/logo-partner.svg" alt="">
            </NuxtLink>
            <!-- <img class="logo" src="@/assets/images/teamwork/logo-partner.svg" alt=""> -->
            <div class="text">
              <p class="title">成就綠色未來的好夥伴！</p>
              <p class="des">好食好事基金會創立於 2017 年，2018 年起舉辦「好食好事加速器 Demo
                Day」，決心打造全球韌性供應鏈；更積極挹注資金及人力，投入「好食好事食農創生計畫」，持續發掘台灣食農產業的美好與挑戰。透過人脈資源連結、現地輔導、客製化課程，在地陪跑，期許達到「處處有好食」的終極目標。
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- <section class="ended">
      <h2>
        <p class="sub">4/22 我們不見不散！</p>
      </h2>
    </section> -->
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const { t, locale, setLocale } = useI18n();
const email = ref('');
const employeeId = ref('');
const errorMsg = ref(false);
const authStore = useAuthStore();
const router = useRouter();


const targetDate = new Date('2025-04-22T11:00:00')
const weeks = ref(0)
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer = null

const updateCountdown = () => {
  const now = new Date()
  let diff = Math.floor((targetDate - now) / 1000)
  if (diff < 0) diff = 0

  weeks.value = Math.floor(diff / (60 * 60 * 24 * 7))
  days.value = Math.floor((diff / (60 * 60 * 24)) % 7)
  hours.value = Math.floor((diff / (60 * 60)) % 24)
  minutes.value = Math.floor((diff / 60) % 60)
  seconds.value = Math.floor(diff % 60)
}

onMounted(() => {
  AOS.init({
    anchorPlacement: 'top-center',
  });

  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
});

onUnmounted(() => {
  clearInterval(timer)
})


// 將數字格式化為兩位數並回傳陣列 ['0', '9']
const formatTwoDigits = (num) => {
  return String(num).padStart(2, '0').split('')
}

/* 動態圖片路徑 */
// pointes
const glob1 = import.meta.glob('@/assets/images/teamwork/*', { eager: true })
function getImagePath1(imageName) {
  const path = `/assets/images/teamwork/${imageName}`;
  return glob1[path]?.default || '';
}

// 照片
const glob2 = import.meta.glob('@/assets/images/teamwork/photos/*', { eager: true })

function getImagePath2(imageName) {
  const path = `/assets/images/teamwork/photos/${imageName}`;
  return glob2[path]?.default || '';

}

const pointsItem = reactive([
  {
    img: "icon-points1.svg",
    title: "市集獻優惠",
    des: "限量 $100 消費券，搶先享",
  },
  {
    img: "icon-points2.svg",
    title: "永續講座早鳥禮",
    des: "提早參與講座，拿好禮",
  },
  {
    img: "icon-points3.svg",
    title: "互動拿好禮",
    des: "LinkedIn 好禮互動送",
  }
]);
const recapItem = reactive([
  {
    img: "icon-recap1.svg",
    title: "活動花絮",
    des: "探索更多精彩照片",
    link: "https://photos.app.goo.gl/KNVBKGX3ZmGSApnt9"
  },
  {
    img: "icon-recap2.svg",
    title: "媒體報導",
    des: "一探完整活動內容",
    link: "https://www.bnext.com.tw/article/83113/vivotek_earthday_2025"
  },
  {
    img: "icon-recap3.svg",
    title: "LinkedIn 貼文",
    des: "一起互動，回味當日精彩",
    link: "https://www.linkedin.com/posts/vivotekglobal_vivotek-earth-day-together-for-ourpowerourplanet-activity-7321359082894888962-dAl3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKipsoBEa4Z_jCofA_1NGGSpZrQ5mg83cQ"
  }
]);

const boothsItem = reactive([
  {
    img: "img-logo1.png",
    des: "運用科技保存國宴手藝，將傳統與創新結合，打造低碳永續飲食。",
    link: "https://www.smartcook.com.tw/"
  },
  {
    img: "img-logo2.png",
    des: "牧場二代返鄉創新轉型，打造智慧有機牧草工廠，從源頭到餐桌實踐永續理念。",
    link: "https://www.immugoat.com/"
  },
  {
    img: "img-logo3.png",
    des: "結合彰化好米與青農合作，親手製作爆米香，推動綠色鄉村復興。",
    link: "https://www.a-wei7145.com/"
  },
  {
    img: "img-logo4.png",
    des: "百年傳承技藝，選用有機茶葉，為地球奉上一杯不妥協的永續好茶。",
    link: "https://mycftea.com.tw/"
  },
  {
    img: "img-logo5.png",
    des: "友善飼養，產地直送，讓你品味最健康、最永續的國產羊肉。",
    link: "https://www.ohmygoat.com.tw/"
  },
  {
    img: "img-logo6.png",
    des: "古法冷壓，保留每一滴營養，傳承家傳美味，堅持永續生產。",
    link: "https://www.dailyoil.com.tw/"
  }
]);


definePageMeta({
  middleware: 'auth',
})

const containerRefRecap = ref(null);
const swiper = useSwiper(containerRefRecap, {
  slidesPerView: 2,
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 24,
    }
  },
});

</script>
<style lang="scss">
$teamworkImgUrl: '@/assets/images/teamwork/';

#teamwork {
  .global {
    width: 100%;
    overflow: hidden;

    .content {
      // background: url($teamworkImgUrl + 'bg-photo.png') no-repeat bottom/cover;
      padding: 40px 40px;
      @include flex-center;
      flex-direction: column;
      gap: 24px;
      position: relative;
      border-radius: 16px;

      @include mobile {
        padding: vw(30) vw(25);
        gap: vw(24);
        border-radius: vw(16);
      }

    }

  }

  .kv {
    position: relative;
    width: 100vw;
    height: vwXL(1080);
    background: url($teamworkImgUrl + 'bg-kv.png') no-repeat top/cover #e0e0ec;

    @include mobile {
      width: 100%;
      height: vw(600);
      background: url($teamworkImgUrl + 'kv_m.png') no-repeat top/cover #e0e0ec;

    }

    .icon {
      position: absolute;
      top: 0;
      z-index: 1;
    }

    .img {


      &-fire {
        transform: rotate(0);
        animation: fire-act 8s linear infinite;

        @keyframes fire-act {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

      }

      &-F01 {
        position: absolute;
        top: vwXL(180);
        left: 0;
        right: 0;
        margin: 0 auto;
        width: vwXL(400);
      }

      &-F02 {
        position: absolute;
        bottom: vwXL(230);
        left: 0;
        right: 0;
        margin: 0 auto;
        // right: vwXL(535);
        width: vwXL(1250);
      }

      &-F03 {
        position: absolute;
        top: vwXL(40);
        right: vwXL(330);
        width: vwXL(128);

      }

      &-F04 {
        position: absolute;
        top: vwXL(30);
        left: vwXL(592);
        width: vwXL(163);
      }

    }


  }

  #intro {
    background: url($teamworkImgUrl + 'bg-intro.jpg') no-repeat center center/cover #e6f6eb;

    .des {
      @include flex-center;
      flex-direction: column;
      gap: 24px;

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

    #countdown_dashboard {
      @include flex-style(center, center);
      font-size: 33px;
      line-height: 40px;
      gap: 16px;
      color: $primaryColorDarkBlue;
      font-weight: 600;
      margin-bottom: 50px;

      @include mobile {
        font-size: vw(33);
        line-height: vw(40);
        gap: vw(16);
        margin-bottom: vw(50);
      }

      .dash {
        @include flex-style(center, center);
        gap: 8px;

        @include mobile {
          gap: vw(8);
        }

        .digit {
          border-radius: 8px;
          background: $primaryColorDarkBlue;
          color: #FFF;
          padding: 5px 8px;

          @include mobile {
            border-radius: vw(8);
            padding: vw(8);

          }
        }
      }
    }
  }

  #activity {
    .directions {
      width: 100%;
      @include flex-style(space-between, stretch);
      gap: 24px;

      @include mobile {
        gap: vw(24);
        flex-direction: column;
      }

      .directions-item {
        max-width: 580px;
        width: 100%;
        @include flex-style(space-between, center);
        flex-direction: column;
        gap: 20px;
        border: 1px solid #cccccc;
        border-radius: 24px;
        padding: 36px;

        @include mobile {
          max-width: none;
          gap: vw(24);
          border-radius: vw(24);
          padding: vw(36);
        }

        .title {
          font-size: 32px;
          line-height: 38px;
          font-weight: 600;
          text-align: center;
          color: $primaryColorBlueLogo;

          @include mobile {
            font-size: vw(32);
            line-height: vw(38);
          }
        }

        .sub {
          font-size: 22px;
          font-weight: 500;

        }

        .des {
          font-size: 22px;
          line-height: 30px;
          color: $secondaryColorDarkGray;

          @include mobile {
            font-size: vw(30);
            line-height: vw(40);
            text-align: center;
          }

          a {
            color: $primaryColorBlueLogo;

            .icon {
              width: 16px;

              @include mobile {
                width: vw(16);
              }
            }
          }
        }

        .img {
          @include flex-style(center, center);
          max-width: 506px;
          width: 100%;

          @include mobile {
            max-width: none;
          }

          img {
            width: 100%;
          }
        }
      }
    }

    .icon {
      &-style {
        position: absolute;

        @include tablet {
          display: none;
        }
      }

      &1 {
        max-width: 151px;
        width: 100%;
        left: 15px;
        top: 220px;


      }

      &2 {
        max-width: 119px;
        width: 100%;
        top: 180px;
        right: 0;
      }
    }
  }

  #points {
    width: 100%;

    .block {
      @include flex-style(space-between, stretch);
      @include margin-auto;
      gap: 24px;

      @include mobile {
        flex-direction: column;
      }

      .item {
        width: 100%;
        background: #fff;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0px 2px 12px rgba($color: #000000, $alpha: 0.25);
        @include flex-style(flex-start, center);
        gap: 11px;
        min-height: 150px;

        @include mobile {
          border-radius: vw(12);
          padding: vw(24);
          box-shadow: 0px vw(2) vw(12) rgba($color: #000000, $alpha: 0.25);
          gap: vw(12);
          min-height: auto;
          @include flex-style(center, center);
          flex-direction: column;
        }

        .img {
          max-width: 65px;
          width: 100%;

          @include mobile {
            max-width: vw(80);
          }
        }

        .content {
          @include flex-style(center, flex-start);
          flex-direction: column;
          gap: 4px;

          @include mobile {
            gap: vw(4);
            @include flex-style(center, center);
          }

          .title {
            font-size: 28px;
            line-height: 30px;
            font-weight: 600;

            @include mobile {
              font-size: vw(32);
              line-height: vw(38);
            }
          }

          .des {
            font-size: 24px;
            line-height: 30px;
            font-weight: 500;
            color: $primaryColorDarkBlue;

            @include mobile {
              font-size: vw(28);
              line-height: vw(35);
            }
          }
        }
      }
    }
  }

  #teamwork-recap {
    background: #D0E8D8;

    .block {
      @include flex-style(center, center);

      @include mobile {
        // flex-direction: column;
        // gap: vw(48)
      }

      .recap-list {
        @include margin-auto;
        @include flex-style(center, center);

        &:not(:last-child) {
          &:after {
            content: '';
            display: block;
            height: 80px;
            width: 2px;
            background: rgba($color: #000000, $alpha: 0.25);

            @include mobile {
              height: vw(80);
              width: vw(2);
            }
          }
        }

      }

      .item {
        @include flex-center;
        flex-direction: column;
        max-width: 388px;
        @include margin-auto;

        @include mobile {
          max-width: none;
        }
      }

      .img {
        max-width: 64px;
        margin-bottom: 12px;

        @include mobile {
          max-width: vw(80);
          margin-bottom: vw(12);
        }
      }

      .content {
        @include flex-center;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 24px;

        @include mobile {
          gap: vw(4);
          margin-bottom: vw(12);
        }

        .title {
          font-size: 32px;
          line-height: 38px;
          font-weight: 600;

          @include mobile {
            font-size: vw(32);
            line-height: vw(38);
          }
        }

        .des {
          font-size: 20px;
          line-height: 24px;
          color: rgba($color: #000000, $alpha: 0.6);

          @include mobile {
            font-size: vw(20);
            line-height: vw(24);
          }
        }
      }

      // .btn-style {
      //   background: $primaryColorBlueLogo;
      // }
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
          max-width: auto;
        }
      }
    }
  }

  .slogan {
    font-size: 28px;
    line-height: 35px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 50px;

    @include mobile {
      font-size: vw(28);
      line-height: vw(35);
      margin-bottom: vw(50);
    }

    span {
      color: $primaryColorBlueLogo;
    }
  }

  #booths {
    background: url($teamworkImgUrl + 'bg-booths.jpg') no-repeat bottom center/contain #E6F6EB;

    @include mobile {
      background: url($teamworkImgUrl + 'bg-booths.jpg') no-repeat bottom center/cover #E6F6EB;
    }

    h2 {
      span {
        display: contents;
        color: $primaryColorBlueLogo;
      }
    }

    .block {
      width: 100%;

      .global .content {
        @include flex-style(center, center);
        gap: 0;
        flex-wrap: wrap;
        flex-direction: row;
      }

      .item {
        position: relative;
        overflow: hidden;

        @include mobile {
          flex: 1 1 50%;
        }

        .img {
          border: 1px solid $secondaryColorGray;
        }

        .hover-text {
          position: absolute;
          background: rgba($color: #000000, $alpha: 0.7);
          top: 0;
          bottom: 0;
          @include flex-center;
          flex-direction: column;
          padding: 91px 31px;

          color: #fff;
          text-align: center;
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
          opacity: 0;
          transform: translateX(-100%);
          transition: all 0.35s ease-in-out;

          @include mobile {
            display: none;
          }
        }

        &:hover {
          .hover-text {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }

    }
  }

  #lectures {
    background: url($teamworkImgUrl + 'bg-lectures.png') no-repeat top/cover #E4F7D6;

    h2 {
      span {
        display: contents;
        color: $primaryColorBlueLogo;
      }
    }

    .guests {
      max-width: 656px;
      @include margin-auto;

      @include mobile {
        max-width: auto;
      }
    }

    .brand {
      @include flex-center;
      flex-direction: column;
      gap: 24px;

      @include mobile {
        gap: vw(24);
      }

      h2 {
        margin-bottom: 0;
      }

      .question {
        max-width: 840px;
        @include margin-auto;

        @include mobile {
          max-width: auto;
        }
      }

      .brand-team {
        max-width: 960px;
        @include margin-auto;

        @include mobile {
          max-width: auto;
        }
      }
    }

  }

  #partner {
    background: url($teamworkImgUrl + 'bg-partner.png') no-repeat center/cover #E4F7D6;

    h2 {
      color: #fff;
    }

    .content {
      background: #fff;
      padding: 40px;
      border-radius: 24px;
      gap: 24px;
      @include flex-center;

      @include mobile {
        padding: vw(40);
        border-radius: vw(24);
        gap: vw(24);
        flex-direction: column;
      }

      .logo {
        max-width: 195px;
        @include margin-auto;
        transition: all 0.5s;

        @include mobile {
          max-width: vw(195);
        }
        &:hover{
          transform: scale(0.95);
        }
      }

      .text {
        @include flex-style(center, flex-start);
        flex-direction: column;
        gap: 12px;
        text-align: justify;

        @include mobile {
          gap: vw(12);
          @include flex-style(center, center);
        }

        .title {
          font-size: 32px;
          line-height: 38px;
          font-weight: 600;

          @include mobile {
            font-size: vw(32);
            line-height: vw(38);
          }
        }

        .des {
          font-size: 20px;
          line-height: 30px;

          @include mobile {
            font-size: vw(20);
            line-height: vw(30);
          }
        }
      }
    }

  }

}
</style>