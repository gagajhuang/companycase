export default defineEventHandler(async (event): Promise<any> => {
    try {
        const { bearerToken } = event.context.auth;
        const { locale } = event.context.i18n;

        const id = event.context.params?.id;

        const res = await $fetch(`${useRuntimeConfig().API_URL}/api/activities/ultimate-explorer/topic-list/${id}`, { method: 'GET', headers: { 
                'Authorization': `Bearer ${bearerToken}`,
            },
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