const axios = require('axios');

class AnshariChat {
    constructor() {
        this.baseURL = 'https://api.ansari.chat/api/v1/complete';
        this.headers = {
            'authority': 'api.ansari.chat',
            'accept': '*/*',
            'content-type': 'application/json',
            'origin': 'https://ansari.chat',
            'pragma': 'no-cache',
            'referer': 'https://ansari.chat/',
            'user-agent': 'Postify/1.0.0',
            'x-forwarded-for': Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'),
        };
    }

    async chat(message) {
        try {
            const response = await axios.post(this.baseURL, {
                messages: [
                    {
                        role: 'user',
                        content: message
                    }
                ]
            }, {
                headers: this.headers
            });

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = { AnshariChat };