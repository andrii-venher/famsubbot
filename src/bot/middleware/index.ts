import { Telegraf } from 'telegraf';
import { injectRepositories } from './injectRepositories';
import { injectTelegramUser } from './injectTelegramUser';

export default function registerMiddleware(bot: Telegraf) {
  bot.use(injectRepositories);
  bot.use(injectTelegramUser);
}
