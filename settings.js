//base by EliTechWiz
//re-upload? recode? copy code? give credit ya :)
//YouTube: @EliTechWiz
//Instagram: elitechwiz
//Telegram: t.me/Eliah_Hango
//GitHub: @Eliahhango
//WhatsApp: +255688164510
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@eliahhango

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: EliTechWiz" //ur yt chanel name
global.socialm = "GitHub: Eliahhango" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'EliTechWiz-V2' //ur bot name
global.ownernumber = '255688164510' //ur owner number
global.ownername = '🦄EliTechWiz' //ur owner name
global.websitex = "https://youtube.com/@eliahhango"
global.wagc = "https://whatsapp.com/channel/0029VaeEYF0BvvsZpaTPfL2s"
global.themeemoji = '🪀'
global.wm = "EliTechWiz Bot Inc."
global.botscript = 'https://github.com/Eliahhango/EliTechWiz-V2' //script link
global.packname = "Sticker By"
global.author = "EliTechWiz\n\n+255688164510"
global.creator = "255688164510@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["255688164510"] // Premium User
global.hituet = 0
global.supportEmail = 'support@elitechwiz.com' // support email
global.supportPhoneNumber = '+255688164510' // support phone number

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '255' //set autoblock country code
global.antiforeignnumber = '255' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!',
    support: 'For support, please contact us at support@elitechwiz.com or call ' + global.supportPhoneNumber
}
//thumbnail
global.thumb = fs.readFileSync('./ElitechMedia/theme/cheemspic.jpg')

//text bug
global.xbugtex = {
xtxt: '🚨 EliTechWiz🚨',
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})