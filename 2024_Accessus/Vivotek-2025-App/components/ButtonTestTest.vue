<template>
    <button>{{ test }}</button>
</template>
<script setup lang="ts">
    interface ComponentProps {
        // test: string | boolean;
        test: any;
        class?: string;
    }
    defineProps<ComponentProps>();
</script>