<template>
  <ClientOnly>
    <!-- Main Swiper -->
    <Swiper
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :modules="[Navigation, Thumbs]"
      :thumbs="{ swiper: thumbsSwiper }"
      class="mainSwiper"
    >
      <SwiperSlide v-if="voteData.img3"><img :src="voteData.img3" alt="" /></SwiperSlide>
      <SwiperSlide v-if="voteData.img1"><img :src="voteData.img1" alt="" /></SwiperSlide>
      <SwiperSlide v-if="voteData.img2"><img :src="voteData.img2" alt="" /></SwiperSlide>
    </Swiper>

    <!-- Thumbs Swiper -->
    <Swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="8"
      :slidesPerView="3"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="[FreeMode, Thumbs]"
      class="thumbsSwiper"
    >
      <SwiperSlide v-if="voteData.img3"><img :src="voteData.img3" alt="" /></SwiperSlide>
      <SwiperSlide v-if="voteData.img1"><img :src="voteData.img1" alt="" /></SwiperSlide>
      <SwiperSlide v-if="voteData.img2"><img :src="voteData.img2" alt="" /></SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
// import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const props = defineProps({
  voteData: {
    type: Array,
    default: () => [],
  },
});
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>
