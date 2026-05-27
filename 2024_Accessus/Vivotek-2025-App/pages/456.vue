<template>
    456.vue 測試頁面<br>
    API 訊息：{{ message }}<br>
    <ButtonTest :test="456"></ButtonTest>
    <ButtonTestTest :test="555"></ButtonTestTest>
    456測試頁面

    <fa :icon="['far', 'user']" />
    <fa icon="dollar-sign" style="font-size: 30px" />
    <fa icon="cog" />
    <fa-layers class="fa-4x">
        <fa icon="circle" />
        <fa icon="check" transform="shrink-6" :style="{ color: 'white' }" />
    </fa-layers>

    <fa-layers full-width class="fa-4x">
        <fa icon="angles-down" />
        <fa-layers-text transform="shrink-8 down-3" value="27" class="fa-inverse" />
    </fa-layers>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'content', //layouts content.vue
})
const message = ref();
// onMounted(async () =>  {
//     try {
//         const res = await $fetch('/api/test')
//         message.value = res?.msg
//     }
//     catch(error){
//         //錯誤訊息
//     }
// })
</script>