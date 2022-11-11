import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('Could not open .env file.');
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  env: process.env.NODE_ENV,
  bot: {
    token: process.env.BOT_TOKEN || '',
  },
  db: {
    connectionString: process.env.DB_CONNECTION_STRING || '',
    name: process.env.DB_NAME || '',
    collections: {
      users: 'users',
    },
  },
};
