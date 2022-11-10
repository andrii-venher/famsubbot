import buildBot from '@/bot';
import { Telegraf } from 'telegraf';
import Container from 'typedi';

async function addServices() {
  const bot = buildBot();
  Container.set(Telegraf, bot);
}

export default addServices;
