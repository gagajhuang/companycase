<template>
    <button>{{ props.test }}</button>
</template>
<script setup lang="ts">
    interface ComponentProps {
        test: any;
        class?: string;
    }
    const props = defineProps<ComponentProps>();
</script>