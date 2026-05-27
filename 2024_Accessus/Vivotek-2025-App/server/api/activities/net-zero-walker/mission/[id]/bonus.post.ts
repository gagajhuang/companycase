import axios from 'axios';

export default defineEventHandler(async (event): Promise<any> => {
    try {
        const { bearerToken } = event.context.auth;

        const body = await readMultipartFormData(event);
        
        if (!body) {
            throw new Error("No form data received");
        }

        const form = new FormData();
        body.forEach((value: any, key) => {
            // has type
            if (value.type) {
                form.append(value.name, new Blob([value.data]));
            }
            else {
                form.append(value.name, Buffer.from(value.data).toString());
            }
        });

        const id = event.context.params?.id;
        if (!id) {
            throw new Error("No 'id' parameter found in request context");
        }
        
        const res = await axios.post(`${useRuntimeConfig().API_URL}/api/activities/net-zero-walker/mission/${id}/bonus`, form, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'multipart/form-data',
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
