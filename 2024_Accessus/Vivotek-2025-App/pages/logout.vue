<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';

const router = useRouter();

onMounted(() => {
  const authStore = useAuthStore();
  authStore.revokeToken();
  router.push('/login');
});

</script>