import buildBot from '@/bot';
import { Db, MongoClient } from 'mongodb';
import { Telegraf } from 'telegraf';
import Container from 'typedi';
import createMongoClientAndConnect from './db';

async function addServices() {
  const mongoConnection = await createMongoClientAndConnect();
  Container.set(MongoClient, mongoConnection.client);
  Container.set(Db, mongoConnection.db);
  const bot = buildBot();
  Container.set(Telegraf, bot);
}

export default addServices;
