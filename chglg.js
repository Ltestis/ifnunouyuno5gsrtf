const chalk = require('chalk')
const fs = require('fs')

global.changelogs = (prefix) => {
return `ini changelognya ya
> Versi 2.0.52
- Menambah fitur rpg game (${prefix}rpgmenu)
- Menambah jenis menu dalam ${prefix}menu (Contoh: ${prefix}menu all)
- Mengubah tampilan song
- Mengubah play dan song menjadi sendiri
- Mengubah sedikit tampilan menu
- Merilis fitur akinator (coba dengan ${prefix}akinator/aki) 
- Menambah fitur game lengkapi kalimat (${prefix}lengkapikalimat) 
—————————————————————
> Versi 2.0.51
- Menambah fitur akinator (Masih beta)
- Mengubah Web api ke indonesia
- Memperbaiki ytmp3 yang tidak bekerja
- Memperbaiki ytmp4 yang tidak bekerja
- Memperbaiki fitur play
- Menambah fitur bible
- Mengubah Islam Menu menjadi Agama Menu
- Menambah fitur asupan
- Menambah fitur random
- Menambah fitur mora/moraai
- Menambah fitur getidsaluran
- Menambah beberapa fitur nsfw (${prefix}nsfwmenu untuk melihat)
- Menambah beberapa fitur primbon (${prefix}primbonmenu untuk melihat)
- Memperbaiki fitur asupan
- Menambah fitur "didyoumean"
- Memperbaiki beberapa fitur game yang tidak bekerja
⚎⚎⚍⚍⚍⚌⚌⚏⚏⚏⚏
Terakhir diperbarui: 8 September 2024, 05.00
⚏⚎⚏⚎⚎⚎⚍⚌⚌⚍⚌
*Rencana:* -
⚌⚌⚍⚍⚎⚎⚏⚍⚌⚌⚌
*Catatan: Beberapa fitur mungkin masih belum bekerja. Anda bisa membantu owner dengan mereport fitur yang error dengan command (${prefix}report fitur yang error*).`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})