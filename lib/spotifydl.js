const axios = require('axios');

class SpotifyDown {
    constructor() {
        this.api = 'https://spotydown.media/api';
        this.headers = {
            'authority': 'spotydown.media',
            'accept': '*/*',
            'content-type': 'application/json',
            'origin': 'https://spotydown.media',
            'referer': 'https://spotydown.media/',
            'user-agent': 'Postify/1.0.0',
            'x-forwarded-for': Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'),
        };
    }

    async request(endpoint, data) {
        try {
            const response = await axios.post(`${this.api}/${endpoint}`, data, { headers: this.headers });
            return response.data;
        } catch (error) {
            this.err(error);
            throw error; 
        }
    }

    async metadata(link) {
        return this.request('get-metadata', { url: link });
    }

    async downloadTrack(link) {
        return this.request('download-track', { url: link });
    }

    async file(fileUrl) {
        try {
            const response = await axios.get(fileUrl, { headers: this.headers });
            return response.data;
        } catch (error) {
            this.err(error);
            throw error; 
        }
    }

    err(error) {
        if (axios.isAxiosError(error)) {
            console.error(error.message);
            if (error.response) {
                console.error(error.response.data);
            }
        } else {
            console.error(error);
        }
    }
}

module.exports = { SpotifyDown };

/*// Cara menggunakan kode ini
const { SpotifyDown } = require('./lib/spotifydl'); // Sesuaikan dengan path file tempat kamu menyimpan

const dl = new SpotifyDown();
const link = "https://open.spotify.com/track/6K1b6aDGAtI3g9DVCNZdhl?si=MtbtT_QPQdOQfYX08I5Awg";

dl.metadata(link)
    .then(metadata => {
        console.log(JSON.stringify(metadata, null, 2));
        return dl.downloadTrack(link);
    })
    .then(response => {
        console.log(response);
        return response.file_url ? dl.file(response.file_url) : Promise.resolve(null);
    })
    .then(stream => {
        if (stream) {
            console.log(stream);
        }
    })
    .catch(error => {
        console.error(error);
    });*/
