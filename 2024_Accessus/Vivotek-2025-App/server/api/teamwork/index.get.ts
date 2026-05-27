export default defineEventHandler(async (event): Promise<any> => {
    try {
        const { bearerToken } = event.context.auth;
        const { locale } = event.context.i18n;

        const res = await $fetch(`${useRuntimeConfig().API_URL}/api/activities/teamwork`, { method: 'get', headers: { 
                'Authorization': `Bearer ${bearerToken}`,
                'X-Localization': locale,            
            }
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