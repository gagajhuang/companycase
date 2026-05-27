<template>
  <ClientOnly>
    <!-- Main Swiper -->
    <Swiper
      :loop="true"
      :spaceBetween="10"
      :navigation="false"
      :modules="[Navigation, Thumbs]"
      :thumbs="{ swiper: thumbsSwiper }"
      class="mainSwiper"
    >
      <SwiperSlide v-for="(src, i) in imageList" :key="'main-' + i">
        <img :src="src" alt="" />
      </SwiperSlide>
    </Swiper>

    <!-- Thumbs Swiper -->
    <Swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="8"
      :slidesPerView="3"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="[FreeMode, Thumbs]"
      class="thumbsSwiper"
    >
      <SwiperSlide v-for="(src, i) in imageList" :key="'thumb-' + i">
        <img :src="src" alt="" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// ✅ voteData 是「物件」不是 Array
const props = defineProps({
  voteData: {
    type: Object,
    required: true,
  },
});

// thumbs 連動
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

// 允許子資料夾（如 announcement/**）
const glob2 = import.meta.glob("@/assets/images/quality/announcement/**/*", {
  eager: true,
});

/** 本地相對路徑 -> 解析成實體 URL */
function resolveLocal(relPath) {
  if (!relPath) return "";
  const key = `/assets/images/quality/announcement/${relPath}`;
  return glob2[key]?.default || "";
}

/** 同時支援 http(s) / data URI / 本地相對路徑 */
function resolveSrc(val) {
  if (!val) return "";
  if (/^(https?:)?\/\//.test(val) || /^data:/.test(val)) return val;
  return resolveLocal(val);
}

/** 依你的需求定義顯示順序（img3、img1、img2） */
const imageList = computed(() => {
  const srcs = [
    resolveSrc(props.voteData?.img1),
    resolveSrc(props.voteData?.img2),
    resolveSrc(props.voteData?.img3),
  ];
  return srcs.filter(Boolean);
});
</script>