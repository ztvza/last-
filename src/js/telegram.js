const { Telegraf } = require('telegraf');

const telegramBot = new Telegraf('1617804639:AAG4DlK6TR_6McP4bD7asbC0OEdfjiCSHy0');
telegramBot.start((ctx) => {
	ctx.reply('Welcome');
	console.log(ctx.update.message.chat);
});
telegramBot.on('sticker', (ctx) => ctx.reply('👍'));
telegramBot.hears('hi', (ctx) => ctx.reply('Hey there'));


module.exports = telegramBot