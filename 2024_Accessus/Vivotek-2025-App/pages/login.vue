<template>
	<div id="login">
		<div class="container">
			<div class="kv"></div>

			<!-- 右邊 -->
			<div class="login-right">
				<div class="locale">
					<span class="locale-name" :class="{act:locale=='zh'}" @click="setLocale('zh')">中文</span>
					<span class="locale-name" :class="{act:locale=='en'}" @click="setLocale('en')">EN</span>
				</div>
				<div class="content">
					<div class="title">
						<div class="logo">
							<img src="@/assets/images/login/logo.svg" alt="vivotek">
						</div>
						<div class="des">{{ $t('login.des') }}</div>
					</div>

					<form class="login-form" action="/login" method="POST">
						<div class="input-style employeeEmail">
							<label for="email">
								<span>{{ $t('login.email') }}</span>
								<input id="email" v-model="email" type="email" name="email" placeholder="user@vivotek.com" />
							</label>
						</div>
						<div class="input-style employeeId">
							<label for="employee_id">
								<span>{{ $t('login.id') }}</span>
								<input id="employee_id" v-model="employeeId" type="text" name="employee_id" placeholder="00123456" />
							</label>
						</div>
						<!-- btn -->
						<div class="login-btn">
							<button class="btn-style" type="button" @click="fetchData">{{ $t('login.btn') }}</button>
							<p class="text-warn" v-if="errorMsg">{{ $t('login.warn') }}</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useEmployeeStore } from '@/stores/employee';
import { useRouter } from 'vue-router'

const email = ref('');
const employeeId = ref('');
const errorMsg = ref(false);
const authStore = useAuthStore();
const employeeStore = useEmployeeStore();
const router = useRouter();

const { locale, setLocale } = useI18n();


definePageMeta({
	layout: 'content', //layouts content.vue
})

onMounted(() => {
	
});

async function fetchData() {
	try {
		const res = await $fetch('/api/login', {
			method: 'POST',
			body: {
				email: email.value,
				employee_id: employeeId.value
			}
		});
		
		if (res.success && res.token) {
			authStore.setToken(res.token);
			// alert('登入成功');
			errorMsg.value = false;

			employeeStore.setEmployee(res.data);

			// 登入成功後設定語言
			await setLocale(res.data.preferred_language);

			// 跳轉至首頁
			// this.$router.push({ name: 'index' }); 
			router.push('/');
		} 
		else {
			errorMsg.value = true
		}
	} catch (error) {
		alert('API 請求失敗: ' + error.message);
	}
}
</script>
<style lang="scss">
#login {
	background: url('@/assets/images/login/bg.jpg') no-repeat center/cover;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	@include flex-style(center, center);

	.container {
		flex-direction: row;
		gap: 0;
		padding: 0;
		position: relative;
		max-width: 1200px;
		width: 100%;
		margin: 20px;
		border-radius: 12px;
		overflow: hidden;
		background: #fff;

		@include mobile {
			flex-direction: column;
			width: vw(600);
			border-radius: vw(12);
		}

		.kv {
			max-width: 768px;
			width: 50%;
			height: 600px;
			background: url('@/assets/images/login/kv.jpg') no-repeat bottom/cover;

			@include mobile {
				width: vw(600);
				height: vw(600);
			}
		}

		.login-right {
			width: 50%;
			padding: 40px;
			@include flex-center;
			flex-direction: column;
			gap: 24px;

			@include mobile {
				width: 100%;
				padding: vw(40);
				@include flex-center;
				flex-direction: column;
				gap: vw(24);
			}

			.locale {
				width: 100%;
				@include flex-style(flex-end, center);

				.locale-name {
					padding: 0 8px;
					font-size: 20px;
					font-weight: 500;
					color: $secondaryColorDarkGray;
					cursor: pointer;

					@include mobile {
						padding: 0 vw(8);
						font-size: vw(20);
					}

					&+.locale-name {
						border-left: 1px solid $borderColor;
					}
				}

				.act {
					color: $primaryColorDarkBlue;
				}
			}

			.content {
				@include flex-center;
				flex-direction: column;
				gap: 40px;
				width: 100%;

				@include mobile {
					gap: vw(40);
				}

				.title {
					@include flex-center;
					flex-direction: column;
					gap: 16px;

					@include mobile {
						gap: vw(16);
					}

					.logo {
						width: 138px;

						@include mobile {
							width: vw(138);
						}
					}

					.des {
						font-size: 24px;
						font-weight: 500;

						@include mobile {
							font-size: vw(24);
						}
					}
				}

				.form {
					.login-btn {
						width: 100%;
						@include flex-center;
						flex-direction: column;
						gap: 4px;

						@include mobile {
							gap: vw(4);
						}

						.btn-style {
							padding: 12px 40px;
							font-size: 20px;
							line-height: 30px;
							font-weight: 400;

							@include mobile {
								padding: vw(24) vw(40);
								font-size: vw(24);
								line-height: vw(35);
								width: 100%;
							}
						}
					}
				}
			}


		}
	}
}
</style>
