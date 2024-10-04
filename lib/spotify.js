const axios = require("axios");

function spotify(url) {
    return new Promise((resolve, reject) => {
        (function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const ur = url.match(/(track|album|playlist)\/([\w\d]+)/i);
                    const TY = ur === null || ur === void 0 ? void 0 : ur[1];
                    const TR = TY === null || TY === void 0 ? void 0 : TY.match(/track/i);
                    const EL = TR ? TR : TY === null || TY === void 0 ? void 0 : TY.match(/album|playlist/i);
                    const i = ur === null || ur === void 0 ? void 0 : ur[2];
                    if (!i)
                        return reject("Failed To Get Id! Enter Valid Spotify URL!");
                    if (TR) {
                        const d = yield axios
                            .get("https://api.spotifydown.com/download/" + i, {
                                headers: {
                                    Origin: "https://spotifydown.com",
                                    Referer: "https://spotifydown.com/",
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
                                },
                            })
                            .then((v) => v.data);
                        if (!d.success)
                            reject("Fail Fetching");
                        delete d.metadata.cache;
                        delete d.metadata.success;
                        delete d.metadata.isrc;
                        resolve(Object.assign(Object.assign({ type: TY }, d.metadata), { music: d.link, link: url }));
                    } else if (EL) {
                        const r = yield axios
                            .get("https://api.spotifydown.com/metadata/" + TY + "/" + i, {
                                headers: {
                                    Origin: "https://spotifydown.com",
                                    Referer: "https://spotifydown.com/",
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
                                },
                            })
                            .then((v) => v.data);
                        if (!r.success)
                            return reject("Failed To Get " + TY + " Metadata");
                        delete r.success;
                        delete r.cache;
                        const l = yield axios
                            .get("https://api.spotifydown.com/trackList/" + TY + "/" + i, {
                                headers: {
                                    Origin: "https://spotifydown.com",
                                    Referer: "https://spotifydown.com/",
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
                                },
                            })
                            .then((v) => v.data);
                        if (!l.success)
                            return reject("Failed To Get " + TY + " Tracklist");
                        l.trackList = l.trackList.map((v) => {
                            const d = {
                                id: v.id,
                                title: v.title,
                                artists: v.artists,
                                cover: "",
                                link: "https://open.spotify.com/track/" + v.id,
                            };
                            if (v.cover)
                                d.cover = v.cover;
                            return d;
                        });
                        resolve(Object.assign(Object.assign({ type: TY, link: url }, r), { track: l.trackList }));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        })();
    });
}

// ? Track
/*spotify('https://open.spotify.com/intl-id/track/0BxE4FqsDD1Ot4YuBXwAPp')
    .then(v => console.log(v))
    .catch(v => console.log(v))

// ? Album
spotify('https://open.spotify.com/intl-id/album/7aJuG4TFXa2hmE4z1yxc3n')
    .then(v => console.log(v))
    .catch(v => console.log(v))

// ? Playlist
spotify('https://open.spotify.com/playlist/6YHpMqFEswDynqnyEkzswk?si=7c50bee2c09947dc')
    .then(v => console.log(v))
    .catch(v => console.log(v))*/