<script setup lang="ts">
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));
const swiper = useSwiper(containerRef, {
  init: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination', // 分頁容器
    clickable: true, // 啟用點擊分頁
  },
  loop: true,
  autoplay: {
    delay: 1000, // 自動播放延遲時間（毫秒）
  },
});

onMounted(() => {
  // console.log(swiper.instance); // 確認 Swiper 實例初始化
});
</script>

<template>
  <!-- <ClientOnly> -->
    <div style="position: relative;">
      <!-- Swiper 容器 -->
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide
          v-for="(slide, idx) in slides"
          :key="idx"
          style="background-color: rgb(32, 233, 70); color: white;"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>

      <!-- 分頁 -->
      <div class="swiper-pagination"></div>

      <!-- 前後按鈕 -->
      <button class="swiper-button-prev" aria-label="Previous">←</button>
      <button class="swiper-button-next" aria-label="Next">→</button>
    </div>
  <!-- </ClientOnly> -->
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

/* 前後按鈕樣式 */
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

/* 分頁樣式 */
.swiper-pagination {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index:99;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin: 0 4px;
  display: inline-block;
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  background: rgba(32, 233, 70, 1);
}
</style>
