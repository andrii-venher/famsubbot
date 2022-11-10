import { logger } from '@/logger/logger';
import { Telegraf } from 'telegraf';
import Container from 'typedi';

async function stop() {
  logger.info('Stopping the project.');

  const bot = Container.get(Telegraf);
  bot.stop();
  logger.info('Bot stopped.');

  logger.info('Stop completed');
}

export default stop;
