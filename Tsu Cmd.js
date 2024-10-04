process.on('uncaughtException', console.error)
require('./setting')
require('./lib/tsumenu')
require('./chglg')
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageContent,
  generateWAMessage,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = global.baileys
const {
  generateWAMessageFromContent,
  proto,
  prepareWAMessageMedia
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const similarity = require('similarity')
const spotify = require('./lib/spotify')
const { shannzCdn, widipeCdn } = require('./lib/UploadApi.js');
const {
  Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const speed = require('performance-now')
const axios = require('axios')
const superagent = require('superagent')
const got = require('got')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const cheerio = require('cheerio');
const ms = require("ms");
const { truth, dare, quotesis } = require('./lib/kumpulan doang')
const imgbbUploader = require("imgbb-uploader");
const crypto = require('crypto')
const https = require('https')
const {
  URL_REGEX
} = require('@whiskeysockets/baileys')
const {
  fileTypeFromBuffer
} = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const {
  translate
} = require('@vitalets/google-translate-api')
const nou = require("node-os-utils");
const dhn = require('dhn-api')
const path = require('path')
const {
  pipeline
} = require('stream')
const {
  promisify
} = require("util")
const jimp = require('jimp')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const {
  mediafiredl
} = require('@bochilteam/scraper-mediafire')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const didyoumean = require('didyoumean');
const yts = require("yt-search")
const {
  FajarNews,
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme,
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
const jsobfus = require('javascript-obfuscator')
const {
  exec,
  spawn,
  execSync
} = require("child_process")
const {
  addExif
} = require('./lib/exif')
const {
  smsg,
  tanggal,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  formatp,
  parseMention,
  getRandom,
  getGroupAdmins,
  generateProfilePicture,
  toRupiah,
  shorturl,
  enumGetKey,
  sort,
  pickRandom,
  toNumber,
  randomNumber
} = require('./lib/myfunc')
const {
  TelegraPH
} = require("./lib/TelegraPH")
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const {
  ssweb,
  tiktok,
  remini,
  findSongs
} = require("./lib/scraper")
const banusr = JSON.parse(fs.readFileSync('./database/banned.json'))
const {
  color,
  bgcolor
} = require('./lib/color')
const {
  uptotelegra
} = require('./lib/upload')
const {
  getRegisteredRandomId,
  addRegisteredUser,
  createSerial,
  checkRegisteredUser
} = require('./lib/register.js')
// game database
let kuismath = []
//=================================================//
module.exports = TsuCnn = async (TsuCnn, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    //WM By Rulzz, Titenono lek ko hapus le😹
    async function appenTextMessage(text, chatUpdate) {
      let messages = await generateWAMessage(m.chat, {
        text: text,
        mentions: m.mentionedJid
      }, {
        userJid: TsuCnn.user.id,
        quoted: m.quoted && m.quoted.fakeObj
      })
      messages.key.fromMe = areJidsSameUser(m.sender, TsuCnn.user.id)
      messages.key.id = m.key.id
      messages.pushName = m.pushName
      if (m.isGroup) messages.participant = m.sender
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
      }
      TsuCnn.ev.emit('messages.upsert', msg)
    }
    var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
    //=================================================//
    const Styles = (text, style = 1) => {
      var xStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
      var yStr = {
        1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ1234567890'
      };
      var replacer = [];
      xStr.map((v, i) => replacer.push({
        original: v,
        convert: yStr[style].split('')[i]
      }));
      var str = text.toLowerCase().split('');
      var output = [];
      str.map((v) => {
        const find = replacer.find((x) => x.original == v);
        find ? output.push(find.convert) : output.push(v);
      });
      return output.join('');
    };
    const replygclue = (text, style = 1) => {
      var xStr = 'aiueo'.split('');
      var yStr = {
        1: '_____'
      };
      var replacer = [];
      xStr.map((v, i) => replacer.push({
        original: v,
        convert: yStr[style].split('')[i]
      }));
      var str = text.toLowerCase().split('');
      var output = [];
      str.map((v) => {
        const find = replacer.find((x) => x.original == v);
        find ? output.push(find.convert) : output.push(v);
      });
      return output.join('');
    };
    const pushname = m.pushName || "No Name"
    const isCmd = budy.startsWith(prefix)
    const uncommand = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' 
    //Kalau mau Single prefix Lu ganti pake ini = 
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    var args = body.trim().split(/ +/).slice(1)
    const botNumber = await TsuCnn.decodeJid(TsuCnn.user.id)
    const isRegistered = checkRegisteredUser(m.sender)
    const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isBot = [botNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const text = q = args.join(" ")
    const {
      type,
      quotedMsg,
      mentioned,
      now,
      fromMe
    } = m
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const from = mek.key.remoteJid
    const groupMetadata = m.isGroup ? await TsuCnn.groupMetadata(from).catch(e => {}) : ''
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const groupDesc = m.isGroup ? groupMetadata.desc : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const AntiLink = m.isGroup ? ntilink.includes(from) : false
    const jangan = m.isGroup ? ntilink.includes(m.chat) : false
    const welcm = m.isGroup ? wlcm.includes(from) : false
    const chat = m.isGroup ? [m.chat] : false
    const qmsg = (quoted.msg || quoted)
    const content = JSON.stringify(m.message)
    const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
    const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
    //const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
    const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
    const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
    const qtod = m.quoted ? "true" : "false"
    //================== [ TIME ] ==================//
    const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
    const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
    const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
    const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
    const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
    if (time2 < "23:59:00") {
      var ucapanWaktu = 'Selamat Malam 🏙️'
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = 'Selamat Petang 🌆'
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = 'Selamat Sore 🌇'
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = 'Selamat Siang 🌤️'
    }
    if (time2 < "10:00:00") {
      var ucapanWaktu = 'Selamat Pagi 🌄'
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = 'Selamat Subuh 🌆'
    }
    if (time2 < "03:00:00") {
      var ucapanWaktu = 'Selamat Tengah Malam 🌃'
    }
    if (time2 < "23:59:00") {
      var ucapanWakt2 = 'Selamat Malam️'
    }
    if (time2 < "19:00:00") {
      var ucapanWakt2 = 'Selamat Petang'
    }
    if (time2 < "18:00:00") {
      var ucapanWakt2 = 'Selamat Sore'
    }
    if (time2 < "15:00:00") {
      var ucapanWakt2 = 'Selamat Siang'
    }
    if (time2 < "10:00:00") {
      var ucapanWakt2 = 'Selamat Pagi'
    }
    if (time2 < "05:00:00") {
      var ucapanWakt2 = 'Selamat Subuh'
    }
    if (time2 < "03:00:00") {
      var ucapanWakt2 = 'Selamat Tengah Malam'
    }
    //=================================================//
    // function
    async function sendAud(url, mime, quot) {
      await TsuCnn.sendMessage(m.chat, {
        audio: {
          url: url
        },
        mimetype: mime
      }, {
        quoted: quot
      })
    }
    const delay = async (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    //SKREP
    const {
      bard
    } = require('./lib/bard')
    const fcall = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      'message': {
        extendedTextMessage: {
          text: body
        }
      }
    }
    //================== [ RESPON ALL GAME ] ==================//
    const mp3k = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `Mp3 Download`,
          jpegThumbnail: "",
        }
      }
    }
    const mp4k = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `Mp4 Download`,
          jpegThumbnail: "",
        }
      }
    }
    const kalgans = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `${botname}`,
          jpegThumbnail: "",
        }
      }
    }
    const kalgan2 = {
      key: {
        participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `${Styles2(`${prefix+command}`)}`,
          jpegThumbnail: "",
        }
      }
    }
    const kalgan3 = {
      key: {
        participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `${text}`,
          jpegThumbnail: "",
        }
      }
    }
    const bankal = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `Kamu tidak memiliki akses.`,
          jpegThumbnail: "",
        }
      }
    }
    const bcgck = {
      key: {
        participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `${Styles2(`Broadcast...`)}`,
          jpegThumbnail: "",
        }
      }
    }
    const errklgn = {
      key: {
        participant: `${botNumber}`,
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `${Styles2(`Error...`)}`,
          jpegThumbnail: "",
        }
      }
    }
    const limituse = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `ʟɪᴍɪᴛ ʙᴇʀᴋᴜʀᴀɴɢ 1.`,
          jpegThumbnail: "",
        }
      }
    }
    const reply2 = (teks) => {
      TsuCnn.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: 'Tsumuri In Here',
        mimetype: 'application/msword',
        jpegThumbnail: fs.readFileSync("./media/TsuIm.jpg"),
        caption: `\n${teks}`,
      }, {
        quoted: kalgans,
        ephemeralExpiration: 86400
      });
    }
    const replyak = (teks) => {
      TsuCnn.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: 'Akinator Game',
        mimetype: 'application/msword',
        jpegThumbnail: fs.readFileSync("./media/TsuIm.jpg"),
        caption: `${teks}`,
      }, {
        quoted: kalgans,
        ephemeralExpiration: 86400
      });
    }
    async function reply(teks) {
      const nedd = {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: global.botname,
            newsletterJid: global.idcennel,
          },
          externalAdReply: {
            showAdAttribution: true,
            title: `${botname}`,
            body: "Tsumuri-Md",
            previewType: "VIDEO",
            thumbnailUrl: `https://i.ibb.co.com/6nJVZPQ/IMG-20240805-WA0245.png`,
            sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
          },
        },
        text: teks,
      };
      return TsuCnn.sendMessage(m.chat, nedd, {
        quoted: kalgans,
      });
    }
    async function replylimit(teks) {
      if (isCreator) return TsuCnn.sendMessage(m.chat, {
        text: teks
      }, {
        quoted: kalgans
      })
      const lndd = {
        text: teks,
      }
      return TsuCnn.sendMessage(m.chat, lndd, {
        quoted: limituse,
      })
    }
    async function replyk(teks) {
      const lndd = {
        text: teks,
      }
      return TsuCnn.sendMessage(m.chat, lndd, {
        quoted: kalgans,
      })
    }
    async function replyj(teks) {
      const lndd = {
        text: teks,
      }
      return TsuCnn.sendMessage(m.chat, lndd, {
        quoted: kalgan2,
      })
    }
    async function replyban(teks) {
      const lndd = {
        text: teks,
      }
      return TsuCnn.sendMessage(m.chat, lndd, {
        quoted: bankal,
      })
    }
    async function replyerr(teks) {
      const lndd = {
        text: teks,
      }
      return TsuCnn.sendMessage(m.chat, lndd, {
        quoted: errklgn
      })
    }
    

    async function replyak2(teks) {
      const ned4 = {
        document: fs.readFileSync("./package.json"),
        fileName: 'Akinator Game',
        mimetype: 'application/pdf',
        fileLength: 2024,
        jpegThumbnail:fs.readFileSync("./media/akinator.jpg"),
        caption: `${teks}`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: `${botname}`,
            body: "Tsumuri-Md",
            thumbnailUrl: `https://i.ibb.co.com/sgQ40xT/akinator-picsay.png`,
            sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      };
      return TsuCnn.sendMessage(m.chat, ned4, {
        quoted: m,
      });
    }
    let pilih = "🌀",
      bomb = "💣";
    if (sender in petakbom) {
      if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
      if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
      if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
        petakbom[sender].board[parseInt(body) - 1] = bomb;
        petakbom[sender].pick++;
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
        petakbom[sender].bomb--;
        petakbom[sender].nyawa.pop();
        let brd = petakbom[sender].board;
        if (petakbom[sender].nyawa.length < 1) {
          await replyk(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Uang :* Rp. 100`);
          TsuCnn.sendMessage(m.chat, {
            react: {
              text: '😂',
              key: m.key
            }
          })
          minUang(sender, 100)
          delete petakbom[sender];
        } else await m.replyk(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
        return !0;
      }
      if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
        petakbom[sender].petak[parseInt(body) - 1] = 1;
        petakbom[sender].board[parseInt(body) - 1] = pilih;
        petakbom[sender].pick++;
        petakbom[sender].lolos--;
        let brd = petakbom[sender].board;
        if (petakbom[sender].lolos < 1) {
          await replyk(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Uang :* Rp. 250`);
          addUang(m.sender, 250)
          delete petakbom[sender];
        } else m.replyk(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
      }
    }
    async function gameSlot() {
    //let sotoy = [`🍎`, `🍋`, `🍒`, `🍑`, `🍍`, `🍇`, `🫐`, `🍓`, `🍐`, `🍏`, `🍊`, `🍌`, `🍉`, `🫒`, `🍅`]
    	//let sotoy = [`🍇`, `🍈`, `🍉`, `🍊`, `🍋`, `🍌`, `🍍`, `🥭`, `🍎`, `🍐`, `🍑`, `🍒`, `🍓`, `🫐`, `🥝`, `🥥`, `🥑`]
    	const slot1 = `${pickRandom([`🍇`, `🍈`, `🍉`, `🍊`, `🍋`, `🍌`, `🍍`, `🥭`, `🍎`, `🍐`, `🍑`, `🍒`, `🍓`, `🫐`, `🥝`, `🥥`, `🥑`])}`
    	const slot2 = `${pickRandom([`🍇`, `🍈`, `🍉`, `🍊`, `🍋`, `🍌`, `🍍`, `🥭`, `🍎`, `🍐`, `🍑`, `🍒`, `🍓`, `🫐`, `🥝`, `🥥`, `🥑`])}`
    	const slot3 = `${pickRandom([`🍇`, `🍈`, `🍉`, `🍊`, `🍋`, `🍌`, `🍍`, `🥭`, `🍎`, `🍐`, `🍑`, `🍒`, `🍓`, `🫐`, `🥝`, `🥥`, `🥑`])}`
    	const listSlot1 = `${slot1} : ${slot2} : ${slot3}`
    	const listSlot2 = `${slot1} : ${slot2} : ${slot3}`
    	const listSlot3 = `${slot1} : ${slot2} : ${slot3}`
    	const randomLimit = Math.floor(Math.random() * 8)
    	try {
    		if (slot1 === slot2 && slot2 === slot3) {
    			minlimit(1)
    			let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n${listSlot1}\n${listSlot2} <=====\n${listSlot3}\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_You Win🎉_ <=====Limit + ${randomLimit}`
    			TsuCnn.sendMessage(m.chat, { text: sloth }, { quoted: m })
    			addlimit(randomLimit)
    		} else {
    			minlimit(1)
    			let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n${listSlot1}\n${listSlot2} <=====\n${listSlot3}\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_You Lose_ <=====\nLimit - 1`
    			TsuCnn.sendMessage(m.chat, { text: sloth }, { quoted: m })
    		}
    	} catch (e) {
    		console.log(e)
    		m.reply('Error!')
    	}
    }
    // tebak jawaban
    const threshold = 0.72
    if ((from in tebakgambar)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebakgambar[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebakgambar[from]
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "gam") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 12000`);
        addUang(m.sender, 12000)
        clearTimeout(waktu);
        delete tebakgambar[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in trivia)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = trivia[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete trivia[from]
        clearTimeout(waktu);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 10.000`);
        addUang(m.sender, 10000)
        clearTimeout(waktu);
        delete trivia[from];
      } else if (body.toLowerCase() != jawaban && !isBot) { // cek jika pesan adalah jawaban yang salah
        replyk(`Jawaban salah\nGame berakhir`)
        delete trivia[from];
      }
    }
    if ((from in tebakanime)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebakanime[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebakanime[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "nim") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 10.000`);
        addUang(m.sender, 10000)
        clearTimeout(waktu);
        delete tebakanime[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in tebaklagu)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebaklagu[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebaklagu[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "agu") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 9.000`);
        addUang(m.sender, 9000)
        clearTimeout(waktu);
        delete tebaklagu[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in kuis)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = kuis[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete kuis[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "usi") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 8.000`);
        addUang(m.sender, 8000)
        clearTimeout(waktu);
        delete kuis[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in siapakahaku)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = siapakahaku[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete siapakahaku[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "sau") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 11.000`);
        addUang(m.sender, 11000)
        clearTimeout(waktu);
        delete siapakahaku[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in tebakkalimat)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebakkalimat[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebakkalimat[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "kal") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 10.500`);
        addUang(m.sender, 10500)
        clearTimeout(waktu);
        delete tebakkalimat[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in tebakkata)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebakkata[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebakkata[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "kat") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah Uang :* Rp. 13.000`);
        addUang(m.sender, 13000)
        clearTimeout(waktu);
        delete tebakkata[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in lengkapikal)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = lengkapikal[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete lengkapikal[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "kap") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n\n*Game :* Lengkapi Kalimat\n*Hadiah Uang :* Rp. 13.000`);
        addUang(m.sender, 13000)
        clearTimeout(waktu);
        delete lengkapikal[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in tebaklirik)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebaklirik[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebaklirik[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "lir") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 8.500`);
        addUang(m.sender, 8500)
        clearTimeout(waktu);
        delete tebaklirik[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in tebakkimia)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebakkimia[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebakkimia[from];
        clearTimeout(waktu);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 14.500`);
        addUang(m.sender, 14500)
        clearTimeout(waktu);
        delete tebakkimia[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in tebakbendera)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = tebakbendera[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete tebakbendera[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "ben") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 9000`);
        addUang(m.sender, 9000)
        clearTimeout(waktu);
        delete tebakbendera[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in asahotak)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = asahotak[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete asahotak[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "aos") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 9.500`);
        addUang(m.sender, 9500)
        clearTimeout(waktu);
        delete asahotak[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in susunkata)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = susunkata[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete susunkata[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "suk") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 7.500`);
        addUang(m.sender, 7500)
        clearTimeout(waktu);
        delete susunkata[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in caklontong)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = caklontong[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete caklontong[from];
        clearTimeout(waktu);
      } else if (budy.toLowerCase() == "cal") {
        replyk(`${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}`);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 14.500`);
        addUang(m.sender, 14500)
        clearTimeout(waktu);
        delete caklontong[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in kuismath)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = kuismath[from]
      if (budy.toLowerCase() == "nyerah") {
        replyk(`*<!> Permainan Telah dihentikan*`);
        delete kuismath[from];
        clearTimeout(waktu);
      } else if (body.toLowerCase().includes(jawaban) && !isBot) {
        await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Uang :* Rp. 12.500`);
        addUang(m.sender, 12500)
        clearTimeout(waktu);
        delete kuismath[from];
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= 0.28 && !isBot) {
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '❌',
            key: m.key
          }
        })
      } else if (similarity(body.toLowerCase().includes(jawaban)) >= threshold && !isBot) {
        m.reply(`*Dikit Lagi!*`)
      }
    }
    if ((from in family100)) {
      let {
        soal,
        jawaban,
        hadiah,
        waktu
      } = family100[from]
      for (let i of jawaban) {
        if (budy.toLowerCase() == "nyerah") {
          await replyk(`*<!> Permainan Telah dihentikan*`);
          delete family100[from]
          clearTimeout(waktu);
        } else if (body.toLowerCase().includes(jawaban) && !isBot) {
          let anu = jawaban.indexOf(i)
          jawaban.splice(anu, 1)
          await replyk(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.split('@')[0]}\n*Jawaban :* ${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}\n*Hadiah Uang :* Rp. 16.500`);
          addUang(m.sender, 16500)
          clearTimeout(waktu);
          delete family100[from];
        } else if (body.toLowerCase() != jawaban && !isBot) {
          TsuCnn.sendMessage(m.chat, {
            react: {
              text: '❌',
              key: m.key
            }
          })
        }
      }
      if (jawaban.length < 1) {
        clearTimeout(waktu);
        delete family100[from];
      }
    }
    try {
      let roof = Object.values(suit).find(v => v.status && [v.penantang, v.ditantang].includes(m.sender))
      if (roof) {
        let win = ''
        let tie = false
        if (m.sender == roof.ditantang && m.isGroup && roof.status == 'WAIT') {
          if (body.toLowerCase() === 'y') {
            roof.status = 'PLAY'
            roof.asal = m.chat
            clearTimeout(roof.waktu)
            uselimit()
            await TsuCnn.sendMessage(m.chat, {
              text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²',
              contextInfo: {
                mentionedJid: [roof.ditantang, roof.penantang]
              }
            }, {
              quoted: m
            })
            if (!roof.pilih1) await TsuCnn.sendText(roof.penantang, `*Silahkan pilih di bawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
            if (!roof.pilih2) await TsuCnn.sendText(roof.ditantang, `*Silahkan pilih di bawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
            roof.waktu_milih = setTimeout(async () => {
              if (!roof.pilih && !roof.pilih2) await TsuCnn.sendMessage(m.chat, {
                text: `Kedua pemain tidak niat main!\nGame suit dibatalkan`
              })
              else if (!roof.pilih || !roof.pilih2) {
                win = !roof.pilih ? roof.ditantang : roof.penantang
                await TsuCnn.sendMessage(m.chat, {
                  text: `@${(roof.pilih ? roof.ditantang : roof.penantang).split('@')[0]} tidak memilih suit\nGame suit dibatalkan`,
                  contextInfo: {
                    mentionedJid: [roof.ditantang, roof.penantang]
                  }
                }, {
                  quoted: kalgans
                })
              }
              delete suit[roof.id]
              return !0
            }, roof.timeout)
          } else if (body.toLowerCase() === 'n') {
            await TsuCnn.sendMessage(m.chat, {
              text: `@${roof.ditantang.split('@')[0]} menolak suit, suit dibatalkan`,
              contextInfo: {
                mentionedJid: [roof.ditantang]
              }
            }, {
              quoted: m
            })
            delete suit[roof.id]
            return !0
          }
        }
        let jwb = m.sender == roof.penantang
        let jwb2 = m.sender == roof.ditantang
        let g = /gunting/i
        let b = /batu/i
        let k = /kertas/i
        let reg = /^(gunting|batu|kertas)/i
        if (jwb && reg.test(budy) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(budy.toLowerCase())[0]
          roof.text = budy
          await TsuCnn.sendMessage(m.chat, {
            text: `Kamu telah memilih *${budy}* ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`
          }, {
            quoted: m
          })
          if (!roof.pilih2) await TsuCnn.sendMessage(roof.ditantang, {
            text: 'Lawan sudah memilih\nSekarang giliran kamu'
          })
        }
        if (jwb2 && reg.test(budy) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(budy.toLowerCase())[0]
          roof.text2 = budy
          await TsuCnn.sendMessage(m.chat, {
            text: `Kamu telah memilih *${budy}* ${!roof.pilih ? '\n\nMenunggu lawan memilih' : ''}`
          }, {
            quoted: m
          })
          if (!roof.pilih) await TsuCnn.sendMessage(roof.penantang, {
            text: 'Lawan sudah memilih\nSekarang giliran kamu'
          })
        }
        let stage = roof.pilih
        let stage2 = roof.pilih2
        if (roof.pilih && roof.pilih2) {
          clearTimeout(roof.waktu_milih)
          if (b.test(stage) && g.test(stage2)) win = roof.penantang
          else if (b.test(stage) && k.test(stage2)) win = roof.ditantang
          else if (g.test(stage) && k.test(stage2)) win = roof.penantang
          else if (g.test(stage) && b.test(stage2)) win = roof.ditantang
          else if (k.test(stage) && b.test(stage2)) win = roof.penantang
          else if (k.test(stage) && g.test(stage2)) win = roof.ditantang
          else if (stage == stage2) tie = true
          let teks = `*🎮 GAME SUIT 🎮*\n\n${tie ? '*HASIL SERI*\n\n' : ''}@${roof.penantang.split('@')[0]} (${roof.text}) ${tie ? '' : roof.penantang == win ? ' Menang' : ' Kalah'}\n@${roof.ditantang.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.ditantang == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : *$' + roof.hadiah + '* uang'}`
          await TsuCnn.sendMessage(roof.asal, {
            text: teks,
            contextInfo: {
              mentionedJid: [roof.ditantang, roof.penantang]
            }
          }, {
            quoted: roof.chat
          })
          if (roof.penantang == win) {
            global.db.data.users[roof.penantang].uang += roof.hadiah
          } else if (roof.ditantang == win) {
            global.db.data.users[roof.ditantang].uang += roof.hadiah
          }
          delete suit[roof.id]
        }
      }
    } catch (e) {
      return reply(e)
    }
    const isTicTacToe = (from, _dir) => {
      let status = false
      Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === from) {
          status = true
        }
      })
      return status
    }
    const getPosTic = (from, _dir) => {
      let position = null
      Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === from) {
          position = i
        }
      })
      if (position !== null) {
        return position
      }
    }
    const KeisiSemua = (tic) => {
      let status = true
      for (let i of tic) {
        if (i !== '❌' && i !== '⭕') {
          status = false
        }
      }
      return status
    }
    const cekIsi = (nomor, tic) => {
      let status = false
      if (tic[nomor] === '❌' || tic[nomor] === '⭕') {
        status = true
      }
      return status
    }
    const cekTicTac = (tic) => {
      let status = false
      if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1] === '⭕' && tic[2] === '⭕') {
        status = true
      } else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕') {
        status = true
      } else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕') {
        status = true
      } else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕') {
        status = true
      } else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕') {
        status = true
      } else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕') {
        status = true
      } else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕') {
        status = true
      } else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕') {
        status = true
      }
      return status
    }
    if (isTicTacToe(from, tictactoe)) {
      try {
        // TicTacToe
        if (isTicTacToe(from, tictactoe)) {
          let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          let posi = tictactoe[from]
          let anu = posi.TicTacToe
          if (posi.status === null) {
            if (sender === posi.ditantang) {
              if (body.toLowerCase() === 'y') {
                the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
                TsuCnn.sendText(from, the, m)
                tictactoe[from].status = true
              } else if (body.toLowerCase() === 'n') {
                db.data.users[m.sender].uang -= 100
                the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 uang karna menolak ajakan pemain`
                TsuCnn.sendText(from, the1, m)
                delete tictactoe[from];
              }
            }
          } else if (posi.status === true) {
            if (sender === posi.penantang) {
              for (let i of nomor) {
                if (Number(body) === i) {
                  if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
                  tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
                  if (cekTicTac(tictactoe[from].TicTacToe)) {
                    the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} uang
Ingin bermain lagi? ${prefix}tictactoe`
                    TsuCnn.sendText(from, the2, m)
                    global.db.data.users[posi.penantang].uang += posi.hadiah
                    global.db.data.users[posi.ditantang].uang -= posi.hadiah
                    delete tictactoe[from];
                  } else if (KeisiSemua(anu)) {
                    the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
                    TsuCnn.sendText(from, the3, m)
                    delete tictactoe[from];
                  } else {
                    the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
                    TsuCnn.sendText(from, the4, m)
                    tictactoe[from].status = false
                  }
                }
              }
            }
          } else if (posi.status === false) {
            if (sender === posi.ditantang) {
              for (let i of nomor) {
                if (Number(body) === i) {
                  if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
                  tictactoe[from].TicTacToe[Number(body) - 1] = '⭕'
                  if (cekTicTac(anu)) {
                    the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} uang
Ingin bermain lagi? ${prefix}tictactoe`
                    TsuCnn.sendText(from, the5, m)
                    global.db.data.users[posi.ditantang].uang += posi.hadiah
                    global.db.data.users[posi.penantang].uang -= posi.hadiah
                    delete tictactoe[from];
                  } else if (KeisiSemua(anu)) {
                    the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
                    TsuCnn.sendText(from, the6, m)
                    delete tictactoe[from];
                  } else {
                    the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
                    TsuCnn.sendText(from, the7, m)
                    tictactoe[from].status = true
                  }
                }
              }
            }
          }
        }
      } catch (err) {
        console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
      }
    }
    //BATAS RESPON GAME
    TsuCnn.autoshalat = TsuCnn.autoshalat ? TsuCnn.autoshalat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? TsuCnn.user.id : m.sender
    let id = m.chat
    if (id in TsuCnn.autoshalat) {
      return false
    }
    let jadwalSholat = {
      shubuh: '04:30',
      terbit: '05:44',
      dhuha: '06:02',
      dzuhur: '12:02',
      ashar: '14:49',
      magrib: '17:52',
      isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
      timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
      if (timeNow === waktu) {
        let caption = `*> Hai kak ${pushname}*,\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat 😊.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
        TsuCnn.autoshalat[id] = [
          reply(caption),
          setTimeout(async () => {
            delete TsuCnn.autoshalat[m.chat]
          }, 57000)
        ]
      }
    }
    
    const asupanr = async (url5) => {
      try {
        let msg = await TsuCnn.sendMessage(from, {
          image: {
            url: url5,
            caption: `Asupan`
          }
        }, {
          quoted: limituse
        })
      } catch (error) {
        console.error(error); // Added logging for error
      }
    }
    const idyt = (url) => {
      const regex = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;
      const match = url.match(regex);
      return match ? match[5] : null;
    };

    async function downloadMp3(link) {
      const ytd = idyt(link)
      const video = await yts({
        videoId: `${ytd}`
      })
      try {
      axios.get(`https://widipe.com/download/ytdl?url=${link}`).then(async ({
        data
      }) => {
        await TsuCnn.sendMessage(m.chat, {
          audio: {
            url: data.result.mp3
          },
          mimetype: "audio/mp4",
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaType: 2,
              mediaUrl: link,
              title: video.title,
              body: video.description,
              sourceUrl: link,
              thumbnailUrl: video.thumbnail,
              renderLargerThumbnail: false
            }
          }
        }, {
          quoted: m
        });
      })
      } catch(error) {
      replyerr(`Sepertinya terjadi kesalahan. Silahkan coba lagi.`)
      console.log(error) 
      }
    }
    async function playmp3d(Link) {
      try {
        axios.get(`https://widipe.com/download/ytdl?url=${Link}`).then(async ({
          data
        }) => {
          await TsuCnn.sendMessage(m.chat, {
            audio: {
              url: data.result.mp3
            },
            mimetype: "audio/mp4"
          }, {
            quoted: {
              key: {
                participant: '0@s.whatsapp.net',
                ...(m.chat ? {
                  remoteJid: `status@broadcast`
                } : {})
              },
              message: {
                locationMessage: {
                  name: `Play audio`,
                  jpegThumbnail: "",
                }
              }
            }
          })
        })
      } catch (error) {
        console.error(error)
      }
    }

    async function downloadMp4(Link) {
      const ytd = idyt(Link)
      const video = await yts({
        videoId: `${ytd}`
      })
      const ytc = `Title: ${video.title}\nDuration: ${video.duration.timestamp}`;
      try {
        /*axios
  .get(`https://api.ssateam.my.id/api/aio?query=${Link}`)
  .then(async ( {data}) => {
 await TsuCnn.sendMessage(m.chat, { video: { url: data.data.response.url }, caption: ytc }, { quoted: mp4k })})*/
        axios.get(`https://widipe.com/download/ytdl?url=${Link}`).then(async ({
          data
        }) => {
          await TsuCnn.sendMessage(m.chat, {
          video: {
            url: data.result.mp4
          },
          caption: ytc,
          fileName: `ytdl.mp4`,
          mimetype: 'video/mp4'
        }, {quoted:m})
        })
      } catch (error) {
        console.log(error)
        m.reply(`Sepertinya terjadi kesalahan`)
      }
    }
    
    /*const downloadMp32 = async (Link) => {
      const ytd = idyt(link)
      const video = await yts({
        videoId: `${ytd}`
      })
const ytdl = require("node-yt-dl");
try {
const result = await ytdl.mp3(text)
        await TsuCnn.sendMessage(m.chat, {
          audio: {
            url: result.media.320
          },
          mimetype: "audio/mp4",
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaType: 2,
              mediaUrl: link,
              title: video.title,
              body: video.description,
              sourceUrl: link,
              thumbnailUrl: video.thumbnail,
              renderLargerThumbnail: false
            }
          }
        }, {
          quoted: m
        });
} catch(error) {
   console.log(error)
   m.reply('') 
  }
    }*/
    
    jarakkota = (dari, ke) => {
      return new Promise(async (resolve, reject) => {
        var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
        var $ = cheerio.load(html),
          obj = {}
        var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
        obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
        obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
        resolve(obj)
      })
    }
    if (AntiLink) {
      if (body.match(/(chat.whatsapp.com\/)/gi)) {
        if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
        let gclink = (`https://chat.whatsapp.com/` + await TsuCnn.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return TsuCnn.sendMessage(m.chat, {
          text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`
        })
        if (isAdmins) return TsuCnn.sendMessage(m.chat, {
          text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`
        })
        if (isCreator) return TsuCnn.sendMessage(m.chat, {
          text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nOwner telah mengirim link, owner bebas memposting link apa pun`
        })
        await TsuCnn.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant
          }
        })
        TsuCnn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        TsuCnn.sendMessage(from, {
          text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`,
          contextInfo: {
            mentionedJid: [sender]
          }
        }, {
          quoted: m
        })
      }
    }
    //BATAS
    if (global.onlypc) {
      if (command & !m.isGroup) {
        return reply(`Tsumuri-Md dalam mode private, gunakan di private chat!`)
      }
    }
    //=================================================//
    if (!TsuCnn.public) {
      if (!m.key.fromMe) return
    }
    let rn = ['recording']
    let jd = rn[Math.floor(Math.random() * rn.length)];
    if (m.message) {
      TsuCnn.sendPresenceUpdate('available', m.chat)
      console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m Tsumuri \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat'), 'args :', chalk.white(args.length))
    }
    //=================================================//
    // Respon Cmd with media
    if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
      let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
      let {
        text,
        mentionedJid
      } = hash
      let messages = await generateWAMessage(from, {
        text: text,
        mentions: mentionedJid
      }, {
        userJid: TsuCnn.user.id,
        quoted: m.quoted && m.quoted.fakeObj
      })
      messages.key.fromMe = areJidsSameUser(m.sender, TsuCnn.user.id)
      messages.key.id = m.key.id
      messages.pushName = m.pushName
      if (m.isGroup) messages.participant = m.sender
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
      }
      TsuCnn.ev.emit('messages.upsert', msg)
    }
    //=================================================//
    if (budy.startsWith('!')) {
      try {
        return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
      } catch (e) {
        reply(e)
      }
    }
    async function sendGeekzMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options)
      let type2 = getContentType(generate.message)
      if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
      if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
      return await TsuCnn.relayMessage(chatId, generate.message, {
        messageId: generate.key.id
      })
    }
    try {
      ppuser = await TsuCnn.profilePictureUrl(m.sender, 'image')
    } catch (err) {
      ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppnyauser = await getBuffer(ppuser)
    try {
      let isNumber = x => typeof x === 'number' && !isNaN(x)
      let limitUser = isCreator ? 1000 : limitawal
      let uangUser = isCreator ? 10000 : uangawal
      let user = global.db.data.users[m.sender]
      if (typeof user !== 'object') global.db.data.users[m.sender] = {}
      if (user) {
        if (!isNumber(user.uang)) user.uang = uangUser
        if (!isNumber(user.limit)) user.limit = limitUser
        if (!('premium' in user)) user.premium = false
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('afkReason' in user)) user.afkReason = ''
        if (!('claim' in user)) user.premium = 1
        if (!isNumber(user.antispam)) user.antispam = 0
        if (!isNumber(user.premiumDate)) user.premiumDate = -1
        if (!isNumber(user.level)) user.level = 0
        if (!('autolevelup' in user)) user.autolevelup = true
        if (!isNumber(user.birthday)) user.birthday = 0
        if (!isNumber(user.cm)) user.cm = 0
        if (!isNumber(user.cl)) user.cl = 0
        if (!isNumber(user.cu)) user.cu = 0
        if (!('role' in user)) user.role = ''
        if (!('cai' in user)) user.cai = ''
        if (!isNumber(user.exp)) user.exp = 100
        if (!isNumber(user.darah)) user.darah = 100
        if (!isNumber(user.besi)) user.besi = 10
        if (!isNumber(user.emas)) user.emas = 10
        if (!isNumber(user.emerald)) user.emerald = 10
        if (!isNumber(user.potion)) user.potion = 10
        if (!isNumber(user.sword)) user.sword = 0
        if (!isNumber(user.armor)) user.armor = 0
        if (!isNumber(user.key)) user.key = 0
        if (!isNumber(user.atm)) user.atm = 0
        if (!isNumber(user.kucing)) user.kucing = 0
        if (!isNumber(user.anjing)) user.anjing = 0
        if (!isNumber(user.anjingexp)) user.anjingexp = 0
        if (!isNumber(user.kucingexp)) user.kucingexp = 0
        if (!isNumber(user.nagaexp)) user.nagaexp = 0
        if (!isNumber(user.kyubiexp)) user.kyubiexp = 0
        if (!isNumber(user.bibitapel)) user.bibitapel = 0
        if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
        if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
        if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
        if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
        if (!isNumber(user.jeruk)) user.jeruk = 0
        if (!isNumber(user.anggur)) user.anggur = 0
        if (!isNumber(user.pisang)) user.pisang = 0
        if (!isNumber(user.mangga)) user.mangga = 0
        if (!isNumber(user.apel)) user.apel = 0
        if (!('codemail' in user)) user.codemail = ''
        if (!('gid' in user)) user.gid = ''
        if (!('owner' in user)) user.owner = false
        if (!isNumber(user.kyubi)) user.kyubi = 0
        if (!isNumber(user.naga)) user.naga = 0
        if (!isNumber(user.rubah)) user.rubah = 0
        if (!isNumber(user.serigara)) user.serigala = 0
        if (!('gmail' in user)) user.gmail = ''
        if (!isNumber(user.kuda)) user.kuda = 0
        if (!isNumber(user.elang)) user.elang = 0
        if (!isNumber(user.feedpet)) user.feedpet = 0
        if (!('regp' in user)) user.regp = false
        if (!isNumber(user.bar)) user.bar = 100
        if (!isNumber(user.rename)) user.rename = 0
        if (!isNumber(user.toxicamount)) user.toxicmount = 0
        if (!('mailcode' in user)) user.mailcode = ''
        if (!isNumber(user.invalidcode)) user.invalidcode = 0
        if (!isNumber(user.paus)) user.paus = 1
        if (!isNumber(user.kepiting)) user.kepiting = 1
        if (!isNumber(user.gurita)) user.gurita = 1
        if (!isNumber(user.cumi)) user.cumi = 1
        if (!isNumber(user.buntal)) user.buntal = 1
        if (!isNumber(user.dory)) user.dory = 1
        if (!isNumber(user.lumba)) user.lumba = 1
        if (!isNumber(user.lobster)) user.lobster = 1
        if (!isNumber(user.hiu)) user.hiu = 1
        if (!isNumber(user.udang)) user.udang = 1
        if (!isNumber(user.ikan)) user.ikan = 1
        if (!isNumber(user.nila)) user.nila = 1
        if (!isNumber(user.bawal)) user.bawal = 1
        if (!isNumber(user.lele)) user.lele = 1
        if (!isNumber(user.orca)) user.orca = 1
        if (!isNumber(user.banteng)) user.banteng = 1
        if (!isNumber(user.harimau)) user.harimau = 1
        if (!isNumber(user.gajah)) user.gajah = 1
        if (!isNumber(user.kambing)) user.kambing = 1
        if (!isNumber(user.panda)) user.panda = 1
        if (!isNumber(user.buaya)) user.buaya = 1
        if (!isNumber(user.kerbau)) user.kerbau = 1
        if (!isNumber(user.sapi)) user.sapi = 1
        if (!isNumber(user.monyet)) user.monyet = 1
        if (!isNumber(user.babihutan)) user.babihutan = 1
        if (!isNumber(user.babi)) user.babi = 1
        if (!isNumber(user.ayam)) user.ayam = 1
        if (!isNumber(user.sate)) user.sate = 0
        if (!isNumber(user.ayamg)) user.ayamg = 0
        if (!isNumber(user.ikang)) user.ikang = 0
        if (!isNumber(user.mie)) user.mie = 0
        if (!isNumber(user.sops)) user.sops = 0
      } else global.db.data.users[m.sender] = {
        name: pushname,
        limit: limitUser,
        uang: uangUser,
        premium: false,
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
        claim: 1,
        mie: 0,
        miem: 0,
        sops: 0,
        paus: 1,
        boxs: 1,
        kepiting: 1,
        gurita: 1,
        cumi: 1,
        buntal: 1,
        dory: 1,
        lumba: 1,
        lobster: 1,
        hiu: 1,
        lele: 1,
        nila: 1,
        bawal: 1,
        udang: 1,
        ikan: 1,
        orca: 1,
        banteng: 1,
        harimau: 1,
        gajah: 1,
        kambing: 1,
        panda: 1,
        buaya: 1,
        kerbau: 1,
        sapi: 1,
        monyet: 1,
        babihutan: 1,
        babi: 1,
        ayam: 1,
        ikang: 0,
        ayamg: 0,
        sate: 0,
        level: 0,
        darah: 100,
        autolevelup: true,
        bar: 100,
        gmail: '',
        toxicmount: 0,
        gid: '',
        birthdaySet: false,
        birthday: 0,
        besi: 10,
        owner: false,
        regp: false,
        cai: '',
        codemail: '',
        bibitanggur: 0,
        bibitapel: 0,
        bibitpisang: 0,
        bibitmangga: 0,
        bibitjeruk: 0,
        apel: 0,
        anggur: 0,
        mangga: 0,
        pisang: 0,
        jeruk: 0,
        cm: 0,
        atm: 0,
        kucing: 0,
        naga: 0,
        feedpet: 0,
        kuda: 0,
        kyubi: 0,
        anjing: 0,
        elang: 0,
        rubah: 0,
        elang: 0,
        serigala: 0,
        cl: 0,
        cu: 0,
        emas: 10,
        emerald: 10,
        potion: 10,
        sword: 0,
        armor: 0,
        key: 0,
        role: '',
        rename: 0,
        exp: 100
      }
    } catch (err) {
      console.log(err)
    }
    // function rpg
    const {
      cekDuluHasilBuruanNya,
      addInventoriBuruan,
      addIkan,
      addAyam,
      addKelinci,
      addDomba,
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam,
      kurangKelinci,
      kurangDomba,
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam,
      getBotol,
      addBotol,
      kurangBotol,
      getKardus,
      addKardus,
      kurangKardus,
      getKaleng,
      addKaleng,
      kurangKaleng,
      getKelinci,
      getDomba,
      getSapi,
      getGajah
    } = require('./database/rpg/buruan')
    const {
      cekMakananJson,
      addInvMakanan,
      addSate,
      kurangSate,
      getSate,
      addGoreng,
      kurangGoreng,
      getGoreng,
      addSop,
      kurangSop,
      getSop,
      addSteak,
      kurangSteak,
      getSteak
    } = require('./database/rpg/makanan')
    const {
      cekBuahJson,
      addInvBuah,
      addBibitApel,
      kurangBibitApel,
      getBibitApel,
      addBibitBuah,
      kurangBibitBuah,
      getBibitBuah,
      addBuah,
      kurangBuah,
      getBuah,
      addApel,
      kurangApel,
      getApel,
      addDitanam,
      kurangDitanam,
      getDitanam,
      addDitanam1,
      kurangDitanam1,
      getDitanam1
    } = require('./database/rpg/buah')
    const {
      cekWarungJson,
      addInvWarung,
      addPermen,
      kurangPermen,
      getPermen,
      addEs,
      kurangEs,
      getEs,
      addPedas,
      kurangPedas,
      getPedas,
      addRingan,
      kurangRingan,
      getRingan
    } = require('./database/rpg/warung')
    const {
      cekBuildJson,
      addInvBuild,
      addRumah,
      kurangRumah,
      getRumah,
      addPertanian,
      kurangPertanian,
      getPertanian,
      addWarung,
      kurangWarung,
      getWarung
    } = require('./database/rpg/build')
    const {
      cekBahanJson,
      addInvBahan,
      addKayu,
      kurangKayu,
      getKayu,
      addBatu,
      kurangBatu,
      getBatu,
      addSemen,
      kurangSemen,
      getSemen,
      addPasir,
      kurangPasir,
      getPasir
    } = require('./database/rpg/bahan')
    const {
      getJoinRandomId,
      addJoinUser,
      createSerialJoin,
      checkJoinUser
    } = require('./database/rpg/joinrpg.js')
    let _buruan = JSON.parse(fs.readFileSync('./database/rpg/hasil_buruan.json'));
    let _darahOrg = JSON.parse(fs.readFileSync('./database/rpg/darah.json'))
    const levelling = require('./lib/levelling')
    const role = () => {
      let user = global.db.data.users[m.sender]
      let role = (user.level <= 3) ? 'Warrior V' : ((user.level >= 3) && (user.level <= 6)) ? 'Warrior IV' : ((user.level >= 6) && (user.level <= 9)) ? 'Warrior III' : ((user.level >= 9) && (user.level <= 12)) ? 'Warrior II' : ((user.level >= 12) && (user.level <= 15)) ? 'Warrior I' : ((user.level >= 15) && (user.level <= 18)) ? 'Elite V' : ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV' : ((user.level >= 21) && (user.level <= 24)) ? 'Elite III' : ((user.level >= 24) && (user.level <= 27)) ? 'Elite II' : ((user.level >= 27) && (user.level <= 30)) ? 'Elite I' : ((user.level >= 30) && (user.level <= 33)) ? 'Master V' : ((user.level >= 33) && (user.level <= 36)) ? 'Master IV' : ((user.level >= 36) && (user.level <= 39)) ? 'Master III' : ((user.level >= 39) && (user.level <= 42)) ? 'Master II' : ((user.level >= 42) && (user.level <= 45)) ? 'Master I' : ((user.level >= 45) && (user.level <= 48)) ? 'Grand Master V' : ((user.level >= 48) && (user.level <= 51)) ? 'Grand Master IV' : ((user.level >= 51) && (user.level <= 54)) ? 'Grand Master III' : ((user.level >= 54) && (user.level <= 57)) ? 'Grand Master II' : ((user.level >= 57) && (user.level <= 60)) ? 'Grand Master I' : ((user.level >= 60) && (user.level <= 63)) ? 'Epic V' : ((user.level >= 63) && (user.level <= 66)) ? 'Epic IV' : ((user.level >= 66) && (user.level <= 69)) ? 'Epic III' : ((user.level >= 69) && (user.level <= 71)) ? 'Epic II' : ((user.level >= 71) && (user.level <= 74)) ? 'Epic I' : ((user.level >= 74) && (user.level <= 77)) ? 'Legend V' : ((user.level >= 77) && (user.level <= 80)) ? 'Legend IV' : ((user.level >= 80) && (user.level <= 83)) ? 'Legend III' : ((user.level >= 83) && (user.level <= 86)) ? 'Legend II' : ((user.level >= 86) && (user.level <= 89)) ? 'Legend I' : ((user.level >= 89) && (user.level <= 91)) ? 'Mythic V' : ((user.level >= 91) && (user.level <= 94)) ? 'Mythic IV' : ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III' : ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II' : ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I' : ((user.level >= 105) && (user.level <= 120)) ? 'Mythical glory' : ((user.level >= 120) && (user.level <= 130)) ? 'Mythical glory 700' : ((user.level >= 150) && (user.level <= 160)) ? 'Mythical glory 800' : ((user.level >= 160) && (user.level <= 170)) ? 'Mythical glory 900' : ((user.level >= 170) && (user.level <= 185)) ? 'Mythical glory 1000' : ((user.level >= 185) && (user.level <= 200)) ? 'Mythical glory 1100' : ((user.level >= 200) && (user.level <= 400)) ? 'Mythical glory 1200' : ((user.level >= 405) && (user.level <= 450)) ? 'Mythical glory 1300' : ((user.level >= 700) && (user.level <= 1000)) ? 'Mythical glory 100000' : 'God?'
      return role
    }
    const level = global.db.data.users[m.sender].level
    var levelorang = `-`
    if (isRegistered) {
      var levelorang = level
    }
    db.data.users[m.sender].role = role()
    var rolenya = `-`
    if (isRegistered) {
      var rolenya = role()
    }
    const addexp = () => {
      const addexp = db.data.users[m.sender].exp += 20
      return addexp
    }
    if (command && budy) {
      addexp()
    }
    const addMonay = (sender, amount) => {
      const addM = db.data.users[sender].uang += amount
      return addM
    }
    const kurangMonay = (sender, amount) => {
      const kurM = db.data.users[sender].uang -= amount
      return kurM
    }
    const getMonay = (sender) => {
      const cekM = db.data.users[sender].uang
      return cekM
    }
    const addDarah = (sender, amount) => {
      const addD = db.data.users[sender].darah += amount
      return addD
    }
    const kurangDarah = (sender, amount) => {
      const kurD = db.data.users[sender].darah -= amount
      return kurD
    }
    const getDarah = (sender) => {
      const cekD = db.data.users[sender].darah
      return cekD
    }
    const addBar = (sender, amount) => {
      const addB = db.data.users[sender].bar += amount
      return addB
    }
    const kurangBar = (sender, amount) => {
      const kurB = db.data.users[sender].bar -= amount
      return kurB
    }
    const getBar = (sender) => {
      const cekB = db.data.users[sender].bar
      return cekB
    }
    const addBesi = (sender, amount) => {
      const addB = db.data.users[sender].besi += amount
      return addB
    }
    const kurangBesi = (sender, amount) => {
      const kurB = db.data.users[sender].besi -= amount
      return kurB
    }
    const getBesi = (sender) => {
      const cekB = db.data.users[sender].besi
      return cekB
    }
    const addEmas = (sender, amount) => {
      const addM = db.data.users[sender].emas += amount
      return addM
    }
    const kurangEmas = (sender, amount) => {
      const kurM = db.data.users[sender].emas -= amount
      return kurM
    }
    const getEmas = (sender) => {
      const cekM = db.data.users[sender].emas
      return cekM
    }
    const addEmerald = (sender, amount) => {
      const addM = db.data.users[sender].emerald += amount
      return addM
    }
    const kurangEmerald = (sender, amount) => {
      const kurM = db.data.users[sender].emerald -= amount
      return kurM
    }
    const getEmerald = (sender) => {
      const cekM = db.data.users[sender].emerald
      return cekM
    }
    const addPotion = (sender, amount) => {
      const addM = db.data.users[sender].potion += amount
      return addM
    }
    const kurangPotion = (sender, amount) => {
      const kurM = db.data.users[sender].potion -= amount
      return kurM
    }
    const getPotion = (sender) => {
      const cekM = db.data.users[sender].potion
      return cekM
    }
    const addCM = (sender, amount) => {
      const addM = db.data.users[sender].cm += amount
      return addM
    }
    const kurangCM = (sender, amount) => {
      const kurM = db.data.users[sender].cm -= amount
      return kurM
    }
    const getCM = (sender) => {
      const cekM = db.data.users[sender].cm
      return cekM
    }
    const addCL = (sender, amount) => {
      const addM = db.data.users[sender].cl += amount
      return addM
    }
    const kurangCL = (sender, amount) => {
      const kurM = db.data.users[sender].cl -= amount
      return kurM
    }
    const getCL = (sender) => {
      const cekM = db.data.users[sender].cl
      return cekM
    }
    const addCU = (sender, amount) => {
      const addM = db.data.users[sender].cu += amount
      return addM
    }
    const kurangCU = (sender, amount) => {
      const kurM = db.data.users[sender].cu -= amount
      return kurM
    }
    const getCU = (sender) => {
      const cekM = db.data.users[sender].cu
      return cekM
    }
    const addKucing = (sender, amount) => {
      const addB = db.data.users[sender].kucing += amount
      return addB
    }
    const kurangKucing = (sender, amount) => {
      const kurB = db.data.users[sender].kucing -= amount
      return kurB
    }
    const getKucing = (sender) => {
      const cekB = db.data.users[sender].kucing
      return cekB
    }
    const addNaga = (sender, amount) => {
      const addB = db.data.users[sender].naga += amount
      return addB
    }
    const kurangNaga = (sender, amount) => {
      const kurB = db.data.users[sender].naga -= amount
      return kurB
    }
    const getNaga = (sender) => {
      const cekB = db.data.users[sender].naga
      return cekB
    }
    const addKyubi = (sender, amount) => {
      const addB = db.data.users[sender].anjing += amount
      return addB
    }
    const kurangKyubi = (sender, amount) => {
      const kurB = db.data.users[sender].anjing -= amount
      return kurB
    }
    const getKyubi = (sender) => {
      const cekB = db.data.users[sender].anjing
      return cekB
    }
    const addAnjing = (sender, amount) => {
      const addB = db.data.users[sender].anjing += amount
      return addB
    }
    const kurangAnjing = (sender, amount) => {
      const kurB = db.data.users[sender].anjing -= amount
      return kurB
    }
    const getAnjing = (sender) => {
      const cekB = db.data.users[sender].anjing
      return cekB
    }
    const addKuda = (sender, amount) => {
      const addB = db.data.users[sender].kuda += amount
      return addB
    }
    const kurangKuda = (sender, amount) => {
      const kurB = db.data.users[sender].kuda -= amount
      return kurB
    }
    const getKuda = (sender) => {
      const cekB = db.data.users[sender].kuda
      return cekB
    }
    const addElang = (sender, amount) => {
      const addB = db.data.users[sender].elang += amount
      return addB
    }
    const kurangElang = (sender, amount) => {
      const kurB = db.data.users[sender].elang -= amount
      return kurB
    }
    const getElang = (sender) => {
      const cekB = db.data.users[sender].elang
      return cekB
    }
    const addRubah = (sender, amount) => {
      const addB = db.data.users[sender].rubah += amount
      return addB
    }
    const kurangRubah = (sender, amount) => {
      const kurB = db.data.users[sender].rubah -= amount
      return kurB
    }
    const getRubah = (sender) => {
      const cekB = db.data.users[sender].rubah
      return cekB
    }
    const addSerigala = (sender, amount) => {
      const addB = db.data.users[sender].serigala += amount
      return addB
    }
    const kurangSerigala = (sender, amount) => {
      const kurB = db.data.users[sender].serigala -= amount
      return kurB
    }
    const getSerigala = (sender) => {
      const cekB = db.data.users[sender].serigala
      return cekB
    }
    const addKey = (sender, amount) => {
      const addB = db.data.users[sender].key += amount
      return addB
    }
    const kurangKey = (sender, amount) => {
      const kurB = db.data.users[sender].key -= amount
      return kurB
    }
    const getKey = (sender) => {
      const cekB = db.data.users[sender].key
      return cekB
    }
    const addArmor = (sender, amount) => {
      const addB = db.data.users[sender].armor += amount
      return addB
    }
    const kurangArmor = (sender, amount) => {
      const kurB = db.data.users[sender].armor -= amount
      return kurB
    }
    const getArmor = (sender) => {
      const cekB = db.data.users[sender].armor
      return cekB
    }
    const addSword = (sender, amount) => {
      const addB = db.data.users[sender].sword += amount
      return addB
    }
    const kurangSword = (sender, amount) => {
      const kurB = db.data.users[sender].sword -= amount
      return kurB
    }
    const getSword = (sender) => {
      const cekB = db.data.users[sender].sword
      return cekB
    }

    function antiemror() {
      let useret = global.db.data.users[m.sender]
      if ((useret.uang * 1) > 999999999999999999) {
        useret.uang = 999999999999999999
      } else if ((useret.uang * 1) < 0) {
        useret.uang = 0
      }
      if (useret.uang == NaN) {
        useret.uang = 0
      }
    }
    if (isRegistered && m.sender && isCreator && !isCreator) {
      antiemror()
    }
    const isJoin = checkJoinUser(m.sender)
    let DarahAwal = global.rpg.darahawal
    let BarAwal = 100
    const isDarah = getDarah(m.sender)
    const isBar = getBar(m.sender)
    const isCekDarah = getDarah(m.sender)
    const isCekBar = getBar(m.sender)
    const isPotion = getPotion(m.sender)
    const isIkan = getIkan(m.sender)
    const isBotol = getBotol(m.sender)
    const isCM = getCM(m.sender)
    const isTanamApel = getDitanam(m.sender)
    const isTanamBuah = getDitanam1(m.sender)
    const isSate = getSate(m.sender)
    const isKey = getKey(m.sender)
    const isGoreng = getGoreng(m.sender)
    const isSop = getSop(m.sender)
    const isSteak = getSteak(m.sender)
    const isCU = getCU(m.sender)
    const isCL = getCL(m.sender)
    const isBibitApel = getBibitApel(m.sender)
    const isBibitBuah = getBibitBuah(m.sender)
    const isApel = getApel(m.sender)
    const isSword = getSword(m.sender)
    const isArmor = getArmor(m.sender)
    const isBuah = getBuah(m.sender)
    const isRumah = getRumah(m.sender)
    const isPertanian = getPertanian(m.sender)
    const isWarung = getWarung(m.sender)
    const isEs = getEs(m.sender)
    const isPedas = getPedas(m.sender)
    const isPermen = getPermen(m.sender)
    const isRingan = getRingan(m.sender)
    const isKaleng = getKaleng(m.sender)
    const isKardus = getKardus(m.sender)
    const isAyam = getAyam(m.sender)
    const isBatu = getBatu(m.sender)
    const isKucing = getKucing(m.sender)
    const isKayu = getKayu(m.sender)
    const isSemen = getSemen(m.sender)
    const isPasir = getPasir(m.sender)
    const isNaga = getNaga(m.sender)
    const isAnjing = getAnjing(m.sender)
    const isKyubi = getKyubi(m.sender)
    const isKelinci = getKelinci(m.sender)
    const isDomba = getDomba(m.sender)
    const isSapi = getSapi(m.sender)
    const isGajah = getGajah(m.sender)
    const isBesi = getBesi(m.sender)
    const isEmas = getEmas(m.sender)
    const isEmerald = getEmerald(m.sender)
    const isInvMakanan = cekMakananJson(m.sender)
    const isInvBahan = cekBahanJson(m.sender)
    const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
    const isInvWarung = cekWarungJson(m.sender)
    const isInvBuild = cekBuildJson(m.sender)
    const isInvBuah = cekBuahJson(m.sender)
    const ikan = ['?', '?', '?']
    // ==============
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let setting = global.db.data.settings[botNumber]
    if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
    if (setting) {
      if (!isNumber(setting.status)) setting.status = 0
      if (autobio) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await TsuCnn.updateProfileStatus(`I am Tsumuri-Md | Aktif Selama ${uptime} ⏳ | Mode : ${TsuCnn.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
      }
      if (autoread) {
        TsuCnn.readMessages([m.key])
      }
    } else global.db.data.settings[botNumber] = {
      status: 0,
      autobio: false,
      autoread: false
    }
    if (!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
    if (!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
    if (!('claimprem' in db.data.settings)) db.data.settings.claimprem = []
    if (!('claimpremkadaluwarsa' in db.data.settings)) db.data.settings.claimpremkadaluwarsa = []
    if (m?.isGroup && chat) {
      if (!('welcome' in chat)) chat.welcome = true
      if (!('sWelcome' in chat)) chat.sWelcome = ''
      if (!isNumber(chat.cleartime)) chat.clearTime = 0
    } else if (m?.isGroup) global.db.data.chats[m.chat] = {
      sWelcome: '',
      welcome: true,
      clearTime: 0
    }
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
      if (!('mute' in chats)) chats.mute = false
      if (!('TsuCnn' in chats)) chats.TsuCnn = false
    } else global.db.data.chats[m.chat] = {
      mute: false,
      TsuCnn: false
    }
    if (db.data.chats[m.chat].TsuCnn) {
      let name = await TsuCnn.getName(m.sender)
      let prompt = `Mulai sekarang nama kamu adalah Tsumuri-Md, kamu mempunyai sifat yang ramah, lucu, dan suka membantu orang lain, kamu selalu menjawab semua pertanyaan yang diberikan menggunakan bahasa indonesia dan selalu menggunakan kata panggilan aku dan kamu!, kamu adalah ai buatan dari Luhung yang dibuat hanya untuk menjawab semua pertanyaan dengan ramah, dan lawan bicaramu sekarang adalah ${name}, dan kamu merespon pertanyaan diawali dengan kata sapaan sepeti halo ditambahkan dengan ${name}. dan ingat jangan bicara menggunakan kata formal anggap ${name} adalah teman mu.`
      let TsuCnnxdzz = await fetchJson(`https://itzpire.site/ai/gpt-logic?q=${budy.toLowerCase()}&logic=${prompt}&realtime=true`)
      TsuCnn.sendMessage(m.chat, {
        text: `*[ F U R I N A - A I ]*\n\n${TsuCnnxdzz.data.response}`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: botname,
            body: '',
            thumbnailUrl: `${thumbnail}`,
            sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      })
    }
    //================== [ ALL FUNCTION ] ==================//
async function npmdownloader(pkg, pkgver) {
  try {
    const filePath = await new Promise((resolve, reject) => {
      exec(`npm pack ${pkg}@${pkgver}`, (error, stdout, stderr) => {
        if (error) {
          m.reply('Error atau Package tidak ditemukan');
          console.error(`exec error: ${error}`);
          reject(error);
          return;
        }
        resolve(stdout.trim());
      });
    });

    const fileName = filePath.split('/').pop(); // Mendapatkan nama file dari path
    const data = await fs.promises.readFile(filePath);

    await TsuCnn.sendMessage(m.chat, {
      document: data,
      mimetype: "application/zip",
      fileName: fileName,
      caption: 'Hasil dari ' + pkg
    }, {
      quoted: m
    });

    // Menghapus file setelah dikirim
    await fs.promises.unlink(filePath);
    console.log(`File ${fileName} berhasil dihapus`);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
    
async function kuduregis() {
let buttons = [{
   type: "buttons",
   text: "Daftar",
   id: `${prefix}daftar`
 },
 {
  type: "url",
  text: "👤 Owner",
  url: "https://wa.me/6282328190003"
 }]
await TsuCnn.sendButtonImg(m.chat, 'Akses Ditolak!!\n─────────\n'+mess.regis, Styles('atau dengan Tekan tombol di bawah untuk daftar'), buttons, 'https://telegra.ph/file/2bec3a2529b16d2f95bd9.png', m)
}

async function searchSpotifyTracks(query) {
  const clientId = 'a22b092faff7425f85fe2d43ea77236c';
  const clientSecret = '05aaa54222464501b50afc734640f88e';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

    let limitnya = db.data.users[m?.sender].limit
    let uangnya = db.data.users[m?.sender].uang
    const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false
    async function uselimit() {
      if (isCreator) return
      db.data.users[m?.sender].limit -= 1
      m.reply("ʟɪᴍɪᴛ -1.")
    }
    async function addlimit(nmr) {
      if (isCreator) return
      db.data.users[m?.sender].limit -= nmr
    }
    async function uselimit2() {
      if (isCreator) return
      db.data.users[m?.sender].limit -= 1
    }
    async function minlimit(amount) {
      if (isCreator) return
      db.data.users[m?.sender].limit -= amount
    }
    const limituse2 = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        locationMessage: {
          name: `ʟɪᴍɪᴛ ʙᴇʀᴋᴜʀᴀɴɢ 5.`,
          jpegThumbnail: "",
        }
      }
    }
    async function minUang(userId, amount) {
      if (isCreator) return
      db.data.users[m?.sender].uang -= amount
    }
    async function addUang(userid, amount) {
      if (isCreator) return
      db.data.users[m?.sender].uang += amount
    }
    async function formatViews(views) {
      if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
      } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
      } else {
        return views.toString();
      }
    }
    
    const formatViews2 = (num) => {
      if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
      } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
      } else {
        return num.toString();
      }
    };

    async function igdl2(url) {
      let res = await axios("https://indown.io/");
      let _$ = cheerio.load(res.data);
      let referer = _$("input[name=referer]").val();
      let locale = _$("input[name=locale]").val();
      let _token = _$("input[name=_token]").val();
      let {
        data
      } = await axios.post("https://indown.io/download", new URLSearchParams({
        link: url,
        referer,
        locale,
        _token,
      }), {
        headers: {
          cookie: res.headers["set-cookie"].join("; "),
        },
      });
      let $ = cheerio.load(data);
      let result = [];
      let __$ = cheerio.load($("#result").html());
      __$("video").each(function() {
        let $$ = $(this);
        result.push({
          type: "video",
          thumbnail: $$.attr("poster"),
          url: $$.find("source").attr("src"),
        });
      });
      __$("img").each(function() {
        let $$ = $(this);
        result.push({
          type: "image",
          url: $$.attr("src"),
        });
      });
      return result;
    }
    Array.prototype.rendem = function rendem() {
      return this[Math.floor(Math.random() * this.length)];
    }

    function randomNomor(min, max = null) {
      if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } else {
        return Math.floor(Math.random() * min) + 1
      }
    }

    function pickRandom(list) {
      return list[Math.floor(Math.random() * list.length)]
    }

    function capital(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function formatter(value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function calculatePPN(value) {
      return value * 0.1;
    }

    function removeItem(array, item) {
      return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
    }

    function monospace(string) {
      return '```' + string + '```'
    }

    function Styles2(string) {
      var replacements = {
        'a': 'ᴀ',
        'b': 'ʙ',
        'c': 'ᴄ',
        'd': 'ᴅ',
        'e': 'ᴇ',
        'f': 'ғ',
        'g': 'ɢ',
        'h': 'ʜ',
        'i': 'ɪ',
        'j': 'ᴊ',
        'k': 'ᴋ',
        'l': 'ʟ',
        'm': 'ᴍ',
        'n': 'ɴ',
        'o': 'ᴏ',
        'p': 'ᴘ',
        'q': 'ǫ',
        'r': 'ʀ',
        's': 's',
        't': 'ᴛ',
        'u': 'ᴜ',
        'v': 'ᴠ',
        'w': 'ᴡ',
        'x': 'x',
        'y': 'ʏ',
        'z': 'ᴢ'
      };
      return string.replace(/[a-z]/gi, function(match) {
        return replacements[match.toLowerCase()] || match;
      });
    }

    function Cekst(string) {
      var replacements = {
        'c': 'C',
        'k': 'k '
      };
      return string.replace(/[a-z]/gi, function(match) {
        return replacements[match.toLowerCase()] || match;
      });
    }
    cron.schedule('00 00 * * *', () => {
      let user = Object.keys(global.db.data.users)
      for (let jid of user) {
        global.db.data.users[jid].claim = 1
        if (global.db.data.users[jid].uang < 10000 && global.db.data.users[jid].limit < 1) {
          global.db.data.users[jid].limit = limitawal
          global.db.data.users[jid].uang = uangawal
        }
      }
    }, {
      scheduled: true,
      timezone: "Asia/Makassar"
    })
    const totalFitur = () => {
      var mytext = fs.readFileSync("./Tsu Cmd.js").toString()
      var numUpper = (mytext.match(/break/g) || []).length;
      return numUpper
    }
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afkTime
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      reply(`
*[ USER AFK ! ]*
${pushname} AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
    }
    if (global.db.data.users[m.sender].afkTime > 0) {
    if TsuCnn.ev.on('presence.update', (presenceUpdate) => {
        const { m.chat, presences } = presenceUpdate;
        for (const [participant, data] of Object.entries(presences)) { 
            if (data.lastKnownPresence === 'composing') {
                global.db.data.users[m.sender].afkTime = -1
                global.db.data.users[m.sender].afkReason = ''
            }
        }
    });
    }
    if (global.db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender]
      reply(`@${m.sender.replace(/@.+/g, '')} Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
      user.afkTime = -1
      user.afkReason = ''
    }
    async function dellCase(filePath, caseNameToRemove) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Terjadi kesalahan:', err);
          return;
        }
        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error('Terjadi kesalahan saat menulis file:', err);
            return;
          }
          console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
      });
    }
    let footerm = Styles('> jika menemukan error pada fitur, bisa chat owner.')
    if (prefix && command) {
      let caseNames = getCaseNames();

      function getCaseNames() {
        const fs = require('fs');
        try {
          const data = fs.readFileSync('Tsu Cmd.js', 'utf8');
          const casePattern = /case\s+'([^']+)'/g;
          const matches = data.match(casePattern);
          if (matches) {
            const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
            return caseNames;
          } else {
            return [];
          }
        } catch (err) {
          console.log('Terjadi kesalahan:', err);
          return [];
        }
      }
      let noPrefix = command
      let mean = didyoumean(noPrefix, caseNames);
      let sim = similarity(noPrefix, mean);
      let similarityPercentage = parseInt(sim * 100);
      if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
        let response = `Mungkin maksudmu:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
        replyj(response)
      }
    }
    const isBan = [...banusr].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
    //=================================================//
  if (!isBot) {
    switch (uncommand) {
      case "konnichiwa": 
      m.reply("Konnichiwa")
      break
      case "こんにちは": 
      m.reply("こんにちは")
      break
      case "konbanwa": 
      m.reply("Konbanwa")
      break
      case "んばんは": 
      m.reply("んばんは")
      break
      case "oyasuminasai": 
      case "oyasumi": 
      m.reply("Oyasuminasai")
      break
      case "お休みなさい": 
      m.reply("お休みなさい")
      break
      case "ohayou": 
      case "ohayo": 
      m.reply("Ohayou")
      break
      case "おはよう": 
      m.reply("おはよう")
      break
    
      case "hai":
      case "haii":
      case "halo":
      case "hallo":
      case "hello":
      case "helo":
      case "hola":
      case "holla":
      case "hii":
      case "hi": {
        if (isBot) return
        if (m.quoted) return;
        if (isCreator) return m.reply(`*${uncommand.replace(/[h]/gi, "H")} Owner ${pushname}*`)
        let caption = `*${uncommand.replace(/[h]/gi, "H")} ${pushname} 👋*`
        m.reply(caption)
      }
      break
      case "test":
      case "bot":
      case "tes": {
        if (text) return
        let caption = `Aku masih on kak`
        m.reply(caption)
      }
      break
      case "p":
      case "pe":
      case "pp":
      case "ppp":
      case "pppp": {
        if (text) return
        let caption = `Pa pe pa pe, Biasakan salam.`
        m.reply(caption)
      }
      break
      case "assalamu'alaikum":
      case "assalamualaikum": {
        let caption = `Waalaikumsalam Warahmatullahi Wabarakatuh.`
        m.reply(caption)
      }
      break
      case "shalom": {
        let caption = `Shalom.`
        m.reply(caption)
      }
      break
      case "om": {
        const cmds = args[0]?.toLowerCase();
        if (cmds === "swastiastu") {
          m.reply("Om Swastiastu.")
        } else if (cmds === "swastyastu") {
          m.reply("Om Swastyastu.")
        }
      }
      break
      case "salam": {
        const cmds2 = args[0]?.toLowerCase();
        if (!cmds2) {
          m.reply("Salam.")
        } else if (cmds2 === "sejahtera") {
          m.reply("Amin shalom.")
        } else if (cmds2 === "olahraga") {
          m.reply("Salam.")
        } else if (cmds2 === "kebajikan") {
          m.reply("Salam kebajikan.")
        }
      }
      break
      case "namo": {
        const cmdn = args[0]?.toLowerCase();
        if (cmdn === "budhaya") {
          m.reply("Namo Budhaya.")
        }
      }
      break
  default:
  }
} else return false
//==============
  if (!isBan) {
    switch (command) {
      case 'menu': {
        if (!args[0]) {
          await TsuCnn.sendMessage(m.chat, {
            react: {
              text: "⏱",
              key: m.key,
            }
          })
          let sections = [{
            title: '         『╶─┈─╌╌╼  List Menu ❦ ╾╌┈╌─╌╴』',
            highlight_label: `Tersedia ${totalFitur()} fitur`,
            rows: [{
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🔥> Menu All',
                description: `╽『 Semua fitur 』\n┗━─────╼╍╾`,
                id: `${prefix}allmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<❄> Menu Main',
                description: `╽『 Fitur biasa 』\n┗━─────╼╍╾`,
                id: `${prefix}mainmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🪼> Menu Download',
                description: `╽『 Fitur untuk mengunduh 』\n┗━─────╼╍╾`,
                id: `${prefix}downloadmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🔎> Menu Search',
                description: `╽『 Fitur untuk mencari 』\n┗━─────╼╍╾`,
                id: `${prefix}searchmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<⛅> Menu Group',
                description: `╽『 Fitur untuk group 』\n┗━─────╼╍╾`,
                id: `${prefix}groupmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<💫> Menu Agama',
                description: `╽『 Fitur untuk agama 』\n┗━─────╼╍╾`,
                id: `${prefix}agamamenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🤖> Menu Ai',
                description: `╽『 Fitur ai 』\n┗━─────╼╍╾`,
                id: `${prefix}aimenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<📖> Menu Primbon',
                description: `╽『 Fitur primbon 』\n┗━─────╼╍╾`,
                id: `${prefix}primbonmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🏪> Menu Store',
                description: `╽『 Fitur untuk toko 』\n┗━─────╼╍╾`,
                id: `${prefix}storemenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<☀> Menu Fun',
                description: `╽『 Fitur untuk bersenang² 』\n┗━─────╼╍╾`,
                id: `${prefix}funmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🪵> Menu Rpg',
                description: `╽『 Fitur berpetualangan 』\n┗━─────╼╍╾`,
                id: `${prefix}rpgmenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🎮> Menu Game',
                description: `╽『 Fitur permainan 』\n┗━─────╼╍╾`,
                id: `${prefix}gamemenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<✨> Menu Other',
                description: `╽『 Fitur Lainnya 』\n┗━─────╼╍╾`,
                id: `${prefix}othermenu`
              }, {
                header: '┏╾╌──┄┄┄┄─┄╸', 
                title: '┊╣<🔞> Menu Nsfw',
                description: `╽『 Fitur dewasa 』\n┗━─────╼╍╾`,
                id: `${prefix}nsfwmenu`
              },
            ]
          }, {
            title: '         『╶─┈─╌╌╼ Menu Info ❦ ╾╌┈╌─╌╴』',
            highlight_label: 'Informasi',
            rows: [{
              header: '╭╼━─━┄┄┄┄─┄╸', 
              title: '╽╣〕Rules',
              description: `╿『 Menampilkan Rules 』\n╰────╍╍╍───`,
              id: `${prefix}rules`
            }, {
              header: '╭╼━──┄━┄┄─┄╸', 
              title: '╽╣〕Owner',
              description: `╿『 Menampilkan Owner bot 』\n╰────╍╍╍──`,
              id: `${prefix}owner`
            }, {
              header: '╭╼╍──┄┄┄┄──╸', 
              title: '╽╣〕Changelog',
              description: `╿『 Menampilkan Changelog 』\n╰────╍╍╍──`,
              id: `${prefix}changelog`
            }]
          }]
          let listMessage = {
            title: '「List Menu」',
            sections
          };
          let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: global.idsal,
                      newsletterName: `𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸`,
                      serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                      businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id)
                    },
                  },
                  body: proto.Message.InteractiveMessage.Body.create({}),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: Styles('jika menemukan error pada fitur, bisa chat owner.')
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    title: `*> Hai ${pushname}, ${ucapanWakt2}*.${Styles2(`
╭┈──┈╌──⊰ *All Info* ⊱──┈╌┈─╌╌⊰
╎ •⊰ ❀ *Your Info* ⊱──┈┈─╌╌╌⪼
╎•⟢ *Number* : @${m.sender.replace(/@.+/g, '')}
╎•⟢ *Status* : ${isPremium ? 'Premium' : 'Free'}
╎•⟢ *Limit* : ${limitnya}
╎•⟢ *Uang* : Rp. ${toRupiah(uangnya)}
╠──┄┄╌─∘
╎ •⊰ ❀ *Bot Info* ⊱─┈╌─╌⊹⃝
╎•⟢ *Name* : ${botname}
╎•⟢ *Creator* : @luhungch
╎•⟢ *Runtime* : ${runtime(process.uptime())}
╎•⟢ *Database* : ${Object.keys(db.data.users).length} Users
╎•⟢ *Version* : 2.0.52
┗ ⃟ꕥ─────╌╌╌∘ ☘︎ ∘─╌┈┈──┈┈─͟͟͞͞ᖫ

✨ Jangan lupa baca rules. Terima kasih. 🌟`)}`,
                    subtitle: wm,
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                      image: {
                        url: "https://telegra.ph/file/bcbd2ae9ceb7fc0ce44f4.png"
                      }
                    }, {
                      upload: TsuCnn.waUploadToServer
                    }))
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "single_select",
                      "buttonParamsJson": JSON.stringify(listMessage)
                    }, {
                      "name": "cta_url",
                      "buttonParamsJson": "{\"display_text\":\"「👤 CREATOR」\",\"url\":\"https://wa.me/6282328190003\",\"merchant_url\":\"https://wa.me/6282328190003\"}"
                    }, ],
                  })
                })
              }
            }
          }, {
            quoted: kalgans
          })
          await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          })
          await TsuCnn.sendMessage(m.chat, {
            audio: await fs.readFileSync('./media/Tsumuri.mp3'),
            mimetype: 'audio/mpeg', 
            ptt: true
          }, {
            quoted: kalgan2
          })
        }
        async function sendMenu(caption) {
          await TsuCnn.sendMessage(m.chat, {
            react: {
              text: "⏱",
              key: m.key,
            }
          })
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          TsuCnn.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/msword",
            fileLength: 00000111,
            pageCount: 2024,
            caption: caption,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
                newsletterJid: idchannel,
              },
              externalAdReply: {
                title: `${time}`,
                body: `Tsumuri Version : 2.0.5`,
                thumbnailUrl: thumbnail2,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: kalgans
          })
        }
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        if (args[0] === 'all') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menuall(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'owner') {
        if (!isCreator) return;
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menuowner(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'download') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menudownload(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'search') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menusearch(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'main') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menumain(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'primbon') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menuprimbon(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'group') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menugroup(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'agama') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menuagama(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'ai') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menuai(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'store') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menustore(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'fun') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menufun(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'rpg') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menurpg(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'game') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menugame(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'other') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menuother(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        } else if (args[0] === 'nsfw') {
          if (!isRegistered) return kuduregis()
          let caption = `${tsugg}\n${menunsfw(prefix)}\n${wm}\n${footerm}`;
          sendMenu(caption);
        }
      }
      break
      case 'allmenu':
      case 'menuall': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menuall(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'ownermenu':
      case 'menuowner': {
      if (!isCreator) return;
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menuowner(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'mainmenu':
      case 'menumain': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menumain(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'downloadmenu':
      case 'menudownload': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menudownload(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'searchmenu':
      case 'menusearch': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menusearch(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'groupmenu':
      case 'menugroup': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menugroup(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'agamamenu':
      case 'menuagama': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menuagama(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'aimenu':
      case 'menuai': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menuai(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'primbonmenu':
      case 'menuprimbon': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menuprimbon(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'storemenu':
      case 'menustore': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menustore(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'funmenu':
      case 'menufun': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menufun(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'gamemenu':
      case 'menugame': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menugame(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'rpgmenu':
      case 'menurpg': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menurpg(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'othermenu':
      case 'menuother': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menuother(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      case 'nsfwmenu':
      case 'menunsfw': {
        if (!isRegistered) return kuduregis()
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱",
            key: m.key,
          }
        })
        var old = performance.now();
        var neww = performance.now();
        var speed = neww - old;
        let tsugg = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
        const caption = `${tsugg}\n${menunsfw(prefix)}\n${wm}\n${footerm}`;
        TsuCnn.sendMessage(m.chat, {
          document: fs.readFileSync("./package.json"),
          fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
          mimetype: "application/msword",
          fileLength: 00000111,
          pageCount: 2024,
          caption: caption,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
              newsletterJid: idchannel,
            },
            externalAdReply: {
              title: `${time}`,
              body: `Tsumuri Version : 2.0.5`,
              thumbnailUrl: thumbnail2,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: kalgans
        })
      }
      break
      // batas menu
      // Menu spasi
      //OWNER MENU
      case 'ban':
      case 'addban':
        if (!isCreator) return replyerr(mess.owner)
        if (!args[0]) return m.reply(`*Contoh* : ${prefix+command} 628xxxxxx`)
        bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
        let ceknye = await TsuCnn.onWhatsApp(bnnd)
        if (ceknye.length == 0) return m.reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
        banusr.push(bnnd)
        fs.writeFileSync('./database/banned.json', JSON.stringify(banusr))
        m.reply(`Nomor ${bnnd} telah diban`)
        break
      case 'delban':
      case 'unban':
        if (!isCreator) return replyerr(mess.owner)
        if (!args[0]) return m.reply(`*Contoh* : ${prefix+command} 628xxxxxx`)
        ya = q.split("|")[0].replace(/[^0-9]/g, '')
        unp = owner.indexOf(ya)
        banusr.splice(unp, 1)
        fs.writeFileSync('./database/banned.json', JSON.stringify(banusr))
        m.reply(`Nomor ${ya} telah diunban`)
        break
      case 'sendmessage':
      case 'pesanke':
      case 'pesan':
      case 'message': {
        if (!isCreator) return m.reply('Tak bise la')
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Hai,48699532478`)
        if (!text.split(",")) return replyerr(`*Contoh* : ${prefix+command} Hai,48699532478`)
        const [text2, nomer] = text.split(",")
        if (isNaN(nomer)) return m.reply("Format Nomor Tidak Valid")
        TsuCnn.sendMessage(`${nomer}@s.whatsapp.net`, {
          text: `Kamu dapet pesan dari owner(${m.sender.split('@')[0]}) nih :\n*${text2}*`
        })
        m.reply('*Pesan telah dikirim.*')
      }
      break
      case 'statustext':
      case 'upswtext':
      case 'upswteks': {
        if (!isCreator) return replyerr(mess.owner)
        if (!q) return replyj('Text?')
        await TsuCnn.sendMessage('status@broadcast', {
          text: q
        }, {
          backgroundColor: '#FF000000',
          font: 3,
          statusJidList: Object.keys(global.db.data.users)
        })
        reply(mess.done)
      }
      break
      case 'statusvideo':
      case 'upswvideo': {
        if (!isCreator) return replyerr(mess.owner)
        if (/video/.test(mime)) {
          var videosw = await TsuCnn.downloadAndSaveMediaMessage(quoted)
          await TsuCnn.sendMessage('status@broadcast', {
            video: {
              url: videosw
            },
            caption: q ? q : ''
          }, {
            statusJidList: Object.keys(global.db.data.users)
          })
          await reply(mess.done)
        } else {
          reply('Reply to video')
        }
      }
      break
      case 'statusimg':
      case 'statusimage':
      case 'upswimg': {
        if (!isCreator) return replyerr(mess.owner)
        if (/image/.test(mime)) {
          var imagesw = await TsuCnn.downloadAndSaveMediaMessage(quoted)
          await TsuCnn.sendMessage('status@broadcast', {
            image: {
              url: imagesw
            },
            caption: q ? q : ''
          }, {
            statusJidList: Object.keys(global.db.data.users)
          })
          await reply(mess.done)
        } else {
          reply('Reply to image')
        }
      }
      break
      case 'statusaudio':
      case 'upswaudio': {
        if (!isCreator) return replyerr(mess.owner)
        if (/audio/.test(mime)) {
          var audiosw = await TsuCnn.downloadAndSaveMediaMessage(quoted)
          await TsuCnn.sendMessage('status@broadcast', {
            audio: {
              url: audiosw
            },
            mimetype: 'audio/mp4',
            ptt: true
          }, {
            backgroundColor: '#FF000000',
            statusJidList: Object.keys(global.db.data.users)
          })
          await reply(mess.done)
        } else {
          reply('Reply to audio')
        }
      }
      break
      case 'backup': {
        if (!isCreator) return replyerr(mess.owner)
        const {
          execSync
        } = require("child_process");
        const ls = (await execSync("ls")).toString().split("\n").filter(
          (pe) => pe != "node_modules" && pe != "Tsusession" && pe != ".npm");
        const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
        await TsuCnn.sendMessage(m?.chat, {
          document: await fs.readFileSync("./New.zip"),
          mimetype: "application/zip",
          fileName: `Tsumuri Backup.zip`,
        }, {
          quoted: kalgan2
        });
        await execSync("rm -rf New.zip");
      }
      break
      case 'addgc':
        if (!m.isGroup) return replyerr(mess.group)
        if (!isCreator) return replyerr(mess.owner)
        ntilink.push(m.chat)
        fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))
        m.reply(`${command} sukses`)
        break
      case 'delgc':
        if (!isCreator) return replyerr(mess.owner)
        if (!m.isGroup) return replyerr(mess.group)
        var ini = ntilink.indexOf(m.chat)
        ntilink.splice(ini, 1)
        fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))
        m.reply(`${command} sukses`)
        break
      case 'hidetag':
      case 'hide':
      case 'ht': {
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!m.isGroup) return replyerr(mess.group)
        TsuCnn.sendMessage(from, {
          text: q ? q : '',
          mentions: participants.map(a => a.id)
        }, {
          quoted: kalgans
        })
      }
      break
      case 'disk': {
        exec('cd && du -h --max-depth=1', (err, stdout) => {
          if (err) return m?.reply(`${err}`)
          if (stdout) return m?.reply(stdout)
        })
      }
      break
      case 'backupdb':
      case 'backupdatabase': {
        if (!isCreator) return replyerr(mess.owner)
        TsuCnn.sendMessage(m.chat, {
          document: await fs.readFileSync('./database/database.json'),
          fileName: 'database.json',
          mimetype: 'application/json'
        }, {
          quoted: kalgan2
        })
      }
      break
      case 'backupsessi':
      case 'getsessi':
      case 'getsesi': {
        if (!isCreator) return replyerr(mess.owner)
        TsuCnn.sendMessage(m.chat, {
          document: await fs.readFileSync('./Tsusession/creds.json'),
          fileName: 'creds.json',
          mimetype: 'application/json'
        }, {
          quoted: kalgan2
        })
      }
      break
      case 'backupcmd': {
        if (!isCreator) return replyerr(mess.owner)
        TsuCnn.sendMessage(m.chat, {
          document: await fs.readFileSync('./Tsu Cmd.js'),
          fileName: 'Tsu Cmd.js',
          mimetype: 'application/js'
        }, {
          quoted: kalgan2
        })
      }
      break
      case 'addpremium':
      case 'addprem': {
        if (!isCreator) return replyerr(mess.owner)
        if (!text) return m.reply("nomornya")
        let user = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (db.data.users[user].premium == true) return m.reply(`User ${args[0]} sudah menjadi *User Premium!*`)
        if (user in db.data.users) {
          db.data.users[user].premium = true
          m.reply("Berhasil menambah *User Premium*")
        } else return m.reply(`User ${args[0]} tidak terdaftar di database bot`)
      }
      break
      case 'delpremium':
      case 'delprem': {
        if (!isCreator) return replyerr(mess.owner)
        if (!text) return m.reply("nomornya")
        let user = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (db.data.users[user].premium == false) return m.reply(`User ${args[0]} bukan *User Premium!*`)
        if (user in db.data.users) {
          db.data.users[user].premium = false
          m.reply("Berhasil menghapus *User Premium*")
        } else return m.reply(`User ${args[0]} tidak terdaftar di database bot`)
      }
      break
      case 'listregis': {
        if (!isCreator) return replyerr(mess.owner)
        let anu = require('./database/registered')
        let teks = `乂 *L I S T - R E G I S T E R E D*\n`
        teks += `*Total Register* : ${anu.lenght}\n\n`
        anu.map((v, i) => {
          teks += `• ${i+1} •\n`
          teks += `*Id* : ${v.id}\n`
          teks += `*Name* : ${v.name}\n`
          teks += `*Age* : ${v.age}\n`
          teks += `*Ns* : ${v.time}\n\n───────────────\n\n`
        }).join('\n\n')
        teks += `${foter2}`
        m.reply(teks)
      }
      break
      case 'adduang': {
        if (!isCreator) return replyerr(mess.owner)
        let user = args[0] + '@s.whatsapp.net'
        if (args[0] && args[1]) {
          if (isNaN(args[0])) return m.reply('nomornya 100')
          if (!Object.keys(db.data.users).includes(user)) return m.reply("Nomor target tidak terdaftar di database bot!")
          if (isNaN(args[1])) return m.reply('nomornya 100')
          db.data.users[`${user}`].uang += Number(args[1])
          TsuCnn.sendMessage(m.chat, {
            text: `Berhasil menambah *${args[1]}* uang ke ${user.split("@")[0]}`
          })
        } else return m.reply('nomornya 100')
      }
      break
      case 'payment':
      case 'nope':
      case 'nopay': {
        TsuCnn.sendMessage(from, {
          react: {
            text: "💸",
            key: m.key
          }
        })
        let menunya = `*Hai ${pushname}* 👋
*Berikut Adalah Nope*
${ownername}

> *DANA :*
- ${dana}

> *GOPAY :*
- ${gopay}

> *PULSA :*
- 085643516329`
        let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: menunya
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: " "
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: true,
                  ...(await prepareWAMessageMedia({
                    image: {
                      url: "-"
                    }
                  }, {
                    upload: TsuCnn.waUploadToServer
                  })),
                  title: `Tsumuri`,
                  gifPlayback: true,
                  subtitle: '',
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                      "display_text": "💶 COPY PAYMENT DANA",
                      "copy_code": `085643516329`
                    })
                  }, {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                      "display_text": "💵 COPY PAYMENT GOPAY",
                      "copy_code": `085643516329`
                    })
                  }, {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                      "display_text": "💴 COPY PAYMENT PULSA",
                      "copy_code": `085643516329`
                    })
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363295629217013@newsletter',
                    newsletterName: `Tsumuri`,
                    serverMessageId: 145
                  }
                }
              })
            }
          }
        }, {
          quoted: m
        })
        await TsuCnn.relayMessage(from, msg.message, {
          messageId: msg.key.id
        }, {
          quoted: m
        })
      }
      break
      case 'listclaimprem': {
        if (!isCreator) return replyerr(mess.owner)
        if (db.data.settings.claimprem.length < 1) return m.reply("Tidak ada code claim prem")
        var teks = `*乂 LIST CODE CLAIM PREM*\n\nTotal : *${db.data.settings.claimprem.length}*\n\n`
        db.data.settings.claimprem.forEach((e) => {
          teks += ` ◦ ${e}\n`
        })
        m.reply(teks)
      }
      break
      case 'addlimit': {
        if (!isCreator) return replyerr(mess.owner)
        let user = args[0] + '@s.whatsapp.net'
        if (args[0] && args[1]) {
          if (isNaN(args[0])) return replyerr(`*Contoh* : ${prefix + command} nomornya 100`)
          if (!Object.keys(db.data.users).includes(user)) return m.reply("Nomor target tidak terdaftar di database bot!")
          if (isNaN(args[1])) return replyerr(`*Contoh* : ${prefix + command} nomornya 100`)
          db.data.users[`${user}`].limit += Number(args[1])
          TsuCnn.sendMessage(m.chat, {
            text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}`
          })
        } else return replyerr(`*Contoh* : ${prefix + command} nomornya 100`)
      }
      break
      case 'setnamagc':
      case 'namegc': {
        if (!isGroup) return replyerr(mess.group)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!text) return replyerr(`*Contoh* : ${prefix + command} teksnya`)
        TsuCnn.groupUpdateSubject(m.chat, text)
        m.reply(mess.done)
      }
      break
      case 'del':
      case 'delete':
      case 'hapus':
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!m.quoted) return replyerr('Reply pesan yang ingin dihapus!')
        TsuCnn.sendMessage(from, {
          delete: {
            remoteJid: from,
            id: m.quoted.id,
            fromMe: m.quoted.fromMe,
            participant: m.quoted.sender
          }
        })
        break
      case 'listhadiah': {
        if (!isCreator) return replyerr(mess.owner)
        if (db.data.settings.hadiah.length < 1) return m.reply("Tidak ada code hadiah")
        var teks = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
        db.data.settings.hadiah.forEach((e) => {
          teks += ` ◦ ${e}\n`
        })
        m.reply(teks)
      }
      break
      case 'listprem':
      case 'listpremium': {
        if (!isCreator) return replyerr(mess.owner)
        let user = Object.keys(db.data.users)
        let ar = []
        let urut = 1
        var teks = '\n*乂 LIST USER PREMIUM*\n\n'
        user.forEach((e) => {
          if (db.data.users[e].premium == true) {
            let no = urut++
            teks += `${no}. @${e.split("@")[0]}\n`
            ar.push(e)
          }
        })
        if (ar.length < 1) {
          m.reply("Tidak Ada User Premium")
        } else {
          TsuCnn.sendMessage(m?.chat, {
            text: teks,
            contextInfo: {
              mentionedJid: [...ar]
            }
          }, {
            quoted: kalgans
          })
        }
      }
      break
      case 'public': {
        if (!isCreator) return replyerr(mess.owner)
        TsuCnn.public = true
        m.reply(mess.done)
      }
      break
      case 'self': {
        if (!isCreator) return replyerr(mess.owner)
        TsuCnn.public = false
        m.reply(mess.done)
      }
      break
      case 'buatclaimprem': {
        if (!isCreator) return replyerr(mess.owner)
        if (isNaN(args[0])) return m.reply('Jumlah Kode claim prem')
        for (let i = 0; i < Number(args[0]); i++) {
          db.data.settings.claimprem.push(crypto.randomBytes(4).toString("hex"))
        }
        let teks = '\n'
        db.data.settings.claimprem.forEach((e) => {
          teks += `◦ ${e}\n`
        })
        m.reply(teks)
      }
      break
      case 'buathadiah': {
        if (!isCreator) return replyerr(mess.owner)
        if (isNaN(args[0])) return m.reply('Jumlah Kode Hadiah')
        for (let i = 0; i < Number(args[0]); i++) {
          db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
        }
        let teks = '\n'
        db.data.settings.hadiah.forEach((e) => {
          teks += `◦ ${e}\n`
        })
        m.reply(teks)
      }
      break
      case 'getcase': {
        const getCase = (cases) => {
          return "case " + `'${cases}'` + fs.readFileSync("./Tsu Cmd.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
        }
        try {
          if (!isCreator) return replyerr(mess.owner)
          if (!q) return replyerr(`*Contoh* : ${prefix + command} antilink`)
          let nana = await getCase(q)
          m.reply(nana)
        } catch (err) {
          console.log(err)
          m.reply(`Case ${q} tidak ditemukan`)
        }
      }
      break
      case 'delcase': {
        if (!isCreator) return replyerr(mess.owner)
        if (!text) return replyerr(`*Contoh* : ${prefix+command} Namacase`)
        dellCase('./Tsu Cmd.js', text)
        replyj(`Selesai kak`)
      }
      break
      case 'addcase': {
        if (!isCreator) return replyerr(mess.owner)
        if (!text) return m.reply('Mana case nya');
        const fs = require('fs');
        const namaFile = 'Tsu Cmd.js';
        const caseBaru = `${text}`;
        fs.readFile(namaFile, 'utf8', (err, data) => {
          if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
          }
          const posisiAwalGimage = data.indexOf("case 'addcase':");
          if (posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
              if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
              } else {
                m.reply('Case baru berhasil ditambahkan.');
              }
            });
          } else {
            m.reply('Tidak dapat menambahkan case dalam file.');
          }
        });
      }
      break
      case 'setppbotpanjang':
      case 'setpppanjang': {
        if (!isCreator) return replyerr(mess.owner)
        if (/image/g.test(mime)) {
          var medis = await TsuCnn.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
          var {
            img
          } = await generateProfilePicture(medis)
          await TsuCnn.query({
            tag: 'iq',
            attrs: {
              to: botNumber,
              type: 'set',
              xmlns: 'w:profile:picture'
            },
            content: [{
              tag: 'picture',
              attrs: {
                type: 'image'
              },
              content: img
            }]
          })
          await fs.unlinkSync(medis)
          m.reply("Berhasil Mengganti Foto Profil Bot ✅")
        } else return m.reply('dengan mengirim foto')
      }
      break
      case 'setbotname': {
        if (!isCreator) return replyerr(mess.owner)
        if (!text) return m.reply(`*Contoh* : ${prefix + command} Tsumuri-Md`)
        await TsuCnn.updateProfileName(text)
        m.reply(`Berhasil Mengubah Nama Bot Tuan✅`)
      }
      break
      case 'setppbot': {
        if (!isCreator) return replyerr(mess.owner)
        if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        var medis = await TsuCnn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
        if (args[0] == `/full`) {
          var {
            img
          } = await generateProfilePicture(medis)
          await TsuCnn.query({
            tag: 'iq',
            attrs: {
              to: botNumber,
              type: 'set',
              xmlns: 'w:profile:picture'
            },
            content: [{
              tag: 'picture',
              attrs: {
                type: 'image'
              },
              content: img
            }]
          })
          fs.unlinkSync(medis)
          m.reply(mess.done)
        } else {
          var memeg = await TsuCnn.updateProfilePicture(botNumber, {
            url: medis
          })
          fs.unlinkSync(medis)
          m.reply(mess.done)
        }
      }
      break
      case 'getbio': {
        if (!isCreator) return replyerr(mess.owner)
        try {
          let who
          if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
          else who = m.quoted.sender ? m.quoted.sender : m.sender
          let bio = await TsuCnn.fetchStatus(who)
          m.reply(bio.status)
        } catch {
          if (text) return m.reply(`bio is private or you haven't replied to the person's message!`)
          else try {
            let whoto = m.quoted ? m.quoted.sender : m.sender
            let bio = await TsuCnn.fetchStatus(who)
            m.reply(bio.status)
          } catch {
            return m.reply(`bio is private or you haven't replied to the person's message!`)
          }
        }
      }
      break
      case 'delppbot': {
        if (!isCreator) return replyerr(mess.owner)
        await TsuCnn.removeProfilePicture(TsuCnn.user.id)
        m.reply(mess.done)
      }
      break
      case 'getname': {
        if (!isCreator) return replyerr(mess.owner)
        if (qtod === "true") {
          namenye = await TsuCnn.getName(m.quoted.sender)
          m.reply(namenye)
        } else if (qtod === "false") {
          TsuCnn.sendMessage(from, {
            text: "Reply orangnya"
          }, {
            quoted: kalgans
          })
        }
      }
      break
      case 'restart':
        if (!isCreator) return replyerr(mess.owner)
        m.reply(`_Restarting . . ._`)
        await sleep(3000)
        process.exit()
        break
      case 'welcome': {
        if (!isRegistered) return m.reply(`Kamu belum daftar!\nSilahkan daftar dengan cara *${prefix}daftar nama|umur!*`)
        if (!isCreator) return replyerr(mess.owner)
        if (!m.isGroup) return replyerr(mess.group)
        if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
        if (args[0] === "on") {
          if (welcm) return m.reply('Sudah Aktif')
          wlcm.push(from)
          var groupe = await TsuCnn.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          TsuCnn.sendMessage(from, {
            text: `Fitur Welcome Diaktifkan Di Group Ini`,
            contextInfo: {
              mentionedJid: mems
            }
          }, {
            quoted: m
          })
        } else if (args[0] === "off") {
          if (!welcm) return m.reply('Sudah Non Aktif')
          let off = wlcm.indexOf(from)
          wlcm.splice(off, 1)
          m.reply('Sukses Mematikan Welcome di group ini')
        }
      }
      break
      case 'bcgc':
      case 'bcgroup': {
        if (!isCreator) return replyerr(mess.owner)
        if (!text) return m.reply(`*Contoh* : ${prefix + command} Halo`)
        let getGroups = await TsuCnn.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
        for (let i of anu) {
          await sleep(1500)
          TsuCnn.sendMessage(i, {
            text: `${text}`
          }, {
            quoted: bcgck
          })
        }
        m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
      }
      break
      //BATAS OWNER MENU
      //MAIN MENU
      /*case 'tinjau': {
        if (!text) return m.reply(`*Contoh* : ${prefix+command} Teks tinjauan kamu`)
        TsuCnn.sendMessage(`${ownerno1}@s.whatsapp.net`, {text: `Tinjauan dari ${m.sender.split('@')[0]}\nPesan: *${text}*`})
        m.reply(`Tinjauan berhasil dikirim, tunggu sampai owner mengontak kamu.`)
      }
      */
case 'deob': 
case 'deobfuscate': 
case 'decrypt': {
const webcrack = (...args) => import('webcrack').then(({
  default: webcrack
  }) => webcrack(...args))
let teks
if (m.quoted) {
 teks = m.quoted ? m.quoted.text : text
} else if (text) {
teks = text ? text : text
} else return m.reply(`Masukan codenya!`)
	try {
       const webcrack = require('webcrack');
		let result = await webcrack(teks);
		m.reply(result.code)
	} catch (e) {
		console.log(e)
		m.reply("*Error kak!*")
	}
}
break
      case "getpp":
        {
          if (!m.isGroup) return m.reply(mess.group)
          if (m.quoted || q) {
            let urlp = await TsuCnn.profilePictureUrl(froms, "image").catch(err => m.reply("Profile di private!"));
            if (urlp) {
              return TsuCnn.sendMessage(m.chat, {
                image: {
                  url: urlp
                },
                caption: "Nih!"
              }, {
                quoted: m
              });
            }
          } else {
            m.reply("Tag atau reply pesan target!");
          }
        }
        break;
      case 'idsaluran':
      case 'channelid':
      case 'chid':
      case 'idsaluran':
      case 'cekidsaluran':
      case 'saluranid':
      case 'getids':
      case 'getidsaluran': {
        if (!m.quoted) return replyj('reply pesan dari channel')
        try {
          let quotedMessage = await m.getQuotedObj();
          let id = quotedMessage.msg.contextInfo.forwardedNewsletterMessageInfo;
          let teks = `Channel Id: ${id.newsletterJid}`
          await replyj(teks)
        } catch (e) {
          console.log(e)
          replyerr('Sepertinya terjadi kesalahan')
        }
      }
      break
      case 'poll': {
        let [poll, opt] = text.split("|")
        if (text.split("|") < 2) return await replyerr(`*Contoh* : ${prefix+command} Exam exa ex?|Exam,Exa,Ex...`)
        try {
          let options = []
          for (let i of opt.split(',')) {
            options.push(i)
          }
          await TsuCnnc.sendMessage(m.chat, {
            poll: {
              name: poll,
              values: options
            }
          })
        } catch {
          replyerr(mess.error)
        }
      }
      break
      case 'info':
      case 'infobot':
      case 'botinfo': {
        let tek = `Hai kak ${pushname} 👋 ${ucapanWaktu}.\n\nInfo Bot:\n-Name: ${botname}\n\n-Creator: ${owner}\n-Version: 2.0.52\n-Database User: ${Object.keys(db.data.users).length}\n-Runtime: ${runtime(process.uptime())}\n\n──────────────`
        TsuCnn.sendMessage(m.chat, {
          text: tek
        }, {
          quoted: kalgan2
        })
      }
      break
      case 'afk': {
        let user = global.db.data.users[m.sender]
        user.afkTime = +new Date
        user.afkReason = text
        m.reply(`💤 *@${m.sender.replace(/@.+/g, '')}* Telah Afk${text ? ': ' + text : ''}`)
      }
      break
      case 'report':
      case 'reporterror':
      case 'laporbug':
      case 'lapor':
      case 'laporerror': {
        if (!text) return replyerr(`*Contoh* : ${prefix+command} error nih min`)
        TsuCnn.sendMessage(`${ownerno1}@s.whatsapp.net`, {
          text: `*<!> Report error*\nPengirim: ${m.sender.split('@')[0]}\nPesan: *${text}*`
        })
        m.reply('*> Pesan report telah dikirim kepada owner.*\n> Terima kasih telah membantu 🙏.')
      }
      break
      case 'request':
      case 'requestfitur': {
        if (!text) return replyerr(`*Contoh* : ${prefix+command} game tabak kata`)
        TsuCnn.sendMessage(`${ownerno1}@s.whatsapp.net`, {
          text: `*<!> Request fitur*\nPengirim: ${m.sender.split('@')[0]}\nPesan: *${text}*`
        })
        m.reply('*> Pesan request telah dikirim kepada owner.*\n> Jika main main saja/Fitur telah ada, owner tidak akan menanggapi.')
      }
      break
      case 'premium':
      case 'buyprem':
      case 'store': {
      let cd = args[0]
      if (!cd) {
let store = `*💸 LIST SHOP*

> Premium: 
*乂 PAKET A*
*Harga Rp5.000*
◦ Akses fitur premium
◦ Akses fitur unlimited limit & uang harian

*乂 PAKET B*
*Harga Rp10.000*
◦ Gratis Uang Rp. 3.000.000
◦ Gratis Limit 20.000
◦ Akses fitur premium
◦ Akses fitur unlimited limit & uang harian

*乂 PAKET C*
*Harga Rp20.000*
◦ Gratis Uang Rp. 50.000.000
◦ Gratis Limit 30.000
◦ Akses fitur premium
◦ Akses fitur unlimited limit & uang harian
---
> Limit: 
*2.000/10 Limit*
> Uang:
*2.000/Rp. 10.000*
---

Hubungi owner bot untuk membeli paket dengan cara ketik .owner\n`

let sections = [{
            'title': "Paket 1",
            'highlight_label': 'Paket Termurah',
            'rows': [{
              'title': 'Beli Paket 1',
              'description': 'Dengan harga Rp. 5.000',
              'id': `${prefix+command} a`
            }]
          }, {
            'title': "Paket 2",
            'highlight_label': 'Paket yang sedengan',
            'rows': [{
              'title': 'Beli Paket A',
              'description': 'Dengan harga Rp. 10.000',
              'id': `${prefix+command} b`
            }]
          }, {
            'title': "Paket 3",
            'highlight_label': 'Paket termahal',
            'rows': [{
              'title': "Beli Paket C",
              'description': 'Dengan harga Rp. 20.000',
              'id': `${prefix+command} c`
            }]
          }, {
            'title': "﹃────╍╍ Opsi Lain ╍╍────﹄",
            'highlight_label': 'Opsi Lain jika tidak ingin membeli',
            'rows': [{
              'title': 'Payment',
              'description': 'Aku menjawab mungkin',
              'id': `${prefix}payment`
            }]
          }]
          let liststore = {
            title: '「Pilih」',
            sections
          };
          
TsuCnn.sendListWithImage(m.chat, store, liststore, Styles('Pilih di bawah'), 'https://files.catbox.moe/8uf9f3.png', m)
} else if (cd === "a") {
TsuCnn.sendMessage(`6282328190003@s.whatsapp.net`, {text:`Hai owner\nAda yang mau beli Paket ${args[0]} Nih\nNomornya: ${m.sender.split("@")[0]}}`}, {quoted:kalgan2})
m.reply('Terima kasih telah membeli 🙏😊, Tunggu sampai owner mengirim pesan ke kamu ya')
} else if (cd === "b") {
TsuCnn.sendMessage(`6282328190003@s.whatsapp.net`, {text:`Hai owner\nAda yang mau beli Paket ${args[0]} Nih\nNomornya: ${m.sender.split("@")[0]}}`}, {quoted:kalgan2})
m.reply('Terima kasih telah membeli 🙏😊, Tunggu sampai owner mengirim pesan ke kamu ya')
} else if (cd === "c") {
TsuCnn.sendMessage(`6282328190003@s.whatsapp.net`, {text:`Hai owner\nAda yang mau beli Paket ${args[0]} Nih\nNomornya: ${m.sender.split("@")[0]}}`}, {quoted:kalgan2})
m.reply('Terima kasih telah membeli 🙏😊, Tunggu sampai owner mengirim pesan ke kamu ya')
}
      }
      break
      case 'redeemcode': {
        if (!args[0]) return m.reply("Codenya")
        if (args[0] !== args[0].toLowerCase()) return m.reply("*Code Redeem* wajib huruf kecil semua!")
        if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return m.reply("*Code* tersebut sudah digunakan!")
        if (!db.data.settings.hadiah.includes(args[0])) return m.reply("*Code* tidak valid!")
        db.data.settings.hadiahkadaluwarsa.push(args[0])
        var code = db.data.settings.hadiah.indexOf(args[0])
        db.data.settings.hadiah.splice(code, 1)
        let h1 = randomNumber(20000, 30000)
        let h2 = randomNumber(10, 20)
        db.data.users[m.sender].uang += h1
        db.data.users[m.sender].limit += h2
        var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *Uang  Rp. ${toRupiah(h1)}* dan *${h2} Limit* dari *Code Redeem "${args[0]}"*`
        await m.reply(`Berhasil mengambil hadiah *Rp. ${toRupiah(h1)} Uang* dan *${h2} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
          TsuCnn.sendMessage(m.chat, {
            text: teks,
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                thumbnailUrl: thumbnail,
                title: "© Message System Notifikasi",
                body: null,
                sourceUrl: linkgc,
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgans
          })
        })
      }
      break
      case 'topglobal': {
        let uuang = Object.entries(global.db.data.users).map(([key, value]) => {
          return {
            ...value,
            jid: key
          }
        })
        let sorteduang = uuang.map(toNumber('uang')).sort(sort('uang'))
        let usersuang = sorteduang.map(enumGetKey)
        m.reply(`\n*🏆 LIST TOP GLOBAL UANG*\n\nKamu Top *${usersuang.indexOf(m?.sender) + 1}* Uang dari *${usersuang.length}* Users

${sorteduang.slice(0, 10).map(({ jid, uang }, i) => `
          $ {
            i + 1
          }.*Nama: * @$ {
            db.data.users[jid].name
          }\
          n * Nomor: * $ {
            jid.split("@")[0]
          }\
          n * Uang: * $$ {
            toRupiah(uang)
          }\
          n`).join('\n')}\n`)
      }
      break
      case 'buylimit':
      case 'belilimit': {
        if (!args[0]) return m.reply('100\n\nHarga 1 *limit* = $1000 *uang*')
        if (isNaN(args[0])) return m.reply('20')
        if ((args[0]).includes('.')) return m.reply('20')
        let harga = 1000
        let total = Number(parseInt(args[0]) * harga)
        if (uangnya < total) return m.reply(`*Uang* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Uang* dengan cara memainkan game`)
        db.data.users[m?.sender].limit += Number(args[0])
        db.data.users[m?.sender].uang -= total
        m.reply(`Berhasil membeli *${args[0]}* limit, dengan *Rp. ${toRupiah(total)}* uang`)
      }
      break
      case 'listgc':
      case 'cekid':
      case 'listgrup': {
        if (!isCreator) return replyerr(mess.owner)
        let gcall = Object.values(await TsuCnn.groupFetchAllParticipating().catch(_ => null))
        let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
        await gcall.forEach((u, i) => {
          listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
        })
        m.reply(listgc)
      }
      break
      case 'claim': {
        if (!isPremium) return replyerr(mess.premium)
        if (db.data.users[m.sender].claim == 0) return m.reply("Kamu sudah *Claim* hadiah hari ini, hadiah *Claim* akan direset saat jam 12 malam!")
        const hadiah = randomNumber(50000, 70000)
        const hadiah2 = randomNumber(100, 200)
        db.data.users[m.sender].uang += hadiah
        db.data.users[m.sender].limit += hadiah2
        db.data.users[m.sender].claim = 0
        m.reply(`Berhasil *Claim* hadiah harian\n\n+ Rp. ${toRupiah(hadiah)} *Uang*\n+ ${hadiah2} *Limit*`)
      }
      break
      case 'claimprem': {
        if (!args[0]) return m.reply("Codenya")
        if (args[0] !== args[0].toLowerCase()) return m.reply("*Code Claim Prem* wajib huruf kecil semua!")
        if (db.data.settings.claimpremkadaluwarsa.includes(args[0])) return m.reply("*Code* tersebut sudah digunakan!")
        if (!db.data.settings.claimprem.includes(args[0])) return m.reply("*Code* tidak valid!")
        db.data.settings.claimpremkadaluwarsa.push(args[0])
        var code = db.data.settings.claimprem.indexOf(args[0])
        db.data.settings.claimprem.splice(code, 1)
        let h1 = randomNumber(20000, 30000)
        let h2 = randomNumber(10, 20)
        let h3 = randomNumber(10, 20)
        db.data.users[m?.sender].uang += h1
        db.data.users[m?.sender].limit += h2
        db.data.users[m?.sender].glimit += h3
        db.data.users[m?.sender].premium = true
        var teks = `Selamat kepada @${m?.sender.split("@")[0]} 🎉

kamu mendapatkan *Uang  Rp. ${toRupiah(h1)}* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem "${args[0]}"*`
        await m.reply(`Berhasil mengambil claim prem *Rp. ${toRupiah(h1)} Uang* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem ${args[0]}*`).then(() => {
          TsuCnn.sendMessage(m?.chat, {
            text: teks,
            contextInfo: {
              mentionedJid: [m?.sender],
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: "© Message System Notifikasi",
                body: null,
                sourceUrl: linkchannel,
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgans
          })
        })
      }
      break
      case 'tqto': {
        let cu = `*BIG TAHNKS TO*

> Hw Mods [ Base ]
> Rerez Hosting [ Developer ]
> luhungch [ Recoder ]

Saya mohon dukungan dan bantuanya kepada kalian
My Chanel : https://www.youtube.com/@luhungch
Wa Chanel : https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A
`
        let cp = (cu)
        TsuCnn.sendMessage(m?.chat, {
          text: cp,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              thumbnailUrl: thumbnail,
              title: `© 2024 | Tsumuri-Md`,
              body: '',
              sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        })
      }
      break
      case 'listcase': {
        if (!isCreator) return replyerr(mess.owner)
        let {
          listCase
        } = require('./lib/scrapelistCase.js')
        m.reply(listCase())
      }
      break
      case 'ceklimit':
      case 'limit':
      case 'me':
      case 'uang':
      case 'cekuang': {
        try {
          ppuser = await TsuCnn.profilePictureUrl(m.sender, 'image')
        } catch (err) {
          ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        if (m.quoted) {
          let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Uang : *Rp. ${toRupiah(uangnya)}*`
          TsuCnn.sendMessage(m.chat, {
            text: teksnya,
            mentions: [m.sender],
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: '©User Info Message',
                renderLargerThumbnail: true,
                sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgan2
          })
        } else {
          let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Uang : *Rp. ${toRupiah(uangnya)}*`
          TsuCnn.sendMessage(m.chat, {
            text: teksnya,
            mentions: [m.sender],
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: '©User Info Message',
                renderLargerThumbnail: true,
                sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgan2
          })
        }
      }
      break
      case 'qc': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!q) return replyerr(`*Contoh* : ${prefix + command} hallo`)
        try {
          ppuser = await TsuCnn.profilePictureUrl(m.sender, 'image')
        } catch (err) {
          ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        let obj = {
          type: 'quote',
          format: 'png',
          backgroundColor: '#ffffff',
          width: 512,
          height: 768,
          scale: 2,
          messages: [{
            entities: [],
            avatar: true,
            from: {
              id: 1,
              name: pushname,
              photo: {
                url: ppuser,
              }
            },
            text: `${q}`,
            replyMessage: {},
          }, ],
        };
        let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        let buffer = Buffer.from(response.data.result.image, 'base64');
        TsuCnn.sendImageAsSticker(m.chat, buffer, kalgans, {
          packname: `${global.packname}`,
          author: `${global.author}`
        })
        uselimit()
      }
      break
      case 'qc2': {
        if (!q) return replyerr(`*Contoh* : ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
        if (text.length > 100) return m.reply(`Max 100 character.`)
        let [color, ...message] = text.split(' ');
        message = message.join(' ');
        let backgroundColor;
        switch (color) {
          case "pink":
            backgroundColor = "#f68ac9";
            break;
          case "blue":
            backgroundColor = "#6cace4";
            break;
          case "red":
            backgroundColor = "#f44336";
            break;
          case "green":
            backgroundColor = "#4caf50";
            break;
          case "yellow":
            backgroundColor = "#ffeb3b";
            break;
          case "purple":
            backgroundColor = "#9c27b0";
            break;
          case "darkblue":
            backgroundColor = "#0d47a1";
            break;
          case "lightblue":
            backgroundColor = "#03a9f4";
            break;
          case "ash":
            backgroundColor = "#9e9e9e";
            break;
          case "orange":
            backgroundColor = "#ff9800";
            break;
          case "black":
            backgroundColor = "#000000";
            break;
          case "white":
            backgroundColor = "#ffffff";
            break;
          case "teal":
            backgroundColor = "#008080";
            break;
          case "lightpink":
            backgroundColor = "#FFC0CB";
            break;
          case "chocolate":
            backgroundColor = "#A52A2A";
          case "salmon":
            backgroundColor = "#FFA07A";
            break;
          case "magenta":
            backgroundColor = "#FF00FF";
            break;
          case "tan":
            backgroundColor = "#D2B48C";
            break;
          case "wheat":
            backgroundColor = "#F5DEB3";
            break;
          case "deeppink":
            backgroundColor = "#FF1493";
            break;
          case "fire":
            backgroundColor = "#B22222";
            break;
          case "skyblue":
            backgroundColor = "#00BFFF";
            break;
          case "orange":
            backgroundColor = "#FF7F50";
            break;
          case "brightskyblue":
            backgroundColor = "#1E90FF";
            break;
          case "hotpink":
            backgroundColor = "#FF69B4";
            break;
          case "lightskyblue":
            backgroundColor = "#87CEEB";
            break;
          case "seagreen":
            backgroundColor = "#20B2AA";
            break;
          case "darkred":
            backgroundColor = "#8B0000";
            break;
          case "orangered":
            backgroundColor = "#FF4500";
            break;
          case "cyan":
            backgroundColor = "#48D1CC";
            break;
          case "violet":
            backgroundColor = "#BA55D3";
            break;
          case "mossgreen":
            backgroundColor = "#00FF7F";
            break;
          case "darkgreen":
            backgroundColor = "#008000";
            break;
          case "navyblue":
            backgroundColor = "#191970";
            break;
          case "darkorange":
            backgroundColor = "#FF8C00";
            break;
          case "darkpurple":
            backgroundColor = "#9400D3";
            break;
          case "fuchsia":
            backgroundColor = "#FF00FF";
            break;
          case "darkmagenta":
            backgroundColor = "#8B008B";
            break;
          case "darkgray":
            backgroundColor = "#2F4F4F";
            break;
          case "peachpuff":
            backgroundColor = "#FFDAB9";
            break;
          case "darkishgreen":
            backgroundColor = "#BDB76B";
            break;
          case "darkishred":
            backgroundColor = "#DC143C";
            break;
          case "goldenrod":
            backgroundColor = "#DAA520";
            break;
          case "darkishgray":
            backgroundColor = "#696969";
            break;
          case "darkishpurple":
            backgroundColor = "#483D8B";
            break;
          case "gold":
            backgroundColor = "#FFD700";
            break;
          case "silver":
            backgroundColor = "#C0C0C0";
            break;
          default:
            return m.reply('The selected color is not available.')
        }
        let obj = {
          type: 'quote',
          format: 'png',
          backgroundColor,
          width: 512,
          height: 768,
          scale: 2,
          messages: [{
            entities: [],
            avatar: true,
            from: {
              id: 1,
              name: pushname,
              photo: {
                url: await TsuCnn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
              }
            },
            text: message,
            replyMessage: {},
          }, ],
        };
        let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        let buffer = Buffer.from(response.data.result.image, 'base64');
        TsuCnn.sendImageAsSticker(m.chat, buffer, kalgans, {
          packname: `${global.packname}`,
          author: `${global.author}`
        })
      }
      break
      case 'sticker':
      case 's':
      case 'stickergif':
      case 'sgif': {
        if (!quoted) m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
        if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await TsuCnn.sendImageAsStickerAV(from, media, kalgans, {
            packname: global.packname,
            author: global.author
          })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
          let media = await quoted.download()
          let encmedia = await TsuCnn.sendVideoAsSticker(from, media, fcall, {
            packname: global.packname,
            author: global.author
          })
          await fs.unlinkSync(encmedia)
        } else {
          m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
        }
      }
      break
      case 'smeme':
      case 'stickermeme':
      case 'stickmeme': {
        if (!/webp/.test(mime) && /image/.test(mime)) {
          if (!text) return replyerr(`*Contoh* : ${prefix + command} text1|text2`)
          let {
            TelegraPh
          } = require('./lib/uploader')
          atas = text.split('|')[0] ? text.split('|')[0] : '︎'
          bawah = text.split('|')[1] ? text.split('|')[1] : '︎'
          mee = await TsuCnn.downloadAndSaveMediaMessage(quoted)
          mem = await TelegraPh(mee)
          meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
          memek = await TsuCnn.sendImageAsSticker(m.chat, meme, m, {
            packname: global.packname,
            author: global.author
          })
        } else {
          replyj(`Send/reply image with caption ${prefix + command} text1|text2`)
        }
      }
      break
      case 'tiktoksearch':
      case 'ttsearch': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!text) return m.reply(`${prefix + command} Cinematic Minecraft`)
        let anu = await mann.search.tiktoks(text)
        const capt = anu.title
        const author = anu.author
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: `120363295629217013@newsletter`,
                    newsletterName: `"Tsumuri-Md"`,
                    serverMessageId: -1
                  },
                  businessMessageForwardInfo: {
                    businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id)
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                  text: (`*Author* : ${author}\n*Caption* : ${capt}`)
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: `Simpel WhatsApp Bot`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: (`Tik Tok - Search`),
                  subtitle: `${ownername}`,
                  hasMediaAttachment: true,
                  ...(await prepareWAMessageMedia({
                    video: {
                      url: anu.no_watermark
                    }
                  }, {
                    upload: TsuCnn.waUploadToServer
                  }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\".tiktoksearch ${text}\"}`
                  }, ]
                })
              })
            }
          }
        }, {})
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
        uselimit()
      }
      break
      case 'toimage':
      case 'toimg': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!quoted) m.reply('Reply Image')
        if (!/webp/.test(mime)) m.reply(`Balas sticker dengan caption *${prefix + command}*`)
        let media = await TsuCnn.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) throw err
          let buffer = fs.readFileSync(ran)
          TsuCnn.sendMessage(from, {
            image: buffer
          }, {
            quoted: limituse
          })
          fs.unlinkSync(ran)
        })
        uselimit2()
      }
      break
      case 'remini': {
        if (!quoted) return m.reply(`Where is the picture?`)
        if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
        const {
          remini
        } = require('./lib/remini')
        let media = await quoted.download()
        let proses = await remini(media, "enhance")
        TsuCnn.sendMessage(m.chat, {
          image: proses,
          caption: mess.success
        }, {
          quoted: kalgans
        })
      }
      break
      case 'jarak': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        var [me, to] = text.split`|`
        if (!(from && to)) return replyerr(`*Contoh* : ${prefix + command} Yogyakarta|Jakarta`)
        m.reply(mess.search)
        var data = await jarakkota(me, to)
        if (data.img) return TsuCnn.sendMessage(m.chat, {
          image: data.img,
          caption: data.desc
        }, {
          quoted: limituse
        })
        uselimit2()
      }
      break

      case 'pinterest':
      case 'pin': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Kamen Rider saber`)
        const fetch = require('node-fetch');
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        async function createImage(url) {
          const {
            imageMessage
          } = await generateWAMessageContent({
            image: {
              url
            }
          }, {
            upload: TsuCnn.waUploadToServer
          });
          return imageMessage;
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
        // const url1 = 'https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=/search/pins/?q=${text}&data={"options":{"isPrefetch":false,"query":"${text}","scope":"pins","no_fetch_context_on_resource":false},"context":{}}&_=1619980301559'
        const url1 = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
  const data2 = {
    source_url: `/search/pins/?q=${text}`,
    data: {
      options: {
        isPrefetch: false,
        query: text,
        scope: 'pins',
        no_fetch_context_on_resource: false
      },
      context: {}
    },
    _: 1619980301559
  };
        /*axios.get(url1).then(async (
          data
        ) => {*/
          const data = await axios.post(url1, data2, {
      headers: {
        'Content-Type': 'application/json'
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });
          let push = [];
          let res = data.resource_response.data.results.map(v => v.images.orig.url);
          shuffleArray(res); // Randomize arrays
          let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
          let i = 1;
          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `_*Hasil dari: ${text}*_`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: botname
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `Image - ${i++}`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy)
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [{
                  "name": "cta_url",
                  "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
                }]
              })
            });
          }
          const bot = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: mess.done
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: global.namabot
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [...push]
                  })
                })
              }
            }
          }, {
            quoted: limituse
          });
          await TsuCnn.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id
          });
          uselimit2()
        //})
      }
      break
      case 'ttsearch':
      case 'ttscroll':
      case 'tiktoksearch': {
        if (!text) return m.reply("Masukan Query!")
        let old = new Date();
        let json;
        try {
          json = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=${skizo}&keywords=${text}`);
        } catch (err) {
          return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
        }

        function pickRandom(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        }
        var hiasan = "=> ";
        // Ensure json has enough elements
        if (!json || json.length < 8) return m.reply('Data tidak lengkap untuk membuat scroll.');
        let json1 = pickRandom([json[0], json[1], json[3]]);
        let json2 = pickRandom([json[5], json[6], json[7]]);
        let json3 = pickRandom([json[8], json[2]]);
        let json4 = pickRandom([json[7], json[3], json[6]]);
        let json5 = pickRandom([json[4], json[0], json[1]]);
        async function video(url) {
          if (!url) throw new Error('URL video tidak tersedia.');
          const {
            videoMessage
          } = await generateWAMessageContent({
            video: {
              url
            }
          }, {
            upload: TsuCnn.waUploadToServer
          });
          return videoMessage;
        }
        try {
          let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: `result from ${text}`
                  },
                  carouselMessage: {
                    cards: [{
                      header: {
                        videoMessage: await video(json1.play),
                        hasMediaAttachment: true,
                      },
                      body: {
                        text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || 'N/A'}\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          "name": "quick_reply",
                          "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                        }, ],
                      },
                    }, {
                      header: {
                        videoMessage: await video(json2.play),
                        hasMediaAttachment: true,
                      },
                      body: {
                        text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || 'N/A'}\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          "name": "quick_reply",
                          "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                        }, ],
                      },
                    }, {
                      header: {
                        videoMessage: await video(json3.play),
                        hasMediaAttachment: true,
                      },
                      body: {
                        text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || 'N/A'}\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          "name": "quick_reply",
                          "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                        }, ],
                      },
                    }, {
                      header: {
                        videoMessage: await video(json4.play),
                        hasMediaAttachment: true,
                      },
                      body: {
                        text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || 'N/A'}\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          "name": "quick_reply",
                          "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                        }, ],
                      },
                    }, {
                      header: {
                        videoMessage: await video(json5.play),
                        hasMediaAttachment: true,
                      },
                      body: {
                        text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || 'N/A'}\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          "name": "quick_reply",
                          "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                        }, ],
                      },
                    }, ],
                    messageVersion: 1,
                  },
                },
              },
            },
          }, {});
          await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        } catch (error) {
          console.error(error);
          m.reply('Terjadi kesalahan saat mengirim pesan.');
        }
      }
      break;
      case 'cekip':
      case 'ip': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (args.length !== 1) {
          return m.reply(`*Contoh* : ${prefix+command} link`);
        }
        const link = args[0];
        dns.resolve4(link, (err, addresses) => {
          if (err) {
            return m.reply('Gagal melakukan DNS reverse lookup.');
          }
          if (addresses.length === 0) {
            return m.reply('Tidak ada alamat IP yang ditemukan.');
          }
          const ip = addresses[0];
          replylimit(`Alamat IP dari ${link} adalah: ${ip}`);
        });
        uselimit2()
      }
      break
      case 'cerpen': {
        const mann = require('d-scrape')
        const mannr = await mann.random.randomCerpen()
        var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
        m.reply(yaya)
      }
      break
      case 'rvo':
      case 'readvo':
      case 'readviewonce': {
        if (!m.quoted) return m.reply(`Reply view once message to use this command`)
        let type = Object.keys(m.quoted.message)[0]
        let quotedType = m.quoted.message[type]
        var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
        let buffer = Buffer.from([])
        for await (let chunk of media) {
          buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
          await TsuCnn.sendMessage(m.chat, {
            video: buffer,
            caption: quotedType.caption
          }, {
            quoted: kalgans
          })
        } else if (/image/.test(type)) {
          await TsuCnn.sendMessage(m.chat, {
            image: buffer,
            caption: quotedType.caption
          }, {
            quoted: kalgans
          })
        }
      }
      break
      case 'tourl2': {
      if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
  if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`);
  if (!quoted) {
    return m.reply(`Send/Reply the Video/Image/Audio with Caption *${prefix + command}*`);
  }
  let media = await TsuCnn.downloadAndSaveMediaMessage(quoted);
  let anu = await shannzCdn(media);
  if (anu && anu.status) {
    m.reply(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
  } else {
    m.reply(`*ERROR: Tidak dapat mengambil URL dari media.*`);
  }
  await fs.unlinkSync(media);
  uselimit()
}
break
      case 'tourl3': {
      if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
  if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`);
  if (!quoted) {
    return m.reply(`Send/Reply the Video/Image/Audio with Caption *${prefix + command}*`);
  }
  let media = await TsuCnn.downloadAndSaveMediaMessage(quoted);
  let anu = await widipeCdn(media);
  if (anu && anu.status) {
    m.reply(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
  } else {
    m.reply(`*ERROR: Tidak dapat mengambil URL dari media.*`);
  }
  await fs.unlinkSync(media);
  uselimit()
}
break
      case 'tourl': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!/audio/.test(mime) && !/video/.test(mime) && !/image/.test(mime)) m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
        if (!quoted) m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
        let {
          UploadFileUgu,
          webp2mp4File,
          TelegraPh, 
          Imgbb
        } = require('./lib/uploader')
        let media = await TsuCnn.downloadAndSaveMediaMessage(quoted)
        if (/image/.test(mime)) {
          let anu = await imgbbUploader("51b8ecffd3008ef0242ca140d6109361", media)
          await replylimit(util.format(anu))
        } else if (!/image/.test(mime)) {
          let anu = await UploadFileUgu(media)
          replylimit(util.format(anu))
        }
        await fs.unlinkSync(media)
        uselimit2()
      }
      break
      case 'daftar':
      case 'regis':
      case 'register': {
        if (isRegistered) return m.reply('Kamu sudah terdaftar')
        const serialUser = createSerial(20)
        mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split('@')[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Jangan Lupa Baca Rules Ya ${pushname}...
Data User Yang Tersimpan Di Database Bot, Dijamin Aman Tanpa Tershare (. ❛ ᴗ ❛.)`
        veri = m?.sender
        if (!m.isGroup) {
          addRegisteredUser(m?.sender, pushname, serialUser)
          TsuCnn.sendMessage(m?.chat, {
            text: mzd,
            contextInfo: {
              mentionedJid: [m?.chat],
              externalAdReply: {
                showAdAttribution: true,
                title: `© 2024 | R E G I S T E R`,
                body: '',
                thumbnailUrl: ppuser,
                sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else {
          addRegisteredUser(m?.sender, pushname, serialUser)
          TsuCnn.sendMessage(m?.chat, {
            text: mzd,
            contextInfo: {
              mentionedJid: [m?.chat],
              externalAdReply: {
                showAdAttribution: true,
                title: `© 2024 | R E G I S T E R`,
                body: '',
                thumbnailUrl: ppuser,
                sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        }
      }
      break
      case 'ss':
      case 'ssweb': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        const scp1 = require('./lib/myfunc')
        if (!q) return replyerr(`*Contoh* : ${prefix+command} link`)
        m.reply(mess.search)
        let krt = await scp1.ssweb(q)
        TsuCnn.sendMessage(from, {
          image: krt.result,
          caption: mess.success
        }, {
          quoted: limituse
        })
        uselimit2()
      }
      break
      case 'rules':
      case 'peraturan': {
        if (isBot) return
        let rls = `Halo ${pushname} 👋, ${ucapanWaktu}, Berikut adalah Peraturan Penggunaan Bot:

*Panggilan Telepon*: Pengguna dilarang keras melakukan panggilan telepon kepada bot atau pemiliknya.
*Komunikasi*: Harap berkomunikasi dengan jelas dan relevan saat menghubungi pemilik bot.
*Permintaan*: Dilarang keras memohon atau meminta Limit, Saldo, atau Akses Premium dari pemilik bot.
*Spam*: Dilarang melakukan spam atau tindakan yang dapat mengganggu pemilik bot.
*Penggunaan Bot*: Dilarang keras melakukan spam terhadap bot.
*Kebijaksanaan*: Gunakan bot dengan bijak dan bertanggung jawab.
*Aktivitas Ilegal*: Dilarang menggunakan bot untuk kegiatan yang melanggar hukum.
*Keamanan Bot*: Dilarang keras mencoba menghack atau meretas bot.
*Permintaan kepada Pengguna Lain*: Dilarang meminta-minta Limit atau Saldo kepada pengguna lain.
*Kerjasama*: Dukunglah kerjasama dan interaksi yang positif antara pengguna. 
*Pembaruan*: Patuhi pembaruan peraturan yang mungkin diberlakukan dari waktu ke waktu. 
*Kepatuhan*: Pengguna harus mematuhi semua peraturan yang berlaku di wilayah hukum mereka saat menggunakan bot. 
*Ketepatan Waktu*: Gunakan fitur bot sesuai dengan waktu yang telah ditentukan, hindari penggunaan di luar jam operasional jika ada.
*Keramahan*: Jaga bahasa dan sikap yang sopan saat berinteraksi dengan bot atau pengguna lain.

*Catatan*:
  Dengan mematuhi peraturan ini, Anda membantu menciptakan lingkungan yang aman dan nyaman bagi semua pengguna. Pelanggaran terhadap peraturan ini dapat mengakibatkan penonaktifan akses Anda. Mari kita gunakan teknologi ini dengan bijak dan bertanggung jawab.
  Ingatlah bahwa bot ini adalah alat yang dirancang untuk membantu dan memudahkan pekerjaan Anda. Penggunaan yang tidak sesuai tidak hanya merugikan Anda, tetapi juga pengguna lain. Mari kita jaga agar lingkungan ini tetap produktif dan positif.`
        TsuCnn.sendMessage(m.chat, {
          text: rls,
          mentions: [m.sender]
        }, {
          quoted: kalgan2
        })
      }
      break
      //BATAS MAIN MENU
      // DOWNLOAD MENU
      case 'npmdownloader': 
      case 'npmdownload': 
      case 'npmpkgdownloader': 
      case 'npmpkgdownload': 
      case 'npmd': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} yt-search,versi(opsional)`)
          TsuCnn.sendMessage(m.chat, {
            react: {
              text: "⏱",
              key: m.key,
            }
          })
        //if (!text.split(",")) return replyerr(`*Contoh* : ${prefix+command} yt-search,versi(opsional)`)
        const [text2, ver] = text.split(",")
      await npmdownloader(text2, ver ? ver : 'latest')
      }
      break
      case 'song':
      case 'plays':
      case 'playso':
      case 'playsong': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Hey Daddy`)
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        let search = await yts(text);
        let vid = search.videos[0];
        if (!search) m.reply('Tidak dapat menemukan Video, coba Judul yang lainnya.')
        let {
          thumbnail,
          ago,
          views,
          author,
          timestamp,
          url,
          title
        } = vid;
        var ytd = idyt(url)
        var video = await yts({
          videoId: `${ytd}`
        })
        let viewss = formatViews2(views)
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idsal,
                    newsletterName: `Tsumuri Song`,
                    serverMessageId: -1
                  },
                  businessMessageForwardInfo: {
                    businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id)
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({}),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: Styles('Audio sedang dikirim, mohon tunggu sebentar.')
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: `Judul: ${title}
Author: ${author.name}
Durasi: ${timestamp}
Views: ${viewss}
Upload: ${ago}`,
                  subtitle: ``,
                  hasMediaAttachment: true,
                  ...(await prepareWAMessageMedia({
                    image: {
                      url: thumbnail
                    }
                  }, {
                    upload: TsuCnn.waUploadToServer
                  }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                      "display_text": "Copy Url",
                      "copy_code": `${url}`
                    })
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Youtube Video\",\"url\":\"${url}\",\"merchant_url\":\"${url}\"}`
                  }, ],
                })
              })
            }
          }
        }, {
          quoted: limituse
        })
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
        await playmp3d(url)
        uselimit2()
      }
      break
      case 'tiktok':
      case 'tt': {
        if (args.length == 0) return replyerr(`*Contoh* : ${prefix + command} link lu`)
        let res = await tiktok(`${args[0]}`)
        TsuCnn.sendMessage(m.chat, {
          video: {
            url: res.nowm
          },
          caption: res.title,
          fileName: `tiktok.mp4`,
          mimetype: 'video/mp4'
        }).then(() => {
          TsuCnn.sendMessage(m.chat, {
            audio: {
              url: res.audio
            },
            fileName: `tiktok.mp3`,
            mimetype: 'audio/mp4'
          })
        })
      }
      break
      case 'spotifysearch': case 'spotifys': {
        if (!text) return replyerr(`*Contoh* : ${prefix+command} Whole Heart`)
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        let result = await searchSpotifyTracks(text)
        let caption = result.map((v, i) => {
          return {
            header: "",
            title: v.name,
            description: v.artists.map(artist => artist.name).join(', '),
            id: '.spotify ' + v.album.external_urls.spotify
          }
        })
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: {
                body: {
                  text: `🔎 Hasil Pencarian Dari ${text}\nSilahkan Pilih List di bawah ini`,
                },
                footer: {
                  text: wm
                },
                header: {
                  title: "Spotify - Search",
                  subtitle: "",
                  hasMediaAttachment: false,
                },
                nativeFlowMessage: {
                  buttons: [{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                      title: "CLICK HERE",
                      sections: [{
                        title: "",
                        rows: caption
                      }]
                    })
                  }]
                }
              }
            }
          }
        }, {
          quoted: m
        }, {});
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
      }
      break
      case 'spotify': case 'spotifydl': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} https://open.spotify.com/track/4Z1t1aMRif8ES212kTN8H2`)
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        try {
          axios.get(`https://api.ssateam.my.id/api/spotifydl?url=${text}`).then(async ({
            data
          }) => {
            let spgg = data.data.response
            await TsuCnn.sendMessage(m.chat, {
              audio: {
                url: spgg.download
              },
              mimetype: "audio/mp4",
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  mediaType: 2,
                  mediaUrl: text,
                  title: spgg.title,
                  body: "Tsumuri-Md",
                  sourceUrl: text,
                  thumbnailUrl: spgg.image
                }
              }
            }, {
              quoted: kalgan2
            })
          })
        } catch (error) {
          console.error(error)
        }
      }
      break
      case 'ytreels':
      case 'ytmp4':
      case 'ytv': {
        if (!text) return replyerr(`*Contoh* : ${prefix+command} https://youtu.be/wwsNyZFoxSw?si=W7mCTIySos8xsXZ8`)
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        await downloadMp4(text)
      }
      break
      case 'ytmp3':
      case 'youtubemp3':
      case 'yta': {
        if (!text) replyerr(`*Contoh* : ${prefix + command} https://youtu.be/-HjpL-Ns6_A?si=ZimWSeerVo-eO2Xq`)
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        await downloadMp3(text)
      }
      break
      case 'instagram': {
        if (!text) replyerr(`*Contoh* : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        let iganu = await igdl2(text)
        TsuCnn.sendMessage(m.chat, {
          video: {
            url: iganu[0].url
          },
          caption: mess.success
        })
      }
      break
     /* case 'mediafire': {
        if (!args[0]) return m.reply(`*Contoh* : ${prefix+command} Url`)
        if (!args[0].match(/mediafire/gi)) return m.reply(`Link incorrect`)
        let full = /f$/i.test(command)
        let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
        let res = await mediafiredl(args[0])
        let {
          url,
          url2,
          filename,
          ext,
          aploud,
          filesize,
          filesizeH
        } = res
        let caption = `
≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
        TsuCnn.sendMessage(m.chat, {
          document: {
            url: url
          },
          fileName: filename,
          mimetype: ext
        }, {
          quoted: m
        })
      }
      brea*/
      /**
 * 
 * [ *MEDIAFIRE DOWNLOADER* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'mediafire': {
	if (!args[0]) return m.reply(`Masukkan url mediafire\nContoh : ${prefix + command} https://www.mediafire.com/××××××××`);
	async function mediafire(link) {
	return new Promise(async(resolve, reject) => {
		try {
			const res = await axios.get(link);
			const $ = cheerio.load(res.data);
			const url = $('a#downloadButton').attr('href');
			const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '').trim();
			const title = url.split('/')[5].split("+").join(" ").split(".").reverse().slice(1).reverse().join(".");
			const type = url.split("/")[5].split('.').reverse()[0];
			resolve({
				title,
				size,
				type,
				url
			});
		} catch (err) {
			reject({
				error: err
			})
		}
	})
}
	TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
	const { title, size, type, url } = await mediafire(args[0]);
	let bjirrbangg = `*Mediafire*\n\nNama: ${title}\nSize: ${size}\nMime: ${type}`
	let typeh;
	if (type.startsWith("zip") || type.startsWith("7z") || type.startsWith("rar") || type.startsWith("pdf") || type.startsWith("apt") || type.startsWith("json")) {
	typeh = "application/"
	} else (type.startsWith("mp4") || type.startsWith("mpeg")) {
	typeh = "video/"
	} else (type.startsWith("mp3") || type.startsWith("ogg")) {
	typeh = "audio/"
	}
  replyj(bjirrbangg)
  await TsuCnn.sendMessage(m.chat, { document: { url: url }, fileName: title+'.'+type, mimetype: typeh+type }, { quoted: m })
}
break
      case 'git':
      case 'gitclone': {
        if (!args[0]) return m.reply(`*Contoh* : ${prefix+command} https://github.com/YukiShima4/tes`)
        if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
        m.reply(mess.search)
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
        let [, user, repo] = args[0].match(regex1) || []
        repo = repo.replace(/.git$/, '')
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`
        let filename = (await fetch(url, {
          method: 'HEAD'
        })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
        TsuCnn.sendMessage(m.chat, {
          document: {
            url: url
          },
          fileName: filename + '.zip',
          mimetype: 'application/zip'
        }, {
          quoted: kalgans
        }).catch((err) => m.reply('emror'))
      }
      break
      //BATAS DOWN MENU
      //GROUP MENU
      case 'promote': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        if (!text && !m.quoted) m.reply('masukkan nomor yang ingin dipromote')
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await TsuCnn.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
      }
      break
      case 'antilink': {
        if (!isCreator) return replyerr(mess.owner)
        if (!m.isGroup) return groupon(from)
        if (!isAdmins && !isCreator) return sticAdmin(from)
        if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
        if (args[0] === "on") {
          if (AntiLink) return m.reply('Sudah Aktif')
          ntilink.push(from)
          m.reply('Succes menyalakan antilink di group ini 🌷')
        } else if (args[0] === "off") {
          if (!AntiLink) return m.reply('Sudah Mati')
          let off = ntilink.indexOf(from)
          ntilink.splice(off, 1)
          m.reply('Succes mematikan antilink di group ini 🌷')
        } else {
          m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
        }
      }
      break
      case 'demote': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        if (!text && !m.quoted) m.reply('masukkan nomor yang ingin didemote')
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await TsuCnn.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
      }
      break
      case 'sendlinkgc': {
        if (!isCreator) return replyerr(mess.owner)
        if (!m.isGroup) return replyerr(mess.group)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        if (!args[0]) return replyerr(`*Contoh* : ${prefix+command} 628xxxxxxxxxx`)
        bnnd = text.split("|")[0] + '@s.whatsapp.net'
        let response = await TsuCnn.groupInviteCode(from)
        TsuCnn.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
          detectLink: true
        })
      }
      break
      case 'resetlinkgc':
        if (!isCreator) return replyerr(mess.owner)
        if (!m.isGroup) return replyerr(mess.group)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        TsuCnn.groupRevokeInvite(from)
        break
      case 'editdesk': {
        if (!isCreator) return replyerr(mess.owner)
        if (!m.isGroup) return replyerr(mess.group)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!text) return m.reply(`Text Nya ?`)
        await TsuCnn.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
      }
      break
      case 'closetime':
        if (!m.isGroup) return replyerr(mess.group)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        if (args[1] == "detik") {
          var timer = args[0] * `1000`
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`
        } else {
          return replyerr(`*Contoh* : ${prefix+command} 10 detik/menit/jam`)
        }
        replyj(`Close time ${q} dimulai dari sekarang`)
        setTimeout(() => {
          const close = `Group telah ditutup, Semoga jadi lebih tenang.`
          TsuCnn.groupSettingUpdate(from, 'announcement')
          replyj(close)
        }, timer)
        break
      case 'opentime': {
        if (!m?.isGroup) return replyerr(mess.group)
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        if (args[1] == 'detik') {
          var timer = args[0] * `1000`
        } else if (args[1] == 'menit') {
          var timer = args[0] * `60000`
        } else if (args[1] == 'jam') {
          var timer = args[0] * `3600000`
        } else if (args[1] == 'hari') {
          var timer = args[0] * `86400000`
        } else {
          return replyerr(`*Contoh* : ${prefix+command} 10 detik/menit/jam`)
        }
        replyj(`Open Time ${q} Dimulai Dari Sekarang`)
        setTimeout(() => {
          const nomor = m.participant
          const open = `Group telah dibuka, Tetap patuhi peraturan ya.`
          TsuCnn.groupSettingUpdate(m.chat, 'not_announcement')
          replyj(open)
        }, timer)
      }
      break
      // agama menu
      case 'bible': {
        if (!text) return replyerr(`*Contoh* : ${prefix+command} john 3:16`)
        axios.get(`https://bible-api.com/${text}`).then(async ({
          data
        }) => {
          let chptrhin = await translate(`${data.text}`, {
            to: 'hi',
            autoCorrect: true
          })
          let chptrind = await translate(`${data.text}`, {
            to: 'id',
            autoCorrect: true
          })
          var text = `📖 *The Holy Bible*\nReference : ${data.reference}\n`
          text += `\n*Chapter Content English:*\n${data.text}`
          text += `*Chapter Content Hindi:*\n\n${chptrhin.text}\n\n`
          text += `*Chapter Content Indonesia:*\n\n${chptrind.text}`
          replyj(text)
        })
      }
      break
      /*case 'gita': {
      let verseNumber = m.text.split(' ')[1]
          if (!verseNumber || isNaN(verseNumber)) {
            verseNumber = Math.floor(Math.random() * 700) + 1
          axios
          .get(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
          .then(async ({ data }) => {
          let gtid = await translate(`${data.text}`, { to: 'id', autoCorrect: true })
          let gteng = await translate(`${data.text}`, { to: 'eng', autoCorrect: true })
              var text = `🕉 *Bhagavad Gita: Sacred Teachings*\nChapter : ${data.chapter_no}\n`
              text += `\n*Verse :*\n${data.verse_no}`
              text += `*Chapter Content Indonesia:*\n\n${gtid.text}\n\n`
              text += `*Chapter Content English:*\n\n${gteng.text}`
              replyj(text)
      })}
      */
      case 'doaharian': {
        let src = JSON.parse(fs.readFileSync('./database/doaharian.json', 'utf-8'))
        let caption = src.map((v, i) => {
          return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
        }).join('\n\n')
        m.reply(`${caption}`)
      }
      break
      case 'niatsholat':
      case 'niatsalat': {
        if (!q) return replyerr(`*Contoh* : ${prefix+command} Subuh`)
        const niatsholat = [{
          index: 1,
          solat: "subuh",
          latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
          arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
          translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
        }, {
          index: 2,
          solat: "maghrib",
          latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
          arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
          translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
        }, {
          index: 3,
          solat: "dzuhur",
          latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
          arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
          translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
        }, {
          index: 4,
          solat: "isya",
          latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
          arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
          translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
        }, {
          index: 5,
          solat: "ashar",
          latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
          arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
          translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
        }, {
          index: 6,
          solat: "tahajjud",
          latin: "Ushalli sunnatat tahajjudi rak'ataini mustaqbilal qiblati lillahi ta'ala",
          arabic: "اُصَلِّى سُنَّةً التَّهَجُّدِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ ِللهِ تَعَالَى",
          translation_id: "Aku berniat shalat sunnah tahajud dua rakaat, menghadap kiblat, karena Allah ta'ala",
        }, {
          index: 7,
          solat: "dhuha",
          latin: "Ushalli sunnatadh dhuhaa rak'ataini mustaqbilal qiblati adaan lillaahi ta'aalaa",
          arabic: "اُصَلِّى سُنَّةَ الضَّحٰى رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
          translation_id: "Aku niat sholat dhuha dua rakaat, karena Allah ta'ala",
        }, {
          index: 8,
          solat: "dhuha",
          latin: "Ushalli sunnatat tarawihi rak'ataini mustaqbilal qiblati adaa an lillahi ta'ala",
          arabic: "اُصَلِّى سُنَّةَ التَّرَاوِيْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلهِ تَعَالَى",
          translation_id: "Aku berniat sholat tarawih dua rakaat dengan menghadap kiblat karena Allah taala",
        }, {
          index: 9,
          solat: "dhuha",
          latin: "Ushallii sunnatal witri tsalaasa roka'aatain mustaqbilal qiblati lillaahi ta'alaa",
          arabic: "اُصَلِّى سُنَّةَ الْوِتْرِ ثَلَاثَ رَكْعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ لِلهِ تَعَالَى",
          translation_id: "Saya niat sholat witir tiga rakaat menghadap kiblat karena Allah Taala",
        }, {
          index: 10,
          solat: "taubat",
          latin: "Ushalli sunnatat taubati rak’ataini lillaahi ta’aalaa",
          arabic: "أصلى سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
          translation_id: "Saya niat sholat taubat dua raka’at karena Allah Taala",
        }, {
          index: 11,
          solat: "safar",
          latin: "Ushalliî sunnatas safari rak'ataini lillâhi ta'âla",
          arabic: "أُصَلِّي سُنَّةَ السَّفَرِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى",
          translation_id: "Saya niat shalat sunnah perjalanan dua rakaat karena Allah ta'âla",
        }, {
          index: 12,
          solat: "safar",
          latin: "Ushalli sunnatan li Idil Fitri rak'atayni mustaqbilal qiblati adā'an lillāhi ta'ālā",
          arabic: "اُصَلِّى سُنَّةً لِعِيْدِ الفِطْرِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً للهِ تَعَالَى",
          translation_id: "Aku menyengaja sembahyang sunnah Idul Fitri dua rakaat dengan menghadap kiblat karena Allah SWT",
        }, {
          index: 13,
          solat: "hajat",
          latin: "Ushallii sunnatal haajati rak'ataini lillaahi ta'aalaa",
          arabic: "أُصَلَّيْ سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
          translation_id: "Saya niat sholat sunnah hajat 2 rakaat karena Allah Ta'ala",
        }]
        let text = q.toLowerCase() || ''
        let data = Object.values(niatsholat).find(v => v.solat == text)
        if (!data) return reply(`${text} Tidak Ditemukan atau belum tersedia`)
        reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
      }
      break
      case 'kisahnabi': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (args.length == 0) return replyerr(`*Contoh* : ${prefix + command} Muhammad`)
        axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=ef9e2cf41e82d53b62533a88`).then(({
          data
        }) => {
          var text = `Name : ${data.result.name}\n`
          text += `Lahir : ${data.result.thn_kelahiran}\n`
          text += `Umur : ${data.result.age}\n`
          text += `Tempat : ${data.result.place}\n`
          text += `Story : \n${data.result.story}`
          replylimit(text)
          uselimit2()
        }).catch((error) => {
          console.error(error)
          reply('Terjadi kesalahan saat mengambil data kisah nabi.')
        })
        break
      }
      case 'jadwalsholat': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} yogyakarta`)
      //  if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        /*axios.get(`https://anabot.my.id/api/search/jadwalsholat?kab_kota=${encodeURIComponent(text)}&apikey=${pickRandom(['uhnKkdVjsVeICuI','DdUFIJY3sIGZW0g','gataupw'])}`).then(({
          data
        }) => {*/
        let today = new Date();
        let daten = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        got.get(`https://api.aladhan.com/v1/timingsByCity/${daten}?city=${text}&country=Indonesia&method=20`).then( data => {
          let jdwl = data.data.timings
          var text = `Untuk Wilayah ${text} / ${data.meta.timezone}\n`
          text += `Tanggal : ${data.data.date.readable}\n`
          text += `Jadwal :\n`
          text += `> Subuh : ${jdwl.Fajr}\n`
          text += `> Terbit : ${jdwl.Sunrise}\n`
          //text += `> Dhuha : ${data.result.jadwal.dhuha}\n`
          text += `> Zuhur : ${jdwl.Dhuhr}\n`
          text += `> Ashar : ${jdwl.Asr}\n`
          text += `> Maghrib : ${jdwl.Maghrib}\n`
          text += `> Isya : ${jdwl.Isha}`
          replyj(text)
         // uselimit2()
        }).catch(error => {
          console.error(error)
          replyerr('Terjadi kesalahan saat mengambil data Jadwal Sholat.')
        })
        }
        break
      case 'ayatkursi': {
        let caption = `
*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”


Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`
        m.reply(caption)
      }
      break
      case 'quotesislamic': {
        let randomQuote = quotesis[Math.floor(Math.random() * quotesis.length)]
        let caption = `Quotes Islam:\n${randomQuote}`
        m.reply(caption)
      }
      break
      // nsfw menu
      case 'pixiv': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        let px2 = pickRandom(['Akane', 'Shiroko', 'Hu tao', 'Elaina', 'Shizuka', 'Yaemiko', 'Shiroko', 'Yuuka', 'Hoshino', 'Shiroko', 'Furina'])
        let img1 = `https://ndra-furinaa-api.vercel.app/api/pixiv?query=${text ? `${text}`:`${px2}`}&apiKey=furinafree`
        axios.get(img1).then(async ({
          data
        }) => {
          let img2 = pickRandom(data.result)
          TsuCnn.sendMessage(from, {
            image: {
              url: img2.urls.regular
            },
            caption: `Title: *${img2.title}*\nAuthor: ${img2.author}`
          }, {
            quoted: limituse
          })
          uselimit2()
        }).catch((error) => {
          console.error(error)
          replyj(`Tidak dapat menemukan data ${command} ${text}.`)
        })
      }
      break
      case 'pixiv18': {
        if (!isPremium) return replyerr(mess.premium)
        let px2 = pickRandom(['Akane', 'Shiroko', 'Hu tao', 'Elaina', 'Shizuka', 'Yaemiko', 'Shiroko', 'Yuuka', 'Hoshino', 'Shiroko', 'Furina'])
        let img1 = `https://ndra-furinaa-api.vercel.app/api/pixiv-r18?query=${text ? `${text}`:`${px2}`}&apiKey=furinafree`
        axios.get(img1).then(async ({
          data
        }) => {
          let img2 = pickRandom(data.result)
          TsuCnn.sendMessage(from, {
            image: {
              url: img2.urls.regular
            },
            caption: `Title: *${img2.title}*\nAuthor: ${img2.author}`
          }, {
            quoted: limituse
          })
        }).catch((error) => {
          console.error(error)
          replyj(`Tidak dapat menemukan data ${command} ${text}.`)
        })
      }
      break
      case 'trap':
        if (limitnya < 5 && !isPremium) return replyerr(mess.limit)
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
        TsuCnn.sendMessage(m.chat, {
          caption: `*Trap Image*`,
          image: {
            url: waifudd.data.url
          }
        }, {
          quoted: limituse2
        })
        minlimit(5)
        break
      case 'hentai-neko':
      case 'hneko':
        if (!isPremium) return replyerr(mess.premium)
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
        TsuCnn.sendMessage(m.chat, {
          caption: mess.success,
          image: {
            url: waifudd.data.url
          }
        }, {
          quoted: m
        })
        break
      case 'hentai-waifu':
      case 'nwaifu':
        if (!isPremium) return replyerr(mess.premium)
        reply(mess.wait)
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
        TsuCnn.sendMessage(m.chat, {
          caption: mess.success,
          image: {
            url: waifudd.data.url
          }
        }, {
          quoted: m
        })
        break
      case 'hentai': {
        if (!isPremium) return replyerr(mess.premium)
        async function nhentaiScraper(id) {
          let uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/'
          let html = (await axios.get(uri)).data
          return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data
        }

        function toPDF(images, opt = {}) {
          return new Promise(async (resolve, reject) => {
            if (!Array.isArray(images)) images = [images]
            let buffs = [],
              doc = new PDFDocument({
                margin: 0,
                size: 'A4'
              })
            for (let x = 0; x < images.length; x++) {
              if (/.webp|.gif/.test(images[x])) continue
              let data = (await axios.get(images[x], {
                responseType: 'arraybuffer',
                ...opt
              })).data
              doc.image(data, 0, 0, {
                fit: [595.28, 841.89],
                align: 'center',
                valign: 'center'
              })
              if (images.length != x + 1) doc.addPage()
            }
            doc.on('data', (chunk) => buffs.push(chunk))
            doc.on('end', () => resolve(Buffer.concat(buffs)))
            doc.on('error', (err) => reject(err))
            doc.end()
          })
        }
        let code = (args[0] || '').replace(/\D/g, '')
        if (!code) return reply('Input code')
        await m.reply('_In progress, please wait..._')
        let data = await nhentaiScraper(code)
        let pages = []
        let thumb = `https://external-content.duckduckgo.com/iu/?u=https://t.nhentai.net/galleries/${data.media_id}/thumb.jpg`
        data.images.pages.map((v, i) => {
          let ext = new URL(v.t).pathname.split('.')[1]
          pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${data.media_id}/${i + 1}.${ext}`)
        })
        let buffer = await (await fetch(thumb)).buffer()
        let jpegThumbnail = await extractImageThumb(buffer)
        let imagepdf = await toPDF(pages)
        await TsuCnn.sendMessage(m.chat, {
          document: imagepdf,
          jpegThumbnail,
          fileName: data.title.english + '.pdf',
          mimetype: 'application/pdf'
        }, {
          quoted: kalgan2
        })
      }
      break
      //SEARCH MENU
case 'chord':{
async function chord(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const head = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
 "Cookie": "__gads=ID=4513c7600f23e1b2-22b06ccbebcc00d1:T=1635371139:RT=1635371139:S=ALNI_MYShBeii6AFkeysWDKiD3RyJ1106Q; _ga=GA1.2.409783375.1635371138; _gid=GA1.2.1157186793.1635371140; _fbp=fb.1.1635371147163.1785445876"
 };
 
 const { data } = await axios.get(`http://app.chordindonesia.com/?json=get_search_results&exclude=date,modified,attachments,comment_count,comment_status,thumbnail,thumbnail_images,author,excerpt,content,categories,tags,comments,custom_fields&search=${query}`, { headers: head });
 
 const anu = await axios.get(`http://app.chordindonesia.com/?json=get_post&id=${data.posts[0].id}`, { headers: head });
 
 let $ = cheerio.load(anu.data.post.content);
 
 resolve({
 title: $("img").attr("alt"),
 chord: $("pre").text().trim()
 });
 } catch (error) {
 reject(error);
 }
 });
}

if (!text) return m.reply(`*Contoh* : ${prefix+command} Indonesia Raya`);
 
let query = text.replace(/\s/g, '+'); // Mengganti spasi dengan "+"
let a = await chord(query);
 
m.reply(`*Song :* ${a.title}\n*Chord :*\n\n${a.chord}`);
};
break

      case 'play2': 
      case 'yts2': {
        if (!text) return m.reply(`*Contoh* : ${prefix+command} Berita kepada kawan`)
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        let search = await yts(text);
        let vid = search.videos[0];
        let se = require('./lib/scrapyt')
        let res = await se.search(text)
        if (res.length === 0) return m.reply("Tidak ada hasil.")
        let sections = [{
        title:"Unduh video di atas",
      highlight_label: 'Pilih',
      rows:[{
          title: `Unduh mp3`,
          description: `Unduh sebagai audio`,
          id: `${prefix}ytmp3 ${vid.url}`
        },{
          title: `Unduh mp4`,
          description: `Unduh sebagai video`,
          id: `${prefix}ytmp4 ${vid.url}`
        }]
        },{
          title: "Hasil Pencarian Lainnya",
          highlight_label: "More Result",
          rows: res.map(a => ({
            title: a.title,
            description: `Pilih untuk selengkapnya`,
            id: `${prefix}ytsplay555hrijgayhn ${a.url}`
          }))
        }]
        let listMessage = {
          title: '「⸔ Klik di sini ⸕」',
          sections
        };
        let viewss = formatViews2(vid.views)
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idsal,
                    newsletterName: `Powered By ${ownername}`,
                    serverMessageId: -1
                  },
                  businessMessageForwardInfo: {
                    businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id)
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                  text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: Styles('Hasil Lainnya atau unduh video di atas ↓↓↓.')
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: `Title: ${vid.title}\nAuthor: ${vid.author.name}\nViews: ${viewss}\nDuration: ${vid.timestamp}\nUpload: ${vid.ago}`,
                  subtitle: "",
                  hasMediaAttachment: false,
                  ...(await prepareWAMessageMedia({
                    image: {
                      url: vid.thumbnail
                    }
                  }, {
                    upload: TsuCnn.waUploadToServer
                  }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": JSON.stringify(listMessage)
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Youtube Video\",\"url\":\"${vid.url}\",\"merchant_url\":\"${vid.url}\"}`
                  }, ],
                })
              })
            }
          }
        }, {quoted:kalgan2})
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'ytsplay555hrijgayhn': {
        if (!text) return;
        var ytd = idyt(text)
        var vid = await yts({
          videoId: `${ytd}`
        })
        let {
          thumbnail,
          ago,
          views,
          author,
          timestamp,
          url,
          title
        } = vid;
        let sections = [{
          title: '      ╺─┄┄╌╌⊰ Audio ⊱╌╌┈──╸',
          highlight_label: 'Pilih audio',
          rows: [{
            title: 'Unduh mp3',
            description: "Unduh sebagai audio",
            id: `${prefix}ytmp3 ${url}`
          }]
        },{
        title: '      ╺─┄┄╌╌⊰ Video ⊱╌╌┈──╸',
          highlight_label: 'Pilih video',
          rows: [{
            title: 'Unduh mp4',
            description: "Unduh sebagai video",
            id: `${prefix}ytmp4 ${url}`
          }]
        }]
        let listMessage = {
          title: 'Unduh di sini',
          sections
        };
        let viewss = formatViews2(views)
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idsal,
                    newsletterName: `Tsumuri Play`,
                    serverMessageId: -1
                  },
                  businessMessageForwardInfo: {
                    businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id)
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({}),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: Styles('Pilih type unduh di bawah.')
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: `Judul: ${title}
Author: ${author.name}
Durasi: ${timestamp}
Views: ${viewss}
Upload: ${ago}`,
                  subtitle: ``,
                  hasMediaAttachment: true,
                  ...(await prepareWAMessageMedia({
                    image: {
                      url: thumbnail
                    }
                  }, {
                    upload: TsuCnn.waUploadToServer
                  }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": JSON.stringify(listMessage)
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Youtube Video\",\"url\":\"${url}\",\"merchant_url\":\"${url}\"}`
                  }, ],
                })
              })
            }
          }
        }, {
          quoted: kalgan3
        })
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'play': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Hey Daddy`)
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        let search = await yts(text);
        let vid = search.videos[0];
        if (!search) m.reply('Tidak dapat menemukan Video, coba Judul yang lainnya.')
        let {
          thumbnail,
          ago,
          views,
          author,
          timestamp,
          url,
          title
        } = vid;
        var ytd = idyt(url)
        var video = await yts({
          videoId: `${ytd}`
        })
        let sections = [{
          title: '      ╺─┄┄╌╌⊰ Audio ⊱╌╌┈──╸',
          highlight_label: 'Pilih audio',
          rows: [{
            title: 'Unduh mp3',
            description: "Unduh sebagai audio",
            id: `${prefix}ytmp3 ${url}`
          }]
        },{
        title: '      ╺─┄┄╌╌⊰ Video ⊱╌╌┈──╸',
          highlight_label: 'Pilih video',
          rows: [{
            title: 'Unduh mp4',
            description: "Unduh sebagai video",
            id: `${prefix}ytmp4 ${url}`
          }]
        }]
        let listMessage = {
          title: 'Unduh di sini',
          sections
        };
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idsal,
                    newsletterName: `Tsumuri Play`,
                    serverMessageId: -1
                  },
                  businessMessageForwardInfo: {
                    businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id)
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({}),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: Styles('Pilih type unduh di bawah.')
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: `Judul: ${title}
Author: ${author.name}
Durasi: ${timestamp}
Views: ${views}
Upload: ${ago}`,
                  subtitle: ``,
                  hasMediaAttachment: true,
                  ...(await prepareWAMessageMedia({
                    image: {
                      url: thumbnail
                    }
                  }, {
                    upload: TsuCnn.waUploadToServer
                  }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": JSON.stringify(listMessage)
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Youtube Video\",\"url\":\"${url}\",\"merchant_url\":\"${url}\"}`
                  }, ],
                })
              })
            }
          }
        }, {
          quoted: kalgan2
        })
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'kodepos':
      case 'pos': {
        if (!text) return replyerr('Contoh : ' + prefix + command + ' Semarang');
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        axios.get('https://anabot.my.id/api/search/kodepos?query=' + text + '&apikey=' + pickRandom(['uhnKkdVjsVeICuI', 'DdUFIJY3sIGZW0g', 'gataupw','freeApikey'])).then(async ({
          data
        }) => {
          if (!data.result) return replyerr('Data tidak ditemukan');
          let results = data.result.slice(0, 10)
          let teks = '*Kodepos*: ' + text + '\n\n';
          for (let k of results) {
            teks += '- *Kode*: ' + k.kode_pos + '\n';
            teks += '- *Kelurahan*: ' + k.kelurahan + '\n';
            teks += '- *Kecamatan*: ' + k.kecamatan + '\n';
            teks += '- *Kota*: ' + k.kota + '\n';
            teks += '- *Provinsi*: ' + k.provinsi + '\n\n────────────────────────\n\n';
          }
          replyj(teks);
        }).catch(error => replyerr('Terjadi kesalahan atau data tidak ditemukan '));
        console.log(error)
      }
      break
      /* 'lyrics': {
          if (!text) return replyerr(`*Contoh* : ${prefix + command} Surat cinta untuk starla`)
          await TsuCnn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
          axios
          .get(`https://widipe.com/lirik?text=${encodeURIComponent(text)}`)
          .then(({ data }) => {
              var teks = `Title : ${data.result.title}\n`
              teks += `Lirik : \n${data.result.lyrics}`
              TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
                  fileName: `${data.result.artist}`,
                  mimetype: "application/msword",
                  fileLength: 00000111,
                  pageCount: 2024,
      			caption: teks,
      contextInfo: {
      externalAdReply:{
      title: `${data.result.title}`,
      body: `${data.result.artist}`,
      thumbnailUrl: data.result.image,
      sourceUrl: data.result.url,
      mediaType: 1,
      renderLargerThumbnail: true
      }}},{quoted: kalgan2})
      -await TsuCnn.sendMessage(from, {image: {url: data.result.image}, caption: teks, 
      contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterJid: '120363295629217013@newsletter',
      newsletterName: "Tsumuri",
      serverMessageId: 143
      }}}, {quoted: kalgan2})-
          })
          .catch((error) => {
              console.error(error)
              reply(`Terjadi kesalahan saat mengambil data ${command}.`)
          })
      }
      */
      case 'lirik':
      case 'lyric':
      case 'lyrics': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Surat cinta untuk starla`)
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        axios.get(`https://widipe.com/lirik?text=${encodeURIComponent(text)}`).then(async ({
          data
        }) => {
          let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: `*Title* : ${data.result.title}\n*Artist* : ${data.result.artist}\n*Lirik* : \n${data.result.lyrics}`
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: Styles(`Jika tidak seperti yang diharapkan, coba berikan yang lebih spesifik, seperti artistnya.`)
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false,
                    ...await prepareWAMessageMedia({
                      image: {
                        url: data.result.image
                      }
                    }, {
                      upload: TsuCnn.waUploadToServer
                    })
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({}),
                  contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363295629217013@newsletter',
                      newsletterName: "Tsumuri",
                      serverMessageId: 143
                    }
                  }
                })
              }
            }
          }, {
            quoted: kalgan2
          });
          return await TsuCnn.relayMessage(m.chat, msgs.message, {})
        })
      }
      break
      /* 'lyrics': case 'lirik': {
      if (!text) return replyj(`${prefix+command} whole heart`)
      let url = `https://widipe.com/lirik?text=${encodeURIComponent(text)}`
      axios.get(url).then(async ({ data }) => {
      const lekbfr = await getBuffer(data.result.image);
      let msgs = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
      message: {
      "messageContextInfo": {
      "deviceListMetadata": {},
      "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
      body: proto.Message.InteractiveMessage.Body.create({
      text: `Title: ${data.result.title}\nArtist: ${data.result.artist}` + data.result.lyrics
      }),
      footer: proto.Message.InteractiveMessage.Footer.create({
      text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.create({
      hasMediaAttachment: false,
      ...await prepareWAMessageMedia({ image: lekbfr }, { upload: TsuCnn.waUploadToServer })
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [{
      "name": "quick_reply",
      "buttonParamsJson": `{\"display_text\":\"👆\",\"id\":\"👆"}`
      }],
      }),
      contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterJid: '120363295629217013@newsletter',
      newsletterName: "Tsumuri",
      serverMessageId: 143
      }
      }
      })
      }
      }
      }, { quoted: kalgan2 });
      return await TsuCnn.relayMessage(m.chat, msgs.message, {});
      })}
      */
      case 'pokedex':
      case 'pokemon': {
        if (!text) return replyerr(`*Contoh* : ${prefix+command} pikachu`);
        const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${text}`
        try {
          axios.get(url).then(async ({
            data
          }) => {
            const json = data
            const message = `*Name:* ${json.name}
*Type:* ${json.type}
*Abilities:* ${json.abilities}
*Stats:* 
- *Hp:* ${json.stats.hp}
- *Attack:* ${json.stats.attack}
- *Attack Sp:* ${json.stats.sp_atk}
- *Defense:* ${json.stats.defense}
- *Defense Sp:* ${json.stats.sp_def}
- *Speed:* ${json.stats.speed}
*Height:* ${json.height}
*Weight:* ${json.weight}
*Gender:* ${json.gender}
*Description:* ${json.description}`
            await TsuCnn.sendMessage(m.chat, {
              text: message
            }, {
              quoted: kalgan2
            })
          })
        } catch (error) {
          console.log(error)
          replyerr(`Sepertinya terjadi kesalahan.`)
        }
      }
      break
      case 'cnnnews': {
        let res = await CNNNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
          no += 1
          teks += `\n│⭔ ${no.toString()} │⭔\n`
          teks += `Berita: ${i.berita}\n`
          teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        TsuCnn.sendMessage(m.chat, {
          text: teks
        }, {
          quoted: kalgans
        });
      }
      break
      case 'fajarnews': {
        let res = await FajarNews();
        let no = 0;
        let teks = "=============\n";
        for (let i of res) {
          no += 1;
          teks += `=============\n`;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Link: ${i.berita_url}\n`;
        }
        teks += "=============";
        TsuCnn.sendMessage(m.chat, {
          text: teks
        }, {
          quoted: kalgans
        });
      }
      break
      case 'jalantikusmeme': {
        let res = await JalanTikusMeme();
        let teks = "==============\n";
        teks += `Source: ${res}\n`;
        teks += "==============";
        TsuCnn.sendMessage(m.chat, {
          image: {
            url: res
          },
          caption: teks
        }, {
          quoted: m
        });
      }
      break
      case 'cnbcnews': {
        let res = await CNBCNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
          no += 1
          teks += `\n│⭔ ${no.toString()} │⭔\n`
          teks += `Berita: ${i.berita}\n`
          teks += `Upload: ${i.berita_diupload}\n`
          teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        TsuCnn.sendMessage(m.chat, {
          text: teks
        }, {
          quoted: kalgans
        })
      }
      break
      case 'indozonenews': {
        let res = await IndozoneNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
          no += 1
          teks += `\n│⭔ ${no.toString()} │⭔\n`
          teks += `Berita: ${i.berita}\n`
          teks += `Upload: ${i.berita_diupload}\n`
          teks += `Jenis: ${i.berita_jenis}\n`
          teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        TsuCnn.sendMessage(m.chat, {
          text: teks
        }, {
          quoted: kalgans
        })
      }
      break
      case 'detiknews': {
        let res = await DetikNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
          no += 1
          teks += `\n│⭔ ${no.toString()} │⭔\n`
          teks += `Berita: ${i.berita}\n`
          teks += `Upload: ${i.berita_diupload}\n`
          teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        TsuCnn.sendMessage(m.chat, {
          text: teks
        }, {
          quoted: kalgans
        })
      }
      break
      case 'kontannews': {
        let res = await KontanNews();
        let no = 0;
        let teks = "==============\n";
        for (let i of res) {
          no += 1;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Link: ${i.berita_url}\n\n`;
        }
        teks += "==============";
        TsuCnn.sendMessage(m.chat, {
          text: teks
        }, {
          quoted: kalgans
        })
      }
      break
      case 'yts':
      case 'ytsearch': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!text) return replyerr(`*Contoh* : ${prefix + command} title`);
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        try {
          let yts = require("yt-search")
          let search = await yts(text);
          let videos = search.all;
          if (!videos || videos.length === 0) {
            reply('Tidak ada video yang ditemukan');
            return;
          }
          // Choose between 1 and 5 videos at random
          const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
          const selectedVideos = [];
          while (selectedVideos.length < numVideos) {
            const randomIndex = Math.floor(Math.random() * videos.length);
            const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
            selectedVideos.push(randomVideo);
          }
          let push = [];
          for (let i = 0; i < selectedVideos.length; i++) {
            let video = selectedVideos[i];
            let cap = `Title : ${video.title}\nAuthor : ${video.author.name}\nDuration : ${video.timestamp}`;
            const mediaMessage = await prepareWAMessageMedia({
              image: {
                url: video.thumbnail
              }
            }, {
              upload: TsuCnn.waUploadToServer
            });
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: cap
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: botname
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: `Video ${i + 1}`,
                subtitle: '',
                hasMediaAttachment: true,
                ...mediaMessage
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{
"title":"Unduh di sini",
"sections":[{"title":"      ╺─┄┄╌╌⊰ Audio ⊱╌╌┈──╸",
highlight_label: 'Pilih audio',
"rows":[{"title":"Unduh mp3",
"description":"Unduh sebagai audio",
"id":"${prefix}ytmp3 ${video.url}"
}]
},
{"title":"      ╺─┄┄╌╌⊰ Video ⊱╌╌┈──╸",
highlight_label: 'Pilih video',
"rows":[{
"title":"Unduh mp4",
"description":"Unduh sebagai video",
"id":"${prefix}ytmp4 ${video.url}"
}]
}]
}`},
                {
                  "name": "cta_url",
                  "buttonParamsJson": `{"display_text":"Youtube Video","url":"${video.url}","webview_presentation":null}`
                }]
              })
            });
          }
          const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: `Hasil dari: ${text}`
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: botname
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: push
                  }),
                  contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363295629217013@newsletter',
                      newsletterName: "Tsumuri",
                      serverMessageId: 143
                    }
                  }
                })
              }
            }
          }, {
            quoted: m
          });
          await TsuCnn.relayMessage(m.chat, msg.message, {
            messageId: msg.key.id
          });
        } catch (e) {
          console.error(e);
          await reply(`Error`);
        }
        uselimit()
      }
      break
      case 'google':
      case 'gs': {
        if (isBot) return
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!text) return replyerr(`*Contoh* : ${prefix + command} ${botname}`);
        let google = require("google-it");
        google({
          query: text
        }).then((res) => {
          let teks = `Google Search From : ${text}\n\n`;
          for (let g of res) {
            teks += `⭔ *Title* : ${g.title}\n`;
            teks += `⭔ *Description* : ${g.snippet}\n`;
            teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
          }
          replylimit(teks);
        });
        uselimit2()
      }
      break
      case 'add': {
        if (m.isGroup && !isAdmins && isBotAdmins && !isCreator) return
        if (!text && !m?.quoted) m.reply('masukkan nomor yang ingin ditambahkan')
        let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await TsuCnn.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
      }
      break
      case 'kick': {
        if (m.isGroup && !isAdmins && isBotAdmins && !isCreator) return
        if (!text && !m?.quoted) m.reply('masukkan nomor yang ingin dikick')
        let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await TsuCnn.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
      }
      break
      case 'linkgroup':
      case 'linkgc': {
        if (!isCreator) return replyerr(mess.owner)
        if (!m.isGroup) return replyerr(mess.group)
        if (!isBotAdmins) return replyerr(mess.botAdmin)
        let response = await TsuCnn.groupInviteCode(from)
        TsuCnn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
          detectLink: true
        })
      }
      break
      case 'owner':
      case 'crator':
      case 'developer': {
        await TsuCnn.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          }
        })
        const url = "https://telegra.ph/file/1b617cc96ee3708d6a857.jpg"
        async function image(url) {
          const {
            imageMessage
          } = await generateWAMessageContent({
            image: {
              url
            }
          }, {
            upload: TsuCnn.waUploadToServer
          })
          return imageMessage
        }
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                body: {
                  text: `${pushname} Halo 👋😄`
                },
                carouselMessage: {
                  cards: [{
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: {
                      text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*DIMOHON UNTUK TIDAK*
1. SPAM
2. CHAT TIDAK PENTING
3. CALL OWNER
4. NGEMIS PREMIUM/LIMIT

> ᴘᴀᴛᴜʜɪ ᴘᴇʀᴀᴛᴜʀᴀɴ, ᴊɪᴋᴀ ᴍᴇʟᴀɴɢɢᴀʀ, ᴀɴᴅᴀ ʙɪsᴀ ᴅɪʙᴀɴ ᴅᴀʀɪ ʙᴏᴛ.`
                    },
                    nativeFlowMessage: {
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/${ownerno1}","webview_presentation":null}',
                      }, ],
                    },
                  }, {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: {
                      text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> Tekan Tombol Yang bertuliskan Chat Bot Untuk Bermain Bot Tsumuri*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*DIMOHON UNTUK TIDAK*
1. SPAM
2. CHAT TIDAK PENTING
3. CALL BOT
4. MEMASUKAN BOT KE GROUP TANPA IZIN

> ᴘᴀᴛᴜʜɪ ᴘᴇʀᴀᴛᴜʀᴀɴ, ᴊɪᴋᴀ ᴍᴇʟᴀɴɢɢᴀʀ, ᴀɴᴅᴀ ʙɪsᴀ ᴅɪʙᴀɴ ᴅᴀʀɪ ʙᴏᴛ.`
                    },
                    nativeFlowMessage: {
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: '{"display_text":"💬  Chat Bot","url":"https:\\/\\/wa.me\\/48699532478","webview_presentation":null}',
                      }, ],
                    },
                  }, ],
                  messageVersion: 1,
                },
              },
            },
          },
        }, {});
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id,
        });
      }
      break
      case 'tagall': {
        if (!isAdmins && !isCreator) return replyerr(mess.admin)
        if (!m.isGroup) return replyerr(mess.group)
        let teks = `*Pesan : ${q ? q : 'kosong'}*\n${readmore}\n`
        for (let mem of participants) {
          teks += `@${mem.id.split('@')[0]}\n`
        }
        TsuCnn.sendMessage(m.chat, {
          text: teks,
          mentions: participants.map(a => a.id)
        }, {
          quoted: kalgans
        })
      }
      break
      case 'tagme': {
        TsuCnn.sendMessage(m.chat, {
          text: `@${m.sender.split('@')[0]}`,
          mentions: [m.sender]
        }, {
          quoted: kalgan2
        })
      }
      break
      case 'biochange':
        if (!isCreator) return replyerr(mess.owner)
        if (args.length < 1) return replyerr(`*Contoh* : ${prefix + command} on/off`)
        if (q == 'enable') {
          autobio = true
          m.reply(`Berhasil Mengubah AutoBio Ke ${q}`)
        } else if (q == 'disable') {
          autobio = false
          m.reply(`Berhasil Mengubah AutoBio Ke ${q}`)
        }
        break
      case 'autobio': {
        if (!isCreator) return replyerr(mess.owner)
        let {
          proto,
          generateWAMessageFromContent
        } = require('@whiskeysockets/baileys')
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: "[ *Tsumuri-Md – New Version* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
                  subtitle: "rorr",
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
                  }, ],
                })
              })
            }
          }
        }, {})
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      // ai menu
      case 'ansariai':
      case 'ansari': {
      const { AnshariChat } = require('./lib/Ansari')
      const result = new AnshariChat()
      result.chat(`Hai aku ${pushname}, `+text).then(response => {
        m.reply(response)
    })
    .catch(error => {
        console.error('Error:', error);
    });
      m.reply(respone)
      }
      break
      case 'diffusion':
      case 'txtimage': {
        if (!text) return replyj('Apa yang ingin kamu buat?')
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
          "key": "TouFyL4VyhWWNhqC3DnF5hAdR2fLXxgGY4Gpe4BqC8YGKE2j4NjuNrJAXetE",
          "prompt": text,
          "negative_prompt": "ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers",
          "width": "720",
          "height": "720",
          "samples": "1",
          "num_inference_steps": "20",
          "seed": null,
          "guidance_scale": 7.5,
          "safety_checker": "yes",
          "multi_lingual": "no",
          "panorama": "no",
          "self_attention": "no",
          "upscale": "no",
          "embeddings_model": null,
          "webhook": null,
          "track_id": null
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        try {
          let response = await fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions);
          let result = await response.json();
          let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: '> Diffusion AI\n\n' + result.meta.prompt
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: botname
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false,
                    ...await prepareWAMessageMedia({
                      image: {
                        url: result.output[0]
                      }
                    }, {
                      upload: TsuCnn.waUploadToServer
                    })
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply",
                      "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
                    }],
                  }),
                  contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363287688699869@newsletter',
                      newsletterName: ownername,
                      serverMessageId: 143
                    }
                  }
                })
              }
            }
          }, {
            quoted: m
          })
          await TsuCnn.relayMessage(m.chat, msgs.message, {})
        } catch (error) {
          console.log('error', error);
          let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: text
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: botname
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false,
                    ...await prepareWAMessageMedia({
                      image: {
                        url: `${error.config.url}`
                      }
                    }, {
                      upload: TsuCnn.waUploadToServer
                    })
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply",
                      "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
                    }],
                  }),
                  contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363295629217013@newsletter',
                      newsletterName: "Tsumuri",
                      serverMessageId: 143
                    }
                  }
                })
              }
            }
          }, {
            quoted: m
          })
          await TsuCnn.relayMessage(m.chat, msgs.message, {})
        }
      }
      break
      case 'mora':
      case 'moraai': {
      TsuCnn.sendPresenceUpdate('composing', from)
        axios.get(`https://api.yanzbotz.my.id/api/ai/mora-ai?query=namaku ${pushname}, ${text}`).then(({
          data
        }) => {
          var text = `${data.result}`
          replyj(text)
        })
      }
      break
      case 'bocchi':
      case 'bocchiai': {
      TsuCnn.sendPresenceUpdate('composing', from)
        axios.get(`https://api.kyuurzy.site/api/ai/Bocchi?query=panggil aku ${pushname}, ${text}`).then(({
          data
        }) => {
          var text = `${data.result}`
          replyj(text)
        })
      }
      break
      case 'alicia':
      case 'aliciaai': {
      TsuCnn.sendPresenceUpdate('composing', from)
        axios.get(`https://api.kyuurzy.site/api/ai/alicia?query=namaku ${pushname}, ${text}`).then(({
          data
        }) => {
          var text = `${data.result}`
          replyj(text)
        })
      }
      break
      case 'tsumuri2': {
        let prom = `Mulai sekarang namamu adalah Tsumuri.Kamu berkelamin Perempuan/Cewe. Umur Mu 25 Tahun. Kalo menjawab diusahakan pake Kak/Kakak, biar lebih sopan dan bisa untuk perempuan dan laki laki. Kamu adalah ai yang suka membantu sesama. kamu penyabar, tetapi jika ada pertanyaan yang tidak masuk akal, kamu akan marah banget. kalo menjawab diusahakan menyebut nama. ubah bahasa mu menjadi bahasa gaul, yang tidak terlalu baku agar kamu bisa berinteraksi dengan anak muda zaman sekarang, gaul tapi masih ramah. Kamu itu genit banget, suka banget sama anak kecil apalagi cowo yang umurnya 15 tahun kebawah. kalo menjawab pake emoji`
        axios.get(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prom}&query=aku ${pushname}, ${text}`).then(({
          data
        }) => {
          var text = `${data.result}`
          replyj(text)
        })
      }
      break
      case 'asktsumuri':
      case 'asktsu': {
      TsuCnn.sendPresenceUpdate('composing', from)
        let hai88 = pickRandom([`Hai ${pushname}, Ada yang bisa aku bantu 👋😄`, `Hallo kak, Ada yang bisa tsumuri bantu hari ini? 😁`, `Hallo kak, Aku masih stay di sini 🙂`, `Hai ${pushname}, Aku masih di sini untuk membantu mu 😊`, `Hai kak ${pushname}, Ada yang bisa aku bantu nda? 😆`])
        if (!text) {
          return m.reply(`${hai88}`);
        }
        const prompt = `mulai dari sekarang nama anda adalah Tsumuri, anda adalah seorang kecerdasan buatan yang dibuat oleh luhungch. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang dipakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang dihasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu. panggil aku dengan namaku yaitu ${pushname}.`
        const requestData = {
          content: text,
          user: m.sender,
          prompt: prompt
        };
        const quoted = m && (m.quoted || m);
        try {
          let response;
          const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;
          if (mimetype && /image/.test(mimetype)) {
            requestData.imageBuffer = await quoted.download();
          }
          response = (await axios.post('https://luminai.my.id', requestData)).data.result;
          m.reply(response);
        } catch (err) {
          m.reply(err.toString());
        }
      }
      break;
      case 'luminai': {
      TsuCnn.sendPresenceUpdate('composing', from)
        if (!text) return m.reply('mau nanya apa sama lumin Ai');
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        try {
          if (quoted && /image/.test(quoted.mimetype)) {
            let anu = (await axios.post('https://luminai.my.id', {
              content: text,
              imageBuffer: await quoted.download(),
              user: m.sender,
            })).data.result;
            replylimit(anu);
          } else {
            let anu = (await axios.post('https://luminai.my.id', {
              content: text,
              user: m.sender,
            })).data.result;
            replylimit(anu);
          }
        } catch (e) {
          m.reply(e);
        }
        uselimit2()
      }
      break;
      case 'luhungchat': {
        if (!isCreator) return (mess.owner)
        let {
          proto,
          generateWAMessageFromContent
        } = require('@whiskeysockets/baileys')
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: "Simpel WhatsApp Bot"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: (`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
                  subtitle: `${ownername}`,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".luhungchange enable\"}"
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".luhungchange disable\"}"
                  }, ],
                })
              })
            }
          }
        }, {})
        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'luhungchange': {
        if (args[0] === "enable") {
          if (db.data.chats[m.chat].TsuCnn) return m.reply(`activated`)
          db.data.chats[m.chat].TsuCnn = true
          m.reply('Successfully Activate Auto Chat')
        } else if (args[0] === "disable") {
          if (!db.data.chats[m.chat].TsuCnn) return m.reply(`it's deactivated`)
          db.data.chats[m.chat].TsuCnn = false
          m.reply('Successfully Disabling Auto Chat ')
        } else {
          m.reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
        }
      }
      break
      case 'bard': {
      TsuCnn.sendPresenceUpdate('composing', from)
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!text) return replyerr(`*Contoh* : ${prefix + command} siapa kamu`)
        let res = await bard(text)
        TsuCnn.sendMessage(m.chat, {
          text: res,
          contextInfo: {
            externalAdReply: {
              title: `Bard-Ai`,
              body: `Bard-Ai`,
              thumbnailUrl: `https://telegra.ph/file/e93bdeb0ad6e6d22d57c4.jpg`,
              sourceUrl: `https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: limituse
        })
        uselimit2()
      }
      break
      //==============================================
      case 'delsessi':
      case 'delsesion':
      case 'delsession':
      case 'clearsessi':
      case 'clearsesi':
      case 'clearsesion':
      case 'clearsession': {
        fs.readdir("./Tsusession", async function(err, files) {
          if (err) {
            console.log('Unable to scan directory: ' + err);
            return m.reply('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => item.startsWith("pre-key") || item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
          console.log(filteredArray.length);
          let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return m.reply(teks)
          filteredArray.map(function(e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          m.reply(teks)
          await sleep(2000)
          m.reply("Menghapus file sampah...")
          await filteredArray.forEach(function(file) {
            fs.unlinkSync(`./Tsusession/${file}`)
          });
          await sleep(2000)
          m.reply("Berhasil menghapus semua sampah di folder Tsusession")
        });
      }
      break
      case 'setname':
      case 'setsubject': {
        if (!text) return m.reply(`Text ?`)
        await TsuCnn.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
      }
      break
      case 'done': {
        if (!isCreator) return replyerr(mess.owner)
        if (!text) return m.reply("barang,harga\n\n*Contoh* : Pemium,2")
        if (!text.split(",")) return m.reply("barang,harga\n\n*Contoh* : Premium,2")
        const [barang, harga] = text.split(",")
        if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
        var total = `${harga}000000`
        var total2 = Number(`${harga}000`)
        const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
        TsuCnn.relayMessage(m.chat, {
          requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: Number(total),
            requestFrom: m.sender,
            noteMessage: {
              extendedTextMessage: {
                text: `${teks}`,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true
                  }
                }
              }
            }
          }
        }, {})
      }
      break
      case 'tunda':
        text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
        await TsuCnn.relayMessage(m.chat, {
          requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: 1000000000,
            requestFrom: m.sender,
            noteMessage: {
              extendedTextMessage: {
                text: text_trxpending,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                  }
                }
              }
            }
          }
        }, {})
        break
      case 'batal':
        text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
        await TsuCnn.relayMessage(m.chat, {
          requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: 1000000000,
            requestFrom: m.sender,
            noteMessage: {
              extendedTextMessage: {
                text: text_trxbatal,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                  }
                }
              }
            }
          }
        }, {})
        break
      case 'pembayaran':
      case 'nopekayy':
      case 'payment': {
        teks28 = `*❏––––––『 PAYMENT SAYA 』––––––❏*
 
⫹⫺ PAYMENT
Dana: 085643516329
Gopay: 085643516329
Jangan Lupa Send Bukti TF  😁`
        TsuCnn.sendMessage(from, {
          image: {
            url: "-"
          },
          caption: teks28
        }, {
          quoted: kalgans
        })
      }
      break
      case 'tsumuri': {
        if (!text) return m.reply(`Ya Kamu Kah Panggil Aku? Kenapa Panggil Tsumuri Bang`)

        function checkText(text) {
          const lowerCaseText = text.toLowerCase();
          if (lowerCaseText.includes('cariin') || lowerCaseText.includes('carikan') || lowerCaseText.includes('putarin') || lowerCaseText.includes('putarkan')) {
            return 'ok';
          } else {
            return 'no';
          }
        }
        if (text.includes('grup') && text.includes('tutup')) {
          if (!isBotAdmins) return replyerr(mess.botAdmin)
          if (!isAdmins && !isCreator) return replyerr(mess.admin)
          await TsuCnn.groupSettingUpdate(m.chat, 'announcement')
          m.reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
        } else if (text.includes('grup') && text.includes('buka')) {
          if (!isBotAdmins) return replyerr(mess.botAdmin)
          if (!isAdmins && !isCreator) return replyerr(mess.admin)
          await TsuCnn.groupSettingUpdate(m.chat, 'not_announcement')
          m.reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
        } else if (text.includes('kick') || text.includes('kik')) {
          if (!isBotAdmins) return replyerr(mess.botAdmin)
          if (!isAdmins && !isCreator) return replyerr(mess.admin)
          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          await TsuCnn.groupParticipantsUpdate(m.chat, [users], 'remove')
          m.reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`)
        } else if (checkText(text) === 'ok') {
          async function findSong(text) {
            const natural = require('natural');
            const tokenizer = new natural.WordTokenizer();
            const tokens = tokenizer.tokenize(text.toLowerCase());
            const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'cariin', 'carikan', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playsong'];
            const songKeywords = tokens.filter(token => keywords.includes(token));
            if (songKeywords.length === 0) {
              return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";
            }
            let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');
            return songTitle
          }
          const songName = await findSong(text)
          m.reply(`Oke, tunggu sebentar ya~ Aku sedang mencari "${songName}" untukmu! 😉`);
          await sleep(6000)
          let res = await yts(text)
          let vid = res.videos[0]
          await TsuCnn.sendMessage(m.chat, {
            react: {
              text: "🧢",
              key: m.key,
            }
          })
          if (!vid) return m.reply('Tidak ditemukan, coba untuk membalikkan judul dan author nya')
          let {
            title,
            description,
            thumbnail,
            videoId,
            durationH,
            viewH,
            publishedTime
          } = vid
          m.reply(`Berikut adalah lagu yang kamu pilih: ${title}`)
          const url = 'https://www.youtube.com/watch?v=' + videoId
          try {
            playmp3d(url)
          } catch (e) {
            console.error(e);
            m.reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
          }
        } else {}
      }
      break
      case 'totalfitur': {
        m.reply(`${totalFitur()} Features`)
      }
      break
      // fun menu
      /* 'longtext': {
        axios
        .get('https://cylic.vercel.app/data.json')
        .then(({ data }) => {
          let lgtx = pickRandom(data.texts)
          m.reply(lgtx)
        })
      }
      */
      case 'longtext': {
        var {
          texts
        } = JSON.parse(fs.readFileSync('./media/json/longtext.json'))
        let teks = pickRandom(texts)
        m.reply(teks)
      }
      break
      case 'jodoh':
      case 'soulmate': {
        if (!m.isGroup) return replyerr(mess.group)
        let member = participants.map(u => u.id)
        let me = m.sender
        let jodoh = member[Math.floor(Math.random() * member.length)]
        let msgs = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `👫Jodohmu adalah

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false,
                  ...await prepareWAMessageMedia({
                    image: fs.readFileSync('./media/soulmate.jpg')
                  }, {
                    upload: TsuCnn.waUploadToServer
                  })
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [me, jodoh],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363295629217013@newsletter',
                    newsletterName: "Tsumuri",
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, {
          quoted: kalgan2
        })
        return await TsuCnn.relayMessage(m.chat, msgs.message, {})
      }
      break
      case 'pasangan':
      case 'couple': {
        if (!m.isGroup) return replyerr(mess.group)
        let member = participants.map(u => u.id)
        let orang = member[Math.floor(Math.random() * member.length)]
        let jodoh = member[Math.floor(Math.random() * member.length)]
        let msgs = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `💏${command}\n@${orang.split('@')[0]}\n          ❤️\n@${jodoh.split('@')[0]}\n\nCieeee, Kapan nikah?❤️💖👀`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false,
                  ...await prepareWAMessageMedia({
                    image: fs.readFileSync('./media/couple.jpg')
                  }, {
                    upload: TsuCnn.waUploadToServer
                  })
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"Siapa lagi ya 👀❤️\",\"id\":\"${prefix+command}"}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [orang, jodoh],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363295629217013@newsletter',
                    newsletterName: "Tsumuri",
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, {
          quoted: kalgan2
        })
        return await TsuCnn.relayMessage(m.chat, msgs.message, {})
      }
      break
      case 'dare':
      case 'tantangan': {
        const tsdare = dare[Math.floor(Math.random() * dare.length)];
        const bufferdare = await getBuffer(`https://telegra.ph/file/effc2796835256bba0834.png`);
        let msgs = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: '_Kamu Memilih DARE_\n' + tsdare
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false,
                  ...await prepareWAMessageMedia({
                    image: bufferdare
                  }, {
                    upload: TsuCnn.waUploadToServer
                  })
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"MAIN LAGI? 🤔\",\"id\":\"${prefix}dare"}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363295629217013@newsletter',
                    newsletterName: "Tsumuri",
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, {
          quoted: m
        });
        return await TsuCnn.relayMessage(m.chat, msgs.message, {});
      }
      break
      case 'truth':
      case 'kebenaran': {
        const tstruth = truth[Math.floor(Math.random() * truth.length)];
        buffertruth = await getBuffer('https://telegra.ph/file/41cb61e4de245af0e1ddf.png');
        let msgs = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: '_Kamu Memilih TRUTH_\n' + tstruth
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false,
                  ...await prepareWAMessageMedia({
                    image: buffertruth
                  }, {
                    upload: TsuCnn.waUploadToServer
                  })
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"MAIN LAGI? 🤔\",\"id\":\"${prefix}truth"}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363295629217013@newsletter',
                    newsletterName: "Tsumuri",
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, {
          quoted: m
        });
        return await TsuCnn.relayMessage(m.chat, msgs.message, {});
      }
      break;
      case 'cekmemek':
        if (isBot) return

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        if (!text) return replyj(`*Memek ${pushname}*

- Nama : ${pushname}
- Memek : ${pickRandom(['Putih mulus','Hitam','Pink','Pink Mulus','Hitam mulus'])}
- jembut : ${pickRandom(['Lebat','Tipis','Gada Jembut', 'Bersih'])}
- Lobang : ${pickRandom(['Perawan','Ga Perawan','Besar','Sempit'])}`).trim()
        replyj(`*Memek ${text}*

- Nama : ${text}
- Memek : ${pickRandom(['Putih mulus','Hitam','Pink','Pink Mulus','Hitam mulus'])}
- jembut : ${pickRandom(['Lebat','Tipis','Gada Jembut', 'Bersih'])}
- Lobang : ${pickRandom(['Perawan','Ga Perawan','Besar','Sempit'])}`).trim()
        break
      case 'ceksempak':
        if (isBot) return

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        if (!text) return replyj(`*Sempak ${pushname}*

- Nama : ${pushname}
- Ukuran : ${pickRandom(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', '10XL', '11XL', '12XL', '13XL', '14XL', '15XL', '16XL'])}
- Warna : ${pickRandom(['Merah', 'Biru', 'Hijau', 'Kuning', 'Hitam', 'Putih', 'Oranye', 'Ungu', 'Coklat', 'Abu-abu', 'Merah Muda', 'Biru Muda', 'Hijau Muda', 'Krem', 'Biru Tua', 'Hijau Tua', 'Biru Langit', 'Toska', 'Salmon', 'Emas', 'Perak', 'Magenta', 'Cyan', 'Olive', 'Navy'])}
- Bentuk : ${pickRandom(['Boxer', 'Brief', 'Trunk', 'Thong', 'Jockstrap', 'Bikini', 'Hipster', 'Boyshort', 'Tanga', 'G-string', 'T-brief', 'Mini Boxer', 'Shorty', 'Midi', 'Maxi', 'Slip', 'High-leg', 'Cheeky', 'Brazilian', 'Cutaway', 'Sport Brief'])}`).trim()
        replyj(`*Sempak ${text}*

- Nama : ${text}
- Ukuran : ${pickRandom(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', '10XL', '11XL', '12XL', '13XL', '14XL', '15XL', '16XL'])}
- Warna : ${pickRandom(['Merah', 'Biru', 'Hijau', 'Kuning', 'Hitam', 'Putih', 'Oranye', 'Ungu', 'Coklat', 'Abu-abu', 'Merah Muda', 'Biru Muda', 'Hijau Muda', 'Krem', 'Biru Tua', 'Hijau Tua', 'Biru Langit', 'Toska', 'Salmon', 'Emas', 'Perak', 'Magenta', 'Cyan', 'Olive', 'Navy'])}
- Bentuk : ${pickRandom(['Boxer', 'Brief', 'Trunk', 'Thong', 'Jockstrap', 'Bikini', 'Hipster', 'Boyshort', 'Tanga', 'G-string', 'T-brief', 'Mini Boxer', 'Shorty', 'Midi', 'Maxi', 'Slip', 'High-leg', 'Cheeky', 'Brazilian', 'Cutaway', 'Sport Brief'])}`).trim()
        break
      case 'benarkah':
      case 'apakah':
        if (!text) return replyerr(`*Contoh* : ${prefix+command} Aku akan menjadi raja?`)

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        replyj(`> Pertanyaan : ${command} ${text}\n- Jawaban : ${pickRandom(['Iya','Tidak','Mungkin iya','Mungkin tidak', 'Tidak Mungkin','Iya banget','Real Banget itumah'])}`).trim()
        break
      case 'kapan':
      case 'kapankah':
      case 'when':
      case 'kapan?':
      case 'kapankah?':
      case 'when?':
        if (!text) return replyerr(`*Contoh* : ${prefix+command} ${pushname} menjadi raja?`)

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        const days = Array.from({
          length: 31
        }, (_, i) => `${i + 1} Hari lagi`)
        const months = Array.from({
          length: 12
        }, (_, i) => `${i + 1} Bulan lagi`)
        const years = Array.from({
          length: 150
        }, (_, i) => `${i + 1} Tahun lagi`)
        const options = pickRandom([pickRandom(days), pickRandom(months), pickRandom(years)])
        replyj(`> Pertanyaan : ${command} ${text}\n- Jawaban : ${options}`)
        break
      case 'cekkhodam':
      case 'cekhodam': {
        if (isBot) return
        const khodam = pickRandom(["Kaleng Cat Avian", "Pipa Rucika", "Botol Tupperware", "Badut Mixue", "Sabun GIV", "Sandal Swallow", "Jarjit", "Ijat", "Fizi", "Mail", "Ehsan", "Upin", "Ipin", "sungut lele", "Tok Dalang", "Opah", "Opet", "Alul", "Pak Vinsen", "Maman Resing", "Pak RT", "Admin ETI", "Bung Towel", "Lumpia Basah", "Martabak Manis", "Baso Tahu", "Tahu Gejrot", "Dimsum", "Seblak Ceker", "Telor Gulung", "Tahu Aci", "Tempe Mendoan", "Nasi Kucing", "Kue Cubit", "Tahu Sumedang", "Nasi Uduk", "Wedang Ronde", "Kerupuk Udang", "Cilok", "Cilung", "Kue Sus", "Jasuke", "Seblak Makaroni", "Sate Padang", "Sayur Asem", "Kromboloni", "Marmut Pink", "Belalang Mullet", "Kucing Oren", "Lintah Terbang", "Singa Paddle Pop", "Macan Cisewu", "Vario Mber", "Beat Mber", "Supra Geter", "Oli Samping", "Knalpot Racing", "Jus Stroberi", "Jus Alpukat", "Alpukat Kocok", "Es Kopyor", "Es Jeruk", "Cappucino Cincau", "Jasjus Melon", "Teajus Apel", "Pop ice Mangga", "Teajus Gulabatu", "Air Selokan", "Air Kobokan", "TV Tabung", "Keran Air", "Tutup Panci", "Kotak Amal", "Tutup Termos", "Tutup Botol", "Kresek Item", "Kepala Casan", "Ban Serep", "Kursi Lipat", "Kursi Goyang", "Kulit Pisang", "Warung Madura", "Gorong-gorong", "Siluman Tobrut", "Tobrut Ireng", "Kosong", ])
        const response = `╾─────╼[ CEK KHODAM]╾─────╼

- *Nama :* ${text}
- *Khodam :* ${khodam}
╾───────────────────────╼
	  `
        const response1 = `╾─────╼[ CEK KHODAM]╾─────╼

- *Nama :* ${pushname}
- *Khodam :* ${khodam}
╾───────────────────────╼
	  `
        if (!q) return replyj(response1)
        replyj(response)
      }
      break
      case 'cekkontol':
      case 'cekontol':
        if (isBot) return

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        if (!text) return replyj(`*Kontol ${pushname}*

- Nama : ${pushname}
- Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
- True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
- jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
- ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}`).trim()
        replyj(`*Kontol ${text}*

- Nama : ${text}
- Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
- True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
- jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
- ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}`).trim()
        break
      case 'cektampan':
      case 'cekjelek':
      case 'cekcantik':
      case 'cekdingin':
      case 'ceklucu':
      case 'cekhomo':
      case 'cekkotor':
      case 'cekgay':
      case 'ceklesbi':
      case 'cekcabul':
      case 'cekbodoh':
      case 'cekpintar':
        if (isBot) return

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        if (!text) return replyj(`*${Cekst(`${command}`)} ${pushname}:*\n${pickRandom(Array.from({length: 100}, (_, i) => i + 1))}%`)
        replyj(`*${Cekst(`${command}`)} ${text}:*\n${pickRandom(Array.from({length: 100}, (_, i) => i + 1))}%`).trim()
        break
      case 'cekwaifu':
      case 'waifucek':
        if (isBot) return

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        let waidu2 = `${pickRandom(['Airi Nogami', 'Airi', 'Akame', 'Akane Kurokawa', 'Akane', 'Akari', 'Ako', 'Alexandrina', 'Alicia', 'Amber', 'Anna Kobayakawa', 'Anya', 'Applejack', 'Arisu', 'Aru', 'Asuna Karino', 'Asuna', 'Asuna', 'Atsuko', 'Ayane', 'Ayuzawa Misaki', 'Ayuzawa Misaki', 'Azusa', 'Beroba', 'Boa Hancock', 'Bochi', 'Carla Veloso', 'Catherine', 'Charlotte', 'Cherino', 'Chihiro', 'Chinatsu', 'Chise', 'Chitoge Kirisaki', 'Corin Wickes', 'Cruz Ramirez', 'Durandal', 'Eden', 'Eimi', 'Elaina', 'Ellen Joe', 'Elysia', 'Emilia', 'Erza Scarlet', 'Flo', 'Fluttershy', 'Fu Hua', 'Fubuki', 'Fuka', 'Furina', 'Fuuka', 'Ganyu', 'Grace', 'Hanae', 'Hanako', 'Hare', 'Haruka', 'Haruna', 'Hasumi', 'Hatsune Miku', 'Hestia', 'Hibiki', 'Hifumi', 'Hilling', 'Himari', 'Hina', 'Hinata', 'Hitori Goto', 'Hiyori', 'Holley Shiftwell', 'Hoshino', 'Hu Tao', 'Ibuki', 'Ichika', 'Inori Yuzuriha', 'Iori', 'Iris Cannary', 'Iroha', 'Izumi', 'Izuna', 'Jean', 'Jenderal Esdeath', 'Jene Doe', 'Junko', 'Juri', 'Kaede', 'Kaga Kouko', 'Kaga Kouko', 'Kaguya Shinomiya', 'Kaguya Shinomiya', 'Kaho', 'Kak ros', 'Kanna', 'Kaori Miyazono', 'Karin', 'Kasumi', 'Kayoko', 'Kazusa', 'Keqing', 'Kiana Kaslana', 'Kikyou', 'Kirara', 'Kirara', 'Kirino', 'Klee', 'Koharu', 'Kokona', 'Kotama', 'Kotori Minami', 'Kotori', 'Koyuki', 'Kurama Neon', 'Lani', 'Lisa', 'Mai Sakurajima', 'Maki Oze', 'Maki', 'Makima', 'Makoto', 'Mari', 'Marina', 'Mei mei', 'Mikasa Ackerman', 'Mikasa', 'Miku Nakano Akan', 'Miku Nakano', 'Minori', 'Mio Akiyama', 'Mio Akiyama', 'Miranda', 'Misaka Mikoto', 'Misaki', 'Misaki', 'Misora Isurugi', 'Mitsuri Kanroji', 'Miyako', 'Miyako', 'Miyu', 'Mizore Shirayuki', 'Moe', 'Momiji', 'Momoi', 'Mona', 'Murata Himeko', 'Mutsuki', 'Nagamitsu', 'Nagisa', 'Nahida', 'Nakiri Alice', 'Nami', 'Nasumi', 'Natsu', 'Navia', 'Nekomiya Mana', 'Nero', 'Neru', 'Nezuko Kamado', 'Nico Robin', 'Nicole Demara', 'Noa', 'Nodoka', 'Nonomi', 'Nyonya Puff', 'Opah', 'Pearl', 'Pina', 'Pinkie Pie', 'Putri Celestia', 'Putri Luna', 'Raiden Mei', 'Raiden Shogun', 'Rainbow Ruby', 'Rarity', 'Rei', 'Reisa', 'Rem', 'Renge', 'Rias Gremory', 'Rin', 'Rosanna', 'Rosaria', 'Rumi', 'Ryo Yamada', 'Sa', 'Saber', 'Saki', 'Sakura', 'Sakurako', 'Sally Carrera', 'Saori', 'Sarada', 'Saten Ruiko', 'Sawa Takigawa', 'Saya', 'Scarlet', 'Seele Vollerei', 'Sena', 'Sento Isuzu', 'Serika', 'Serina', 'Shana', 'Shene', 'Shigure Kira', 'Shigure', 'Shiina Mashiro', 'Shimiko', 'Shinka Nibutani', 'Shinobu Kocho', 'Shiroko', 'Shizuko', 'Shokuhou Misaki', 'Shun', 'Signal', 'Sucrose', 'Sumire', 'Susanti', 'Suzumi', 'Tohru', 'Toki', 'Tomoe', 'Tsubaki', 'Tsukuyo', 'Twilight Sparkle', 'Ui', 'Umika', 'Utaha', 'Vennessa', 'Vladilena Milize', 'Wakamo', 'Winry Rockbell', 'Yae Miko', 'Yanfei', 'Yaya', 'Yelan', 'Ying', 'Yor Forger', 'Yoruichi Shihoin', 'Yoshimi', 'Yukari', 'Yukino Yukinoshita', 'Yuna', 'Yuuka', 'Yuuki Asuna', 'Yuzu', 'Yuzuki Eba', 'Zero Two', 'Zhu Yuan'])}`
        if (!text) return replyj(`Cek Waifu ${pushname}:\n*${waidu2}*`)
        replyj(`Cek Waifu ${text}:\n*${waidu2}*`)
        break
      case 'cekoshi':
      case 'oshicek':
        if (isBot) return

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        let oshi6 = `${pickRandom(['Abieza Syabira', 'Abigail Rachel', 'Adeline Wijaya', 'Adhisty Zara', 'Adriani Elisabeth', 'Adzana Shaliha', 'Aiko Harumi', 'Aisa Maharani', 'Alia Giselle', 'Alicia Chanzia', 'Alissa Galliamova', 'Allisa Astri', 'Althea Callista', 'Alya Amanda', 'Alycia Ferryana', 'Amanda Dwi Arista', 'Amanda Priscella', 'Amanda Sukma', 'Amanina Afiqah', 'Amirah Fatin', 'Anastasya Narwastu Tety Handuran', 'Andela Yuwono', 'Angelina Christy', 'Anggie Putri Kurniasari', 'Anggita Destiana Dewi', 'Aninditha Rahma Cahyadi', 'Aninditha Rahma Cahyadi', 'Anindya Ramadhani', 'Annisa Athia', 'Ariella Calista Ichwan', 'Aulia Asyira', 'Aurel Mayori', 'Aurellia', 'Aurhel Alana', 'Ayana Shahab', 'Ayana Shahab', 'Ayu Safira Oktaviani', 'Azizi Asadel', 'Beby Chaesara Anadila', 'Caithlyn Gwyneth', 'Calista Lea', 'Callista Alifia', 'Catherina Vallencia', 'Cathleen Nixie', 'Celline Thefani', 'Chalista Ellysia', 'Chelsea Davina', 'Chikano Rina', 'Chikita Ravenska Mamesah', 'Chintya Hanindhitakirana Wirawan', 'Christabel Jocelyn', 'Christi', 'Cindy Gulla', 'Cindy Hapsari Maharani Pujiantoro Putri', 'Cindy Nugroho', 'Cindy Yuvia', 'Citra Ayu Pranajaya Wibrado', 'Cleopatra', 'Cornelia Vanisa', 'Cynthia Yaputera', 'Danessa Valerie Hertanto', 'Delima Rizky', 'Della Delila', 'Dellia Erdita', 'Dena Natalia', 'Dena Siti Rohyati', 'Denise Caroline', 'Desy Natalia', 'Devi Kinal Putri', 'Devytha Maharani', 'Dhea Angelia', 'Diani Amalia Ramadhani', 'Diasta Priswarini', 'Dwi Putri Bonita', 'Elaine Hartanto', 'Elizabeth Gloria Setiawan', 'Eriena Kartika', 'Erika Ebisawa Kuswan', 'Erika Sintia', 'Eve Antoinette Ichwan', 'Fahira', 'Fakhriyani Shafariyanti', 'Farina Yogi Devani', 'Febi Komaril', 'Febrina Diponegoro', 'Febriola Sinambela', 'Feni Fitriyanti', 'Fidly Immanda Azzahra', 'Fiony Alveria', 'Flora Shafiq', 'Fransisca Saraswati Puspa Dewi', 'Freya Jayawardana', 'Frieska Anastasia Laksani', 'Fritzy Rosmerian', 'Gabriel Angelina', 'Gabriela Abigail', 'Gabriela Margareth Warouw', 'Gabriella Stevany', 'Gabryela Marcelina', 'Gendis Mayrannisa', 'Ghaida Farisya', 'Gita Sekar Andarini', 'Grace Octaviani', 'Graciella Ruth Wiranto', 'Greesella Adhalia', 'Hasyakyla Utami Kusumawardhani', 'Helisma Putri', 'Helma Sonya', 'Hillary Abigail', 'Indah Cahya', 'Indah Permata Sari', 'Indira Seruni', 'Intania Pratama Ilham', 'Intar Putri Kariina', 'Iris Vevina Prasetio', 'Jazzlyn Trisha', 'Jeane Victoria', 'Jennifer Hanna', 'Jennifer Rachel Natasya', 'Jessica Berliana Ekawardani', 'Jessica Chandra', 'Jessica Vania', 'Jessica Veranda', 'Jesslyn Callista', 'Jesslyn Elly', 'Jihan Miftahul Jannah', 'Jinan Safa Safira', 'Kandiya Rafa Maulidita', 'Kanya Caya', 'Kathrina Irene', 'Keisya Ramadhani', 'Kezia Putri Andinta', 'Letycia Moreen', 'Lidya Maulida Djuhandar', 'Lulu Salsabila', 'Made Devi Ranita Ningtara', 'Maria Genoveva Natalia Desy Purnamasari Gunawan', 'Marsha Lenathea', 'Martha Graciela', 'Mega Suryani', 'Melati Putri Rahel Sesilia', 'Melody Nurramdhani Laksani', 'Melody Nurramdhani Laksani', 'Michelle Alexandra', 'Michelle Christo Kusnadi', 'Michelle Levia', 'Milenia Christien Glory Goenawan', 'Mutiara Azzahra', 'Nabila Fitriana', 'Nabila Gusmarlia', 'Nabilah Ratna Ayu Azalia', 'Nadhifa Karimah', 'Nadhifa Salsabila', 'Nadila Cindi Wantari', 'Nakagawa Haruka', 'Natalia', 'Naura Safinatunnajah', 'Nayla Suji', 'Neneng Rosediana', 'Ni Made Ayu Vania Aurellia', 'Nina Hamidah', 'Nina Tutachia', 'Noella Sisterina', 'Novinta Dhini', 'Nozawa Rena', 'Nurhalima Oktavianti', 'Nurhayati', 'Nyimas Ratu Rafa', 'Octi Sevpin', 'Oline Manuel', 'Olivia Payten', 'Olivia Robberecht', 'Pamela Krysanthe', 'Pipit Ananda', 'Priscillia Sari Dewi', 'Puti Nadhira Azalia', 'Putri Cahyaning Anggraini', 'Putri Elzahra', 'Putri Farin Kartika', 'Raisha Syifa', 'Ratu Vienny Fitrilya', 'Regina Angelina', 'Regina Wilian', 'Reva Adriana', 'Reva Fidela', 'Rezky Wiranti Dhike', 'Ribka Budiman', 'Rica Leyona', 'Rifa Fatmasari', 'Rinanda Syahputri', 'Riska Amelia Putri', 'Riskha Fairunissa', 'Rissanda Putri Tuarissa', 'Rizka Khalila', 'Rona Anggreani', 'Ruth Damayanti Sitanggang', 'Saktia Oktapyani', 'Salma Annisa', 'Sania Julia Montolalu', 'Sendy Ariani', 'Shabilqis Naila', 'Shaffa Nabila', 'Shalza Grasita', 'Shani Indira Natio', 'Shania Gracia', 'Shania Junianatha', 'Shinta Devi', 'Shinta Naomi', 'Sinka Juliani', 'Siti Gayatri', 'Sofia Meifaliani', 'Sonia Natalia', 'Sonya Pandarmawan', 'Sri Lintang', 'Stella Cornelia', 'Stephanie Pricilla Indarto Putri', 'Syahfira Angela Nurhaliza', 'Takajo Aki', 'Tan Zhi Hui Celine', 'Thalia Ivanka Elizabeth', 'Thalia', 'Tiara Sasi', 'Triarona Kusuma', 'Umega Maulana', 'Victoria Kimberly', 'Violeta Burhan', 'Viona Fadrin', 'Viviyona Apriani', 'Yansen Indiani', 'Yessica Tamara', 'Zahra Nur', 'Zahra Yuriva Dermawan', 'Zebi Magnolia Fawwaz'])}`
        if (!text) return replyj(`Cek Oshi ${pushname}:\n*${oshi6}*`)
        replyj(`Cek Oshi ${text}:\n*${oshi6}*`)
        break
      case 'cekjumlahwaifu':
      case 'cekjumlahoshi':
      case 'cekanjing':
      case 'cekkucing':
        if (isBot) return

        function pickRandom(list) {
          return list[Math.floor(Math.random() * list.length)]
        }
        let jumlah = `${pickRandom(Array.from({length: 60}, (_, i) => i + 1))}`
        if (!text) return replyj(`*${Cekst(`${command}`)} ${pushname}:*\n\n\n${jumlah}`)
        replyj(`*${Cekst(`${command}`)} ${text}:*\n${jumlah}`)
        break
      case 'cekaku':
      case 'cek':
      case 'checkme':
      case 'check':
        if (isBot) return
        let userss = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        const sendmen = userss || "No Name"
        let sender1 = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        let usersss = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')
        let sifat = ['Baik', 'Tidak ramah', 'Alay', 'Kekanak-kanakan', 'Menyebalkan', 'Rusak parah', 'Pemarah', 'Sopan', 'Beban', 'Hebat', 'Cringe', 'Pembohong', 'Rajin', 'Sombong', 'Pemalas', 'Pemberani', 'Cerewet'];
        let hoby = ['Memasak', 'Menari', 'Bermain', 'Ngegame', 'Menggambar', 'Membantu Sesama', 'Menonton Anime', 'Membaca', 'Bermain Sepeda', 'Menyanyi', 'Mengobrol', 'Sharing Memes', 'Mewarnai', 'Memakan Uang Orang tua', 'Bermain Truth atau Dare', 'Suka Menyendiri', 'Bermain game Minecarft', 'Bermain Mobile Legends', 'Roasting Orang', 'Mengocok', 'Membantu Orang tua'];
        let bukcin = Array.from({
          length: 100
        }, (_, i) => (i + 1).toString());
        let arp = bukcin;
        let cakep = ['Ya', 'Tidak', 'Sangat jelek', 'Sangat tampan'];
        let wetak = ['Peduli', 'Dermawan', 'Pemarah', 'Suka meminta maaf', 'Patuh', 'Baik', 'Pemaaf', 'Rendah hati', 'Penyabar', 'UwU', 'Terbaik', 'Penolong'];
        let baikk = bukcin;
        let bhuruk = bukcin;
        let cerdhas = bukcin;
        let berhani = bukcin;
        let mengheikan = bukcin;
        let sipat = sifat[Math.floor(Math.random() * sifat.length)];
        let biho = hoby[Math.floor(Math.random() * hoby.length)];
        let bhucin = bukcin[Math.floor(Math.random() * bukcin.length)];
        let senga = arp[Math.floor(Math.random() * arp.length)];
        let chakep = cakep[Math.floor(Math.random() * cakep.length)];
        let watak = wetak[Math.floor(Math.random() * wetak.length)];
        let baik = baikk[Math.floor(Math.random() * baikk.length)];
        let burug = bhuruk[Math.floor(Math.random() * bhuruk.length)];
        let cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)];
        let berani = berhani[Math.floor(Math.random() * berhani.length)];
        let takut = mengheikan[Math.floor(Math.random() * mengheikan.length)];
        let profile = `*꧁Cek ${text ? `${sendmen}`:`${pushname}`}꧂*
*Nama :* ${text ? `${sendmen}`:`${pushname}`}
*Karakteristik :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Hebat :* ${senga}%
*Ketampanan :* ${chakep}
*Karakter :* ${watak}
*Moral Baik :* ${baik}%
*Moral buruk :* ${burug}%
*Intelijen :* ${cerdas}%
*Berani :* ${berani}%
*Takut :* ${takut}%
`
try {
            ppuser1 = await TsuCnn.profilePictureUrl(froms, 'image')
          } catch (err) {
            ppuser1 = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
          }
          TsuCnn.sendMessage(m.chat, {
            text: profile,
            mentions: [froms],
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: ppuser1,
                title: `${command}`,
                renderLargerThumbnail: true,
                sourceUrl: `https://wa.me/${froms}`,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgan2
          })
        /*if (text && m?.quoted) {
          try {
            ppuser1 = await TsuCnn.profilePictureUrl(userss, 'image')
          } catch (err) {
            ppuser1 = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
          }
          TsuCnn.sendMessage(m.chat, {
            text: profile,
            mentions: [userss],
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: ppuser1,
                title: `${command}`,
                renderLargerThumbnail: true,
                sourceUrl: `https://wa.me/${usersss}`,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgan2
          })
        }
        if (!text && !m?.quoted) {
          try {
            ppuser = await TsuCnn.profilePictureUrl(m.sender, 'image')
          } catch (err) {
            ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
          }
          TsuCnn.sendMessage(m.chat, {
            text: profile,
            mentions: [sender1],
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: `${command}`,
                renderLargerThumbnail: true,
                sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgan2
          })
        }*/
        break
        // game menu
case "catur":
case "chess": {
  const { Chess } = require("chess.js");
  const timeout = 86400;
  TsuCnn.chess = TsuCnn.chess || {};
  let chessGame = TsuCnn.chess[m.chat] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  TsuCnn.chess[m.chat] = chessGame;
  const { gameData, fen, currentTurn, players, hasJoined } = chessGame;
  const action = commandArgs[0]?.toLowerCase();
  
  if (action === "delete") {
    delete TsuCnn.chess[m.chat];
    return m.reply("🏳️ *Permainan catur dihentikan.*");
  }
  
  if (action === "create") {
    if (gameData) {
      return m.reply("⚠️ *Permainan sudah dimulai.*");
    }
    chessGame.gameData = {
      status: "waiting",
      black: null,
      white: null
    };
    return m.reply("🎮 *Permainan catur dimulai.*\nMenunggu pemain lain untuk bergabung.");
  }

  if (action === "join") {
    const player = m.sender;
    if (players.includes(player)) {
      return m.reply("🙅‍♂️ *Anda sudah bergabung dalam permainan ini.*");
    }
    if (!gameData || gameData.status !== "waiting") {
      return m.reply("⚠️ *Tidak ada permainan catur yang sedang menunggu.*");
    }
    if (players.length >= 2) {
      return m.reply("👥 *Pemain sudah mencukupi.*\nPermainan otomatis dimulai.");
    }
    players.push(player);
    hasJoined.push(player);
    if (players.length === 2) {
      gameData.status = "ready";
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessGame.currentTurn = white;
      return m.reply(`🙌 *Pemain yang telah bergabung:*\n${hasJoined.map(p => "- @" + p.split("@")[0]).join("\n")}\n\n*Hitam:* @${black.split("@")[0]}\n*Putih:* @${white.split("@")[0]}\n\nSilakan gunakan \`chess start\` untuk memulai permainan.`, m.chat, {
        mentions: hasJoined
      });
    } else {
      return m.reply("🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.");
    }
  }

  if (action === "start") {
    if (gameData.status !== "ready") {
      return m.reply("⚠️ *Tidak dapat memulai permainan. Tunggu hingga dua pemain bergabung.*");
    }
    gameData.status = "playing";
    const player = m.sender;
    if (players.length === 2) {
      const initialFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
      chessGame.fen = initialFen;
      const encodedFen = encodeURIComponent(initialFen);
      const message = `🎲 *Giliran:* Putih @${gameData.white.split("@")[0]}`;
      const flipBoard = player === gameData.black ? "" : "&flip=true";
      const boardImage = player === gameData.black ? "" : "-flip";
      const chessImageUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipBoard}`;
      
      try {
        await TsuCnn.sendFile2(m.chat, chessImageUrl, "", message, m, false, {
          mentions: [gameData.white]
        });
      } catch (error) {
        const fallbackImageUrl = `https://chessboardimage.com/${encodedFen}${boardImage}.png`;
        await TsuCnn.sendFile2(m.chat, fallbackImageUrl, "", message, m, false, {
          mentions: [gameData.black],
          ephemeralExpiration: timeout
        });
      }
      return;
    } else {
      return m.reply("🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.");
    }
  }

  if (commandArgs[0] && commandArgs[1]) {
    const player = m.sender;
    if (!gameData || gameData.status !== "playing") {
      return m.reply("⚠️ *Permainan belum dimulai.*");
    }
    if (currentTurn !== player) {
      return m.reply("⏳ *Sekarang giliran pemain lain.*");
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      delete TsuCnn.chess[m.chat];
      return TsuCnn.sendMessage(m.chat, {
        text: `⚠️ *Game Checkmate.*\n🏳️ *Permainan catur dihentikan.*\n*Pemenang:* @${m.sender.split("@")[0]}`,
        contextInfo: { mentionedJid: [m.sender] }
      }, { quoted: m, ephemeralExpiration: timeout });
    }
    if (chess.isDraw()) {
      delete TsuCnn.chess[m.chat];
      return TsuCnn.sendMessage(m.chat, {
        text: `⚠️ *Game Draw.*\n🏳️ *Permainan catur dihentikan.*\n*Pemain:* ${hasJoined.map(p => "- @" + p.split("@")[0]).join("\n")}`,
        contextInfo: { mentionedJid: hasJoined }
      }, { quoted: m, ephemeralExpiration: timeout });
    }

    const [from, to] = commandArgs;
    try {
      chess.move({ from, to, promotion: "q" });
    } catch (error) {
      return m.reply("❌ *Langkah tidak valid.*");
    }

    chessGame.fen = chess.fen();
    const nextTurnIndex = (players.indexOf(currentTurn) + 1) % 2;
    chessGame.currentTurn = players[nextTurnIndex];
    const updatedFen = encodeURIComponent(chess.fen());
    const nextTurn = chessGame.currentTurn === gameData.white ? "Putih" : "Hitam";
    const newMessage = `🎲 *Giliran:* ${nextTurn} @${chessGame.currentTurn.split("@")[0]}`;
    const flipBoard = player === gameData.black ? "" : "&flip=true";
    const boardImage = player === gameData.black ? "" : "-flip";
    const chessImageUrl = `https://www.chess.com/dynboard?fen=${updatedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipBoard}`;

    try {
      await TsuCnn.sendMessage(m.chat, {
        image: { url: chessImageUrl },
        caption: newMessage,
        mentions: [chessGame.currentTurn]
      }, { quoted: m, ephemeralExpiration: timeout });
    } catch (error) {
      const fallbackImageUrl = `https://chessboardimage.com/${updatedFen}${boardImage}.png`;
      await TsuCnn.sendMessage(m.chat, {
        image: { url: fallbackImageUrl },
        caption: newMessage,
        mentions: [chessGame.currentTurn]
      }, { quoted: m, ephemeralExpiration: timeout });
    }
  }

  if (action === "img") {
  }

  if (action === "help") {
    return m.reply(`
      🌟 *Perintah Permainan Catur:*
      \n\`${prefix+command} create\` - Mulai permainan catur
      \n\`${prefix+command} join\` - Bergabung dalam permainan catur yang sedang menunggu
      \n\`${prefix+command} start\` - Memulai permainan catur jika ada dua pemain yang sudah bergabung
      \n\`${prefix+command} delete\` - Menghentikan permainan catur
      \n\`${prefix+command} [dari] [ke]\` - Melakukan langkah dalam permainan catur misal ${prefix+command} h8 h6
      \n*Contoh:*
      \nKetik \`${prefix+command} create\` untuk memulai permainan catur.
      \nKetik \`${prefix+command} join\` untuk bergabung dalam permainan catur yang sedang menunggu.
    `);
  }

  return m.reply("❓ Perintah tidak valid. Gunakan `${prefix+command} help` untuk melihat bantuan.");
}
break;
      case 'akinator':
      case 'aki': {
      const {
  Aki
} = require('aki-api')
        let sections = [{
            'title': "Opsi 1",
            'highlight_label': 'Jawaban ke 0',
            'rows': [{
              'title': 'Ya',
              'description': 'Aku menjawab iya',
              'id': `${prefix+command} a 0`
            }]
          }, {
            'title': "Opsi 2",
            'highlight_label': 'Jawaban ke 1',
            'rows': [{
              'title': 'Tidak',
              'description': 'Aku menjawab tidak',
              'id': `${prefix+command} a 1`
            }]
          }, {
            'title': "Opsi 3",
            'highlight_label': 'Jawaban le 2',
            'rows': [{
              'title': "Saya Tidak Tahu",
              'description': 'Aku menjawab tidak tahu',
              'id': `${prefix+command} a 2`
            }]
          }, {
            'title': "Opsi 4",
            'highlight_label': 'Jawaban ke 3',
            'rows': [{
              'title': 'Mungkin',
              'description': 'Aku menjawab mungkin',
              'id': `${prefix+command} a 3`
            }]
          }, {
            'title': "Opsi 5",
            'highlight_label': 'Jawaban ke 4',
            'rows': [{
              'title': "Mungkin Tidak",
              'description': 'Aku menjawab mungkin tidak',
              'id': `${prefix+command} a 4`
            }]
          }, {
            'title': "Pilihan game",
            'highlight_label': "",
            'rows': [{
              'title': "Berhenti",
              'description': 'Berhenti bermain',
              'id': `${prefix+command} end`
            },
            {
              'title': "Mulai ulang",
              'description': 'Mulai ulang game',
              'id': `${prefix+command} restart`
            }
            ]
          }]
          let listjwb = {
            title: '「Pilih」',
            sections
          };
          
        if (isBot) return;
        {
          TsuCnn.akinator = TsuCnn.akinator ? TsuCnn.akinator : {};
          const cmdAki = args[0]?.toLowerCase();
          if (cmdAki === "end") {
            if (!(m.sender in TsuCnn.akinator)) {
              return m.reply("Anda tidak sedang dalam sesi Akinator");
            }
            delete TsuCnn.akinator[m.sender];
            m.reply("Berhasil keluar dari sesi Akinator.");
          }
          if (cmdAki === "start") {
            if (m.sender in TsuCnn.akinator) {
              return m.reply("Anda masih berada dalam sesi Akinator");
            }
            TsuCnn.akinator[m.sender] = new Aki({
              region: "id"
            });
            await TsuCnn.akinator[m.sender].start();
            let {
              question
            } = TsuCnn.akinator[m.sender];
            let teaki = "🎮 *Akinator* 🎮\n\n`Pertanyaan` : \n" + question + "\n\n0. *Ya*\n1. *Tidak*\n2. *Saya Tidak Tahu*\n3. *Mungkin*\n4. *Mungkin Tidak*\n\nHint :\n*" + (prefix + command) + " a 0* itu ngarah ke jawaban ke \"Ya\"\n*" + (prefix + command) + " end* untuk keluar dari sesi Akinator";
            TsuCnn.akinator[m.sender].chat = TsuCnn.sendListWithImage(m.chat, teaki, listjwb, Styles('atau pilih di bawah'), 'https://i.ibb.co.com/yPjMQ91/20240807-190104.jpg', m);
            TsuCnn.akinator[m.sender].waktu = setTimeout(() => {
              m.reply("Waktu Memilih Akinator Habis");
              delete TsuCnn.akinator[m.sender];
            }, 300000);
          }
          if (cmdAki === "a") {
            if (!(m.sender in TsuCnn.akinator)) {
              return m.reply("Anda tidak sedang dalam sesi Akinator");
            }
            if (!args[1]) {
              return m.reply("Masukan Jawaban Kamu!");
            }
            if (!/0|1|2|3|4/i.test(args[1])) {
              return m.reply("Invalid Number");
            }
            clearTimeout(TsuCnn.akinator[m.sender].waktu);
            await TsuCnn.akinator[m.sender].step(args[1]);
            let {
              guess,
              question,
              currentStep,
              progress
            } = TsuCnn.akinator[m.sender];
            if (guess != undefined) {
              const teksj = "🎮 *Akinator Answer*\n\nDia Adalah..\nNama : " + guess.name_proposition + "\nDeskripsi : " + guess.description_proposition;
              /*TsuCnn.sendMessage(m.chat, {
                image: {
                  url: guess.photo
                },
                caption: teksj
              }, {
                quoted: m
              });*/
            let buttons = [{
             type: "buttons",
             text: "Main lagi",
             id: `${prefix}aki start`
             }]
              
              TsuCnn.sendButtonImg(m.chat, teksj, Styles('akinator by tsumuri-md'), buttons, guess.photo, m)
//TsuCnn.sendButtonWithImg(m.chat, teksj, 'Main Lagi', 'aki start', 'ᴀᴋɪɴᴀᴛᴏʀ ʙʏ ʟᴜʜᴜɴɢᴄʜ', guess.photo, m)
              delete TsuCnn.akinator[m.sender];
            } else {
              let teksa = "🎮 *Akinator* 🎮\n\n`Step` : " + currentStep + " ( " + progress.toFixed(2) + " % )\n`Pertanyaan` : \n" + question + "\n\n0. *Ya*\n1. *Tidak*\n2. *Saya Tidak Tahu*\n3. *Mungkin*\n4. *Mungkin Tidak*";
              TsuCnn.akinator[m.sender].chat = await TsuCnn.sendListWithImage(m.chat, teksa, listjwb, Styles('pilih di bawah'), 'https://i.ibb.co.com/yPjMQ91/20240807-190104.jpg', m);
              TsuCnn.akinator[m.sender].waktu = setTimeout(() => {
                m.reply("Waktu Memilih Akinator Habis");
                delete TsuCnn.akinator[m.sender];
              }, 300000);
            }
          }
          if (cmdAki === "restart") {
          if (!(m.sender in TsuCnn.akinator)) {
              return m.reply("Anda tidak sedang dalam sesi Akinator");
            }
            delete TsuCnn.akinator[m.sender];
            TsuCnn.akinator[m.sender] = new Aki({
              region: "id"
            });
            await TsuCnn.akinator[m.sender].start();
            let {
              question
            } = TsuCnn.akinator[m.sender];
            let teaki = "🎮 *Akinator* 🎮\n\n`Pertanyaan` : \n" + question + "\n\n0. *Ya*\n1. *Tidak*\n2. *Saya Tidak Tahu*\n3. *Mungkin*\n4. *Mungkin Tidak*\n\nHint :\n*" + (prefix + command) + " a 0* itu ngarah ke jawaban ke \"Ya\"\n*" + (prefix + command) + " end* untuk keluar dari sesi Akinator";
            TsuCnn.akinator[m.sender].chat = await TsuCnn.sendList(m.chat, teksa, Styles('Atau pilih di bawah'), listjwb, m);
            TsuCnn.akinator[m.sender].waktu = setTimeout(() => {
              m.reply("Waktu Memilih Akinator Habis");
              delete TsuCnn.akinator[m.sender];
            }, 300000);
          }
          if (cmdAki === "help") {
            let teksh = "Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran pengguna permainan ini melalui serentetan pertanyaan.\n\n🎮 _*Cara Bermain:*_\n" + (prefix + command) + " start ~ Untuk Memulai Permainan\n"  + (prefix + command) + " restart ~ Untuk Memulai Ulang Permainan\n" + (prefix + command) + " end ~ Untuk Menghapus Sesi Permainan\n" + (prefix + command) + " a <number> ~ Untuk Menjawab Pertanyaan";
            replyak2(teksh);
          }
          if (!text) {
            m.reply("Command salah, silakan lihat di " + (prefix + command) + " help");
          }
        }
        }
        break;
      case 'wwpc':
      case 'ww':
      case 'werewolf': {
        let jimp = require("jimp")
        const resize = async (image, width, height) => {
          const read = await jimp.read(image);
          const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
          return data;
        };
        let {
          emoji_role,
          sesi,
          playerOnGame,
          playerOnRoom,
          playerExit,
          dataPlayer,
          dataPlayerById,
          getPlayerById,
          getPlayerById2,
          killWerewolf,
          killww,
          dreamySeer,
          sorcerer,
          protectGuardian,
          roleShuffle,
          roleChanger,
          roleAmount,
          roleGenerator,
          addTimer,
          startGame,
          playerHidup,
          playerMati,
          vote,
          voteResult,
          clearAllVote,
          getWinner,
          win,
          pagi,
          malam,
          skill,
          voteStart,
          voteDone,
          voting,
          run,
          run_vote,
          run_malam,
          runprefixagi
        } = require('./lib/werewolf.js')
        // [ Thumbnail ] 
        let thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";
        const {
          sender,
          chat
        } = m;
        TsuCnn.werewolf = TsuCnn.werewolf ? TsuCnn.werewolf : {};
        const ww = TsuCnn.werewolf ? TsuCnn.werewolf : {};
        const data = ww[chat];
        const value = args[0];
        const target = args[1];
        let byId = getPlayerById2(sender, parseInt(target), ww);
        // [ Membuat Room ]
        if (value === "create") {
          if (chat in ww) return replyj("Group masih dalam sesi permainan");
          if (playerOnGame(sender, ww) === true) return replyj("Kamu masih dalam sesi game");
          ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
          };
          await replyj("Room berhasil dibuat, ketik *.ww join* untuk bergabung");
          // [ Join sesi permainan ]
        } else if (value === "join") {
          if (!ww[chat]) return replyj("Belum ada sesi permainan");
          if (ww[chat].status === true) return replyj("Sesi permainan sudah dimulai");
          if (ww[chat].player.length > 16) return replyj("Maaf jumlah player telah penuh");
          if (playerOnRoom(sender, chat, ww) === true) return replyj("Kamu sudah join dalam room ini");
          if (playerOnGame(sender, ww) === true) return replyj("Kamu masih dalam sesi game");
          let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
          };
          ww[chat].player.push(data);
          let player = [];
          let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
          for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
          }
          text += "\nJumlah player minimal adalah 5 dan maximal 15";
          TsuCnn.sendMessage(m.chat, {
            text: text.trim(),
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: websitex,
                mediaUrl: thumb,
              },
              mentionedJid: player,
            },
          }, {
            quoted: m
          });
          // [ Game Play ]
        } else if (value === "start") {
          if (!ww[chat]) return replyj("Belum ada sesi permainan");
          if (ww[chat].player.length === 0) return replyj("Room belum memiliki player");
          if (ww[chat].player.length < 5) return replyj("Maaf jumlah player belum memenuhi syarat");
          if (playerOnRoom(sender, chat, ww) === false) return replyj("Kamu belum join dalam room ini");
          if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
              clearAllVote(chat, ww);
              addTimer(chat, ww);
              return await run_vote(TsuCnn.chat, ww);
            } else if (ww[chat].time === "malem") {
              clearAllVote(chat, ww);
              addTimer(chat, ww);
              return await run_malam(TsuCnn.chat, ww);
            } else if (ww[chat].time === "pagi") {
              clearAllVote(chat, ww);
              addTimer(chat, ww);
              return await runprefixagi(TsuCnn.chat, ww);
            }
          }
          if (ww[chat].status === true) return replyj("Sesi permainan telah dimulai");
          if (ww[chat].owner !== sender) return replyj(`Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`);
          let list1 = "";
          let list2 = "";
          let player = [];
          roleGenerator(chat, ww);
          addTimer(chat, ww);
          startGame(chat, ww);
          for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
          }
          for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
          }
          for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
              if (ww[chat].player[i].isdead != true) {
                var textt = `Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                await TsuCnn.sendMessage(ww[chat].player[i].id, {
                  text: textt,
                  mentions: player,
                });
              }
              // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
              if (ww[chat].player[i].isdead != true) {
                let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${TsuCnn.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                await TsuCnn.sendMessage(ww[chat].player[i].id, {
                  text: texttt,
                  mentions: player,
                });
              }
              // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
              if (ww[chat].player[i].isdead != true) {
                let texxt = `Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                await TsuCnn.sendMessage(ww[chat].player[i].id, {
                  text: texxt,
                  mentions: player,
                });
              }
              // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
              if (ww[chat].player[i].isdead != true) {
                let teext = `Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                await TsuCnn.sendMessage(ww[chat].player[i].id, {
                  text: teext,
                  mentions: player,
                });
              }
              // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
              if (ww[chat].player[i].isdead != true) {
                let textu = `Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                await TsuCnn.sendMessage(ww[chat].player[i].id, {
                  text: textu,
                  mentions: player,
                });
              }
            }
          }
          await TsuCnn.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: websitex,
                mediaUrl: thumb,
              },
              mentionedJid: player,
            },
          });
          await run(TsuCnn.chat, ww);
        } else if (value === "kill") {
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (dataPlayer(sender, ww).role !== "werewolf") return replyj("Peran ini bukan untuk kamu");
          if (byId.db.role === "sorcerer") return replyj("Tidak bisa menggunakan skill untuk teman");
          if (playerOnGame(sender, ww) === false) return replyj("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true) return replyj("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true) return replyj("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2) return replyj(`Masukan nomor player \n*Contoh* : \n${prefix + command} kill 1`)
          if (isNaN(target)) return replyj("Gunakan hanya nomor")
          if (byId.db.isdead === true) return replyj("Player sudah mati")
          if (byId.db.id === sender) return replyj("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false) return replyj("Player tidak terdaftar")
          replyj("Berhasil membunuh player " + parseInt(target)).then(() => {
            dataPlayer(sender, ww).status = true;
            killWerewolf(sender, parseInt(target), ww);
          });
        } else if (value === "dreamy") {
          if (dataPlayer(sender, ww).role !== "seer") return replyj("Peran ini bukan untuk kamu");
          if (playerOnGame(sender, ww) === false) return replyj("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true) return replyj("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true) return replyj("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2) return replyj(`Masukan nomor player \n*Contoh* : \n${prefix + command} kill 1`)
          if (isNaN(target)) return replyj("Gunakan hanya nomor")
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (byId.db.isdead === true) return replyj("Player sudah mati")
          if (byId.db.id === sender) return replyj("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false) return replyj("Player tidak terdaftar")
          let dreamy = dreamySeer(m.sender, parseInt(target), ww);
          replyj(`Berhasil membuka identitas player ${target} adalah ${dreamy}`).then(() => {
            dataPlayer(sender, ww).status = true;
          });
        } else if (value === "deff") {
          if (dataPlayer(sender, ww).role !== "guardian") return replyj("Peran ini bukan untuk kamu");
          if (playerOnGame(sender, ww) === false) return replyj("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true) return replyj("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true) return replyj("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2) return replyj(`Masukan nomor player \n*Contoh* : \n${prefix + command} kill 1`)
          if (isNaN(target)) return replyj("Gunakan hanya nomor")
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (byId.db.isdead === true) return replyj("Player sudah mati")
          if (byId.db.id === sender) return replyj("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false) return replyj("Player tidak terdaftar")
          replyj(`Berhasil melindungi player ${target}`).then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
          });
        } else if (value === "sorcerer") {
          if (dataPlayer(sender, ww).role !== "sorcerer") return replyj("Peran ini bukan untuk kamu");
          if (playerOnGame(sender, ww) === false) return replyj("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true) return replyj("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true) return replyj("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2) return replyj(`Masukan nomor player \n*Contoh* : \n${prefix + command} kill 1`)
          if (isNaN(target)) return replyj("Gunakan hanya nomor")
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (byId.db.isdead === true) return replyj("Player sudah mati")
          if (byId.db.id === sender) return replyj("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false) return replyj("Player tidak terdaftar")
          let sorker = sorcerer(sesi(m.sender), target);
          replyj(`Berhasil membuka identitas player ${player} adalah ${sorker}`).then(() => {
            dataPlayer(sender, ww).status = true;
          });
        } else if (value === "vote") {
          if (!ww[chat]) return replyj("Belum ada sesi permainan");
          if (ww[chat].status === false) return replyj("Sesi permainan belum dimulai");
          if (ww[chat].time !== "voting") return replyj("Sesi voting belum dimulai");
          if (playerOnRoom(sender, chat, ww) === false) return replyj("Kamu bukan player");
          if (dataPlayer(sender, ww).isdead === true) return replyj("Kamu sudah mati");
          if (!target || target.length < 1) return replyj("Masukan nomor player");
          if (isNaN(target)) return replyj("Gunakan hanya nomor");
          if (dataPlayer(sender, ww).isvote === true) return replyj("Kamu sudah melakukan voting");
          b = getPlayerById(chat, sender, parseInt(target), ww);
          if (b.db.isdead === true) return replyj(`Player ${target} sudah mati.`);
          if (ww[chat].player.length < parseInt(target)) return replyj("Invalid");
          if (getPlayerById(chat, sender, parseInt(target), ww) === false) return replyj("Player tidak terdaftar!");
          vote(chat, parseInt(target), sender, ww);
          return replyj("✅ Vote");
        } else if (value == "exit") {
          if (!ww[chat]) return replyj("Tidak ada sesi permainan");
          if (playerOnRoom(sender, chat, ww) === false) return replyj("Kamu tidak dalam sesi permainan");
          if (ww[chat].status === true) return replyj("Permainan sudah dimulai, kamu tidak bisa keluar");
          let exitww = `${sender.split("@")[0]} Keluar dari permainan`
          TsuCnn.sendMessage(m.chat, {
            text: exitww,
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: websitex,
                mediaUrl: thumb,
              },
              mentionedJid: sender,
            },
          }, {
            quoted: m
          });
          playerExit(chat, sender, ww);
        } else if (value === "delete") {
          if (!ww[chat]) return replyj("Tidak ada sesi permainan");
          if (ww[chat].owner !== sender) return replyj(`Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`);
          replyj("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
          });
        } else if (value === "player") {
          if (!ww[chat]) return replyj("Tidak ada sesi permainan");
          if (playerOnRoom(sender, chat, ww) === false) return replyj("Kamu tidak dalam sesi permainan");
          if (ww[chat].player.length === 0) return replyj("Sesi permainan belum memiliki player");
          let player = [];
          let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
          for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
          }
          TsuCnn.sendMessage(m.chat, {
            text: text,
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: websitex,
                mediaUrl: thumb,
              },
              mentionedJid: player,
            },
          }, {
            quoted: m
          });
        } else {
          let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
          text += ` • ww create\n`;
          text += ` • ww join\n`;
          text += ` • ww start\n`;
          text += ` • ww exit\n`;
          text += ` • ww delete\n`;
          text += ` • ww player\n`;
          text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
          TsuCnn.sendMessage(m.chat, {
            text: text.trim(),
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: websitex,
                mediaUrl: thumb,
              },
            },
          }, {
            quoted: m
          });
        }
      }
      break
      case 'petakbom':
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (sender in petakbom) return replyj(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');

        function shuffle(array) {
          return array.sort(() => Math.random() - 0.5);
        }
        petakbom[sender] = {
          petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
          board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
          bomb: 3,
          lolos: 7,
          pick: 0,
          hadiah: randomNomor(5000, 10000),
          nyawa: ["❤️", "❤️", "❤️"]
        };
        await replyk(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
        break
      case 'delpetakbom':
        if (!m.isGroup) return replyerr(mess.group)
        if (!(sender in petakbom)) return replyj(`Kamu sedang tidak bermain petakbom!`)
        delete petakbom[sender];
        reply(`Petakbom diakhiri, hadiah Rp. 0`)
        break
      case 'tebakgambar':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in kuis) return replyj('Kamu masih punya soal kuis');
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        var {
          img, jawaban, deskripsi
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakgambar.json')));
        console.log('Jawaban : ' + jawaban)
        var teks1 = `*GAME TEBAK GAMBAR*\ngam untuk clue\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
        await TsuCnn.sendMessage(from, {
          image: {
            url: img
          },
          caption: teks1
        }, {
          quoted: m
        })
        tebakgambar[from] = {
          soal: img,
          jawaban: jawaban.toLowerCase(),
          waktu: setTimeout(function() {
            if (tebakgambar[from]) m.reply('Waktu habis!');
            delete tebakgambar[from];
          }, gamewaktu * 1000)
        }
        break
      case 'tebakanime':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          image, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakanime.json')));
        console.log('Jawaban : ' + jawaban)
        var teks1 = `*GAME TEBAK ANIME*\nnim untuk clue\nWaktu: ${gamewaktu} detik`
        await TsuCnn.sendMessage(from, {
          image: {
            url: image
          },
          caption: teks1
        }, {
          quoted: m
        })
        tebakanime[from] = {
          soal: image,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (tebakanime[from]) m.reply('Waktu habis!');
            delete tebakanime[from];
          }, gamewaktu * 1000)
        }
        break
      case 'tebaklagu':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, artis, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebaklagu.json')));
        console.log('Jawaban : ' + jawaban)
        if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return replyj('Maaf terjadi kesalahan!')
        var teks1 = `*GAME TEBAK LAGU*\nagu untuk clue\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
        await TsuCnn.sendMessage(from, {
          audio: {
            url: soal
          },
          mimetype: 'audio/mp4',
          ptt: true
        }, {
          quoted: m
        }).then(res => {
          TsuCnn.sendText(from, teks1, res)
        })
        tebaklagu[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (tebaklagu[from]) m.reply('Waktu habis!');
            delete tebaklagu[from];
          }, gamewaktu * 1000)
        }
        break
      case 'kuis':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/kuis.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME KUIS*\n\nSoal: ${soal}\nusi untuk clue\nWaktu: ${gamewaktu} detik`)
        kuis[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (kuis[from]) m.reply('Waktu habis!');
            delete kuis[from];
          }, gamewaktu * 1000)
        }
        break
      case 'tebakkalimat':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakkalimat.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nkal untuk clue\nWaktu: ${gamewaktu} detik`)
        tebakkalimat[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (tebakkalimat[from]) m.reply('Waktu habis!');
            delete tebakkalimat[from];
          }, gamewaktu * 1000)
        }
        break
      case 'tebakkata':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakkata.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nkat untuk clue\nWaktu: ${gamewaktu} detik`)
        tebakkata[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (tebakkata[from]) m.reply('Waktu habis!');
            delete tebakkata[from];
          }, gamewaktu * 1000)
        }
        break
      case 'lengkapikalimat':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/lengkapikalimat.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME LENGKAPI KALIMAT*\n\nSoal: ${soal}\nkap untuk clue\nWaktu: ${gamewaktu} detik`)
        lengkapikal[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (lengkapikal[from]) m.reply('Waktu habis!');
            delete lengkapikal[from];
          }, gamewaktu * 1000)
        }
        break
      case 'trivia':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban, pilihan
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/trivia.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME TRIVIA*\n\nSoal: ${soal}\n${pilihan}\nKamu hanya diberi 1 kesempatan untuk menjawab\nJawab dengan a/b/c/d\nWaktu: ${gamewaktu} detik`)
        trivia[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (trivia[from]) m.reply('Waktu habis!');
            delete trivia[from];
          }, gamewaktu * 1000)
        }
        break
      case 'tebaklirik':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebaklirik.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nlir untuk petunjuk\nWaktu: ${gamewaktu} detik`)
        tebaklirik[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (tebaklirik[from]) m.reply('Waktu habis!');
            delete tebaklirik[from];
          }, gamewaktu * 1000)
        }
        break
      case 'tebakkimia':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakkimia.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
        tebakkimia[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (tebakkimia[from]) reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
            delete tebakkimia[from];
          }, gamewaktu * 1000)
        }
        break
      case 'tebakbendera':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakbendera.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nben untuk clue\nWaktu: ${gamewaktu} detik`)
        tebakbendera[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (tebakbendera[from]) m.reply('Waktu habis!');
            delete tebakbendera[from];
          }, gamewaktu * 1000)
        }
        break
      case 'susunkata':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/susunkata.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nsuk untuk petunjuk\nWaktu: ${gamewaktu} detik`)
        susunkata[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (susunkata[from]) m.reply('Waktu habis!');
            delete susunkata[from];
          }, gamewaktu * 1000)
        }
        break
      case 'asahotak':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/asahotak.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME ASAH OTAK*\n\nSoal: ${soal}\naos untuk clue\nWaktu: ${gamewaktu} detik`)
        asahotak[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (asahotak[from]) m.reply('Waktu habis!');
            delete asahotak[from];
          }, gamewaktu * 1000)
        }
        break
      case 'siapakahaku':
      case 'sa':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (sender in petakbom) return replyj(`Kamu masih punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/siapakahaku.json')));
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nsau untuk clue\nWaktu: ${gamewaktu} detik`)
        siapakahaku[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (siapakahaku[from]) m.reply('Waktu habis!');
            delete siapakahaku[from];
          }, gamewaktu * 1000)
        }
        break
      case 'caklontong':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Masih ada game yang belum diselesaikan');
        if (sender in petakbom) return replyj(`Kamu punya soal Petak Bom`)
        if (from in kuismath) return replyj('Kamu masih punya soal Kuis Math');
        if (from in trivia) return replyj('Kamu masih punya soal Trivia');
        if (from in lengkapikal) return replyj('Kamu masih punya soal Lengkapi Kalimat');
        var {
          soal, jawaban, deskripsi
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/caklontong.json')));
        console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
        await replyk(`*GAME CAK LONTONG*\n\nSoal: ${soal}\ncal untuk clue\nWaktu: ${gamewaktu} detik`)
        caklontong[from] = {
          soal: soal,
          jawaban: jawaban.toLowerCase(),
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(function() {
            if (caklontong[from]) m.reply('Waktu habis!')
            delete caklontong[from];
          }, gamewaktu * 1000)
        }
        break
      case 'math':
      case 'kuismath':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tebakgambar) return replyj('Kamu masih punya soal Tebak Gambar');
        if (from in tebakanime) return replyj('Kamu masih punya soal Tebak Anime');
        if (from in tebakkata) return replyj('Kamu masih punya soal Tebak Kata');
        if (from in tebakkalimat) return replyj('Kamu masih punya soal Tebak Kalimat');
        if (from in susunkata) return replyj('Kamu masih punya soal Susun Kata');
        if (from in tebaklagu) return replyj('Kamu masih punya soal Tebak Lagu');
        if (from in tebaklirik) return replyj('Kamu masih punya soal Tebak Lirik');
        if (from in tebakkimia) return replyj('Kamu masih punya soal  Tebak Kimia');
        if (from in tebakbendera) return replyj('Kamu masih punya soal tebak Bendera');
        if (from in asahotak) return replyj('Kamu masih punya soal Asah Otak');
        if (from in caklontong) return replyj('Kamu masih punya soal Cak Lontong');
        if (from in kuismath) return replyj('Masih ada game yang belum diselesaikan!');
        if (sender in petakbom) return replyj(`Kamu punya soal Petak Bom`)
        let {
          genMath, modes
        } = require('./media/game/math')
        if (!q) return replyj(`┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\n*Contoh* : \n${prefix + command} hard`)
        if (!(Object.keys(modes)).includes(args[0])) return replyj('Pilih mode yang benerr!')
        var {
          soal, jawaban, waktu, hadiah
        } = await genMath(q.toLowerCase()).catch((err) => m.reply(`Tolong pilih modenya yang benar *Contoh* : ${prefix + command} easy`))
        console.log('Jawaban : ' + jawaban)
        await replyk(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
        kuismath[from] = {
          soal: soal,
          jawaban: jawaban,
          hadiah: randomNomor(2000, hadiah),
          waktu: setTimeout(function() {
            if (kuismath[from]) m.reply('Waktu habis!')
            delete kuismath[from];
          }, waktu)
        }
        break
      case 'family100':
      case 'f100':
        if (!m.isGroup) return replyerr(mess.group)
        var {
          soal, jawaban
        } = pickRandom(JSON.parse(fs.readFileSync('./media/game/family100.json')));
        console.log('Jawaban : ' + jawaban)
        let famil = []
        for (let i of jawaban) {
          let fefsh = i.split('/') ? i.split('/')[0] : i
          let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ', '') : fefsh
          let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
          famil.push(axsfh.toLowerCase())
        }
        await replyk(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
        family100[from] = {
          soal: soal,
          jawaban: famil,
          hadiah: randomNomor(10, 20),
          waktu: setTimeout(async function() {
            if (from in family100) {
              let teks = `*WAKTU HABIS!*`
              let jwb = family100[from].jawaban
              for (let i of jwb) {
                teks += `\n${i}`
              }
              m.reply(teks)
              delete family100[from];
            };
          }, gamewaktu * 1000)
        }
        break
      case 'koboi':
      case 'koboy':
      case 'cowboy': {
        TsuCnn.shoot = TsuCnn.shoot || {
          musuh: [],
          shoot: []
        }
        if (/kiri/i.test(text)) {
          let kiri = [
            ["🤠", "・", "・", "・", "・"],
            ["・", "🤠", "・", "・", "・"],
            ["・", "・", "🤠", "・", "・"],
            ["・", "・", "・", "🤠", "・"],
            ["・", "・", "・", "・", "🤠"]
          ]
          if (TsuCnn.shoot.shoot.indexOf("🤠") == 0) {
            TsuCnn.shoot.shoot = kiri[0]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 1) {
            TsuCnn.shoot.shoot = kiri[0]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 2) {
            TsuCnn.shoot.shoot = kiri[1]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 3) {
            TsuCnn.shoot.shoot = kiri[2]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 4) {
            TsuCnn.shoot.shoot = kiri[3]
          }
          let teks = `🤠 Koboi Mengejar Penjahat 🥷\n\n`
          teks += `Wilayahmu:\n${TsuCnn.shoot.shoot.join(" ")}\n`
          teks += `Wilayah penjahat:\n${TsuCnn.shoot.musuh.join(" ")}\n`
          teks += `*Contoh* : ${prefix + command} kanan atau ${prefix + command} kiri untuk bergerak ke kanan/kiri dan ${prefix + command} shoot untuk Menembak`
          if (TsuCnn.shoot.musuh.indexOf("🥷") === TsuCnn.shoot.shoot.indexOf("🤠")) return replyj(teks)
          return replyj(teks)
        } else if (/kanan/i.test(text)) {
          let kanan = [
            ["🤠", "・", "・", "・", "・"],
            ["・", "🤠", "・", "・", "・"],
            ["・", "・", "🤠", "・", "・"],
            ["・", "・", "・", "🤠", "・"],
            ["・", "・", "・", "・", "🤠"]
          ]
          if (TsuCnn.shoot.shoot.indexOf("🤠") == 0) {
            TsuCnn.shoot.shoot = kanan[1]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 1) {
            TsuCnn.shoot.shoot = kanan[2]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 2) {
            TsuCnn.shoot.shoot = kanan[3]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 3) {
            TsuCnn.shoot.shoot = kanan[4]
          } else if (TsuCnn.shoot.shoot.indexOf("🤠") == 4) {
            TsuCnn.shoot.shoot = kanan[4]
          }
          let teks = `🤠 Koboi Mengejar Penjahat 🥷\n\n`
          teks += `Wilayahmu:\n${TsuCnn.shoot.shoot.join(" ")}\n`
          teks += `Wilayah penjahat:\n${TsuCnn.shoot.musuh.join(" ")}\n`
          teks += `*Contoh* : ${prefix + command} kanan atau ${prefix + command} kiri untuk bergerak ke kanan/kiri dan ${prefix + command} shoot untuk Menembak`
          if (TsuCnn.shoot.musuh.indexOf("🥷") === TsuCnn.shoot.shoot.indexOf("🤠")) return replyj(teks)
          return replyj(teks)
        } else if (/shoot/i.test(text)) {
          if (TsuCnn.shoot.shoot.indexOf("🤠") == TsuCnn.shoot.musuh.indexOf("🥷")) {
            TsuCnn.shoot = {}
            TsuCnn.sendTextWithMentions(m.chat, `🎉 Selamat! kamu berhasil mengejar para penjahat! 🎉`, m)
          }
        } else {
          let randMusuh = [
            ["🥷", "・", "・", "・", "・"],
            ["・", "🥷", "・", "・", "・"],
            ["・", "・", "🥷", "・", "・"],
            ["・", "・", "・", "🥷", "・"],
            ["・", "・", "・", "・", "🥷"]
          ]
          let randAku = [
            ["🤠", "・", "・", "・", "・"],
            ["・", "🤠", "・", "・", "・"],
            ["・", "・", "🤠", "・", "・"],
            ["・", "・", "・", "🤠", "・"],
            ["・", "・", "・", "・", "🤠"]
          ]
          let musuh = pickRandom(randMusuh)
          let aku = pickRandom(randAku)
          TsuCnn.shoot.musuh = musuh
          TsuCnn.shoot.shoot = aku
          let teks = `🤠 Koboi Mengejar Penjahat 🥷\n\n`
          teks += `Wilayahmu:\n${TsuCnn.shoot.shoot.join(" ")}\n`
          teks += `Wilayah penjahat:\n${TsuCnn.shoot.musuh.join(" ")}\n`
          teks += `*Contoh* : ${prefix + command} kanan atau ${prefix + command} kiri untuk bergerak ke kanan/kiri dan ${prefix + command} shoot untuk Menembak`
          if (TsuCnn.shoot.musuh.indexOf("🥷") === TsuCnn.shoot.shoot.indexOf("🤠")) return replyj(teks)
          return replyj(teks)
        }
      }
      break
      case 'casino': {
        if (!m.isGroup) return replyerr(mess.group)
        let buatall = 1
        TsuCnn.casino = TsuCnn.casino ? TsuCnn.casino : {}
        if (m.chat in TsuCnn.casino) return m.reply('Masih Ada Yang Melakukan Casino Di sini, Tunggu Sampai Selesai!!')
        else TsuCnn.casino[m.chat] = true
        try {
          let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
          let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
          let Aku = (randomaku * 1)
          let Kamu = (randomkamu * 1)
          let count = args[0]
          count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].uang / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
          count = Math.max(1, count)
          if (args.length < 1) return m.reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
          if (db.data.users[m.sender].uang >= count * 1) {
            db.data.users[m.sender].uang -= count * 1
            if (Aku > Kamu) {
              m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Uang`)
            } else if (Aku < Kamu) {
              db.data.users[m.sender].uang += count * 2
              m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Uang`)
            } else {
              ldb.data.users[m.sender].uang += count * 1
              m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Uang`)
            }
          } else m.reply(`Uang Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
        } catch (e) {
          console.log(e)
          replyerr(mess.error)
        } finally {
          delete TsuCnn.casino[m.chat]
        }
      }
      break
      case 'suit': {
        if (!m.isGroup) return replyerr(mess.group)
        if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(m.sender))) return m.reply(`Selesaikan dulu suit mu yang sebelumnya`)
        if (m.quoted || text) {
          if (froms === botNumber) return m.reply(`Tidak bisa bermain suit dengan bot!`)
          if (froms === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri!`)
          if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(froms))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
          let hadiah = randomNumber(2000, 3000)
          let timeout = 60 * 1000
          let id = 'suit_' + Date.now()
          suit[id] = {
            id: id,
            penantang: m.sender,
            ditantang: froms,
            status: 'WAIT',
            hadiah: hadiah,
            chat: await TsuCnn.sendMessage(m.chat, {
              text: `*🎮 GAME SUIT 🎮*\n\n@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$${hadiah}* uang`,
              contextInfo: {
                mentionedJid: [froms, m.sender]
              }
            }, {
              quoted: kalgans
            }),
            timeout: timeout,
            waktu: setTimeout(() => {
              if (suit[id]) TsuCnn.sendMessage(m.chat, {
                text: `Waktu habis! @${froms.split("@")[0]} tidak merespon suit\nGame dibatalkan!`,
                contextInfo: {
                  mentionedJid: [froms]
                }
              }, {
                quoted: suit[id].chat
              })
              delete suit[id]
            }, timeout)
          }
        } else m.reply('@tagtarget')
      }
      break
      case 'slot': {
        if (!m.isGroup) return replyerr(mess.group)
        let hadiah = randomNumber(2000, 3000)
        let emojis = ["😹", "🧢", "🗿"]
        let a = Math.floor(Math.random() * emojis.length)
        let b = Math.floor(Math.random() * emojis.length)
        let c = Math.floor(Math.random() * emojis.length)
        let x = [],
          y = [],
          z = []
        for (let i = 0; i < 3; i++) {
          x[i] = emojis[a]
          a++
          if (a == emojis.length) a = 0
        }
        for (let i = 0; i < 3; i++) {
          y[i] = emojis[b]
          b++
          if (b == emojis.length) b = 0
        }
        for (let i = 0; i < 3; i++) {
          z[i] = emojis[c]
          c++
          if (c == emojis.length) c = 0
        }
        let end
        if (a == b && b == c) {
          end = `JACKPOT! *$${hadiah} point*`
          db.data.users[m.sender].uang += hadiah
        } else if (a == b || a == c || b == c) {
          end = `Hampir Beruntung! *+1 Limits*`
          db.data.users[m.sender].limit += 1
        } else {
          end = `LOSE! *-$${hadiah}*`
          if (hadiah > db.data.users[m.sender].uang) {
            ldb.data.users[m.sender].uang = 0
          } else {
            db.data.users[m.sender].uang -= hadiah
          }
        }
        let teks = `乂  *S L O T S*\n\n`
        teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
        teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
        teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
        teks += `\n${end}`
        m.reply(teks)
      }
      break
      case 'gambling': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!m.isGroup) return replyerr(mess.group)
        let hadiah = randomNumber(2000, 3000)
        let lose = randomNumber(500, 1000)
        let emojis = ["😹", "🧢", "🗿"]
        let a = Math.floor(Math.random() * emojis.length)
        let b = Math.floor(Math.random() * emojis.length)
        let c = Math.floor(Math.random() * emojis.length)
        let x = [],
          y = [],
          z = []
        for (let i = 0; i < 3; i++) {
          x[i] = emojis[a]
          a++
          if (a == emojis.length) a = 0
        }
        for (let i = 0; i < 3; i++) {
          y[i] = emojis[b]
          b++
          if (b == emojis.length) b = 0
        }
        for (let i = 0; i < 3; i++) {
          z[i] = emojis[c]
          c++
          if (c == emojis.length) c = 0
        }
        let end
        if (a == b && b == c) {
          end = `I won, I actually won! *$${hadiah} point*`
          db.data.users[m.sender].uang += hadiah
        } else if (a == b || a == c || b == c) {
          end = `Aw dang it! *-1 Limits*`
          db.data.users[m.sender].limit -= 1
        } else {
          end = `Aw dang it! *-$${lose}*`
          if (hadiah > db.data.users[m.sender].uang) {
            ldb.data.users[m.sender].uang = 0
          } else {
            db.data.users[m.sender].uang -= hadiah
          }
        }
        let teks = `*Let's Go Gambling*\n\n`
        teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
        teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
        teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
        teks += `\n${end}`
        m.reply(teks)
      }
      break
      case 'slot2': {
      if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
      gameSlot()
      }
      break
      case 'tictactoe':
      case 'ttt':
      case 'ttc':
      case 'xox':
        if (!m.isGroup) return replyerr(mess.group)
        if (from in tictactoe) return m.reply(`Masih ada game yang blum selesai`)
        if (!froms) return m.reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
        if (froms === botNumber) return m.reply(`Tidak bisa bermain dengan bot!`)
        if (froms === sender) return m.reply(`Sad amat main ama diri sendiri`)
        var hadiah = randomNumber(10, 20)
        await m.reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} uang`)
        tictactoe[from] = {
          id: from,
          status: null,
          hadiah: hadiah,
          penantang: sender,
          ditantang: froms,
          TicTacToe: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']
        }
        break
      case 'delttt':
      case 'delttc':
        if (!m.isGroup) return replyerr(mess.group)
        if (!(from in tictactoe)) return m.reply(`Tidak ada sesi game tictactoe di grup ini`)
        if (isAdmins || isCreator) {
          delete tictactoe[from];
          m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
        } else if (tictactoe[from].penantang.includes(sender)) {
          delete tictactoe[from];
          m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
        } else if (tictactoe[from].ditantang.includes(sender)) {
          delete tictactoe[from];
          m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
        } else {
          m.reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
        }
        break
      case 'dice':
      case 'dadu': {
        let ddsa = [{
          url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png',
          no: 1
        }, {
          url: 'https://telegra.ph/file/797f86e444755282374ef.png',
          no: 2
        }, {
          url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png',
          no: 3
        }, {
          url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png',
          no: 4
        }, {
          url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png',
          no: 5
        }, {
          url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png',
          no: 6
        }]
        let media = pickRandom(ddsa)
        await TsuCnn.sendImageAsSticker(m.chat, media.url, m, {
          packname: global.packname,
          author: global.author,
          isAvatar: 1
        })
      }
      break
      // Other Menu
      case 'kal':
      case 'kalkulator': {
      if (!text) return replyerr(`*Contoh* : ${prefix+command} 1+1`) 
      
      }
      break
      case 'ceknik':
      case 'nik': {
        if (m.isGroup) return replyerr(mess.pribadi)
        const ucword = (str = '') => {
          return str.replace(/^([a-z])|\s+([a-z])/g, function(text) {
            return text.toUpperCase();
          })
        }
        if (!text) return replyj('Input nik yang ingin kamu cek.')
        if (isNaN(args[0])) return replyerr(`*Contoh* : ${prefix + command} 332004xxxxxxxxxx`)
        if (args[0].toString().length !== 16) return replyj('NIK harus 16 digit.')
        let result = await fetchJson(`https://suryadev.vercel.app/api/ceknik?nik=${args[0]}`).then(response => response.json())
        if (!result.status) return replyj(result.message)
        delete result.status;
        delete result.creator;
        delete result.message;
        let resultTxt = '乂  *C E K - N I K*\n\n'
        for (let key in result.data) resultTxt += `◦  ${ucword(key)} : ${result.data[key]}\n`
        await replyj(resultTxt)
      }
      break
      /* 'ceknik1':
         'nik':{
      if (m.isGroup) return replyerr(mess.pribadi)
      const ucword = (str = '') => {
      return str.replace(/^([a-z])|\s+([a-z])/g, function(text) {
      return text.toUpperCase();
      })
      }
      if (!text) return replyj('Input nik yang ingin kamu cek.')
      if (isNaN(args[0])) return replyerr(`*Contoh* : ${prefix + command} 332004xxxxxxxxxx`)
      if (args[0].toString().length !== 16) return replyj('NIK harus 16 digit.')
        const { NIKTranslator } = require('./lib/Nik scrape')
        const translator = new NIKTranslator();
      const nik = `${args[0]}`
      try {
      const result = await translator.parse(nik);

              if (result) {
                  console.log('NIK DETAIL', JSON.stringify(result, null, 2));
              } else {
                  replyerr('Invalid NIK!');
              }
      } catch (error) {
              console.error('Error parsing NIK:', error.message);
          }
      }
      */
      case 'changelog':
      case 'pembaruan': {
        replyj(`*> Hai ${pushname}*\n${changelogs(prefix)}`)
      }
      break
      case 'asupan': {
        if (isBot) return
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!text) return replyj(`*Contoh* : ${prefix+command} china/indonesia/japan/korea/malaysia/thailand/vietnam`)
        const cmdarg = args[0]?.toLowerCase();
        if (cmdarg === "china") {
          try {
            await TsuCnn.sendMessage(m.chat, {
              image: {
                url: `https://widipe.com/china`
              },
              caption: `*Asupan ${args[0]}*`
            }, {
              quoted: limituse
            })
            uselimit2()
          } catch (err) {
            replyerr(`Terjadi kesalahan saat mengambil data Asupan`)
          }
        } else if (cmdarg === "indonesia") {
          try {
            await TsuCnn.sendMessage(m.chat, {
              image: {
                url: `https://widipe.com/indonesia`
              },
              caption: `*Asupan ${args[0]}*`
            }, {
              quoted: limituse
            })
            uselimit2()
          } catch (err) {
            replyerr(`Terjadi kesalahan saat mengambil data Asupan`)
          }
        } else if (cmdarg === "japan", "jepang") {
          try {
            await TsuCnn.sendMessage(m.chat, {
              image: {
                url: `https://widipe.com/japan`
              },
              caption: `*Asupan ${args[0]}*`
            }, {
              quoted: limituse
            })
            uselimit2()
          } catch (err) {
            replyerr(`Terjadi kesalahan saat mengambil data Asupan`)
          }
        } else if (cmdarg === "korea") {
          try {
            await TsuCnn.sendMessage(m.chat, {
              image: {
                url: `https://widipe.com/korea`
              },
              caption: `*Asupan ${args[0]}*`
            }, {
              quoted: limituse
            })
            uselimit2()
          } catch (err) {
            replyerr(`Terjadi kesalahan saat mengambil data Asupan`)
          }
        } else if (cmdarg === "malaysia") {
          try {
            await TsuCnn.sendMessage(m.chat, {
              image: {
                url: `https://widipe.com/malaysia`
              },
              caption: `*Asupan ${args[0]}*`
            }, {
              quoted: limituse
            })
            uselimit2()
          } catch (err) {
            replyerr(`Terjadi kesalahan saat mengambil data Asupan`)
          }
        } else if (cmdarg === "thailand") {
          try {
            await TsuCnn.sendMessage(m.chat, {
              image: {
                url: `https://widipe.com/thailand`
              },
              caption: `*Asupan ${args[0]}*`
            }, {
              quoted: limituse
            })
            uselimit2()
          } catch (err) {
            replyerr(`Terjadi kesalahan saat mengambil data Asupan`)
          }
        } else if (cmdarg === "vietnam") {
          try {
            await TsuCnn.sendMessage(m.chat, {
              image: {
                url: `https://widipe.com/vietnam`
              },
              caption: `*Asupan ${args[0]}*`
            }, {
              quoted: limituse
            })
            uselimit2()
          } catch (err) {
            replyerr(`Terjadi kesalahan saat mengambil data Asupan`)
          }
        }
      }
      break
      case 'random': {
        if (limitnya < 1 && !isPremium) return replyerr(mess.limit)
        if (!text) return replyj(`- List command yang tersedia
> ass
> ecchi
> ero
> hentai
> maid
> marin-kitagwa
> milf
> mori-calliope
> oppai
> oral
> paizuri
> raiden-shogun
> selfies
> uniform
> waifu

*Contoh : ${prefix+command} waifu*`)
        const cmdarg1 = args[0]?.toLowerCase();
        if (cmdarg1 === "maid") {
          axios.get(`https://api.waifu.im/search?maid`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "waifu") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "marin-kitagawa") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "mori-calliope") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "raiden-shogun") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "oppai") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "selfies") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "uniform") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "ass") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "hentai") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "milf") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "oral") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "paizuri") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "ecchi") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        } else if (cmdarg1 === "ero") {
          axios.get(`https://api.waifu.im/search?${cmdarg1}`).then(({
            data
          }) => {
            var teks = `*Signature:* ${data.images.signature ? data.images.signature : 'Tidak ada'}
*Extension:* ${data.images.extension ? data.images.extension : 'Tidak ada'}
*ID:* ${data.images.image_id ? data.images.image_id : 'Tidak ada'}
*Favorites:* ${data.images.favorite ? data.images.favorite : 'Tidak ada'}
*Color:* ${data.images.dominant_color ? data.images.dominant_color : 'Tidak ada'}
*Source:* ${data.images.source ? data.images.source : 'Tidak ada'}
*Artist*
- Name: ${data.images.artist.name ? data.images.artist.name : 'Tidak ada'}
- Patreon: ${data.images.artist.patreon ? data.images.artist.patreon : 'Tidak ada'}
- Pixiv: ${data.images.artist.pixiv ? data.images.artist.pixiv : 'Tidak ada'}
- Twitter: *Upload:* ${data.images.uploaded_at ? data.images.uploaded_at : 'Tidak ada'}
*Like:* ${data.images.liked_at ? data.images.liked_at : 'Tidak ada'}
*isNsfw:* ${data.images.is_nsfw ? data.images.is_nsfw : 'Tidak ada'}
*Width:* ${data.images.width ? data.images.width : 'Tidak ada'}
*Height:* ${data.images.height ? data.images.height : 'Tidak ada'}
*Size:* ${data.images.byte_size ? data.images.byte_size : 'Tidak ada'}`
            TsuCnn.sendMessage(from, {
              image: {
                url: data.images.url
              }, 
                caption: teks
            }, {
              quoted: limituse
            })
          })
          uselimit2()
        }
      }
      break
      /* 'idsaluran': case 'channelid': case 'chid': case 'idsaluran': case 'cekidsaluran': case 'saluranid': case 'getids': case 'getidsaluran': {
        if (!m.quoted) replyj('Reply undangan admin saluran kak')
        
        try {
          let quotedMessage = await m.getQuotedObj();
          let id = quotedMessage.msg.contextInfo.forwardedNewsletterMessageInfo;
          
          if (id) {
            await replyj(`Nama Channel: ${id.newsletterName}\nId Channel: ${id.newsletterJid}`);
          } else {
            replyj('Error kak, tidak ditemukan')
          }
        } catch (e) {
          replyj('Reply Udangan admin dari saluran kak') 
        }
      }
      */
      case 'react': {
        if (!m.quoted) return replyj('Balas Chatnya !')
        if (text.length > 2) return replyj('Cuma Untuk 1 Emoji!')
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 🗿`)
        TsuCnn.relayMessage(m.chat, {
          reactionMessage: {
            key: {
              id: m.quoted.id,
              remoteJid: m.chat,
              fromMe: true
            },
            text: `${text}`
          }
        }, {
          messageId: m.id
        })
      }
      break
      // Primbon Menu
      case 'artinama': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Darwin`)
        let anu = await primbon.arti_nama(text)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'ramalanjodoh':
      case 'ramaljodoh': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} yunzhie, 7, 7, 2024, darwin, 16, 11, 2024`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
        let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'artimimpi':
      case 'tafsirmimpi': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} belanja`)
        let anu = await primbon.tafsir_mimpi(text)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
      }
      break
      case 'kecocokannama':
      case 'cocoknama': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Aruna, 7, 7, 2005`)
        let [nama, tgl, bln, thn] = text.split`,`
        let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
      }
      break
      case 'kecocokanpasangan':
      case 'cocokpasangan':
      case 'pasangan': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Darwin|YunYun`)
        let [nama1, nama2] = text.split`|`
        let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendImage(from, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
      }
      break
      case 'jadianpernikahan':
      case 'jadiannikah': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 6, 12, 2020`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
      }
      break
      case 'sifatusaha': {
        if (!text) return replyerr(`*Contoh* : ${prefix+ command} 28, 12, 2021`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
      }
      break
      case 'rejeki':
      case 'rezeki': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'pekerjaan': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'ramalannasib':
      case 'ramalnasib':
      case 'nasib': {
        if (!text) return replyerr(`*Contoh* : 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.ramalan_nasib(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
      }
      break
      case 'potensipenyakit':
      case 'penyakit': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'artitarot':
      case 'tarot': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'fengshui': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Bagus, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
        let [nama, gender, tahun] = text.split`,`
        let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
      }
      break
      case 'haribaik': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.petung_hari_baik(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'harisangar':
      case 'taliwangke': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'harinaas':
      case 'harisial': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
      }
      break
      case 'nagahari':
      case 'harinaga': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'arahrejeki':
      case 'arahrezeki': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'peruntungan': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} Aruna, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
        let [nama, tgl, bln, thn, untuk] = text.split`,`
        let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'weton':
      case 'wetonjawa': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.weton_jawa(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
      }
      break
      case 'sifat':
      case 'karakter': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} HW MODS WA, 7, 7, 2005`)
        let [nama, tgl, bln, thn] = text.split`,`
        let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
      }
      break
      case 'keberuntungan': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} HW MODS WA, 7, 7, 2005`)
        let [nama, tgl, bln, thn] = text.split`,`
        let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
      }
      break
      case 'memancing': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 12, 1, 2022`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'masasubur': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
        let [tgl, bln, thn, siklus] = text.split`,`
        let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
      }
      break
      case 'shio': {
        if (!text) return replyerr(`*Contoh* : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
        let anu = await primbon.shio(text)
        if (anu.status == false) return reply(anu.message)
        TsuCnn.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
      }
      break
      case 'emojimix': {
        let [emoji1, emoji2] = text.split`+`
        if (!emoji1) return replyj(`*Contoh* : ${prefix + command} 😅+🤔`)
        if (!emoji2) return replyj(`*Contoh* : ${prefix + command} 😅+🤔`)
        let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
        for (let res of anumojimix.results) {
          let encmedia = await TsuCnn.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
            categories: res.tags
          })
        }
      }
      break
      // rpg menu
      case 'joinrpg': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isRegistered) return customsend(`${noregis}`, m.sender, '? Tsumuri')
        if (isJoin) return replyj('Gagal mendaftar ulang karena sudah mengikuti Program Gabung Rpg sebelumnya')
        let monaynya = 1000
        db.data.users[m.sender].uang += monaynya
        let anuanu = `*Successfully Joining Rpg*

*Information / Rules*
tidak boleh curang saat memainkan game, jika ada bug laporkan ke own/mod 

*Reward*
kamu mendapatkan bahan untuk memulai rpg cek di .inv`
        veri = m.sender
        if (!m.isGroup) {
          addJoinUser(m.sender)
          TsuCnn.sendMessage(m.chat, {
            text: anuanu,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: `J O I N I N G  R P G`,
                body: `Successfully ?`,
                thumbnailUrl: `${global.tamnel}`,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else {
          addJoinUser(m.sender)
          TsuCnn.sendMessage(m.chat, {
            text: anuanu,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: `J O I N I N G  R P G`,
                body: `Successfully ?`,
                thumbnailUrl: `${global.tamnel}`,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        }
      }
      break
      case 'mining':
      case 'mine': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (isCekDarah < 1) return replyj(`Kamu Harus Tidur , Kamu Lelah *${prefix}tidur* Jika Kamu Mempunyai Rumah, Atau *${prefix}heal* Jika Kamu Mempunyai Potion`)
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (isCekBar < 1) return replyj(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *${prefix}cook* / *${prefix}makan*`)
        kurangBar(m.sender, 80)
        try {
          let besi = [1, 2, 5, 0, 3, 0, 1, 1, 4, 1, 5, 0, 0]
          let emas = [0, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 2]
          let emerald = [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1]
          let batu = [10, 11, 15, 18, 5, 8, 1]
          var batunya = batu[Math.floor(Math.random() * batu.length)]
          var besinya = besi[Math.floor(Math.random() * besi.length)]
          var emasnya = emas[Math.floor(Math.random() * emas.length)]
          var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
          replyj(`${m.sender.split("@")[0]} Started Mining??`)
          await delay(10000)
          replyj(`乂 *M I N I N G  R E S U L T*
Batu: ${batunya}
Emerald: ${emeraldnya}
Besi: ${besinya}
Emas: ${emasnya}`)
          await delay(1500)
          kurangDarah(m.sender, 10)
          addBesi(m.sender, besinya)
          addEmas(m.sender, emasnya)
          addEmerald(m.sender, emeraldnya)
          addBatu(m.sender, batunya)
        } catch (err) {
          replyj(`Mungkin Dilain Waktu Saja`)
          console.error(err)
        }
      }
      break
      case 'petualang':
      case 'adventure': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        let user = global.db.data.users[m.sender];
        let __timers = new Date() - (user.lastadventure || 0);
        let _timers = 86400000 - __timers; // 24 hours in milliseconds
        let timers = clockString(_timers);
        if (new Date() - user.lastadventure < 86400000) {
          return replyj(`Anda sudah berpetualang hari ini. Silakan coba lagi setelah *${timers}*.`);
        }
        let _health = `${Math.floor(Math.random() * 101)}`.trim();
        let health = (_health * 1);
        let uang = `${Math.floor(Math.random() * 200)}`.trim();
        let prefixotion = ['1', '2', '3', '4', '4', '2'];
        let potion = prefixotion[Math.floor(Math.random() * prefixotion.length)];
        let _sampah = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
        let sampah = _sampah[Math.floor(Math.random() * _sampah.length)];
        let _diamond = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let diamond = _diamond[Math.floor(Math.random() * _diamond.length)];
        let _uncommon = ['1', '2', '1', '2', '3', '5', '4'];
        let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)];
        let _mythic = `${pickRandom(['1', '3', '1', '1', '2', '3', '2'])}`;
        let mythic = (_mythic * 1);
        let _legendary = `${pickRandom(['1', '3', '1', '1', '2', '2', '1'])}`;
        let legendary = (_legendary * 1);
        let itemrand = [`*Selamat anda mendapatkan item rare yaitu*\n${mythic} Mythic Crate`, `*Selamat kamu mendapatkan item rare yaitu*\n${legendary} Legendary Crate`];
        let rendem = itemrand[Math.floor(Math.random() * itemrand.length)];
        let ages = 'https://telegra.ph/file/ea469189ccc6705a144bc.jpg';
        let location = pickRandom(['Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German', 'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Zimbabwe', 'Bulan', 'Pluto', 'Matahari', 'Hatinya dia']);
        let str = `Sedang dalam proses petualangan menuju *${location}*...`;
        setTimeout(() => {
          replyj(str)
        }, 1000);
        setTimeout(() => {
          let result = `
乂 *P E T U A L A N G A N*
kamu sudah berhenti berpetualang, lokasi terakhir di ${location}\n                             
*Uang:* ${uang}
*Sampah:* ${sampah}${potion == 0 ? '' : '\n? *Potion:* ' + potion}${diamond == 0 ? '' : '\n? *Diamond:* ' + diamond} ${uncommon == 0 ? '' : '\n? *Uncommon Crate:* ' + uncommon}`;
          TsuCnn.sendMessage(m.chat, {
            text: result,
            contextInfo: {
              externalAdReply: {
                title: 'Tsumuri - R P G',
                body: 'powered by tsumuri',
                thumbnailUrl: `${global.tamnel}`,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: m
          });
        }, 3000);
        setTimeout(() => {
          replyj(rendem)
        }, 4000);
        kurangDarah(m.sender, health)
        db.data.users[m.sender].uang += uang
        addPotion(m.sender, potion)
        addEmerald(m.sender, diamond)
        addCU(m.sender, uncommon)
        addCM(m.sender, mythic)
        addCL(m.sender, legendary)
        global.db.data.users[m.sender].lastadventure = new Date();
      }
      break
      case 'inventori':
      case 'inventory':
      case 'inv':
      case 'profile':
      case 'invent': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        try {
          let user = global.db.data.users[m.sender]
          let teks = `乂 *S T A T S*\n`
          teks += `[ ⚡︎ ] Your Blood : ${getDarah(m.sender)}\n`
          teks += `[ ⚡︎ ] Your uang : Rp. ${toRupiah(uangnya)}\n`
          teks += `[ ⚡︎ ] Your Level : Rp. ${user.level}\n`
          teks += `[ ⚡︎ ] Your Role : Rp. ${user.role}\n`
          teks += `[ ⚡︎ ] Your limit : ${limitnya}\n`
          teks += `[ ⚡︎ ] Your Iron : ${getBesi(m.sender)}\n`
          teks += `[ ⚡︎ ] Your Gold : ${getEmas(m.sender)}\n`
          teks += `[ ⚡︎ ] Your Emerald : ${getEmerald(m.sender)}\n`
          teks += `[ ⚡︎ ] Your Potion : ${getPotion(m.sender)}\n\n` 
          teks += `乂 *H U N T I N G*\n`
          teks += `[ ⚡︎ ] Fish : ${getIkan(m.sender)}\n`
          teks += `[ ⚡︎ ] Chicken : ${getAyam(m.sender)}\n`
          teks += `[ ⚡︎ ] Rabbit : ${getKelinci(m.sender)}\n`
          teks += `[ ⚡︎ ] Sheep : ${getDomba(m.sender)}\n`
          teks += `[ ⚡︎ ] Cow : ${getSapi(m.sender)}\n`
          teks += `[ ⚡︎ ] Elephant : ${getGajah(m.sender)}\n\n`
          teks += `乂 *K A R U N G*\n`
          teks += `[ ⚡︎ ] Botol : ${getBotol(m.sender)}\n`
          teks += `[ ⚡︎ ] Kardus : ${getKardus(m.sender)}\n`
          teks += `[ ⚡︎ ] Kaleng : ${getKaleng(m.sender)}\n\n`
          teks += `乂 *E A T - S T O R A G E*\n`
          teks += `[ ⚡︎ ] Bar Kelaparan Kamu : ${getBar(m.sender)}%\n`
          teks += `[ ⚡︎ ] Sate : ${getSate(m.sender)}\n`
          teks += `[ ⚡︎ ] Ikan Goreng : ${getGoreng(m.sender)}\n`
          teks += `[ ⚡︎ ] Sop Sap i: ${getSop(m.sender)}\n`
          teks += `[ ⚡︎ ] Steak : ${getSteak(m.sender)}\n\n`
          teks += `乂 *F A C I L I T Y*\n`
          teks += `[ ⚡︎ ] Rumah : ${getRumah(m.sender)}\n`
          teks += `[ ⚡︎ ] Warung : ${getWarung(m.sender)}\n`
          teks += `[ ⚡︎ ] Pertanian : ${getPertanian(m.sender)}\n\n`
          teks += `乂 *B U I L D - I T E M*\n`
          teks += `[ ⚡︎ ] Kayu : ${getKayu(m.sender)}\n`
          teks += `[ ⚡︎ ] Batu : ${getBatu(m.sender)}\n`
          teks += `[ ⚡︎ ] Semen : ${getSemen(m.sender)} Karung\n`
          teks += `[ ⚡︎ ] Pasir : ${getPasir(m.sender)} Karung\n\n`
          teks += `乂 *P E T*\n`
          teks += `[ ⚡︎ ] Kucing : ${getKucing(m.sender)}\n`
          teks += `[ ⚡︎ ] Anjing : ${getAnjing(m.sender)}\n`
          teks += `[ ⚡︎ ] Naga : ${getNaga(m.sender)}\n`
          teks += `[ ⚡︎ ] Kyubi : ${getKyubi(m.sender)}\n\n`
          teks += `乂 *C R E A T E*\n`
          teks += `[ ⚡︎ ] Legendary : ${getCL(m.sender)}\n`
          teks += `[ ⚡︎ ] Mythic : ${getCM(m.sender)}\n`
          teks += `[ ⚡︎ ] Uncommon : ${getCU(m.sender)}\n\n  `
          teks += `乂 *R A N D O M - I T E M*\n`
          teks += `[ ⚡︎ ] Sword : ${getSword(m.sender)}\n`
          teks += `[ ⚡︎ ] Armor : ${getArmor(m.sender)}\n`
          teks += `[ ⚡︎ ] Key/Gacha : ${getKey(m.sender)}\n\n`
          TsuCnn.sendMessage(m.chat, {
            text: teks,
            mentions: [m.sender],
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: 'Rpg Inventory',
                renderLargerThumbnail: true,
                sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`,
                mediaType: 1
              }
            }
          }, {
            quoted: kalgan2
          })
        } catch (err) {
          replyerr(`Mungkin Dilain Waktu Saja`)
        }
      }
      break
      case 'kandang': {
        if (!m.isGroup) return replyerr(mess.group)
        let user = global.db.data.users[m.sender]
        replyj(`乂 *K A N D A N G*
 ? Ikan: ${user.ikan || 0} Ekor
 ? Ayam: ${user.ayam || 0} Ekor
 ? Kelinci: ${user.kelinci || 0} Ekor
 ? Domba: ${user.domba || 0} Ekor
 ? Sapi: ${user.sapi || 0} Ekor
 ? Gajah: ${user.gajah || 0} Ekor`)
      }
      break
      case 'mulung': {
        if (!m.isGroup) return replyerr(mess.group)
        const timeout = 1800000

        function msToTime(duration) {
          var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
          hours = (hours < 10) ? "0" + hours : hours
          minutes = (minutes < 10) ? "0" + minutes : minutes
          seconds = (seconds < 10) ? "0" + seconds : seconds
          return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
        }
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        let time = global.db.data.users[m.sender].lastmulung + 10800000
        if (new Date - global.db.data.users[m.sender].lastmulung < 10800000) return replyj(`Kamu Sudah Lelah\nTunggu Selama ${msToTime(time - new Date())} Lagi`)
        replyj(`Sebentar... sedang memulung`)
        await delay(15000)
        var botolnye = Math.ceil(Math.random() * 800)
        var kardusnye = Math.ceil(Math.random() * 700)
        var kalengnye = Math.ceil(Math.random() * 500)
        addBotol(m.sender, botolnye)
        addKardus(m.sender, kardusnye)
        addKaleng(m.sender, kalengnye)
        global.db.data.users[m.sender].lastmulung = new Date * 1
        replyj(`乂 *M U L U N G  R E S U L T*
+${getBotol(m.sender)} Botol
+${getKaleng(m.sender)} Kaleng
+${getKardus(m.sender)} Kardus`)
        setTimeout(() => {
          m.reply(`Yuk Waktunya Mulung Lagi…`, )
        }, timeout)
      }
      break
      case 'sell':
      case 'jual': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!q) return replyj(`*Contoh* : ${prefix + command} fish/chicken/rabbit/sheep/cow/elephant/iron/gold/emerald/botol/kardus/kaleng`)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        try {
          let users = global.db.data.users[m.sender]
          var anu3 = args[1]
          if (args[0] === 'fish') {
            if (isIkan < anu3) return replyj(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} fish 2\n 1 Fish = 1500 uang`)
            kurangIkan(m.sender, anu3)
            let monaynya = 1500 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Ikanmu* : ${getIkan(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'limit') {
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} limit 200\n 100 limit = 5000 uang`)
            users[m.sender].limit -= anu3;
            let monaynya = 5000 * anu3
            db.data.users[m.sender].uang += monaynya
            replyj(`Berhasil menjual Limit, Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else
          if (args[0] === 'botol') {
            if (isBotol < anu3) return replyj(`Anda Tidak Memiliki Cukup Botol Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} botol 2\n 1 botol = 1000 uang`)
            kurangBotol(m.sender, anu3)
            let monaynya = 1000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Botol Mu* : ${getBotol(m.sender)}`)
            }, 2000)
          } else if (args[0] === 'kardus') {
            if (isKardus < anu3) return replyj(`Anda Tidak Memiliki Cukup Kardus Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} Kardus 2\n 1 botol = 1000 uang`)
            kurangKardus(m.sender, anu3)
            let monaynya = 1000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Kardus Mu* : ${getBotol(m.sender)}`)
            }, 2000)
          } else if (args[0] === 'kaleng') {
            if (isKaleng < anu3) return replyj(`Anda Tidak Memiliki Cukup Kaleng Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} kaleng 2\n 1 botol = 1000 uang`)
            kurangKaleng(m.sender, anu3)
            let monaynya = 1000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Kaleng Mu* : ${getBotol(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'chicken') {
            if (isAyam < anu3) return replyj(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} chicken 2\n 1 Chicken = 2500 uang`)
            kurangAyam(m.sender, anu3)
            let monaynya = 2500 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Ayammu* : ${getAyam(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'rabbit') {
            if (isKelinci < anu3) return replyj(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 uang`)
            kurangKelinci(m.sender, anu3)
            let monaynya = 3000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Kelincimu* : ${getKelinci(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'sheep') {
            if (isDomba < anu3) return replyj(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} domba 2\n 1 Sheep = 5000 uang`)
            kurangDomba(m.sender, anu3)
            let monaynya = 5000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Dombamu* : ${getDomba(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'cow') {
            if (isSapi < anu3) return replyj(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} cow 2\n 1 Cow = 10000 uang`)
            kurangSapi(m.sender, anu3)
            let monaynya = 10000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Sapimu* : ${getSapi(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'elephant') {
            if (isGajah < anu3) return replyj(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} elephant 2\n 1 Elephant = 15000 uang`)
            kurangGajah(m.sender, anu3)
            let monaynya = 15000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Gajahmu* : ${getGajah(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'iron') {
            if (isBesi < anu3) return replyj(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} iron 2\n 1 Iron = 16000 uang`)
            kurangBesi(m.sender, anu3)
            let monaynya = 16000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Besimu* : ${getBesi(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'gold') {
            if (isEmas < anu3) return replyj(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} gold 2\n 1 Gold = 50000 uang`)
            kurangEmas(m.sender, anu3)
            let monaynya = 50000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Emasmu* : ${getEmas(m.sender)}`)
            }, 2000)
          } else
          if (args[0] === 'emerald') {
            if (isEmerald < anu3) return replyj(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
            if (!args[1]) return replyj(`*Contoh* : ${prefix + command} emerald 2\n 1 Emerald = 100000 uang`)
            kurangEmerald(m.sender, anu3)
            let monaynya = 100000 * anu3
            db.data.users[m.sender].uang += monaynya
            setTimeout(() => {
              replyj(`Transaksi Sukses\n*Uangmu* : Rp. ${toRupiah(uangnya)}\n*Sisa Zamrudmu* : ${getEmerald(m.sender)}`)
            }, 2000)
          } else {
            replyj("Format Salah")
          }
        } catch (err) {
          replyj(err)
        }
      }
      break
      case 'heal': {
        if (!m.isGroup) return replyerr(mess.group)
        if (isCekDarah > 100) return replyj('Darahmu Penuh')
        if (isPotion < 1) return replyj(`Anda Tidak Punya Potion, Coba Beli Dengan Cara Ini ${prefix}shop buy potion jumlah`)
        try {
          addDarah(m.sender, 100)
          kurangPotion(m.sender, 1)
          replyj(`Sukses`)
        } catch (err) {
          replyj(mess.error)
        }
      }
      break
      /* 'tidur': {
      if (!m.isGroup) return replyerr(mess.group)
      if (isCekDarah > 100) return replyj('Darahmu Penuh')
      if (isRumah < 1) return replyj(`Kamu belum memiliki rumah untuk tidur`) 
      let user = global.db.data.users[m.sender];
          let __timers = new Date() - (user.lasttidur || 0);
          let _timers = 28800000 - __timers; // 8 hours in milliseconds
          let timers = clockString(_timers);

          if (new Date() - user.lasttidur < 28800000) {
              return replyj(`Anda sudah tidur hari ini. Silakan coba lagi setelah *${timers}*.`);
          }
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      let users = global.db.data.users;
      async function routine(m) {
        try {
          let sender = m.sender;
          if (users[sender].darah < 100) {
            m.reply('Selamat tidur 😴');
            await sleep(300000);
            users[sender].darah = Math.min(users[sender].darah + 25, 100);
            if (users[sender].darah >= 100) {
              m.reply('Kamu sudah bangun dari tidur 🥱');
              clearInterval(interval);
              .lasttidur = new Date();
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
      const fourHours = 4 * 60 * 60 * 1000;
      let interval = setInterval(routine, 300000);
      setTimeout(() => {
        clearInterval(interval);
        Object.values(users).forEach(user => {
          if (user.darah < 100) {
            m.reply('Kamu sudah bangun dari tidur 🥱');
            .lasttidur = new Date();
          }
        });
      }, fourHours);
      const issend = [sender].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      if (budy.toLowerCase() == "hai") {
        if (!issend) return;
        clearInterval(interval)
        m.reply(`Kamu Telah berhenti tidur`)
      } else if (body.toLowerCase() != "hai" && issend) {
        clearInterval(interval)
        m.reply(`Kamu Telah berhenti tidur`)
        }
      }
      */
      case 'tidur':
        replyerr(`Untuk saat ini kamu tidak bisa mengakses fitur ini`)
        break
      case 'hunt':
      case 'hunting':
      case 'berburu':
      case 'memburu': {
        if (!m.isGroup) return replyerr(mess.group)
        if (isCekDarah < 1) return replyj(`Darahmu Habis, Coba Sembuhkan Menggunakan Option, Atau *${prefix}tidur* Jika Kamu Mempunyai Rumah`)
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (isCekBar < 1) return replyj(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.
${prefix}cook* / *${prefix}makan*`)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        let luka = ["Ditusuk Duri Saat Berburu", "Tergelincir ke dalam jurang saat berburu", "Digaruk oleh binatang buas", "Kurang teliti", "Terjerat akar", "Jatuh saat berburu"]
        let location = ["Jungle", "Amazon forest", "Tropical forest", "Meadow", "African forest", "Mountains"]
        var ikanmu = Math.ceil(Math.random() * 10)
        var ayam = Math.ceil(Math.random() * 8)
        var kelinci = Math.ceil(Math.random() * 7)
        var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
        var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
        var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
        var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
        var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
        var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
        var lukanya = luka[Math.floor(Math.random() * luka.length)]
        var lokasinya = location[Math.floor(Math.random() * location.length)]
        await delay(15000)
        let teks = `乂 *H U N T  R E S U L T*\n`
        teks += `- *Fish* : ${ikanmu}\n`
        teks += `- *Chicken* : ${ayam}\n`
        teks += `- *Rabbit* : ${kelinci}\n`
        teks += `- *Sheep* : ${domba}\n`
        teks += `- *Cow* : ${sapi}\n`
        teks += `- *Elephant* : ${gajah}\n\n`
        teks += `乂 *I N F O R M A T I O N*\n`
        teks += `- *Location* : ${lokasinya}\n`
        teks += `- *Wounded* : ${lukanya}, blood - 10\n`
        teks += `- *Health* : ${getDarah(m.sender)}\n`
        replyj(teks)
        await delay(15000)
        TsuCnn.sendMessage(m.chat, {
          text: `Lokasi Terakhir Kamu @${m.sender.split('@')[0]} Di ${lokasinya}`,
          mentions: [m.sender]
        }, {
          quoted: m
        })
        global.db.data.users[m.sender].ikan += ikanmu
        addAyam(m.sender, ayam)
        addKelinci(m.sender, kelinci)
        kurangBar(m.sender, 90)
        addDomba(m.sender, domba)
        addSapi(m.sender, sapi)
        addGajah(m.sender, gajah)
        kurangDarah(m.sender, 10)
      }
      break
      case 'spin': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (!text) return replyj(`*Contoh* : ${command} 1/NaN`)
        let betAmount = parseInt(text)
        if (uangnya < betAmount) return replyj(`Uang Kamu Tidak Cukup Untuk Melakukan Spin`)
        let result = Math.random() >= 0.5
        let wonAmount = result ? Math.ceil(betAmount * 1.31919) : -betAmount
        db.data.users[m.sender].uang += wonAmount
        db.data.users[m.sender].uang -= betAmount
        let caption = `?  S P I N  -  R E S U L T\n\n`
        caption += `- ${betAmount.toLocaleString()}\n`
        caption += result ? `+ ${wonAmount.toLocaleString()}\n\n` : `\n\n`
        caption += `? Total : Rp. ${toRupiah(uangnya)} Uang`
        replyj(caption)
      }
      break
      case 'bertarung':
      case 'petarung': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        let opponent = m.mentionedJid[0];
        if (!opponent) return replyj(`*Contoh*: ${command} @user`)
        let betAmount = Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000
        if (uangnya < betAmount) return replyj('Uang Anda tidak mencukupi')
        replyj('Mempersiapkan arena...')
        setTimeout(() => {
          replyj('Mendapatkan arena...')
          setTimeout(() => {
            replyj('Bertarung...')
            setTimeout(() => {
              let result = Math.random() >= 0.5
              let wonAmount = result ? betAmount : -betAmount
              db.data.users[m.sender].uang += wonAmount
              db.data.users[opponent].uang -= wonAmount
              let caption = `*Hasil pertempuran:*\n\n`
              caption += `Anda Vs @${opponent.split('@')[0]}\n\n`
              if (result) {
                caption += `Anda menang! +${betAmount}\n`
                caption += `Uang Anda saat ini: Rp. ${toRupiah(uangnya)}\n`
                TsuCnn.sendMessage(m.chat, {
                  image: {
                    url: `https://telegra.ph/file/c8ea156b03131ed613b54.jpg`
                  },
                  caption: caption
                })
              } else {
                caption += `Anda kalah! -${betAmount}\n`
                caption += `Uang Anda saat ini: Rp. ${toRupiah(uangnya)}\n`
                TsuCnn.sendMessage(m.chat, {
                  image: {
                    url: `https://telegra.ph/file/5e043d7cd784d2bfa5b67.jpg`
                  },
                  caption: caption,
                  mentions: [opponent]
                })
              }
              setTimeout(() => {
                replyj(`Anda dapat bertarung lagi setelah 5 detik`)
              }, 5000)
            }, 2000)
          }, 2000)
        }, 2000)
      }
      break
      case 'merampok':
      case 'rampok': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        let user = global.db.data.users[m.sender]
        let __timers = new Date() - (user.lastrampok || 0);
        let _timers = 86400000 - __timers; // 24 hours in milliseconds
        let timers = clockString(_timers);
        if (new Date() - user.lastrampok < 86400000) {
          return replyj(`Anda sudah Merampok hari ini. Silakan coba lagi setelah *${timers}*.`);
        }
        let uangnye = (Math.floor(Math.random() * 100000))
        let opponent = m.mentionedJid[0];
        if (!opponent) return replyj(`Mau rampok siapa? coba tag`)
        let rampokimage = 'https://telegra.ph/file/a72a735a8c53507fb9b1f.jpg'
        let rampok = `乂 *R A M P O K*
Uang : ${uangnye}
Terampok : ${TsuCnn.getName(opponent)}
Perampok : ${TsuCnn.getName(m.sender)}`
        let mm = `> *Kamu Mengalami Musibah Hari Ini!*
Dirampok Oleh *${TsuCnn.getName(m.sender)}*, Uang Terambil ${uangnye}`
        TsuCnn.sendMessage(opponent, {
          image: {
            url: rampokimage
          },
          caption: mm
        })
        TsuCnn.sendMessage(m.chat, {
          image: {
            url: rampokimage
          },
          caption: rampok
        })
        db.data.users[opponent].uang -= uangnye
        db.data.users[m.sender].uang += uangnye
        global.db.data.users[m.sender].lastrampok = new Date()
      }
      break
      case 'gacha': {
        if (!m.isGroup) return replyerr(mess.group)
        let ofsi = args[0]
        if (!text) return replyj(`Masukan Berapa Key Yang Ingin Digunakan, *Contoh :* .gacha 5`)
        if (ofsi === 0) return replyj(`Hemmm`)
        if (isKey < ofsi) return replyj(`Your Key is Insufficient!`)
        let h1 = Math.random() >= 1000.50
        let hh1 = h1 ? Math.ceil(Math.random() * 100.5) : -h1
        let h2 = Math.random() >= 15.2
        let hh2 = h2 ? Math.ceil(Math.random() * 8) : -h2
        let h3 = Math.random() >= 1000.5
        let hh3 = h3 ? Math.ceil(Math.random() * 10) : -h3
        let uangnye = Math.ceil(Math.random() * 9000)
        kurangKey(m.sender, ofsi)
        for (let i of ofsi) {
          let caption = `乂 *G A C H A  R E S U L T*
╭ uang: ${uangnye}
│ ${h1 ? `Limit: ${hh1}` : `Limit: Tidak Mendapatkan`}
│ ${h2 ? `Mythic: ${hh2}` : `MythicCreate: Tidak Mendapatkan`}
╰  ${h3 ? `Uncommon: ${hh3}` : `Uncommon: Tidak Mendapatkan`}`
          replyj(caption)
        }
      }
      break
      case 'openbo': {
        let booking = ["Darwin", "ridan", "Darwin", "fauzan", "Darwin", "faisal", "fajar", "arif", "adit"]
        var booking1 = booking[Math.floor(Math.random() * booking.length)]
        let tempat = ["Oyo", "Rumah", "Kosan"]
        var tempat1 = tempat[Math.floor(Math.random() * tempat.length)]
        if (isCekDarah < 1) return replyj(`Kamu Kelelahan..`)
        let {
          key
        } = await TsuCnn.sendMessage(m.chat, {
          text: 'Mencari Pelanggan.!'
        })
        let NgeText = `乂 *O P E N B O - R E S U L T*

Uang : Rp. ${toRupiah(uangnya)}
Lokasi : ${tempat1}
Pelanggan : ${booking1}`
        await delay(900)
        TsuCnn.sendMessage(m.chat, {
          text: `Mendapatkan Pelanggan Bernama ${booking1}`,
          edit: key
        })
        await delay(1000)
        TsuCnn.sendMessage(m.chat, {
          text: `Tempat Di ${tempat1}`,
          edit: key
        })
        await delay(1000)
        TsuCnn.sendMessage(m.chat, {
          text: 'Memulai.!',
          edit: key
        })
        await delay(900)
        TsuCnn.sendMessage(m.chat, {
          text: 'Ah Ah Ah Iyahh',
          edit: key
        })
        await delay(900)
        TsuCnn.sendMessage(m.chat, {
          text: 'Ah AHHH Ah !! Ah Crot ?',
          edit: key
        })
        await delay(900)
        TsuCnn.sendMessage(m.chat, {
          image: {
            url: 'https://telegra.ph/file/4b3e7586641fbf8ac6388.jpg'
          },
          caption: NgeText
        })
        global.db.data.users[m.sender].uang += 200
      }
      break
      case 'ngewe': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        let uangnye = Math.ceil(Math.random() * 3000)
        let anjayy = Math.ceil(Math.random() * 80)
        let exp = Math.ceil(Math.random() * 50)
        let {
          key
        } = await TsuCnn.sendMessage(m.chat, {
          text: 'Ahhhh AhHYahh! ?'
        }, {
          quoted: m
        })
        let NgeText = `乂 *N G E W - R E S U L T*
- uang: ${uangnye}
- Stamina: ${anjayy}
- Exp: ${exp}`
        await delay(900)
        TsuCnn.sendMessage(m.chat, {
          text: NgeText,
          edit: key
        }, {
          quoted: m
        })
        db.data.users[m.sender].uang += uangnye
        addDarah(m.sender, anjayy)
        addBar(m.sender, anjayy)
        db.data.users[m.sender].exp += exp
      }
      break
      case 'dungeon': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (isSword < 1) return replyj(`Kamu Tidak Memiliki Pedang, Beli Lah Pedang Di Toko *.shop buy sword*`)
        if (isArmor < 1) return replyj(`Kamu Tidak Memiliki Armor , Beli Lah Armor Di Toko *.shop buy armor*`)
        let dungeonimg = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
        let rare = Math.random() >= 3.2
        let raree = rare ? Math.ceil(Math.random() * 2) : -rare
        var uangnye = Math.ceil(Math.random() * 1000)
        var diamondnye = Math.ceil(Math.random() * 20)
        var darahkurang = Math.ceil(Math.random() * 50)
        var ironnye = Math.ceil(Math.random() * 20)
        let result = Math.random() >= 10.5 //BIAR ADA KALAH ADA MENANGNYA AOWKWOK
        TsuCnn.sendMessage(m.chat, {
          text: 'Sedang Memasuki Dungeon..',
          contextInfo: {
            externalAdReply: {
              title: global.namabotnya,
              body: 'Tsumuri Project',
              thumbnailUrl: dungeonimg,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        })
        await delay(2000)
        if (result) {
          let caption = `*Ada Monster Yang Menyerang Kamu Tetapi Kamu Menang!!*

*Monster:* ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
乂 *D U N G E O N  R E S U L T*
Wow Keren, Kamu Menang..!!!
─╼━━━━━━━━━━━━╾─
╭ *Uang :* ${uangnye}
│ *Diamond :* ${diamondnye}
│ *Iron :* ${Ironnye}
│ *Health :* - ${darahkurang}
╰ *Rare :* ${raree ? 'Mythic Create' : 'Gak Dapet'}`
          replyj(caption)
          db.data.users[m.sender].uang += uangnye
          addDiamond(m.sender, diamondnye)
          addIron(m.sender, ironnye)
          addCM(m.sender, raree)
          kurangDarah(m.sender, darahkurang)
        } else {
          let caption = `
乂 *D U N G E O N  R E S U L T*
Kamu Mati, Hahahaha Cupu!!

╭ *Monster:* Mati Gara Gara ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
╰ Darah Berkurang: ${darahkurang}`
          replyj(caption)
          kurangDarah(m.sender, darahkurang)
        }
      }
      break
      case 'ojek':
      case 'ngojek': {
        if (!m.isGroup) return replyerr(mess.group)
        let pl = pickRandom(["Ari", "Ridan", "Zeni", "Darwin", "Dicky", "Eni", "Ani", "Atta", "Endong", "Bagus", "Mala"])
        let lm = pickRandom(["Jl. Sikodir/Rw.03,Rt.55", "Jl. BibengBobo/Rw.08,Rt.02", "Jl. BasoEmam/Rw.05,Rt.01", "Jl. UciXyZ/Rw.08,Rt.10", "Jl. KartiniBawen/Rw.14,Rt.01"])
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '🚕',
            key: m.key,
          }
        });
        await delay(1000)
        TsuCnn.sendMessage(m.chat, {
          react: {
            text: '?',
            key: m.key,
          }
        });
        replyj(`
乂 *R E S U L T  N G O J E K*

- Mendapatkan Uang Rp. ${toRupiah(uangnya)}
- Nama Pelanggan ${pl}
- Alamat Tujuan ${lm}
`)
      }
      break
      case 'mancing': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (isCekBar < 1) return replyj(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
        kurangBar(m.sender, 90)
        let mancing = ["Sungai??", "Rawa?", "Laut?"]
        var mancing1 = mancing[Math.floor(Math.random() * mancing.length)]
        let mampus = ["Digigit Ular??", "Tercakar Buaya?", "Tersandung", "Digigit Hewan Buas?", "Terpeleset Kejurang"]
        var mampus1 = mampus[Math.floor(Math.random() * mampus.length)]
        if (isCekDarah < 1) return replyj(`Darahmu Habis`)
        replyj(`Mulai Memancing... ?`)
        await delay(3000)
        var ikanmu1 = Math.ceil(Math.random() * 10)
        let monaynya = 2000 * isCmd
        db.data.users[m.sender].uang += monaynya
        kurangDarah(m.sender, 40)
        global.db.data[m.sender].ikan += ikanmu1
        let anu = `
乂 *S T R I K E   H O O K!*

- Tempat : ${mancing1}
- Terkena : ${mampus1}
- Tangkapan : ${getIkan(m.sender)}

Mancing perkoro 😹
`
        TsuCnn.sendMessage(m.chat, {
          text: anu,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `M A N C I N G - R E S U L T`,
              body: `Tsumuri Project`,
              thumbnailUrl: "https://telegra.ph/file/4d961120c79b35eab736a.jpg",
              sourceUrl: "https://youtube.com/@LUHUNGCH",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        })
      }
      break
      case 'cheat': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isCreator && !isOwner) return replycus(mess.owner, 'Access Denied', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
        let input = args[0]
        if (!input) return replyj(`乂 *C O D E   C H E A T*
${command} limit          
${command} exp
${command} uang
${command} level

Example : ${command} uang`)
        if (input === 'limit') {
          db.data.users[m.sender].limit += 1000000000000
          replyj(`Cheat activated!`)
        } else if (input === 'uang') {
          db.data.users[m.sender].uang += 1000000000000
          replyj(`Cheat activated!`)
        } else if (input === 'level') {
          db.data.users[m.sender].level += 100
          replyj(`Cheat activated!`)
        }
        if (input === 'exp') {
          db.data.users[m.sender].exp += 10000
          replyj(`Cheat activated!`)
        }
      }
      break
      case 'kerja': {
        if (!m.isGroup) return replyerr(mess.group)
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (isCekBar < 1) return replyj(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *${prefix}cook* / *.makanan*`)
        let uangnye = Math.ceil(Math.random() * 99999)
        if (!q) return replyj(`
乂 *L I S T - K E R J A*
╭ Ojek 
│ Pedagang 
│ Dokter 
│ Petani 
│ Montir 
╰ Kuli
*Example : ${command} ojek*`)
        var anu1 = args[1]
        if (args[0] === 'dokter') {
          db.data.users[m.sender].uang += uangnye
          replyj(`Kamu menyembuhkan pasien *cedera* ?
Dan mendapatkan uang senilai *Rp. ${toRupiah(uangnya)}* ?`)
        } else if (args[0] === 'ojek') {
          db.data.users[m.sender].uang += uangnye
          kurangBar(m.sender, 50)
          replyj(`
Kamu Mendapatkan Pelanggan ?, Dan Mengantarkan *Pelanggan* Ke Tempat *Tujuan ?* Dibayar *Rp. ${toRupiah(uangnya)}*`)
        } else if (args[0] === 'pedagang') {
          let jualan = ["Sayuran?", "Makanan?", "Minuman?"]
          let jualannye = jualan[Math.floor(Math.random() * jualan.length)]
          kurangBar(m.sender, 60)
          db.data.users[m.sender].uang += uangnye
          replyj(`
Kamu Menjual *${jualannye}* Dan Mendapatkan 1 *Pembeli* , Hasil *Rp. ${toRupiah(uangnya)}*`)
        } else if (args[0] === 'petani') {
          db.data.users[m.sender].uang += uangnye
          kurangBar(m.sender, 80)
          let buahan = ["Apel ?", "Stroberi ?", "Mangga ?", "Semangka ?", "Jeruk ?", "Melon ?"]
          let buahannye = buahan[Math.floor(Math.random() * buahan.length)]
          replyj(`
Kebun ${buahannye} Siap Untuk *Dipanen* ,Menjual Hasil Buah ${buahannye} Kek Pembeli Mendapatkan Uang *Rp. ${toRupiah(uangnya)}*`)
        } else if (args[0] === 'montir') {
          let kenapa = ["Ganti Oli", "Ban Bocor", "Motor Kebelah 2", "Ganti Lampu", "Rem Blong"]
          kurangBar(m.sender, 60)
          let kenapatuh = kenapa[Math.floor(Math.random() * kenapa.length)]
          db.data.users[m.sender].uang += uangnye
          replyj(`Pembeli ${kenapatuh} , Mulai Memperbaiki/Mengerjakan Dan Mendapatkan Uang *Rp. ${toRupiah(uangnya)}*`)
        } else if (args[0] === 'kuli') {
          db.data.users[m.sender].uang += uangnye
          replyj(`Memperbaiki Rumah ??, Dan Mendapatkan Uang *Rp. ${toRupiah(uangnya)}*`)
        }
      }
      break
      case 'pet': {
        replyj(`乂 *P E T  - Y O U*

Kucing : ${getKucing(m.sender)}
Anjing : ${getAnjing(m.sender)}
Naga : ${getNaga(m.sender)}
Kyubi : ${getKyubi(m.sender)}`)
      }
      break
      case 'shop':
      case 'toko': {
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender)
        }
        if (!isInvMakanan) {
          addInvMakanan(m.sender)
        }
        if (!isInvBahan) {
          addInvBahan(m.sender)
        }
        if (!isInvBuah) {
          addInvBuah(m.sender)
        }
        if (!isInvBuild) {
          addInvBuild(m.sender)
        }
        if (!isBar) {
          addInvBar(m.sender, BarAwal)
        }
        if (!args[0]) {
          replyj(`乂 *R P G  -  S H O P*

> Potion $1000
> Kayu $1000
> Batu $1000
> Pasir $4000
> Semen $8000

> Kucing $3000
> Anjing $6000
> Kyubi $99999
> Naga $5000
> fpet < Makanan Hewan > ? $1000

> uncommon $5000
> mythic $3000
> legendary $2000

> sopsapi $2000
> ikangoreng $3000
> steak $5000
> Sate $1000

> key $2000

> Sword $5000
> Armor $3000

*Ex:* .shop buy potion 5`)
        } else if (args[0] === 'buy') {
          if (args[1] === 'potion') {
            let harga = 1000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addPotion(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Potion Sebesar ${args[2]} , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'kayu') {
            let harga = 1000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addKayu(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Kayu Sebesar ${args[2]} , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'batu') {
            let harga = 1000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addBatu(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Batu Sebesar ${args[2]} , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'kucing') {
            if (isKucing > 1) return replyj(`Max Pet Kucing 1`)
            let harga = 3000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            db.data.users[m.sender].kucing += args[2]
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Pet Kucing , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'anjing') {
            if (isAnjing > 1) return replyj(`Max Pet Anjing 1`)
            let harga = 6000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            db.data.users[m.sender].anjing += args[2]
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Pet anjing , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'uncommon') {
            let harga = 5000 * args[2]
            let input = args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addCU(m.sender, input)
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Create uncommon, Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'mythic') {
            let harga = 3000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addCM(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Create Mythic, Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'legendary') {
            let harga = 2000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addCL(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Create Legendary, Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'naga') {
            if (isNaga > 1) return replyj(`Max Pet Naga 1`)
            let harga = 5000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            db.data.users[m.sender].naga += args[2]
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Pet Naga , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'kyubi') {
            if (isNaga > 1) return replyj(`Max Pet Kyubi 1`)
            let harga = 99999 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            db.data.users[m.sender].kyubi += args[2]
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Pet Kyubi , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'fpet') {
            let harga = 1000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            db.data.users[m.sender].feedpet += args[2]
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Makanan Pet , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'pasir') {
            let harga = 4000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addPasir(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Pasir Sekarung , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'semen') {
            let harga = 8000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addSemen(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Semen Sekarung , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'sate') {
            let harga = 1000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addSate(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Sate , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'ikangoreng') {
            let harga = 3000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addGoreng(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Ikan Goreng , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'steak') {
            let harga = 5000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addSteak(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Steak, Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'sopsapi') {
            let harga = 2000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addSop(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Sop Sapi , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'sword') {
            let harga = 5000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addSword(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Sword Sebesar ${args[2]} , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'armor') {
            let harga = 3000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addArmor(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Armor Sebesar ${args[2]} , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          } else if (args[1] === 'key') {
            let harga = 2000 * args[2]
            if (uangnya < harga) return replyj(`Uang Tidak Mencukupi`)
            if (isNaN(args[2])) return replyj(`Masukan Angka!`)
            if (!args[2]) return replyj(`Masukan Angka !`)
            addKey(m.sender, args[2])
            db.data.users[m.sender].uang -= harga
            replyj(`Berhasil Membeli Key Sebesar ${args[2]} , Sisa Uang Mu Rp. ${toRupiah(uangnya)}`)
          }
        }
      }
      break
      case 'gajian': {
        if (!m.isGroup) return replyerr(mess.group)

        function JaM(ms) {
          let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
          return [h].map(v => v.toString().padStart(2, 0)).join(':')
        }

        function MeNit(ms) {
          let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
          return [m].map(v => v.toString().padStart(2, 0)).join(':')
        }

        function DeTik(ms) {
          let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
          return [s].map(v => v.toString().padStart(2, 0)).join(':')
        }
        let LastClaim = global.db.data.users[m.sender].lastclaim
        let cdm = `${MeNit(new Date - LastClaim)}`
        let cds = `${DeTik(new Date - LastClaim)}`
        let cd1 = Math.ceil(44 - cdm)
        let cd2 = Math.ceil(59 - cds)
        if (new Date - global.db.data.users[m.sender].lastclaim > 2700000) {
          addMonay(m.sender, 7000)
          replyj('Nih Gaji Kamu +Rp7000')
          global.db.data.users[m.sender].lastclaim = new Date * 1
        } else return replyj(`Kamu Udah Ambil Jatah Hari Ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
      }
      break
      case 'feed': {
        let user = global.db.data.users[m.sender]
        let type = (args[0] || '').toLowerCase()
        switch (type) {
          case "kucing":
            if (user.kucing < 1) return replyj(`Kamu Tidak Mempunyai ${type}.`)
            if (user.kucing > 5) return replyj(`Level ${type} Mu Sudah Max`)
            if (user.feedpet > 0) {
              global.db.data.users[m.sender].feedpet -= 1
              global.db.data.users[m.sender].kucingexp += 20
              replyj(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
              if (user.kucing > 0) {
                let naiklvl = ((user.kucing * 1000) - 1)
                if (global.db.data.users[m.sender].kucingexp > naiklvl) {
                  global.db.data.users[m.sender].kucing += 1
                  global.db.data.users[m.sender].kucingexp -= (user.kucing * 100)
                  replyj(`Selamat Pet *${type}* Kamu Naik level.!!`)
                }
              } else return replyj(`Kamu Tidak Mempunyai Pet`)
            } else return replyj(`Kamu Tidak Mempunyai Makanan Pet`)
            break
          case "kyubi":
            if (user.kyubi == 0) return replyj(`Kamu Tidak Mempunyai ${type}.`)
            if (user.kyubi == 5) return replyj(`Level ${type} Mu Sudah Max`)
            if (user.feedpet > 0) {
              global.db.data.users[m.sender].feedpet -= 1
              global.db.data.users[m.sender].kyubiexp += 20
              replyj(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
              if (user.kyubi > 0) {
                let naiklvl = ((user.kyubi * 1000) - 1)
                if (global.db.data.users[m.sender].kyubiexp > naiklvl) {
                  global.db.data.users[m.sender].kyubi += 1
                  global.db.data.users[m.sender].kyubiexp -= (user.kyubi * 100)
                  replyj(`Selamat Pet *${type}* Kamu Naik level.!!`)
                }
              } else return replyj(`Kamu Tidak Mempunyai Pet`)
            } else return replyj(`Kamu Tidak Mempunyai Makanan Pet`)
            break
          case "naga":
            if (user.naga < 1) return replyj(`Kamu Tidak Mempunyai ${type}.`)
            if (user.naga > 5) return replyj(`Level ${type} Mu Sudah Max`)
            if (user.feedpet > 0) {
              global.db.data.users[m.sender].feedpet -= 1
              global.db.data.users[m.sender].nagaexp += 20
              replyj(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
              if (user.naga > 0) {
                let naiklvl = ((user.naga * 1000) - 1)
                if (global.db.data.users[m.sender].nagaexp > naiklvl) {
                  global.db.data.users[m.sender].naga += 1
                  global.db.data.users[m.sender].nagaexp -= (user.naga * 100)
                  replyj(`Selamat Pet *${type}* Kamu Naik level.!!`)
                }
              } else return replyj(`Kamu Tidak Mempunyai Pet`)
            } else return replyj(`Kamu Tidak Mempunyai Makanan Pet`)
            break
          case "anjing":
            if (user.anjing < 1) return replyj(`Kamu Tidak Mempunyai ${type}.`)
            if (user.anjing > 5) return replyj(`Level ${type} Mu Sudah Max`)
            if (user.feedpet > 0) {
              global.db.data.users[m.sender].feedpet -= 1
              global.db.data.users[m.sender].anjingexp += 20
              replyj(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
              if (user.anjing > 0) {
                let naiklvl = ((user.anjing * 1000) - 1)
                if (global.db.data.users[m.sender].anjingexp > naiklvl) {
                  global.db.data.users[m.sender].anjing += 1
                  global.db.data.users[m.sender].anjingexp -= (user.anjing * 100)
                  replyj(`Selamat Pet *${type}* Kamu Naik level.!!`)
                }
              } else return replyj(`Kamu Tidak Mempunyai Pet`)
            } else return replyj(`Kamu Tidak Mempunyai Makanan Pet`)
            break
          default:
            replyj(`Ex: ${command} <anjing/kucing/naga/kyubi>`)
        }
      }
      break
      case 'berkebon':
      case 'petani': {
        if (!m.isGroup) return replyerr(mess.group)

        function msToTime(duration) {
          var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
          hours = (hours < 10) ? "0" + hours : hours;
          minutes = (minutes < 10) ? "0" + minutes : minutes;
          seconds = (seconds < 10) ? "0" + seconds : seconds;
          return hours + " jam " + minutes + " menit " + seconds + " detik";
        }
        const timeout = 1800000;
        let apelu = global.db.data.users[m.sender].bibitapel;
        let angguru = global.db.data.users[m.sender].bibitanggur;
        let manggau = global.db.data.users[m.sender].bibitmangga;
        let pisangu = global.db.data.users[m.sender].bibitpisang;
        let jeruku = global.db.data.users[m.sender].bibitjeruk;
        let time = global.db.data.users[m.sender].lastberkebon + 1800000;
        if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) {
          return replyj(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${prefix}shop buy bibitmangga 500\n\n*List*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`);
        }
        if (new Date() - global.db.data.users[m.sender].lastberkebon < 1800000) {
          return replyj(`Anda sudah menanam\nMohon tunggu hasil panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`);
        }
        if (global.db.data.users[m.sender].bibitmangga > 499) {
          if (global.db.data.users[m.sender].bibitapel > 499) {
            if (global.db.data.users[m.sender].bibitpisang > 499) {
              if (global.db.data.users[m.sender].bibitjeruk > 499) {
                if (global.db.data.users[m.sender].bibitanggur > 499) {
                  let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim();
                  let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim();
                  let manggapoin = `${Math.floor(Math.random() * 500)}`.trim();
                  let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim();
                  let apelpoin = `${Math.floor(Math.random() * 500)}`.trim();
                  global.db.data.users[m.sender].pisang += pisangpoin * 1;
                  global.db.data.users[m.sender].anggur += anggurpoin * 1;
                  global.db.data.users[m.sender].mangga += manggapoin * 1;
                  global.db.data.users[m.sender].jeruk += jerukpoin * 1;
                  global.db.data.users[m.sender].apel += apelpoin * 1;
                  global.db.data.users[m.sender].bibitpisang -= 500;
                  global.db.data.users[m.sender].bibitanggur -= 500;
                  global.db.data.users[m.sender].bibitmangga -= 500;
                  global.db.data.users[m.sender].bibitjeruk -= 500;
                  global.db.data.users[m.sender].bibitapel -= 500;
                  global.db.data.users[m.sender].lastberkebon = new Date() * 1;
                  let hsl = `Selamat ${pushname}, Kamu mendapatkan : \n+${pisangpoin} Pisang\n+${manggapoin} Mangga\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${apelpoin} Apel`;
                  replyj(hsl);
                  setTimeout(() => {
                    replyj(`Waktunya Ngebon Lagi Kak!!`);
                  }, timeout);
                } else replyj(`Pastikan bibit anggur kamu *500* untuk bisa berkebon`);
              } else replyj(`Pastikan bibit jeruk kamu *500* untuk bisa berkebon`);
            } else replyj(`Pastikan bibit pisang kamu *500* untuk bisa berkebon`);
          } else replyj(`Pastikan bibit apel kamu *500* untuk bisa berkebon`);
        } else replyj(`Pastikan bibit mangga kamu *500* untuk bisa berkebon`);
      }
      break;
      case 'makan': {
        let ga = args[0]
        let ga1 = args[1]
        let user = global.db.data.users[m.sender]
        switch (ga) {
          case "ikan_goreng":
            if (!ga1) return replyj(`Berapa Yang Ingin Kamu Makan?, Contoh : .makan ${ga} 1`)
            if (user.ikang < ga1) return replyj(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
            user.bar += 50
            replyj(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
            user.ikang -= ga1
            break
          case "ayam_goreng":
            if (!ga1) return replyj(`Berapa Yang Ingin Kamu Makan?, Contoh : .makan ${ga} 1`)
            if (user.ayamg < ga1) return replyj(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
            user.bar += 80
            replyj(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
            user.ayamg -= ga1
            break
          case "sate":
            if (!ga1) return replyj(`Berapa Yang Ingin Kamu Makan?, Contoh : .makan ${ga} 1`)
            if (user.sate < ga1) return replyj(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
            user.bar += 40
            replyj(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
            user.sate -= ga1
            break
          case "mie":
            if (!ga1) return replyj(`Berapa Yang Ingin Kamu Makan?, Contoh : .makan ${ga} 1`)
            if (user.mie < ga1) return replyj(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
            user.bar += 90
            user.mie -= ga1
            replyj(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
            break
          case "sop_sapi":
            if (!ga1) return replyj(`Berapa Yang Ingin Kamu Makan?, Contoh : .makan ${ga} 1`)
            if (user.sops < ga1) return replyj(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
            user.bar += 100
            user.sops -= ga1
            replyj(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
            break
          default:
            replyj(`乂 *F O O D  I N V E N T O R Y*

- *Ikan Goreng:* ${user.ikang}
- *Ayam Goreng:* ${user.ayamg}
- *Sate:* ${user.sate}
- *Mie:* ${user.mie}
- *Sop Sapi:* ${user.sops}`)
        }
      }
      break
      case 'memasak': {
        let ga = args[0]
        let ga1 = args[1]
        let user = global.db.data.users[m.sender]
        switch (ga) {
          case "sate":
            if (!ga1) return replyj(`Berapa Ayam Yang Ingin Kamu Masak?`)
            if (user.ayam < ga1) return replyj(`Ayam Kamu Kurang`)
            user.sate += ga1
            user.ayam -= ga1
            replyj(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
            break
          case "ayam":
            if (!ga1) return replyj(`Berapa ${ga} Yang Ingin Kamu Masak?`)
            if (user.ayam < ga1) return replyj(`${ga} Kamu Kurang`)
            user.ayamg += ga1
            user.ayam -= ga1
            replyj(`Berhasil Membuat ${ga} Goreng Untuk Memakannya Silahkan Ketik .makan`)
            break
          case "ikan":
            if (!ga1) return replyj(`Berapa ${ga} Yang Ingin Kamu Masak?`)
            if (user.ikan < ga1) return replyj(`${ga} Kamu Kurang`)
            user.ikang += ga1
            user.ikan -= ga1
            replyj(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
            break
          case "sop_sapi":
            if (!ga1) return replyj(`Berapa ${ga} Yang Ingin Kamu Masak?`)
            if (user.sapi < ga1) return replyj(`Sapi Kamu Kurang`)
            user.sops += ga1
            user.sapi -= ga1
            replyj(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
            break
          case "mie":
            if (!ga1) return replyj(`Berapa ${ga} Yang Ingin Kamu Masak?`)
            if (user.miem < ga1) return replyj(`${ga} Kamu Kurang`)
            user.mie += ga1
            user.miem -= ga1
            replyj(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
            break
          default:
            replyj(`*Penggunaan:* ${command} ikan/sapi/sate/mie/sop_sapi 6`)
        }
      }
      break
      case 'membangun': {
        let ga = args[0]
        let ga1 = args[1]
        let user = global.db.data.users[m.sender]
        async function membgn(naba) {
          var membangun5 = [`${naba}mu sedang dibangun`, `Sedang Membuat pondasi`, `Sedang Membuat tembok`, `Sedang Membuat atap`, `Sedang Menata dalam`, `Penyelesaian terakhir`, `${naba} Kamu telah selesai dibangun`]
          let {
            key
          } = await TsuCnn.sendMessage(from, {
            text: 'Membangun...'
          })
          for (let i = 0; i < membangun5.length; i++) {
            await TsuCnn.sendMessage(from, {
              text: membangun5[i],
              edit: key
            });
          }
        }
        switch (ga) {
          case "rumah":
            if (isRumah > 1) return replyj(`Kamu sudah memiliki rumah`)
            if (isKayu < 100) return replyj(`Kamu tidak memiliki cukup kayu untuk membangun rumah\nYang Dibutuhkan untuk membangun\nKayu=100\nSemen=4\nBatu=50`)
            if (isSemen < 4) return replyj(`Kamu tidak memiliki cukup semen untuk membangun rumah\nYang Dibutuhkan untuk membangun\nKayu=100\nSemen=4\nBatu=50`)
            if (isBatu < 50) return replyj(`Kamu tidak memiliki cukup batu untuk membangun rumah\nYang Dibutuhkan untuk membangun\nKayu=100\nSemen=4\nBatu=50`)
            membgn(`Rumah`)
            addRumah(sender, 1)
            kurangSemen(sender, 4)
            kurangBatu(sender, 50)
            break
          case "warung":
            if (isWarung > 1) return replyj(`Kamu sudah memiliki warung`)
            if (isKayu < 100) return replyj(`Kamu tidak memiliki cukup kayu untuk membangun rumah\nYang Dibutuhkan untuk membangun\nKayu=100\nSemen=4\nBatu=50`)
            if (isSemen < 4) return replyj(`Kamu tidak memiliki cukup semen untuk membangun rumah\nYang Dibutuhkan untuk membangun\nKayu=100\nSemen=4\nBatu=50`)
            if (isBatu < 50) return replyj(`Kamu tidak memiliki cukup batu untuk membangun rumah\nYang Dibutuhkan untuk membangun\nKayu=100\nSemen=4\nBatu=50`)
            membgn(`Rumah`)
            addWarung(sender, 1)
            kurangSemen(sender, 4)
            kurangBatu(sender, 50)
            break
          default:
            replyj(`*Penggunaan:* ${prefix+command} rumah`)
        }
      }
      break
      case 'nebang': {
        if (!m.isGroup) return reply(mess.group)

        function msToTime(duration) {
          var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
          hours = (hours < 10) ? "0" + hours : hours
          minutes = (minutes < 10) ? "0" + minutes : minutes
          seconds = (seconds < 10) ? "0" + seconds : seconds
          return hours + " jam " + minutes + " menit " + seconds + " detik"
        }
        let user = global.db.users[m.sender]
        let time = user.lastparming + 1800000
        if (new Date - user.lastparming < 1800000) return replyj(`Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`)
        let wood = `${Math.floor(Math.random() * 60)}`.trim()
        let money = `${Math.floor(Math.random() * 50000)}`.trim()
        user.wood += wood * 1
        user.lastparming = new Date * 1
        replyj(`Selamat kamu mendapatkan : \n+${wood} Kayu`)
      }
      break
      //=================================================//
      default:
        if (budy.startsWith('=>')) {
          if (!isCreator) return false

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return reply(bang)
          }
          try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
          } catch (e) {
            console.log(e)
            replyerr(String(e))
          }
        }
        if (budy.startsWith('>>')) {
          if (!isCreator) return false
          try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
          } catch (err) {
            console.log(err)
            await replyerr(String(err))
          }
        }
        if (budy.startsWith('==>')) {
          if (!isCreator) return false
          try {
            let evaled = await eval(budy.slice(1))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await TsuCnn.sendMessage(m.chat, {text:evaled})
          } catch (err) {
            console.log(err)
            await TsuCnn.sendMessage(m.chat, {text:String(err)})
          }
        }
        if (budy.startsWith('$')) {
          if (!isCreator) return false
          exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(err)
            if (stdout) return reply(stdout)
          })
        }
        //=================================================//
        if (isCmd && budy.toLowerCase() != undefined) {
          if (from.endsWith('broadcast')) return
          if (m.isBaileys) return
          if (budy.startsWith('tinjau')) {
            if (!text) return m.reply(`*Contoh* : ${prefix+command} Teks tinjauan kamu`)
            TsuCnn.sendMessage(`${ownerno1}@s.whatsapp.net`, {
              text: `Tinjauan dari ${m.sender.split('@')[0]}\nPesan: *${text}*`
            })
            m.reply(`Tinjauan berhasil dikirim, tunggu sampai owner mengontak kamu.`)
          }
          let msgs = global.db.data.database
          if (!(budy.toLowerCase() in msgs)) return
          TsuCnn.copyNForward(from, msgs[budy.toLowerCase()], true)
        }
    }
  } else {
  replyban(mess.ban)
  }
  } catch (err) {
    console.log(util.format(err))
  }
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})