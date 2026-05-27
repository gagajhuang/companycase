import type { EmployeeType } from "~/types/employee";

export default defineEventHandler(async (event) => {
	type ApiResponse = {
		success: boolean;
		access_token?: string;
		msg?: string;
		data: EmployeeType;
	};

	try {
		const body = await readBody(event);
		const { email, employee_id } = body;

		const config = useRuntimeConfig();
		const apiUrl = `${config.API_URL}/api/auth/login`;

		const res: ApiResponse = await $fetch(apiUrl, {
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
    if (res.success && res.access_token) {
      return {
        success: true,
        token: res.access_token,
		data: res.data,
      };
    } 
	else {
      throw new Error(res.msg || '登入失敗');
    }

		// return res;
	} catch (err: any) {
		console.error(err);
		return {
			success: false,
			msg: 'API 請求失敗',
			error: err.message,
		};
	}
});
