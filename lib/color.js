//base by EliTechWiz
//re-upload? recode? copy code? give credit ya :)
//YouTube: @eliahhango
//Instagram: elitechwiz
//Telegram: t.me/Eliah_Hango
//GitHub: @Eliahhango
//WhatsApp: +255688164510
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@eliahhango

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
