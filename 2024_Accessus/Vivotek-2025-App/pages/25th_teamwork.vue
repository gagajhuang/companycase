<template>
  <div id="annual25">
    <!-- 動畫最後做 -->
    <div class="kv">
      <div class="visible-desktop">

        <div class="img-F01" data-aos="zoom-in" data-aos-delay="1500">
          <img class="img-fire" src="@/assets/images/25th/img-fire1.png" alt="">
        </div>
        <div class="img-F02" data-aos="zoom-in" data-aos-delay="1000">
          <img class="img-fire" src="@/assets/images/25th/img-fire2.png" alt="">
        </div>
        <div class="img-F03" data-aos="zoom-in" data-aos-delay="500">
          <img class="img-fire" src="@/assets/images/25th/img-fire3.png" alt="">
        </div>
        <div class="img-F04" data-aos="zoom-in">
          <img class="img-fire" src="@/assets/images/25th/img-fire4.png" alt="">
        </div>
      </div>
    </div>
    <!-- 前言 -->
    <section id="intro">
      <div class="container">
        <div class="des">
          <h3 data-aos="fade-up">
            <span class="sub">{{ $t('25th.intro.h3Sub') }}</span>
            TEAMWORK
            <span class="style-origin">Makes Tomorrow Easier, Today!</span>
          </h3>
          <h4>
            {{ $t('25th.intro.h4') }}
          </h4>
          <!-- btn -->
          <!-- <nuxt-link class="link" to="#activity">
            {{ $t('25th.intro.btn') }}
            <fa icon="angles-down" class="icon" />
          </nuxt-link> -->
        </div>

        <!-- 精采活動花絮 -->
        <div class="event">
          <h2 data-aos="fade-up">
            {{ $t('25th.event.h2') }}
            <p class="sub">
              {{ $t('25th.event.h2Sub') }}
            </p>
          </h2>
          <!-- 照片輪播 -->
          <div class="photo" style="position: relative;">
            <ClientOnly>
              <swiper-container ref="containerEvent" :loop="true" :init="false">
                <swiper-slide v-for="(item, index) in photosItem" :key="index">
                  <img class="photo-img" :src="getImagePath2(`${index + 1}.png`)" alt="" />
                  <div class="photos-content">
                    <div class="photos-item">
                      <img class="item-img" src="@/assets/images/25th/photos/icon1.png" alt="">

                      <div class="item-text">{{ item.des1 }}</div>
                    </div>
                    <div class="photos-item item-right">
                      <img class="item-img" src="@/assets/images/25th/photos/icon2.png" alt="">
                      <div class="item-text">{{ item.des2 }}</div>
                    </div>
                    <div class="photos-item">
                      <img class="item-img" src="@/assets/images/25th/photos/icon3.png" alt="">
                      <div class="item-text">{{ item.des3 }}</div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper-container>
              <!-- 分頁 -->
              <div class="swiper-pagination"></div>

              <!-- 前後按鈕 -->
              <button class="swiper-button-prev" aria-label="Previous"></button>
              <button class="swiper-button-next" aria-label="Next"></button>
            </ClientOnly>
          </div>
          <button class="btn-style" type="button">
            <a href="https://photos.app.goo.gl/eCmLJ7eVPxMUYCEg6" target="_blank">{{ $t('25th.event.btn') }}</a>
          </button>
        </div>

      </div>
    </section>

    <!-- 活動說明區 -->
    <section id="activity">
      <div class="container w-1280">
        <!-- Step -->
        <div class="step">
          <h2 data-aos="fade-up">{{ $t('25th.activity.step.title') }}</h2>
          <div class="step-content">
            <template v-for="(item, index) in stepItem" :key="index">
              <div class="step-item">
                <div class="item-content">
                  <p class="step-num">{{ item.step }}</p>
                  <div class="item-des">
                    <div class="img">
                      <img :src="getImagePath1(item.img)" alt="" />
                    </div>
                    <p class="title" :class="{ titleEn: locale === 'en' }">{{ item.title }}</p>
                    <hr />
                    <div>
                      <p class="text">{{ item.des }}</p>
                      <p class="text-s">{{ item.des2 }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="index < stepItem.length - 1" class="step-arrow"></div>
            </template>
          </div>
        </div>
        <!-- 全球串聯 -->
        <div class="global">
          <h2 data-aos="fade-up">
            {{ $t('25th.activity.global.h2') }}
            <p class="sub">{{ $t('25th.activity.global.h2Sub') }}</p>
          </h2>
          <div class="global-photo">
            <h2 data-aos="fade-up">{{ $t('25th.activity.global.photoH2') }}</h2>
            <div class="photo-content">
              <p class="text">{{ $t('25th.activity.global.content.text') }}</p>
              <div class="date" :class="{ dateEn: locale === 'en' }">
                <span>{{ $t('25th.activity.global.content.date1') }}</span>
                <span>{{ $t('25th.activity.global.content.date2') }}</span>
              </div>
              <div class="directions">
                <div class="directions-item">
                  <p class="title">{{ $t('25th.activity.global.directions.item1.title1') }}<span> {{
                    $t('25th.activity.global.directions.item1.title2') }} </span>{{
                        $t('25th.activity.global.directions.item1.title3') }}</p>
                  <hr>
                  <span class="des">{{ $t('25th.activity.global.directions.item1.des') }}</span>
                  <div class="img">
                    <img src="@/assets/images/25th/img-item1.png" alt="">
                  </div>
                  <!-- btn -->
                  <div class="login-btn">
                    <button class="btn-style disabled" type="button">
                      <a href="https://deltao365-my.sharepoint.com/personal/angel_hsiao_deltaww_com/_layouts/15/onedrive.aspx?csf=1&web=1&e=4ta0rd&CID=a0c4b4ef-2f9c-447b-b793-f180135747b4&id=%2fpersonal%2fangel_hsiao_deltaww_com%2fDocuments%2fGlobal+Marketing+-+Share%2f25th+Anniversary&FolderCTID=0x0120008F5E22B74A596449BE2705AA8DEA18A1&view=0"
                        target="_blank">{{ $t('25th.activity.global.directions.end.btn') }}</a>
                    </button>
                  </div>
                </div>
                <div class="directions-item">
                  <p class="title">{{ $t('25th.activity.global.directions.item2.title') }}</p>
                  <hr>
                  <span class="des">{{ $t('25th.activity.global.directions.item2.des') }}
                    <a href="https://drive.google.com/drive/folders/19i2d7MQFI38oatpOl-X8mNmZ9WlLuVuF?usp=drive_link"
                      target="_blank">
                      {{ $t('25th.activity.global.directions.item2.link') }}
                      <fa icon="up-right-from-square" class="icon" />
                    </a></span>
                  <div class="img">
                    <img src="@/assets/images/25th/img-item2.png" alt="">
                  </div>
                  <!-- btn -->
                  <div class="login-btn">
                    <button class="btn-style disabled" type="button">
                      <a href="https://app2.linein.cc/myphoto?activity=2412_pgrzudrk&page=landing&weblogin=1&openExternalBrowser=1"
                        target="_blank">{{ $t('25th.activity.global.directions.end.btn') }}</a>
                    </button>
                  </div>
                </div>
              </div>
              <!-- icon -->
              <div class="icon-style icon1"><img src="../assets/images/25th/icon-photo01.png" alt=""></div>
              <div class="icon-style icon2"><img src="../assets/images/25th/icon-photo02.png" alt=""></div>
            </div>
          </div>
        </div>
        <!-- 總部一日限定 -->
        <div class="headquarters">
          <h2 data-aos="fade-up">
            {{ $t('25th.activity.headquarters.h2') }}
            <p class="sub">{{ $t('25th.activity.headquarters.h2Sub') }}</p>
          </h2>
          <div class="headquarters-content">
            <div class="date">
              <span>{{ $t('25th.activity.headquarters.date') }}</span>
              <span>{{ $t('25th.activity.headquarters.location') }}</span>
              <span v-if="locale === 'en'">{{ $t('25th.activity.headquarters.more') }}</span>
            </div>
            <div class="list">
              <ul>
                <li>{{ $t('25th.activity.headquarters.list1') }}</li>
                <li>{{ $t('25th.activity.headquarters.list2') }}</li>
                <li v-if="locale === 'en'">{{ $t('25th.activity.headquarters.list3') }}</li>
              </ul>
            </div>
            <p class="remark">{{ $t('25th.activity.headquarters.remark') }}<a
                href="mailto:debby.liao@vivotek.com">debby.liao@vivotek.com</a></p>
            <p class="text" v-if="locale === 'zh'">{{ $t('25th.activity.headquarters.text') }}</p>

          </div>
          <!-- icon -->
          <div class="icon-style icon3"><img src="../assets/images/25th/icon-photo03.png" alt=""></div>
        </div>
      </div>
    </section>

    <!-- 上傳區 -->
    <section id="upload-25th" style="display: none;">
      <div class="container w-1280">
        <div class="upload-block">
          <div class="upload-title">
            {{ $t('25th.upload.title') }}
            <p class="sub">{{ $t('25th.upload.date') }}</p>
          </div>
          <div class="upload-content">
            <div class="upload-left">
              <img src="../assets/images/25th/img-demo.png" alt="">
              <p>{{ $t('25th.upload.demo') }}</p>
            </div>
            <div class="upload-right">
              <div class="upload-style upload-photo">
                <p class="title">{{ $t('25th.upload.photo.title') }}</p>
                <!-- 照片上傳 -->
                <div class="photo-upload">

                  <input type="file" id="upload-photo-25th" name="icon-upload.png" accept=".jpg, .jpeg, .png"
                    @change="handleFileUpload" />
                  <label for="upload-photo-25th" class="upload-file">
                    <img v-if="!previewUrl" class="icon-upload" src="@/assets/images/25th/icon-cloud.png" alt="上傳" />
                    <p v-if="!previewUrl">{{ $t('25th.upload.photo.label') }}</p>
                  </label>

                  <!-- 圖片預覽與刪除 -->
                  <div class="preview" v-if="previewUrl">
                    <img :src="previewUrl" alt="預覽圖片" />
                    <div class="upload-del" @click="clearImage">
                      <img id="btn-del" src="@/assets/images/25th/icon-del.png" alt="刪除" />
                    </div>
                  </div>

                </div>
              </div>
              <div class="upload-style upload-textarea">
                <p class="title">{{ $t('25th.upload.textarea.title') }}</p>
                <p class="sub">{{ $t('25th.upload.textarea.sub') }}</p>
                <textarea name="uploadtext" minlength="20" class="input-text"
                  :placeholder="$t('25th.upload.textarea.placeholder')" v-model="upload.content"></textarea>
              </div>
            </div>
          </div>
          <!-- btn -->
          <div class="submit-btn">
            <button class="btn-style" type="button" @click="submitEvent()">
              {{ $t('25th.upload.btn') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Notion -->
    <section id="notion">
      <div class="container w-1280">
        <div class="notion-content">
          <p>{{ $t('25th.notion.title') }}</p>
          <ul>
            <li>{{ $t('25th.notion.list1') }}</li>
            <li>{{ $t('25th.notion.list2') }}</li>
            <li>{{ $t('25th.notion.list3') }}</li>
            <li>{{ $t('25th.notion.list4-1') }}<a href="mailto:brandvivotek@accessus.biz"> {{ $t('25th.notion.list4-2')
                }}</a></li>
          </ul>
        </div>

      </div>
    </section>
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

const previewUrl = ref(null); // 存儲預覽圖片的 URL

const file = ref(null); // 存儲上傳的文件

onMounted(() => {
  AOS.init({
    anchorPlacement: 'top-bottom',
  });

  readUploadedContent();
});

/* 動態圖片路徑 */
// Step
const glob1 = import.meta.glob('@/assets/images/25th/*', { eager: true })
// console.log(glob);
function getImagePath1(imageName) {
  const path = `/assets/images/25th/${imageName}`;
  return glob1[path]?.default || '';
}

// event
const glob2 = import.meta.glob('@/assets/images/25th/photos/*', { eager: true })
function getImagePath2(imageName) {
  const path = `/assets/images/25th/photos/${imageName}`;
  return glob2[path]?.default || '';
}

const photosItem = reactive([
  {
    des1: "Here's to 25 More Years!",
    des2: '感謝 VIVOTEK 讓監控變得更簡單、幫助世界上有需要的人和環境，把我們的生活變得更加安全❤️',
    des3: 'VIVOTEK 25 歲生日快樂！25年持續創新與卓越，\n為世界帶來更安全、智慧的未來。'
  },
  {
    des1: "VIVOTEK 25歲生日快樂！一天比一天更進步！\n'MAKE TOMORROW EASIER, TODAY!'",
    des2: "VIVOTEK 生日快樂！願公司接下來繼續創新卓越，與時俱進，開創更多輝煌的篇章！",
    des3: "'MAKE TOMORROW EASIER, TODAY!' inspires us to create a better future through innovation. Happy 25th!"
  },
  {
    des1: "加油！朝百年企業前進！",
    des2: "Happy Birthday VIVOTEK 有你有我！\n'MAKE TOMORROW EASIER, TODAY!'",
    des3: "'MAKE TOMORROW EASIER, TODAY!' means constantly improving.I love being in an environment that values that!"
  },
  {
    des1: "Building a legacy takes time and effort. I'm proud to contribute to making the future a little easier!",
    des2: "Happy 25th! I want to wish VIVOTEK unbounded success and bountiful good fortune for the next 25 years and more.",
    des3: "It's more than a slogan—it's a mindset. We're solving problems today so the future is brighter for everyone!"
  },
  {
    des1: "A quarter of a century, the future is even more exciting! Cheers to VIVOTEK!",
    des2: "VIVOTEK 25歲生日快樂！\n'MAKE TOMORROW EASIER, TODAY!'",
    des3: "The past 25 years have been about growth, learning, and progress. I'm excited to see what's next!"
  }
]);

const stepItem = reactive([
  {
    step: "Step 1",
    img: "img-step1.png",
    title: t("25th.activity.step.item1.title"),
    des: t("25th.activity.step.item1.des"),
  },
  {
    step: "Step 2",
    img: "img-step2.png",
    title: t("25th.activity.step.item2.title"),
    des: t("25th.activity.step.item2.des"),
  },
  {
    step: "Step 3",
    img: "img-step3.png",
    title: t("25th.activity.step.item3.title"),
    des: t("25th.activity.step.item3.des"),
  },
]);


const upload = reactive({
  file_upload: null,
  content: "",
});

// 處理文件上傳
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    previewUrl.value = URL.createObjectURL(file); // 生成預覽圖片的 URL
  }
  upload.file_upload = event.target.files[0];
};
// 清除圖片
const clearImage = () => {
  previewUrl.value = null;
  upload.file_upload = null;
  const fileInput = document.getElementById("upload-photo-25th");
  if (fileInput) fileInput.value = ""; // 清空文件輸入
};

const readUploadedContent = async () => {
  const res = await $fetch(`/api/teamwork`);

  if (res.success) {
    upload.content = res.data.content;
    previewUrl.value = res.data.url;
  }
}

const submitEvent = async (event) => {
  if (!previewUrl.value && !upload.file_upload) {
    alert("請上傳圖片");
    return;
  }
  else if (upload.file_upload && !upload.file_upload.type.includes('image')) {
    alert("請上傳圖片格式");
    return;
  }
  else if (!upload.content) {
    alert("請輸入文字");
    return;
  }

  // 進一步處理提交邏輯  
  const form = new FormData();
  Object.keys(upload).forEach((key) => {
    if (upload[key]) {
      form.append(key, upload[key]);
    }
  });
  const res = await $fetch(`/api/teamwork/upload`, {
    method: 'POST',
    body: form
  });

  if (res.success) {
    alert("上傳成功");
    readUploadedContent();
  } else {
    alert("上傳失敗");
  }
};



definePageMeta({
  middleware: 'auth',
})

// Swiper
const containerEvent = ref(null);
const swiper = useSwiper(containerEvent, {
  slidesPerView: 1,
  navigation: true,
  pagination: true,
  // spaceBetween: 8,
  loop: true,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 3000,
  },
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
</script>

<style lang="scss">
$th25ImgUrl: '@/assets/images/25th/';

#annual25 {
  .kv {
    position: relative;
    width: 100vw;
    height: vwXL(1080);
    background: url($th25ImgUrl + 'bg-kv.jpg') no-repeat top/cover #e0e0ec;

    @include mobile {
      width: 100%;
      height: vw(600);
      background: url($th25ImgUrl + 'kv_m.jpg') no-repeat top/cover #e0e0ec;

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
        bottom: vwXL(12);
        right: vwXL(513);
        width: vwXL(129);
      }

      &-F02 {
        position: absolute;
        top: vwXL(62);
        right: vwXL(535);
        width: vwXL(88);
      }

      &-F03 {
        position: absolute;
        top: vwXL(160);
        left: vwXL(725);
        width: vwXL(104);

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
    background: url($th25ImgUrl + 'bg-intro.jpg') no-repeat center 83%/cover #e0e0ec;

    .des{
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

    .link {
      font-size: 26px;
      font-weight: 600;
      color: $primaryColorDarkBlue ;
      @include flex-center;
      flex-direction: column;
      transform: translateY(0);
      animation: link-act 1s infinite;

      @keyframes link-act {
        0% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(15%);
        }

        100% {
          transform: translateY(0);
        }
      }

      @include mobile {
        font-size: vw(26);
      }

      .icon {
        width: 16px;

        @include mobile {
          width: vw(16);
        }
      }
    }

    .event {
      max-width: 1000px;
      @include margin-auto;
      @include flex-center;
      flex-direction: column;
      gap: 40px;

      @include mobile {
        gap: vw(40);
      }

      .photo {
        width: 100%;
        border-radius: 24px;
        background: #fff;
        padding: 60px 40px 40px 40px;

        @include mobile {
          border-radius: vw(24);
          padding: vw(40) vw(40);
        }

        swiper-container {
          max-width: 800px;
          @include margin-auto;
          margin-bottom: 36px;

          @include mobile {
            margin-bottom: 0
          }
        }

        swiper-slide {
          .photo-img {
            border-radius: 24px;

            @include mobile {
              border-radius: vw(24);
            }
          }

          .photos-content {
            margin-top: 36px;
            @include flex-style(center, stretch);
            flex-direction: column;
            gap: 24px;

            @include mobile {
              margin-top: vw(36);
              gap: vw(24);
              padding-bottom: vw(24);
            }

            .photos-item {
              @include flex-style(flex-start, flex-start);
              gap: 24px;

              @include mobile {
                gap: vw(24);
              }

              .item-img {
                max-width: 103px;
                width: 100%;

                @include mobile {
                  max-width: none;
                  width: vw(100);
                }
              }

              .item-text {
                background: #DCDDDD;
                padding: 15px 50px;
                border-radius: 50px;
                font-size: 20px;
                line-height: 28px;
                position: relative;
                white-space: pre-line;
                max-width: 650px;

                @include mobile {
                  padding: vw(15) vw(50);
                  border-radius: vw(50);
                  font-size: vw(20);
                  line-height: vw(28);
                  white-space: normal;
                }

                &::after {
                  content: '';
                  display: block;
                  width: 52px;
                  height: 47px;
                  background: url($th25ImgUrl + '/photos/icon-arrow.png') no-repeat center/contain;
                  position: absolute;
                  left: 0;
                  bottom: -13px;
                  z-index: -1;

                  @include mobile {
                    width: vw(52);
                    height: vw(47);
                    bottom: vw(-13);
                  }
                }
              }

              &:nth-child(3) {
                @include mobile {
                  display: none;
                }
              }
            }

            .item-right {
              flex-direction: row-reverse;

              .item-text {
                &::after {
                  right: 0;
                  left: auto;
                  transform: rotateY(180deg);
                }
              }
            }
          }
        }

        /* 前後按鈕樣式 */
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: url($th25ImgUrl + '/photos/icon-arrow2.svg') no-repeat center/contain;
          width: 40px;
          height: 40px;
          cursor: pointer;

          @include mobile {
            width: vw(25);
            height: vw(25);
          }
        }

        .swiper-button-prev {
          left: 10px;
          transform: rotate(180deg);

          @include mobile {
            left: vw(5);
          }
        }

        .swiper-button-next {
          right: 10px;

          @include mobile {
            right: vw(5);
          }
        }

        /* 分頁樣式 */
        .swiper-pagination {
          width: 100%;
          text-align: center;
        }

        .swiper-pagination-bullet {
          width: 15px;
          height: 15px;
          background: #D9D9D9;
          border-radius: 50%;
          margin: 0 6px;
          display: inline-block;
          cursor: pointer;

          @include mobile {
            width: vw(15);
            height: vw(15);
            margin: 0 vw(6);
          }
        }

        .swiper-pagination-bullet-active {
          background: $primaryColorDarkBlue;
        }
      }

    }

  }

  #activity {
    background: url($th25ImgUrl + 'bg-activity.jpg') no-repeat bottom/cover;

    %date-style {
      @include flex-style(center, center);
      gap: 20px;

      @include mobile {
        @include flex-style(center, flex-start);
        flex-direction: column;
        gap: vw(20);
        width: 100%;
      }

      span {
        font-size: 25px;
        text-align: center;
        @include flex-style(center, center);
        gap: 8px;
        font-weight: 500;

        @include mobile {
          font-size: vw(25);
          gap: vw(8);
        }

        &:before {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          background: url($th25ImgUrl + 'icon-arrow3.svg') no-repeat center/cover;

          @include mobile {
            width: vw(20);
            height: vw(20);
          }
        }
      }
    }

    %text {
      color: $color25YearPink;
      font-weight: 600;
      font-size: 27px;
      line-height: 32px;
      text-align: center;

      @include mobile {
        font-size: vw(27);
        line-height: vw(32);
      }
    }

    .global {
      width: 100%;
      overflow: hidden;

      .photo-content {
        background: url($th25ImgUrl + 'bg-photo.png') no-repeat bottom/cover;
        padding: 153px 40px;
        @include flex-center;
        flex-direction: column;
        gap: 24px;
        position: relative;
        border-radius: 16px;

        @include mobile {
          padding: vw(130) vw(25);
          gap: vw(24);
          background: url($th25ImgUrl + 'bg-photo_m.png') no-repeat top/cover;
          border-radius: vw(16);
        }

        .text {
          @extend %text;
        }

        .date {
          @extend %date-style;

          &.dateEn {
            flex-direction: column;
          }
        }

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

              @include mobile {
                font-size: vw(32);
                line-height: vw(38);
              }

              span {
                color: $primaryColorDarkBlue;
              }
            }

            .des {
              font-size: 22px;
              line-height: 26px;
              color: $secondaryColorDarkGray;

              @include mobile {
                font-size: vw(22);
                line-height: vw(26);
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
              max-width: 500px;
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

    }

    .headquarters {
      width: 100%;
      position: relative;

      .headquarters-content {
        @include flex-style(center, flex-start);
        flex-direction: column;
        gap: 20px;
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        padding: 40px;

        @include mobile {
          gap: vw(20);
          border-radius: vw(16);
          padding: vw(40) vw(25);
        }

        .date {
          @extend %date-style;
          @include flex-style(center, flex-start);
          flex-direction: column;
        }

        .list {
          width: 100%;
          background: #E9E9E9;
          padding: 12px 24px;

          @include mobile {
            padding: vw(12) vw(24);
          }

          ul {
            li {
              font-size: 23px;
              line-height: 40px;
              font-weight: 500;
              list-style-type: disc;
              margin-left: 24px;

              @include mobile {
                font-size: vw(23);
                line-height: vw(40);
                margin-left: vw(24);
              }
            }
          }
        }

        .remark {
          width: 100%;
          font-size: 18px;
          line-height: 25px;
          font-weight: 500;
          text-align: right;

          @include mobile {
            font-size: vw(18);
            line-height: vw(25);
          }

          a {
            color: $primaryColorDarkBlue;
          }
        }

        .text {
          @extend %text;
          width: 100%;
          text-align: center;
        }
      }

      .icon {
        &-style {
          position: absolute;
        }

        &3 {
          max-width: 92px;
          width: 100%;
          right: 90px;
          top: 120px;

          @include mobile {
            max-width: none;
            width: vw(92);
            right: vw(30);
            top: vw(110);
          }
        }
      }

    }
  }

  #upload-25th {
    background: url($th25ImgUrl + 'bg-upload.jpg') no-repeat bottom/cover;

    .upload-block {
      width: 100%;
      padding: 40px;
      @extend %bor-radius24;
      background: #fff;
      @include flex-center;
      flex-direction: column;
      gap: 40px;

      @include mobile {
        padding: vw(40) vw(25);
        gap: vw(40);
      }

      .upload-content {
        @include flex-style(center, center);
        gap: 50px;
        width: 100%;

        @include mobile {
          flex-direction: column;
          gap: vw(40);
        }

        .upload-left {
          @include flex-center;
          flex-direction: column;

          p {
            font-size: 20px;
            font-weight: 600;

            @include mobile {
              font-size: vw(20);
            }
          }
        }
      }
    }
  }

}
</style>