const TeleBot = require('telebot');
const bot = new TeleBot('562105511:AAG1ObGvxiFd8ygrF2pLKIfFNqHuBGb_lB4');

// On every text message

var mensagens = [];
mensagens.push('Todo torcedor do américa é maluco');
mensagens.push('o cara q é america é maluco');
mensagens.push('não bate bem da ideia');

var numero=-1;
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
	numero++;
		return bot.sendMessage(id, `${mensagens[numero]}`);
	});

bot.connect();