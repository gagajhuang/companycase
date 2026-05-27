<template>
	<div id="profile">
		<div class="container">
			<div class="content">
				<div class="title">
					<div class="des">{{ $t('profile.title') }}</div>
				</div>

				<form class="login-form" @submit.prevent="submitForm">
					<div class="input-style employee-id disabled">
						<label for="id">
							<span>{{ $t('profile.employeeId') }}</span>
							<input id="id" type="text" name="id" placeholder="00123456" v-model="form.id" />
						</label>
					</div>
					<div class="input-style employee-email disabled">
						<label for="email">
							<span>{{ $t('profile.email') }}</span>
							<input id="email" type="email" name="email" placeholder="user@vivotek.com" v-model="form.email" />
						</label>
					</div>
					<div class="input-style employee-name-zh disabled">
						<label for="nameZh">
							<span>{{ $t('profile.zhName') }}</span>
							<input id="nameZh" type="text" name="nameZh" placeholder="使用者" v-model="form.name_tw" />
						</label>
					</div>
					<div class="input-style employee-name-en disabled">
						<label for="nameEn">
							<span>{{ $t('profile.enName') }}</span>
							<input id="nameEn" type="text" name="nameEn" placeholder="User"  v-model="form.name_en" />
						</label>
					</div>
					<div class="input-style employee-phone">
						<label for="phone">
							<span>{{ $t('profile.phone') }}</span>
							<input id="phone" type="tel" name="phone" placeholder="0912345678" required v-model="form.phone" />
							<p v-if="errorPhoneFormat" class="text-warn">{{ $t('profile.warn') }}</p>
						</label>
					</div>
					<!-- btn -->
					<div class="login-btn">
						<button class="btn-style" type="submit">{{ $t('profile.submit') }}</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
definePageMeta({
	layout: 'default', //layouts content.vue
})
const errorPhoneFormat = ref(false);
onMounted(async () => {
	getProfile();
})

const form = reactive({
	id: '',
	email: '',
	name_tw: '',
	name_en: '',
	phone: '',
})

const getProfile = async () => {
	const res = await $fetch(`/api/my/profile`);
	if (res.success) {
		form.id = res.data.id;
		form.email = res.data.email;
		form.name_tw = res.data.name_tw;
		form.name_en = res.data.name_en;
		form.phone = res.data.phone;
	}
}

const submitForm = async () => {
	// validate phone number format
	if (!/^(\+?[1-9]\d{1,14}|0\d{9})$/.test(form.phone)) {
		errorPhoneFormat.value = true;
		return;
	}
	else {
		errorPhoneFormat.value = false;
	}

	// Call API	
  const res = await $fetch(`/api/my/profile`, {
    method: 'PUT',
    body: form
  });

	if (res.success) {
		alert('修改成功！');
	}
	else {
		alert('修改失敗！');
	}
}
</script>
<style lang="scss">
#profile {
	background: url('@/assets/images/login/bg.jpg') no-repeat center/cover;
	padding: 130px 0;
	@include flex-style(center, center);

	@include mobile {
		padding: vw(130) 0;
	}

	.container {
		flex-direction: row;
		gap: 0;
		padding: 0;
		position: relative;
		max-width: 1100px;
		width: 100%;
		margin: 20px;
		@include flex-center;
		border-radius: 12px;
		overflow: hidden;
		background: #fff;

		@include mobile {
			flex-direction: column;
			width: vw(600);
			border-radius: vw(12);
		}

		.content {
			@include flex-center;
			flex-direction: column;
			gap: 40px;
			width: 100%;
			padding: 40px;

			@include mobile {
				gap: vw(40);
				padding: vw(40);
			}

			.title {
				@include flex-center;
				flex-direction: column;
				gap: 16px;

				@include mobile {
					gap: vw(16);
				}

				.des {
					font-size: 24px;
					font-weight: 500;

					@include mobile {
						font-size: vw(24);
					}
				}
			}

			.login-form {
				width: 100%;
				@include flex-center;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 24px;

				@include mobile {
					gap: vw(24);
				}

				.input-style {
					width: 48%;

					@include mobile {
						width: 100%;
					}

					.text-warn {
						margin-top: -10px;

						@include mobile {
							margin-top: vw(10);
						}
					}
				}
			}
		}

	}
}
</style>
