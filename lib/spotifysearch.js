const axios = require("axios");
const BodyForm = require("form-data");
const fs = require("fs");
const { fromBuffer } = require("file-type");

async function searchSpotify(query) {
    try {
        //const access_token = await getAccessToken();
        /*const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer BQBMHRbx6ZAgC1CJNMEz5CBzwRsvIQq4f8IYONZOkegro998W_yXgutVMIp4Egpm53j0jYD28aRCngFbJP4C7P20rl80sHb7pOXwFviFbjHGrQQFHmYIcpFwIFMaH9xrCTdcg2ooUliVap3gICW5SYvmcUZxLn2NRhG4zw46HnM4UpSievVJCJnsb2ZzNuAqLs6Cs4wa3IujkdjdjAUwHjByvBshknrgN4vOMTcHjxiWtCr7OFOpVsbPLBzB0MKRZOCiPqMSg699UddrwHoiYT3QKDUS6-dE`,
            },
        });*/
        let accessToken = 'BQBMHRbx6ZAgC1CJNMEz5CBzwRsvIQq4f8IYONZOkegro998W_yXgutVMIp4Egpm53j0jYD28aRCngFbJP4C7P20rl80sHb7pOXwFviFbjHGrQQFHmYIcpFwIFMaH9xrCTdcg2ooUliVap3gICW5SYvmcUZxLn2NRhG4zw46HnM4UpSievVJCJnsb2ZzNuAqLs6Cs4wa3IujkdjdjAUwHjByvBshknrgN4vOMTcHjxiWtCr7OFOpVsbPLBzB0MKRZOCiPqMSg699UddrwHoiYT3QKDUS6-dE'
axios.get('https://api.spotify.com/v1/search', {
            params: {
                q: query,
                type: 'track',
                limit: 10
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        }).then(async( { response } ) => {
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
        }) 
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}
    
module.exports = { searchSpotify }