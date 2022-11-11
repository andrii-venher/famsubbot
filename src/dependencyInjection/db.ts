import config from '@/config';
import { logger } from '@/logger/logger';
import { Db, MongoClient } from 'mongodb';

const client: MongoClient = new MongoClient(config.db.connectionString);

interface MongoConnection {
  client: MongoClient;
  db: Db;
}

async function createMongoClientAndConnect(): Promise<MongoConnection> {
  await client.connect();
  const db: Db = client.db(config.db.name);
  logger.info('MongoDb connection established.');
  return {
    client,
    db,
  };
}

export default createMongoClientAndConnect;
