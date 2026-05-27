export default defineEventHandler(async (event): Promise<any> => {
    try {
        const { bearerToken } = event.context.auth;

        const body = await readBody(event);

        const res = await $fetch(`${useRuntimeConfig().API_URL}/api/my/profile`, { method: 'PUT', headers: { 
                'Authorization': `Bearer ${bearerToken}`,
            }, 
            body
        });

        return res;
    }
    catch (err) {
        console.error(err);
        return { 
            success: false, 
            msg: 'API 請求失敗', 
            error: err 
        };
    }
});