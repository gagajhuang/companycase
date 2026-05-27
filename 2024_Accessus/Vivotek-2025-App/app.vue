<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

router.options.scrollBehavior = (to, from, savedPosition) => {
  // 回上一頁時，保留滾動位置
  // if (savedPosition) {
  //   return savedPosition
  // }

  // 錨點
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  }

  // 換頁
  // return { top: 0, behavior: 'smooth' }
  return { top: 0 }
}
</script>
