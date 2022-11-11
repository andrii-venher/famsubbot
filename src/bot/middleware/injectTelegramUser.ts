import { TelegramIdentity } from '@/domain/valueObjects/telegramIdentity';
import { logger } from '@/logger/logger';
import { BotContext } from '../context';

export async function injectTelegramUser(ctx: BotContext, next: () => Promise<void>) {
  const telegramIdentity = TelegramIdentity.fromTelegramUser(ctx.from);
  console.log(telegramIdentity);
  let user = await ctx.userRepository.getByTelegramIdentity(telegramIdentity);
  if (user === null) {
    try {
      user = await ctx.userRepository.createByTelegramIdentity(telegramIdentity);
    } catch (ex) {
      logger.error(ex);
    }
  }
  ctx.user = user;
  return next();
}
