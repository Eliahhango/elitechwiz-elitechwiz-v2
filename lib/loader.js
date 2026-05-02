//base by EliTechWiz
//re-upload? recode? copy code? give credit ya :)
//YouTube: @eliahhango
//Instagram: elitechwiz
//Telegram: t.me/Eliah_Hango
//GitHub: @Eliahhango
//WhatsApp: +255688164510
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@eliahhango

const fs = require('fs')
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
