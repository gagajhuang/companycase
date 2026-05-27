<template>
	<div>
		<h1>API 測試頁面</h1>
		<div>
			<label for="email">Email：</label>
			<input id="email" v-model="email" type="email" placeholder="請輸入 Email" />
		</div>
		<div>
			<label for="employee_id">Employee ID：</label>
			<input id="employee_id" v-model="employeeId" type="text" placeholder="請輸入 Employee ID" />
		</div>
		<button @click="fetchData">登入</button>
	</div>
</template>

<script setup>
// import { ref } from 'vue';

const email = ref('');
const employeeId = ref('');

definePageMeta({
	layout: 'content', //layouts content.vue
})

async function fetchData() {
	try {
		const res = await $fetch('/api/posts', {
			method: 'POST',
			body: {
				email: email.value,
				employee_id: employeeId.value
			}
		});
		
		// if (res.success && res.access_token) {
		if (res.success) {
			// localStorage.setItem('access_token', res.access_token);
			alert('登入成功');
		} else {
			alert('登入失敗: ' + (res.msg || '未知錯誤'));
		}
	} catch (error) {
		alert('API 請求失敗: ' + error.message);
	}
}
</script>
