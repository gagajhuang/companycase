// export default defineEventHandler(async (event) => {
//     try {
//         return {
//             success: true,
//             msg: "Empty API",
//         };
//     }
//     catch (err: any) {
//         console.log(err);
//     }
// });

export default defineEventHandler(async (event) => {
	// type ApiResponse = {
	// 	success: boolean;
	// 	access_token?: string;
	// 	msg?: string;
	// };

	try {
		const body = await readBody(event);
		const { email, employee_id } = body;

		const config = useRuntimeConfig();
		const apiUrl = `${config.API_URL}/api/auth/login`;

		// const response: ApiResponse = await $fetch(apiUrl, {
		const response = await $fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				email,
				employee_id,
			},
		});
		
		// 檢查 API 回傳的登入狀態
    // if (response.success && response.access_token) {
    //   return {
    //     success: true,
    //     token: response.access_token,
    //   };
    // } else {
    //   throw new Error(response.msg || '登入失敗');
    // }

		return response;
	} catch (err: any) {
		console.error(err);
		return {
			success: false,
			msg: 'API 請求失敗',
			error: err.message,
		};
	}
});


