const axios = require('axios');
const FormData = require('form-data');
const fluent = require('fluent-ffmpeg');
const path = require('path');

const HEADERS = {
    'authority': 'iii.ymcdn.org',
    'accept': '*/*',
    'user-agent': 'Postify/1.0.0',
    'x-forwarded-for': Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'),
};

const YMCDN = {
    extractVID: (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/(?:shorts\/|(?:v|e(?:mbed)?)\/)?)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    },

    api: async (endpoint, data) => {
        const form = new FormData();
        Object.entries(data).forEach(([key, value]) => form.append(key, value));
        const response = await axios.post(endpoint, form, {
            headers: { ...HEADERS, ...form.getHeaders() }
        });
        return response.data;
    },

    init: (videoId) => YMCDN.api('https://iii.ymcdn.org/api/v3/init', { id: videoId }),
    progress: (id, s) => YMCDN.api('https://iii.ymcdn.org/api/v3/progress', { id, s }),
    convert: (id, format, s) => YMCDN.api('https://iii.ymcdn.org/api/v3/convert', { id, format, type: 'direct', s }),
    detail: (id, format, readType) => YMCDN.api('https://iii.ymcdn.org/api/v3/detail', { id, format, type: 'direct', readType, direct: 'direct' }),

    merger: async (videoUrl, audioUrl) => {
        return new Promise((resolve, reject) => {
            const dp = path.join('Downloads');
            const op = path.join(dp, 'output.mp4');

            fluent()
                .input(videoUrl)
                .input(audioUrl)
                .audioCodec('flac')
                .videoCodec('copy')
                .format('mp4')
                .on('error', reject)
                .on('end', () => {
                    resolve(op);
                })
                .save(op);
        });
    },

    request: async (url, format, option) => {
        const videoId = YMCDN.extractVID(url);
        if (!videoId) {
            console.error('Link Youtube nya salah woy !!!');
            return;
        }

        try {
            const ir = await YMCDN.init(videoId);

            for (let i = 0; i < 2; i++) {
                const pr = await YMCDN.progress(ir.hash, 'false');
                console.log(`⏳ Task Progress ${i + 1}:`, pr);
                if (i === 1 && pr.status && pr.result === 'loading') {
                    const final = await YMCDN.progress(ir.hash, '100');
                    console.log(JSON.stringify(final, null, 2));
                    if (final.status) {
                        const cr = await YMCDN.convert(ir.hash, format, 'false');
                        console.log(JSON.stringify(cr, null, 2));
                        if (cr.status) {
                            const detailResponse = await YMCDN.detail(ir.hash, format, 'video');
                            console.log(JSON.stringify(detailResponse, null, 2));
                            const [videoUrl, audioUrl] = detailResponse.fileUrl;

                            if (option === 'Audio') {
                                console.log('🔊 Link Download Audio:', audioUrl);
                                return audioUrl;
                            } else if (option === 'Video') {
                                const mr = await YMCDN.merger(videoUrl, audioUrl);
                                return mr;
                            } else {
                                console.error('Opsi nya salah! "Audio" untuk Download Audio, "Video" untuk Download Video');
                            }
                        } else {
                            console.log('Gabisa connect ke Api nya 🫥 Coba coba lagi nanti ');
                        }
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
};

module.exports = { YMCDN };