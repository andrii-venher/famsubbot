import addServices from '@/dependencyInjection';
import { logger } from '@/logger/logger';

import { Telegraf } from 'telegraf';
import Container from 'typedi';

async function start() {
  logger.info('Starting the project.');

  await addServices();
  logger.info('AddServices completed.');

  const bot = Container.get(Telegraf);
  await bot.launch();
  logger.info('Bot launched.');

  logger.info('Start completed.');
}

export default start;
