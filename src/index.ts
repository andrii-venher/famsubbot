import 'reflect-metadata';
import 'module-alias/register';
import { onShutdown } from 'node-graceful-shutdown';
import start from './flows/start';
import stop from './flows/stop';
import { logger } from './logger/logger';

onShutdown(stop);

start()
  .then(() => {})
  .catch((err) => {
    logger.error(err.message, err);
  });
