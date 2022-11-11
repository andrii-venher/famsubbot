import { logger } from '@/logger/logger';
import { MongoClient } from 'mongodb';
import { Telegraf } from 'telegraf';
import Container from 'typedi';

async function stop() {
  logger.info('Stopping the project.');

  const bot = Container.get(Telegraf);
  bot.stop();
  logger.info('Bot stopped.');

  const mongoClient = Container.get(MongoClient);
  await mongoClient.close();
  logger.info('MongoDb connection closed.');

  logger.info('Stop completed');
}

export default stop;
