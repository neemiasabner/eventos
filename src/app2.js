const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('562105511:AAG1ObGvxiFd8ygrF2pLKIfFNqHuBGb_lB4')

chatbot.onText(.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  chatbot.sendMessage(chatId, resp);
});

class EventsController extends TelegramBaseController {
  allEventsAction(scope) {
    let msg = `QConSP - 24-25-26/04/2017 - qconsp.com\nFrontInSampa - 01/07/2017 - frontinsampa.com.br`

    scope.sendMessage(msg)
  }

  get routes() {
    return {
      'allEvents': 'allEventsAction'
    }
  }
}

chatbot.router
       .when(
         new TextCommand('/allevents', 'allEvents'), new EventsController()
       )