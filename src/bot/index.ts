import config from '@/config';
import { Telegraf } from 'telegraf';
import { BotContext } from './context';
import registerMiddleware from './middleware';

function buildBot() {
  const bot = new Telegraf<BotContext>(config.bot.token);

  registerMiddleware(bot);

  bot.on('text', (ctx) => {
    ctx.reply(`Hello, ${ctx.user.telegramIdentity.firstName}. You message: ${ctx.message.text}`);
  });

  return bot;
}

export default buildBot;
