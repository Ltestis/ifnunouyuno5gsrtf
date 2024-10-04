const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'luhungch' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6282328190003'] // ubah aja pake nomor lu, Jika mau nambah ['628xxx','628xxx']
global.ownerno1 = '6282328190003'
global.botname = 'Tsumuri-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Tsusession' //Gausah Juga
global.idchannel = '120363295629217013@newsletter'
global.linkgc = 'https://chat.whatsapp.com/IceuWzpG17NFXPzx6hgNNX'
global.gcbuyer = "-"
global.thumbnail = `https://i.ibb.co.com/QmsxnsJ/Rezz.png`
global.thumbnail2 = `https://i.ibb.co.com/G3tLg7J/logo-ts23-CB8-DBAA.png`
global.autobio = false // AutoBio
global.autoread = true // ReadChat 
global.autoreadsw = false
global.Ghost = '`'
global.versibot = 'V 2.0.0'
global.packname = 'Tsumuri'
global.author = 'Md'
global.skizo = "REREZ HOSTING"
global.wm = "Tsumuri-Md"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//apikey
global.lol = "ef9e2cf41e82d53b62533a88"

//Send Pay
global.dana = "085643516329"
global.ovo = "-"
global.gopay = "085643516329"
global.qris = "-"

//limit, balance & rpg
global.limitawal = 20
global.uangawal = 15000
global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.trivia = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.lengkapikal = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};
global.gamewaktu = 60
// rpg
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}
// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'
//mess
global.mess = {
    premium: ('Command ini hanya bisa digunakan oleh user premium!'),
    done: ('Selesai kak.'),
    owner: ('Kamu tidak bisa menggunakan command ini!'),
    wait: ('Tunggu sebentar...!'),
    group: 'Command ini hanya bisa digunakan di group chat!',
    pribadi: 'Command ini hanya bisa digunakan di private chat!',
    admin: 'Command ini hanya bisa digunakan oleh admin group!',
    botAdmin: 'Command ini hanya bisa digunakan ketika bot sudah menjadi admin!',
    linkvalid: 'Link sepertinya tidak valid, coba link yang lainya!', 
    error: 'Sepertinya terjadi kesalahan, coba lagi nanti!',
    limit: `Limit kamu sudah habis, Silahkan beli limit dengan .limit atau mainkan game yang bisa menghasilkan limit`,
    ban: `Kamu telah diban oleh owner, ajukan pertinjauan dengan .tinjau`,
    regis: (`Kamu harus daftar terlebih dahulu, dengan cara .daftar`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})