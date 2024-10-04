require("./setting");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  getAggregateVotesInPollMessage,
  proto
} = require("@whiskeysockets/baileys");
const fs2 = require("fs");
const { draw, drawAsString } = require('terminal-img')
const pino = require("pino");
const canvafy = require ('canvafy');
const chalk = require("chalk");
const path = require("path");
const axios = require("axios");
const FileType = require("file-type");
const readline = require("readline");
const yargs = require("yargs/yargs");
const imgbbUploader = require("imgbb-uploader");
const {
  HttpsProxyAgent
} = require("https-proxy-agent");
const agent = new HttpsProxyAgent("http://proxy:clph123@103.123.63.106:3128");
const lodash = require("lodash");
const {
  Boom
} = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const {
  imageToWebp,
  imageToWebp3,
  videoToWebp,
  writeExifImg,
  writeExifImgAV,
  writeExifVid
} = require("./lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep
} = require("./lib/myfunc");
const {
TelegraPh
} = require('./lib/uploader')
const question = (text) => {
  const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    readl.question(text, resolve);
  });
};
var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}
const {
  Low,
  JSONFile
} = low;
const mongoDB = require("./lib/mongoDB");
const store = makeInMemoryStore({
  logger: pino().child({
    level: "silent",
    stream: "store"
  })
});
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(/https?:\/\//.test(opts.db || "") ? new cloudDBAdapter(opts.db) : /mongodb/.test(opts.db) ? new mongoDB(opts.db) : new JSONFile("database/database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x51cb58 => setInterval(function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x51cb58(global.db.data == null ? global.loadDatabase() : global.db.data);
      } else {
        null;
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  };
  global.db.chain = lodash.chain(global.db.data);
};
loadDatabase();
if (global.db) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write();
    }
  }, 30000);
}

async function connectToWhatsApp() {
  const {
    state: stet,
    saveCreds: seC
  } = await useMultiFileAuthState(global.sessionName);
  const sock = makeWASocket({
    logger: pino({
      level: "silent"
    }),
    printQRInTerminal: !usePairingCode,
    auth: stet,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  });
  if (usePairingCode && !sock.authState.creds.registered) {
    const numberpar = await question("Masukan Nomer Yang Aktif Awali Dengan 62:\n");
    const codepar = await sock.requestPairingCode(numberpar.trim());
    console.log("Pairing code: " + codepar);
  }
  sock.decodeJid = (jid) => {
    if (!jid) {
      return jid;
    }
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return decode.user && decode.server && decode.user + "@" + decode.server || jid;
    } else {
      return jid;
    }
  };
  sock.ev.on("messages.upsert", async chatUpdate => {
    try {
      mek = chatUpdate.messages[0];
      if (!mek.message) {
        return;
      }
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!sock.public && !mek.key.fromMe && chatUpdate.type === "notify") {
        return;
      }
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) {
        return;
      }
      m = smsg(sock, mek, store);
      require("./Tsu Cmd.js")(sock, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });
  sock.ev.on("call", async (calln) => {
    let useridd = await sock.decodeJid(sock.user.id);
    let ntcall = global.anticall;
    if (!ntcall) {
      return;
    }
    console.log(calln);
    for (let ncall of calln) {
      if (ncall.isGroup == false) {
        if (ncall.status == "offer") {
          let ntcallsendm = await sock.sendTextWithMentions(ncall.from, "*" + sock.user.name + "* tidak bisa menerima panggilan " + (ncall.isVideo ? "video" : "suara") + ". Maaf @" + ncall.from.split("@")[0] + " kamu akan diblokir. Silahkan hubungi Owner membuka blok !");
          sock.sendContact(ncall.from, owner.map(mc => mc.split("@")[0]), ntcallsendm);
          await sleep(8000);
          await sock.updateBlockStatus(ncall.from, "block");
        }
      }
    }
  });
  sock.ev.on("contacts.update", update => {
    for (let contact of update) {
      let jid = sock.decodeJid(contact.id);
      if (store && store.contacts) {
        store.contacts[jid] = {
          id: jid,
          name: contact.notify
        };
      }
    }
  });
    sock.getName = (jid, withoutContact = false) => {
      let id = sock.decodeJid(jid)
      withoutContact = sock.withoutContact || withoutContact
      let v
      if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
        v = store.contacts[id] || {}
        if (!(v.name || v.subject)) v = sock.groupMetadata(id) || {}
        resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
      })
      else v = id === '0@s.whatsapp.net' ? {
          id,
          name: 'WhatsApp'
        } : id === sock.decodeJid(sock.user.id) ?
        sock.user :
        (store.contacts[id] || {})
      return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    sock.sendContact = async (jid, kon, quoted = '', opts = {}) => {
      let list = []
      for (let i of kon) {
        list.push({
          displayName: await sock.getName(i + '@s.whatsapp.net'),
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await sock.getName(i + '@s.whatsapp.net')}\nFN:${await sock.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:AditGantengJir@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/CfoZa7yhouZ51XXYM3lKY7\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
        })
      }

      sock.sendMessage(jid, {
        contacts: {
          displayName: `${list.length} Kontak`,
          contacts: list
        },
        ...opts
      }, {
        quoted
      })
    }
    
    sock.public = true
    sock.ev.on('creds.update', seC)
    sock.downloadMediaMessage = async (message) => {
      let mime = (message.msg || message).mimetype || ''
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(message, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
      }
      return buffer
    }
    sock.sendImage = async (jid, path, caption = '', quoted = '', options) => {
      let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs2.existsSync(path) ? fs2.readFileSync(path) : Buffer.alloc(0)
      return await sock.sendMessage(jid, {
        image: buffer,
        caption: caption,
        ...options
      }, {
        quoted
      })
    }
    sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, {
      text: text,
      ...options
    }, {
      quoted
    });
    sock.sendTextWithMentions = async (jid, text, quoted, options = {}) => sock.sendMessage(jid, {
      text: text,
      contextInfo: {
        mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')
      },
      ...options
    }, {
      quoted
    })
    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
      let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await await getBuffer(path) : fs2.existsSync(path) ? fs2.readFileSync(path) : Buffer.alloc(0)
      let buffer
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options)
      }
      else {
        buffer = await imageToWebp(buff)
      }
      await sock.sendMessage(jid, {
        sticker: {
          url: buffer
        },
        ...options
      }, {
        quoted
      })
      return buffer
    }
  sock.sendImageAsStickerAV = async (jid, path, quote, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await await getBuffer(path) : fs2.existsSync(path) ? fs2.readFileSync(path) : Buffer.alloc(0);
    let urlr;
    if (options && (options.packname || options.author)) {
      urlr = await writeExifImgAV(buff, options);
    } else {
      urlr = await imageToWebp2(buff);
    }
    await sock.sendMessage(jid, {
      sticker: {
        url: urlr
      },
      ...options
    }, {
      quoted: quote
    });
    return urlr;
  };
  sock.sendImageAsStickerAvatar = async (jid, path, quote, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await await getBuffer(path) : fs2.existsSync(path) ? fs2.readFileSync(path) : Buffer.alloc(0);
    let urlr;
    if (options && (options.packname || options.author)) {
      urlr = await writeExifImg(buff, options);
    } else {
      urlr = await imageToWebp3(buff);
    }
    await sock.sendMessage(jid, {
      sticker: {
        url: urlr
      },
      ...options
    }, {
      quoted: quote
    });
    return urlr;
  };
  sock.sendVideoAsSticker = async (jid, path, quote, options = {}) => {
    let bufsti = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await await getBuffer(path) : fs2.existsSync(path) ? fs2.readFileSync(path) : Buffer.alloc(0);
    let urlstiker;
    if (options && (options.packname || options.author)) {
      urlstiker = await writeExifVid(bufsti, options);
    } else {
      urlstiker = await videoToWebp(bufsti);
    }
    await sock.sendMessage(jid, {
      sticker: {
        url: urlstiker
      },
      ...options
    }, {
      quoted: quote
    });
    return urlstiker;
  };
  sock.reply = async (jid, text = "", quoted = m) => {
  sock.sendMessage(m.chat, {text:text}, {quoted:quoted})
  }
  // Button nya bisa banyak
    sock.sendButton = async (jid, text = "", footer = "", buttons = [], quoted = null) => {
    try {
        let interactiveButtons = buttons.map(button => {
            if (button.type === 'url') {
                return {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: button.text,
                        url: button.url,
                        merchant_url: button.url
                    })
                };
            } else if (button.type === 'copy') {
                return {
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: button.text,
                        id: button.id,
                        copy_code: button.copy_code
                    })
                };
            } else if (button.type === 'buttons') {
                return {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: button.text,
                        id: button.id
                    })
                };
            }
        });

        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: interactiveButtons
                        })
                    })
                }
            }
        }, { userJid: jid, quoted: quoted });

        await sock.relayMessage(jid, msg.message, { messageId: msg.key.id });
    } catch (e) {
        console.error("Error sending button message:", e);
    }
};
  // Button nya bisa banyak dengan img
    sock.sendButtonImg = async (jid, text = "", footer = "", buttons = [], imageUrl = "", quoted = null) => {
    try {
    console.log('imageUrl:', imageUrl, 'Type:', typeof imageUrl);
    if (typeof imageUrl !== 'string') {
      throw new TypeError('The "imageUrl" argument must be of type string.');
    }
        let interactiveButtons = buttons.map(button => {
            if (button.type === 'url') {
                return {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: button.text,
                        url: button.url,
                        merchant_url: button.url
                    })
                };
            } else if (button.type === 'copy') {
                return {
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: button.text,
                        id: button.id,
                        copy_code: button.copy_code
                    })
                };
            } else if (button.type === 'buttons') {
                return {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: button.text,
                        id: button.id
                    })
                };
            } /*else if (button.type === 'select') {
              let sections = buttons;
              let listMessage = {
                title: title,
                sections
                };
                return {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                    listMessage
                    })
                };
            }*/
        });

    let preparedMedia = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: sock.waUploadToServer });
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: true, ...preparedMedia }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: interactiveButtons
                        })
                    })
                }
            }
        }, { userJid: jid, quoted: quoted });

        await sock.relayMessage(jid, msg.message, { messageId: msg.key.id });
    } catch (e) {
        console.error("Error sending button message:", e);
    }
};
    /**
      * Function Send Button Biar Hemat Energi ngetik
      * Ini send Button Biasa
      */
    sock.sendButtonMsg = async (jid, text = "", footer = "", buttons = [], quoted = null) => {
    try {
        let msg = generateWAMessageFromContent(jid, {
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
                            text: footer
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttons.map(button => ({
                                "name": "quick_reply",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": button.text,
                                    "id": button.id
                                })
                            }))
                        })
                    })
                }
            }
        }, { userJid: jid, quoted: quoted });

        await sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (e) {
        console.error("Error sending button message:", e);
    }
};
    /**
      * Ini Function Send Button Yang Ada Gambarnya
      */
      sock.sendButtonMsgImg = async (jid, text = "", footer = "", buttons = [], imageUrl = "", quoted = null) => {
    try {
    console.log('imageUrl:', imageUrl, 'Type:', typeof imageUrl);
    if (typeof imageUrl !== 'string') {
      throw new TypeError('The "imageUrl" argument must be of type string.');
    }
    let preparedMedia = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: sock.waUploadToServer });
        let msg = generateWAMessageFromContent(jid, {
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
                            text: footer
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            hasMediaAttachment: true,
                            ...preparedMedia
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttons.map(button => ({
                                "name": "quick_reply",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": button.text,
                                    "id": button.id
                                })
                            }))
                        })
                    })
                }
            }
        }, { userJid: jid, quoted: quoted });

        await sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (e) {
        console.error("Error sending button message:", e);
    }
}

sock.sendButtonCard = async (jid, text, footer, cards, quoted = null) => {
  try {
    let preparedCards = await Promise.all(cards.map(async (card) => {
      let preparedMedia = await prepareWAMessageMedia({ image: { url: card.imageUrl } }, { upload: sock.waUploadToServer });
      return {
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: card.body }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: card.footer }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: card.header,
          hasMediaAttachment: true,
          ...preparedMedia
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: card.buttons.map(button => {
            if (button.type === 'url') {
              return {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: button.text,
                  url: button.url,
                  merchant_url: button.url
                })
              };
            } else if (button.type === 'buttons') {
              return {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: button.text,
                  id: button.id
                })
              };
            }
          })
        })
      };
    }));

    let msg = generateWAMessageFromContent(jid, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({ text }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: footer }),
            header: proto.Message.InteractiveMessage.Header.fromObject({ hasMediaAttachment: false }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: preparedCards
            })
          })
        }
      }
    }, { userJid: jid, quoted: quoted });

    await sock.relayMessage(jid, msg.message, { messageId: msg.key.id });
  } catch (e) {
    console.error("Error sending button card message:", e);
  }
};

  sock.sendListWithImage = async (jid, bodyteks, listmsg, foter, urlthum, quot = {}) => {
    let msgss = generateWAMessageFromContent(jid, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            ...quot,
            body: proto.Message.InteractiveMessage.Body.create({
              text: bodyteks
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: foter
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: true,
              ...(await prepareWAMessageMedia({
                image: {
                  url: urlthum
                }
              }, {
                upload: sock.waUploadToServer
              }))
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{
                name: "single_select",
                buttonParamsJson: JSON.stringify(listmsg)
              }]
            })
          })
        }
      }
    }, {
      quoted: quot || m
    });
    await sock.relayMessage(msgss.key.remoteJid, msgss.message, {
      messageId: msgss.key.id,
      quoted: quot || m
    });
  };
  sock.sendList = async (jid, bodyteks, foterteks, listmsg, quote = {}) => {
    let msgs = generateWAMessageFromContent(jid, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            ...quote,
            body: proto.Message.InteractiveMessage.Body.create({
              text: bodyteks
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: foterteks || "Powered By KayyTwelve"
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{
                name: "single_select",
                buttonParamsJson: JSON.stringify(listmsg)
              }]
            })
          })
        }
      }
    }, {});
    return await sock.relayMessage(msgs.key.remoteJid, msgs.message, {
      messageId: msgs.key.id
    });
  };
  sock.downloadAndSaveMediaMessage = async (message, fileName, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buff = Buffer.from([]);
    for await (const s of stream) {
      buff = Buffer.concat([buff, s]);
    }
    let type = await FileType.fromBuffer(buff);
    trueFileName = attachExtension ? fileName + "." + type.ext : fileName;
    await fs2.writeFileSync(trueFileName, buff);
    return trueFileName;
  };
  sock.cMod = (jid, copy, text = "", sender = sock.user.id, options = {}) => {
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") {
      msg[mtype] = text || content;
    } else if (content.caption) {
      content.caption = text || content.caption;
    } else if (content.text) {
      content.text = text || content.text;
    }
    if (typeof content !== "string") {
      msg[mtype] = {
        ...content,
        ...options
      };
    }
    if (copy.key.participant) {
      sender = copy.key.participant = sender || copy.key.participant;
    } else if (copy.key.participant) {
      sender = copy.key.participant = sender || copy.key.participant;
    }
    if (copy.key.remoteJid.includes("@s.whatsapp.net")) {
      sender = sender || copy.key.remoteJid;
    } else if (copy.key.remoteJid.includes("@broadcast")) {
      sender = sender || copy.key.remoteJid;
    }
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === sock.user.id;
    return proto.WebMessageInfo.fromObject(copy);
  };
  sock.sendFile2 = async (jid, file, name = "", filecap = "", quote, pttt = false, options = {}) => {
    let getfile = await sock.getFile(file, true);
    let {
      res: resp,
      data: dat,
      filename: filenam
    } = getfile;
    if (resp && resp.status !== 200 || dat.length <= 65536) {
      try {
        throw {
          json: JSON.parse(dat.toString())
        };
      } catch (_0x1dc6c8) {
        if (_0x1dc6c8.json) {
          throw _0x1dc6c8.json;
        }
      }
    }
    let file1 = {
      filename: name
    };
    if (quote) {
      file1.quoted = quote;
    }
    if (!getfile) {
      options.asDocument = true;
    }
    let type1 = "";
    let mimetyp = getfile.mime;
    let mimetyp2;
    if (/webp/.test(getfile.mime) || /image/.test(getfile.mime) && options.asSticker) {
      type1 = "sticker";
    } else if (/image/.test(getfile.mime) || /webp/.test(getfile.mime) && options.asImage) {
      type1 = "image";
    } else if (/video/.test(getfile.mime)) {
      type1 = "video";
    } else if (/audio/.test(getfile.mime)) {
      mimetyp2 = await (pttt ? toPTT : toAudio)(dat, getfile.ext);
      dat = mimetyp2.data;
      filenam = mimetyp2.filename;
      type1 = "audio";
      mimetyp = "audio/ogg; codecs=opus";
    } else {
      type1 = "document";
    }
    if (options.asDocument) {
      type1 = "document";
    }
    delete options.asSticker;
    delete options.asLocation;
    delete options.asVideo;
    delete options.asDocument;
    delete options.asImage;
    let gtfile2 = {
      ...options,
      caption: filecap,
      ptt: pttt,
      [type1]: {
        url: filenam
      },
      mimetype: mimetyp
    };
    let filed;
    try {
      filed = await sock.sendMessage(jid, gtfile2, {
        ...file1,
        ...options
      });
    } catch (_0x458af3) {
      filed = null;
    } finally {
      if (!filed) {
        filed = await sock.sendMessage(jid, {
          ...gtfile2,
          [type1]: dat
        }, {
          ...file1,
          ...options
        });
      }
      dat = null;
      return filed;
    }
  };
  sock.sendFile = async (jid, filep, name, quote = {}, options = {}) => {
    let type = await sock.getFile(filep, true);
    let {
      filename: _0x2c8596,
      size: _0x14099e,
      ext: _0x19ab67,
      mime: _0xaffea0,
      data: _0x163b7f
    } = type;
    let _0xf823a0 = "";
    let _0x19ef20 = _0xaffea0;
    let _0x53682a = _0x2c8596;
    if (options.asDocument) {
      _0xf823a0 = "document";
    }
    if (options.asSticker || /webp/.test(_0xaffea0)) {
      let {
        writeExif: _0x3fbadd
      } = require("./lib/sticker.js");
      let _0x5e9aee = {
        mimetype: _0xaffea0,
        data: _0x163b7f
      };
      _0x53682a = await _0x3fbadd(_0x5e9aee, {
        packname: global.packname,
        author: global.packname2,
        categories: options.categories ? options.categories : []
      });
      await fs2.promises.unlink(_0x2c8596);
      _0xf823a0 = "sticker";
      _0x19ef20 = "image/webp";
    } else if (/image/.test(_0xaffea0)) {
      _0xf823a0 = "image";
    } else if (/video/.test(_0xaffea0)) {
      _0xf823a0 = "video";
    } else if (/audio/.test(_0xaffea0)) {
      _0xf823a0 = "audio";
    } else {
      _0xf823a0 = "document";
    }
    await sock.sendMessage(jid, {
      [_0xf823a0]: {
        url: _0x53682a
      },
      mimetype: _0x19ef20,
      fileName: name,
      ...options
    }, {
      quoted: quote,
      ...options
    });
    return fs2.promises.unlink(_0x53682a);
  };
  sock.parseMention = async _0x388313 => {
    return [..._0x388313.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2431ef => _0x2431ef[1] + "@s.whatsapp.net");
  };
  sock.copyNForward = async (_0x38263d, _0x3fd1c9, _0xaab94d = false, _0x5eb5d0 = {}) => {
    let _0x389acb;
    if (_0x5eb5d0.readViewOnce) {
      _0x3fd1c9.message = _0x3fd1c9.message && _0x3fd1c9.message.ephemeralMessage && _0x3fd1c9.message.ephemeralMessage.message ? _0x3fd1c9.message.ephemeralMessage.message : _0x3fd1c9.message || undefined;
      _0x389acb = Object.keys(_0x3fd1c9.message.viewOnceMessage.message)[0];
      delete (_0x3fd1c9.message && _0x3fd1c9.message.ignore ? _0x3fd1c9.message.ignore : _0x3fd1c9.message || undefined);
      delete _0x3fd1c9.message.viewOnceMessage.message[_0x389acb].viewOnce;
      _0x3fd1c9.message = {
        ..._0x3fd1c9.message.viewOnceMessage.message
      };
    }
    let _0x37e7e9 = Object.keys(_0x3fd1c9.message)[0];
    let _0x5b559e = await generateForwardMessageContent(_0x3fd1c9, _0xaab94d);
    let _0x5b44dd = Object.keys(_0x5b559e)[0];
    let _0x297f3e = {};
    if (_0x37e7e9 != "conversation") {
      _0x297f3e = _0x3fd1c9.message[_0x37e7e9].contextInfo;
    }
    _0x5b559e[_0x5b44dd].contextInfo = {
      ..._0x297f3e,
      ..._0x5b559e[_0x5b44dd].contextInfo
    };
    const _0x37bc6c = await generateWAMessageFromContent(_0x38263d, _0x5b559e, _0x5eb5d0 ? {
      ..._0x5b559e[_0x5b44dd],
      ..._0x5eb5d0,
      ...(_0x5eb5d0.contextInfo ? {
        contextInfo: {
          ..._0x5b559e[_0x5b44dd].contextInfo,
          ..._0x5eb5d0.contextInfo
        }
      } : {})
    } : {});
    await sock.relayMessage(_0x38263d, _0x37bc6c.message, {
      messageId: _0x37bc6c.key.id
    });
    return _0x37bc6c;
  };
  sock.sendReact = async (_0x57c283, _0x4d6ee8, _0x4ec66a = {}) => {
    let _0x57eb95 = {
      react: {
        text: _0x4d6ee8,
        key: _0x4ec66a
      }
    };
    return await sock.sendMessage(_0x57c283, _0x57eb95);
  };
  sock.ev.on("group-participants.update", async getgroup => {
    if (!wlcm.includes(getgroup.id)) {
      return;
    }
    console.log(getgroup);
    try {
      let groupMetadata = await sock.groupMetadata(getgroup.id);
      let participants = getgroup.participants;
      for (let sender of participants) {
        try {
          ppuser = await sock.profilePictureUrl(sender, "image");
        } catch {
          ppuser = "https://i.ibb.co.com/LYXxNGV/IMG-20240910-WA0208.jpg";
        }
        try {
          ppgroup = await sock.profilePictureUrl(getgroup.id, "image");
        } catch {
          ppgroup = "https://i.ibb.co.com/26nWmdc/IMG-20240910-WA0209.jpg";
        }
        function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
        }
        function randomNumber(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}
      function deletefile(filePath) {
fs2.unlink(filePath, err => {
    if (err) {
        console.error(`Gagal menghapus file: ${filePath} - ${err}`);
    } else {
        console.log(`Berhasil menghapus file: ${filePath}`);
    }
});}
      const randomn = randomNumber(100000, 1000000)
      const more = String.fromCharCode(8206)
      const readmore = more.repeat(1000)
      const background = pickRandom(['https://i.ibb.co.com/8YdPybF/IMG-20240908-WA0215.jpg','https://i.ibb.co.com/VDt7QzF/images-44.jpg','https://i.ibb.co.com/ccXjjCZ/images-46.jpg','https://i.ibb.co.com/n7Q26m4/images-47.jpg','https://i.ibb.co.com/BySwMCk/images-51.jpg','https://i.ibb.co.com/x74C7Vc/images-50.jpg','https://i.ibb.co.com/Sr3sjDf/images-49.jpg','https://i.ibb.co.com/5Tp4DBp/images-48.jpg'])
      const fixnum9 = (input) => {
  const str = input.toString();
  if (str.length > 9) {
    return str.slice(0, 9) + '..';
  }
  return str;
};
      
        if (getgroup.action == "add") {
          let ppnyagroup;
          let ppnyauser;
          let buffppgc = await getBuffer(ppgroup);
          let ppnyagc = await `./tmp/${randomn}ppgroup.png`;
          let bufppus = await getBuffer(ppuser);
          let ppuserc = await `./tmp/${randomn}ppuser.png`;
          await fs2.writeFileSync(ppuserc, bufppus);
          const ppu = await imgbbUploader("51b8ecffd3008ef0242ca140d6109361", ppuserc)
          try {
            ppnyauser = ppu.thumb.url
          } catch {
            ppnyauser = "https://i.ibb.co.com/LYXxNGV/IMG-20240910-WA0208.jpg";
          }
          await fs2.writeFileSync(ppnyagc, buffppgc);
          const ppg = await imgbbUploader("51b8ecffd3008ef0242ca140d6109361", ppnyagc)
          try {
            ppnyagroup = ppg.thumb.url
          } catch {
            ppnyagroup = "https://i.ibb.co.com/26nWmdc/IMG-20240910-WA0209.jpg";
          }
          deletefile(ppuserc)
          deletefile(ppnyagc)
        //  let welcomeimg = "https://api.popcat.xyz/welcomecard?background=https://i.ibb.co.com/VDt7QzF/images-44.jpg&text1=Selamat+Datang&text2=" + encodeURI(sender.split("@")[0]) + "&text3=Di+" + groupMetadata.subject + "&avatar=" + ppnyauser
          let welcmimg2 = `https://widipe.com/welcome?name=${encodeURI(sender.split("@")[0])}&gcname=${groupMetadata.subject}&ppgc=${ppnyagroup}&member=${participants.length + 1}&pp=${ppnyauser}&bg=` + background
         //   welcmimg2 = "https://api.popcat.xyz/welcomecard?background=https://i.ibb.co.com/VDt7QzF/images-44.jpg&text1=Selamat+Datang&text2=" + encodeURI(sender.split("@")[0]) + "&text3=Di+" + groupMetadata.subject + "&avatar=" +"https://i.ibb.co.com/ZfQtKYG/a059a6a734ed202c879d3.jpg"
          
        let butto = [{
             type: "buttons",
             text: `Welcome ${m.pushName} 👋`,
             id: `Welcome`
             }]
        //  let teks = `*Hai @${sender.split("@")[0]}* 👋\nSelamat datang di group ` + groupMetadata.subject +"\nSemoga betah ya 😁\n" + readmore + "╺──────╼╾──────╸\n*Deskripsi:*\n" + groupMetadata.desc + "\n━───────┄┄┈┈─━"
          let teks = `『─╌╌╌╌⊰ *Selamat datang* ⊱─╌╌╌╌』\nHai @${sender.split("@")[0]} 👋\nSelamat datang di group ${groupMetadata.subject}\nSemoga betah ya.\n\n╺──────╼╾──────╸\n${readmore}Jangan lupa baca desk ya:\n${groupMetadata.desc}\n━───────┄┄┈┈─━`
          await sock.sendButtonImg(getgroup.id, teks, 'Welcome Messages', butto, welcmimg2)
        } else if (getgroup.action == "remove") {
          let ppnyagroup;
          let ppnyauser;
          let buffppgc = await getBuffer(ppgroup);
          let ppnyagc = await `./tmp/${randomn}ppgroup.png`;
          let bufppus = await getBuffer(ppuser);
          let ppuserc = await `./tmp/${randomn}ppuser.png`;
          await fs2.writeFileSync(ppuserc, bufppus);
          const ppu = await imgbbUploader("51b8ecffd3008ef0242ca140d6109361", ppuserc)
          try {
            ppnyauser = ppu.thumb.url
          } catch {
            ppnyauser = "https://i.ibb.co.com/LYXxNGV/IMG-20240910-WA0208.jpg";
          }
          await fs2.writeFileSync(ppnyagc, buffppgc);
          const ppg = await imgbbUploader("51b8ecffd3008ef0242ca140d6109361", ppnyagc)
          try {
            ppnyagroup = ppg.thumb.url
          } catch {
            ppnyagroup = "https://i.ibb.co.com/26nWmdc/IMG-20240910-WA0209.jpg";
          }
          deletefile(ppuserc)
          deletefile(ppnyagc)
          
          let welcmimg2 = `https://widipe.com/goodbye?name=${encodeURI(sender.split("@")[0])}&gcname=${groupMetadata.subject}&ppgc=${ppnyagroup}&member=${participants.length - 1}&pp=${ppnyauser}&bg=` + background

        let butto = [{
             type: "buttons",
             text: `Goodbye ${m.pushName} 👋`,
             id: `Goodbye`
             }]
        let butto2 = [{
             type: "buttons",
             text: `Bye ${groupMetadata.subject} 👋`,
             id: `Bye`
             }]
        
         // let teks = `*Selamat tinggal @${sender.split("@")[0]}* 👋\nKeluar dari ` + groupMetadata.subject + " \nSemoga kamu kembali 🙂"
          let teks = `『─╌╌╌╌⊰ *Selamat tinggal* ⊱─╌╌╌╌』\nHai @${sender.split("@")[0]} 👋\nSelamat tinggal dari group ${groupMetadata.subject}\nSemoga bisa kembali.`
          await sock.sendButtonImg(getgroup.id, teks, 'Goodbye Messages', butto, welcmimg2)
          await sock.sendButtonImg(`${sender.split('@')[0]}@s.whatsapp.net`, teks, 'Goodbye Messages', butto2, welcmimg2)
        } else if (getgroup.action == "promote") {
          let _0x4a83e8 = "Selamat @" + sender.split("@")[0] + ", telah dijadikan Admin di group " + groupMetadata.subject + " 🎉";
          sock.sendMessage(getgroup.id, {
            document: fs2.readFileSync("./package.json"),
            thumbnailUrl: ppuser,
            mimetype: "application/pdf",
            fileLength: 99999,
            pageCount: "100",
            fileName: "Selamat!!!",
            caption: _0x4a83e8,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "Promoted In " + groupMetadata.subject,
                body: "" + botname,
                thumbnailUrl: ppuser,
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
        } else if (getgroup.action == "demote") {
          let _0x4aa520 = "Yahh @" + sender.split("@")[0] + ", telah diunadmin di group " + groupMetadata.subject + " 💢";
          sock.sendMessage(getgroup.id, {
            document: fs2.readFileSync("./package.json"),
            thumbnailUrl: ppuser,
            mimetype: "application/pdf",
            fileLength: 99999,
            pageCount: "100",
            fileName: "Diunadmin!!",
            caption: _0x4aa520,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "Demoted In " + groupMetadata.subject,
                body: "" + botname,
                thumbnailUrl: ppuser,
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
  sock.getFile = async (path, save) => {
    let res;
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await (res = await getBuffer(path)) : fs2.existsSync(path) ? (filename = path, fs2.readFileSync(path)) : typeof path === "string" ? path : Buffer.alloc(0);
    let type = (await FileType.fromBuffer(buff)) || {
      mime: "application/octet-stream",
      ext: ".bin"
    };
    filename = path.join(__filename, "../src/" + new Date() * 1 + "." + type.ext);
    if (buff && save) {
      fs2.promises.writeFile(filename, buff);
    }
    return {
      res: res,
      filename: filename,
      size: await getSizeMedia(buff),
      ...type,
      data: buff
    };
  };
  sock.serializeM = serialz => smsg(sock, serialz, store);
  sock.ev.on("connection.update", async coneup => {
    const {
      connection: cone,
      lastDisconnect: ladcon
    } = coneup;
    if (cone === "close") {
      let boomm = new Boom(ladcon?.error)?.output.statusCode;
      if (boomm === DisconnectReason.badSession) {
        console.log(chalk.red("Bad Session File, Please Delete Session and Scan Again"));
        process.exit();
      } else if (boomm === DisconnectReason.connectionClosed) {
        console.log(chalk.red("Connection closed, reconnecting...."));
        connectToWhatsApp();
      } else if (boomm === DisconnectReason.connectionLost) {
        console.log(chalk.red("Connection Lost from Server, reconnecting..."));
        connectToWhatsApp();
      } else if (boomm === DisconnectReason.connectionReplaced) {
        console.log(chalk.red("Connection Replaced, Another New Session Opened, Please Restart Bot"));
        process.exit();
      } else if (boomm === DisconnectReason.loggedOut) {
        console.log(chalk.red("Device Logged Out, Please Delete Folder Tsusession and Scan Again."));
        process.exit();
      } else if (boomm === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        connectToWhatsApp();
      } else if (boomm === DisconnectReason.timedOut) {
        console.log(chalk.red("Connection TimedOut, Reconnecting..."));
        connectToWhatsApp();
      } else {
        console.log(chalk.red("Unknown DisconnectReason: " + boomm + "|" + cone));
        connectToWhatsApp();
      }
    } else if (cone === "open") {
      console.log(chalk.rgb(0, 255, 0).bold("\n『────────────────』\nTERHUBUNG KE = " + JSON.stringify(sock.user, null, 2)+"\n『────────────────』"));
      if (global.db.data == null) {
        await loadDatabase();
      }
      sock.sendMessage(`6282328190003@s.whatsapp.net`, {
        text: "*[ Berhasil Terhubung Ke Tsumuri - Md ]*"
      });
    }
  });
// await draw("./media/tsu.png", { width: 68, height: 17 })
  return sock;
}
async function Imgterm() {
  await draw("./media/tsu.png", { width: 68, height: 15 })
}
connectToWhatsApp()
Imgterm();
let file = require.resolve(__filename);
fs2.watchFile(file, () => {
  fs2.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});