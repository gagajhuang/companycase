<template>
    <!-- 含Header、Footer -->
    <Navbar/>
    <slot></slot>
    <FooterItem/>
</template>

<script lang="ts" setup>
import { useEmployeeStore } from '@/stores/employee';

const employeeStore = useEmployeeStore();

onMounted(() => {
  employeeStore.fetchEmployee();
});
</script>