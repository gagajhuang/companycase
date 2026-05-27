import axios from 'axios';

export default defineEventHandler(async (event): Promise<any> => {
    try {
        const { bearerToken } = event.context.auth;

        const body = await readBody(event);
        if (!body) {
            throw new Error("No form data received");
        }
        
        const res = await axios.post(`${useRuntimeConfig().API_URL}/api/activities/ultimate-explorer/topic/${body.topic}/votes/${body.participant_id}`, {}, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
            }
        });

        return res.data;
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
