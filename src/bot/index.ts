import config from '@/config';
import { Telegraf } from 'telegraf';
import { BotContext } from './context';

function buildBot() {
  const bot = new Telegraf<BotContext>(config.bot.token);

  bot.on('text', (ctx) => {
    ctx.reply(ctx.message.text);
  });

  return bot;
}

export default buildBot;
